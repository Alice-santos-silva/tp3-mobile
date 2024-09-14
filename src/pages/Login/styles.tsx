import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 40,
  },
  headerText: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    paddingTop: 15,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%', 
    paddingHorizontal: 20,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: 12,
    width: '100%',
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  input: {
    padding: 16,
    width: width * 0.9,
    maxWidth: 520,
    height: 49,
    borderColor: '#5C73DB',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
  link: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    paddingTop: 16,
    paddingBottom: 16,
    color: '#5C73DB',
  },
  button: {
    width: width * 0.9,
    maxWidth: 520,
    height: 48,
    backgroundColor: '#4763E4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#fff',
  },
  buttonHover: {
    opacity: 0.8,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  footerText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
  },
  footerLink: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: 'underline',
    color: '#5C73DB',
  },
  // Adicionando o estilo changePasswordLink
  changePasswordLink: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: 'underline',
    color: '#5C73DB',
    marginTop: 10, // Pequeno espaço superior
  },
});

export default styles;
