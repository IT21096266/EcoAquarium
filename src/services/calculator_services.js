import { firestore } from "./firebase-config";
import {
	collection,
	getDoc,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	doc,
} from "firebase/firestore";

const calculationCollectionRef = collection(firestore, "Calculation");

class CalculationDataService {
	addCalculation = (newCalculation) => {
		return addDoc(calculationCollectionRef, newCalculation);
	};

	updateCalculation = (id, updateCalculation) => {
		const calculation = doc(firestore, "Calculation", id);
		return updateDoc(calculation, updateCalculation);
	};

	deleteCalculation = (id) => {
		const calculation = doc(firestore, "Calculation", id);
		return deleteDoc(calculation);
	};

	getAllCalculation = () => {
		return getDocs(calculationCollectionRef);
	};

	getCalculation = (id) => {
		const calculation = doc(firestore, "Calculation", id);
		return getDoc(calculation);
	};
}

export default new CalculationDataService();
