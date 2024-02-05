// LoginStyles.tsx
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 640,
    backgroundColor: "#FFFFFF",
  },
  

  logo: {
    width: 154,
    height: 31,
    
  },

  loginTitle: {
    width: 91,
    height: 40,
    fontFamily: "Roboto",
    fontSize: 36,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 40,
    color: "#1ED760",
  },
  

  loginText: {
    width: 105,
    height: 24,
    fontFamily: "Roboto",
    
  },

  inputlogin: {
    width: 320,
    height: 88,
    backgroundColor: "#FFFFFF",
  },




  inputPassword: {
    width: 138,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "stretch",
  },

  forgetPassword: {
    color: "#1DB954",
    textAlign: "right",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 12, // No React Native, a unidade é multiplicada pelo tamanho da fonte se o valor for um número
    textDecorationLine: "underline",
  },

  loginBtn: {
    width: 320,
    height: 56,
    paddingVertical: 19,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    borderRadius: 4,
    backgroundColor: "#1ED760",
  },


  signWithText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    letterSpacing: 0.27,
    textAlign: 'left',
  },

  socialButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90, // Ajuste a largura conforme necessário
    height: 40, // Ajuste a altura conforme necessário
    borderRadius: 4,
  },

  // Estilos específicos para cada botão
  googleBtn: {
    backgroundColor: '#DB4437', // Cor do Google
    // Adicione mais estilos específicos do Google aqui
  },

  facebookBtn: {
    backgroundColor: '#3b5998', // Cor do Facebook
    // Adicione mais estilos específicos do Facebook aqui
  },

  twitterBtn: {
    backgroundColor: '#1DA1F2', // Cor do Twitter
    // Adicione mais estilos específicos do Twitter aqui
  },






  
});

export default styles;
