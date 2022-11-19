import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZbpAfuK9D6HWzL7O2CZsF-9c2nyagZUw",
    authDomain: "money-manager-c0227.firebaseapp.com",
    databaseURL: "https://money-manager-c0227-default-rtdb.firebaseio.com",
    projectId: "money-manager-c0227",
    storageBucket: "money-manager-c0227.appspot.com",
    messagingSenderId: "557888830861",
    appId: "1:557888830861:web:4d0f984f1ed890eae211c4",
    measurementId: "G-XRNK05DWX7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const HistoryRef = collection(db, "history");
export const VaultsRef = collection(db, "vaults");
export const DaysLeftRef = collection(db, "daysleft");