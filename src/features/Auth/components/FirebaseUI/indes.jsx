import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { authFacebook, authGoogle, authGithub, auth } from 'firebaseConfig';
FirebaseUi.propTypes = {};

const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/photos',
  signInOptions: [authFacebook, authGoogle, authGithub]
};

function FirebaseUi() {
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
}

export default FirebaseUi;
