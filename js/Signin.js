var firebaseConfig = {
  apiKey: 'AIzaSyC6MU1P2CrLf5VDOmYOezQTvNFwUvI2h5A',
  authDomain: 'grocery-list-6bb9d.firebaseapp.com',
  projectId: 'grocery-list-6bb9d',
  storageBucket: 'grocery-list-6bb9d.appspot.com',
  messagingSenderId: '922973499349',
  appId: '1:922973499349:web:75fedc4d9d7130ead7975c',
  measurementId: 'G-VMWWNZRN5Z',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('[name="login"]').val();
  var password = $('[name="pwd"]').val();
  console.log('email: ' + email);
  console.log('pass: ' + password);

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
        window.location.href = 'hotel.html';
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

$('google').click(function () {
  const provider = new firebase.auth().GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Google user ' + user.email + ' Logged in');
    })
    .catch((error) => {
      console.log('Error Message ' + error.message);
    });
});

/*
$('google').click(function () {
  const provider = new firebase.auth().GoogleAuthProvider();
  const auth = getAuth();
  firebase.auth().signInWithPopup(provider);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
*/
