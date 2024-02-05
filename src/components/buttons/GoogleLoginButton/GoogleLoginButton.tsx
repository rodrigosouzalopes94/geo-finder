// GoogleLoginButton.js
import React from 'react';
import { Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  // Preencha com o seu webClientId
  webClientId: 'YOUR_WEB_CLIENT_ID',
});

const GoogleLoginButton = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  };

  return <Button title="Login com Google" onPress={signIn} />;
};

export default GoogleLoginButton;
