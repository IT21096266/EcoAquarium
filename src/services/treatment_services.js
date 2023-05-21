import { firestore } from "./firebase-config";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const treatmentcollectionRef = collection(firestore, "Treatment");

class treatment_data_services {
  //to ADD data
  addTreatment = (newTreatment) => {
    return addDoc(treatmentcollectionRef, newTreatment);
  };

  //to UPDATE data
  updateTreatment = (id, updateTreatment) => {
    const treatmentDoc = doc(firestore, "Treatment", id);
    return updateDoc(treatmentDoc, updateTreatment);
  };

  // to DELETE data
  deleteTreatment = (id) => {
    const treatmentDoc = doc(firestore, "Treatment", id);
    return deleteDoc(treatmentDoc);
  };

  //get all data
  getAllTreatments = () => {
    return getDocs(treatmentcollectionRef);
  };

  //get treatment
  getTreatment = (id) => {
    const treatmentDoc = doc(firestore, "Treatment", id);
    return getDoc(treatmentDoc);
  };
}

export default new treatment_data_services();
