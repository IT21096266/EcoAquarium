import { async } from "@firebase/util";
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../services/firebase-config";

// For saving new Items
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'onlineItems', `${Date.now()}`), data , {
        merge : true,
    })
}

export const getAllItems = async () => {
    const items = await getDocs(
        query(collection(firestore, 'onlineItems'), orderBy('id', 'desc'))
    )
    return items.docs.map((doc) => doc.data())
}