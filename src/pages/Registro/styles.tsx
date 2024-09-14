import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  header: {
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
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputContainer: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: 12,
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  input: {
    padding: 16,
    width: 300,
    height: 49,
    borderColor: '#5C73DB',
    borderWidth: 1,
    borderRadius: 12,
  },
  button: {
    width: 300,
    height: 48,
    backgroundColor: '#4763E4',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#000',
  },
  footerLink: {
    fontSize: 16,
    color: '#5C73DB',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default styles;
