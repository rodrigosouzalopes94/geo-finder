import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/LoginStyle/LoginStyle";
interface LoginScreenProps {}
import FacebookLoginButton from "../../components/buttons/FacebookLoginButton/FacebookLoginButton";
import GoogleLoginButton from "../../components/buttons/GoogleLoginButton/GoogleLoginButton";
import TwitterLoginButton from "../../components/buttons/TwiiterLoginButton/TwitterLoginButton";

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === "usuario" && password === "senha") {
      navigation.navigate("Home");
    } else {
      alert("Senha incorreta");
    }
  };

  const handleFacebookLogin = () => {
    console.log("Login com Facebook");
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
  };

  const handleTwitterLogin = () => {
    console.log("Login com Twitter");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("logo.png")} />

      <Text style={styles.loginText}>Login</Text>

      <TextInput
        placeholder="Login"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={[styles.loginText, styles.inputlogin]}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.inputPassword}
      />

      <Text style={styles.forgetPassword}>Esqueceu sua senha?</Text>

      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginBtn}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgetPassword}>Esqueceu sua senha?</Text>

      <Text style={styles.signWithText}>Ou entre com</Text>

      <View style={styles.socialButton}>
        <FacebookLoginButton onPress={handleFacebookLogin} />
        <GoogleLoginButton onPress={handleGoogleLogin} />
        <TwitterLoginButton onPress={handleTwitterLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
