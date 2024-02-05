// FacebookLoginButton.js
import React, { useEffect } from 'react';
import { LoginButton, AccessToken, Settings } from '@react-native-facebook/facebook-sdk';
import styles from '../../../styles/LoginStyle/LoginStyle';

const FacebookLoginButton = () => {
  useEffect(() => {
    Settings.initializeSDK();
  }, []);

  return (
    <LoginButton
      onLoginFinished={(error, result) => {
        if (error) {
          console.error("login has error: ", error);
        } else if (result.isCancelled) {
          console.log("login is cancelled.");
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
          });
        }
      }}
      onLogoutFinished={() => console.log("logout.")}
    />
  );
};

export default FacebookLoginButton;
