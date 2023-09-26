import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userpool from '../Userpool';

export const authenticate = (Email, Password, OTP, isEmailLogin) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: Email,
      Pool: userpool,
    });

    const authDetails = isEmailLogin
      ? new AuthenticationDetails({
          Username: Email,
          Password,
        })
      : new AuthenticationDetails({
          Username: Email,
          Password,
          ValidationData: [{ Name: 'custom:otp', Value: OTP }],
        });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('Login successful');
        resolve(result);
      },
      onFailure: (err) => {
        console.log('Login failed', err);
        reject(err);
      },
    });
  });
};

export const logout = () => {
  const user = userpool.getCurrentUser();
  user.signOut();
  window.location.href = '/';
};
