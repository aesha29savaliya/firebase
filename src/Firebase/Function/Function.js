import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { firestore } from "../Config"


export const getData = async () => {
     const userdata = await getDocs(collection(firestore, "userdata"))
     return userdata.docs.map((doc) => console.log(doc.data()));
}

export const postdata = async (data) => {
     return await setDoc(doc(firestore, "userdata", `${Date.now()}`), data, { merge: true });
};  