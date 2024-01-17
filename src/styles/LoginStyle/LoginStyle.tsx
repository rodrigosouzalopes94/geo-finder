// LoginStyles.tsx
import { StyleSheet } from 'react-native';

const Colors = {
  primary: '#EC1F27',  
  secondary: '#000000',  
  background: '#FFFFFF',  
  text: '#000000',  
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: 200,
    backgroundColor: Colors.background,
    borderColor: Colors.primary, // Cor da borda
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5, // Borda arredondada
  },
  buttonText: {
    color: Colors.text,
  },
});

export default styles;
