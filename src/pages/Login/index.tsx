import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { updatePassword } from "firebase/auth";
import styles from "./styles"; // Importe seus estilos corretamente

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  async function handleSignIn() {
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Erro ao fazer login:", err);
        Alert.alert("Erro ao fazer login", err.message);
      } else {
        console.error("Erro desconhecido ao fazer login");
        Alert.alert("Erro ao fazer login", "Erro desconhecido");
      }
    }
  }

  async function handleChangePassword() {
    if (user?.user) {
      try {
        await updatePassword(user.user, newPassword);
        Alert.alert("Sucesso", "Senha atualizada com sucesso!");
      } catch (err) {
        if (err instanceof Error) {
          console.error("Erro ao atualizar senha:", err);
          Alert.alert("Erro ao atualizar senha", err.message);
        } else {
          console.error("Erro desconhecido ao atualizar senha");
          Alert.alert("Erro ao atualizar senha", "Erro desconhecido");
        }
      }
    }
  }

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (user && isChangingPassword) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Digite sua nova senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          secureTextEntry
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
        />
        <Button title="Atualizar Senha" onPress={handleChangePassword} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Por favor, digite suas informações de login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Entrar" onPress={handleSignIn} />
      <View style={styles.footer}>
        <Text>Você não tem uma conta?</Text>
        <Button title="Crie a sua conta aqui" onPress={() => {}} />
      </View>
      <Text
        style={styles.changePasswordLink}
        onPress={() => setIsChangingPassword(true)}
      >
        Alterar senha
      </Text>
    </View>
  );
}
