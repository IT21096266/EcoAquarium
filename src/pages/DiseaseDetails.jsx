import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import { storage } from "../services/firebase-config";
import DiseaseDataService from "../services/disease-services";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const DiseaseDetails = () => {
  
    const [diseaseName, setDiseaseName] = useState("");
    const [diseaseDescription, setDescription] = useState("");
    const [diseaseCauses, setDiseaseCauses] = useState("");
    const [diseasePrevention, setDiseasePrevention] = useState("");
    const [diseaseTreatment, setDiseaseTreatment] = useState("");
    const [imageAsset, setImageAsset] = useState(null);

  const { diseaseID } = useParams();
  console.log("Disease ID: ", diseaseID);

    // Fetch Data
    const editHandler = async () => {
        try {
          const docSnap = await DiseaseDataService.getDisease(diseaseID);
          console.log("Got the Data: ", docSnap.data());
          setDiseaseName(docSnap.data().diseaseName);
          setDescription(docSnap.data().diseaseDescription)
          setDiseaseCauses(docSnap.data().diseaseCauses);
          setDiseasePrevention(docSnap.data().diseasePrevention);
          setDiseaseTreatment(docSnap.data().diseaseTreatment);
          setImageAsset(docSnap.data().imageAsset);
        } catch {}
      };
      useEffect(() => {
        console.log("Got ID: ", diseaseID);
        if (diseaseID !== undefined && diseaseID !== "") {
          editHandler();
          console.log("Check ", diseaseID);
        }
      }, [diseaseID]);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="Disease List">
                <div className="w-full">
                    <div className="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row
                                 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
                        <div className="flex flex-row">
                            <img
                            className="ml-3 mt-3 object-cover rounded-t-lg h-400 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
                            src={imageAsset}
                            alt=""/>

                            <h5 className="ml-6 mt-9 text-5xl font-bold tracking-tight text-gradient">
                                {diseaseName}
                            </h5>
                        </div>

                        <div className=" p-4 leading-normal w-full">
                            
                            <div className=" flex flex-col mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Disease Description :
                            </div>
                            <p className="flex flex-col mb-3 font-normal text-gray-700 dark:text-gray-400 w-full">
                                {diseaseDescription}
                            </p>
                            
                            <div className=" flex flex-col mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Disease Causes :
                            </div>
                            <p className="flex flex-col mb-3 font-normal text-gray-700 dark:text-gray-400 w-full">
                                {diseaseCauses}
                            </p>

                            <div className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Disease Prevention :
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {diseasePrevention}
                            </p>

                            <div className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Disease Treatment :
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {diseaseTreatment}
                            </p>
                        </div>
                    </div>
                </div>
            </Helmet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiseaseDetails;
