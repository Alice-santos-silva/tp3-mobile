import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
    marginBottom: 15, 
  },
  headerText: {
    fontSize: 24,  // tamanho da fonte do cabeçalho
    fontWeight: 'bold',  // negrito
    marginBottom: 20,  // espaço abaixo do cabeçalho
    color: '#333',  // cor do texto
  },
});

export default styles;
