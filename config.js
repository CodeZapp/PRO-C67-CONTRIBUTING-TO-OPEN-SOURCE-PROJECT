import firebase from 'firebase';

//paste your SDK here
const firebaseConfig = {
  apiKey: 'AIzaSyCqolhbMAKlpAb5rUPcBFu2U2g4b57luwM',
  authDomain: 'project-c58-6c311.firebaseapp.com',
  projectId: 'project-c58-6c311',
  storageBucket: 'project-c58-6c311.appspot.com',
  messagingSenderId: '504054201363',
  appId: '1:504054201363:web:9b2fe0761dac0d41e393e6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
