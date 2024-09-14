import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { ref, set, update, onValue, remove } from 'firebase/database';
import { db } from '../../services/firebaseConfig';
import styles from './styles';

export default function List() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");

    function create() {
        set(ref(db, 'users/' + username), {
            username: username,
            email: email
        }).then(() => {
            Alert.alert("Dados cadastrados!");
        })
        .catch((error) => {
            Alert.alert("Erro", error.message);
        });
    }

    function listUpdate() {
        update(ref(db, 'users/' + username), {
            username: username,
            email: email
        }).then(() => {
            Alert.alert("Dados atualizados!");
        })
        .catch((error) => {
            Alert.alert("Erro", error.message);
        });
    }

    function listRead() {
        const starCountRef = ref(db, 'users/' + username);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setEmail(data.email);
            } else {
                setEmail("");
            }
        });
    }

    function listDelete() {
        remove(ref(db, 'users/' + username))
            .then(() => {
                Alert.alert('Item removido!');
            })
            .catch((error) => {
                Alert.alert("Erro", error.message);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Cadastro</Text>
            <TextInput
                value={username}
                onChangeText={(text) => setName(text)}
                placeholder='Nome'
                style={styles.textBoxes}
            />
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Email'
                style={styles.textBoxes}
            />
            <Button title="Enviar" onPress={create} />
            <Button title="Atualizar" onPress={listUpdate} />
            <Button title="Ler" onPress={listRead} />
            <Button title="Deletar" onPress={listDelete} />
        </View>
    );
}
