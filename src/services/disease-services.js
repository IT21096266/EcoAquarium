import { firestore } from './firebase-config'
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'


const diseaseCollectionRef = collection(firestore, "Disease")

class DiseaseDataService{

    addDisease = (newDisease) =>{
        return addDoc(diseaseCollectionRef, newDisease)
    }

    updateDisease = (id, updateDisease) =>{
        const disease = doc(firestore, "Disease", id)
        return updateDoc(disease, updateDisease)
    }

    deleteDisease = (id) => {
        const disease = doc(firestore, "Disease", id)
        return deleteDoc(disease)
    }

    getAllDisease = () =>{
        return getDocs(diseaseCollectionRef)
    }

    getDisease = (id) =>{
        const disease = doc(firestore, "Disease", id)
        return getDoc(disease)
    }

}

export default new DiseaseDataService()