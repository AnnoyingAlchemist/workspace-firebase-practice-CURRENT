/* Change the configuration */

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

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data = {};
  for (i = 0; i < 5; i++) {
    console.log(inputdata[i]);
    console.log(inputdata[i].name);
    console.log(inputdata[i].value);
  }
  inputdata.forEach((entry) => {
    console.log(entry);
    data[entry.name] = entry.value;
  });
  var hotelData = data;
  console.log(data);
  /* save the data to database */
  firebase.firestore().collection('hoteldata').add({
    reservation: hotelData,
  });
  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('hoteldata')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data().reservation);
/*
      console.log(doc.data().name);
      console.log(doc.data().checkin);
      console.log(doc.data().checkout);
      console.log(doc.data().num);
      console.log(doc.data().room);
*/
    });
  });
