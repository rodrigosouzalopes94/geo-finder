// TwitterLoginButton.js
import React from 'react';
import { Alert, Button } from 'react-native';
import { TwitterSigninButton } from 'react-native-twitter-signin';

const TwitterLoginButton = () => {
  const twitterLogin = async () => {
    try {
      // Substitua "TWITTER_CONSUMER_KEY" e "TWITTER_CONSUMER_SECRET" pelas suas chaves
      await TwitterSigninButton.init(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET);
      const loginData = await TwitterSigninButton.logIn();
      console.log(loginData);
      // Aqui você pode redirecionar o usuário para dentro do seu app ou fazer outras ações necessárias
    } catch (error) {
      if (error.code === 'CANCELLED') {
        Alert.alert('Login Cancelado');
      } else {
        Alert.alert('Login falhou', error.message);
      }
    }
  };

  return <Button title="Login com Twitter" onPress={twitterLogin} />;
};

export default TwitterLoginButton;
