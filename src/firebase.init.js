import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAl_3Qg8ja9pH-GdaZYxASbsQNM5tQOtaY",
  authDomain: "spice-warehouse.firebaseapp.com",
  projectId: "spice-warehouse",
  storageBucket: "spice-warehouse.appspot.com",
  messagingSenderId: "1077881573644",
  appId: "1:1077881573644:web:ef8f641280cc72fc467929"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
