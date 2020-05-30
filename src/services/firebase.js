const firebase = window.firebase || {
  initializeApp: () => null,
  firestore: () => null,
};

const firebaseConfig = {
  apiKey: "AIzaSyD7M2iqn-DT7RpX0JFwY2k6v1YYiRIzxh0",
  authDomain: "giaphongtourist.firebaseapp.com",
  databaseURL: "https://giaphongtourist.firebaseio.com",
  projectId: "giaphongtourist-4811f",
  storageBucket: "giaphongtourist.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

db.collection('homepage').get().then(resp => {
  const collections = [];
  resp.forEach(doc => collections.push(doc.data()));
  console.log(collections);
});
