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
$('#signup-form').submit(function (e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var email = $('[name="username"]').val();
  var password = $('[name="password"]').val();

  //console.log($('[name="username"]').val());
  //console.log($('[name="password"]').val());

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      console.log('email: ' + email);
      console.log('pass: ' + password);

      console.log('You are signed up');
      window.location.href = 'Login.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});


