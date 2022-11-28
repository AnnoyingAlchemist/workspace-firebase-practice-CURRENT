// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//my database
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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('We have a user logged in: ' + user.email);
  } else {
    console.log('No user logged in');
    window.location.href = 'index.html';
  }
});

// save the data
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  //enter data
  var formData = $('form').serializeArray();
  //console.log(formData);
  var formJson = {};

  formData.forEach((entry) => {
    //console.log(entry);
    formJson[entry.name] = entry.value;
  });

  //console.log(formJson);
  firebase.firestore().collection('surveydata').add(formJson);

  // get the value of the form using serializeArray method
});

console.log('hhh');
// update the result in table
firebase
  .firestore()
  .collection('surveydata')
  .onSnapshot((querySnapshot) => {
    console.log('here');
    var n1 = 0; //A
    var n2 = 0; //B
    var n3 = 0; //C
    var n4 = 0; //D
    var n5 = 0; //E

    querySnapshot.forEach(function (doc) {
      console.log('document -- ' + doc.data().choice);

      var s = doc.data().choice;
      switch (s) {
        case 'A':
          n1++;
          $('#ans1').text(n1);
          break;
        case 'B':
          n2++;
          $('#ans2').text(n2);
          break;
        case 'C':
          n3++;
          $('#ans3').text(n3);
          break;
        case 'D':
          n4++;
          $('#ans4').text(n4);
          break;
        case 'E':
          n5++;
          $('#ans5').text(n5);
          break;
      }
    });
    //console.log('n1 =' + n1);
    //console.log('n2 =' + n2);
    //console.log('n3 =' + n3);
    //console.log('n4 =' + n4);
    //console.log('n5 =' + n5);
  });
