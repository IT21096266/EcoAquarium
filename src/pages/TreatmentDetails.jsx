import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import { storage } from "../services/firebase-config";
import treatment_data_services from "../services/treatment_services";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";


const TreatmentDetails = () => {
    const [product_name, setProduct_name] = useState("");
    const [description, setDescription] = useState("");
    const [imageAsset, setImageAsset] = useState(null);

    //fetch data from db**********************************
    const { treatID } = useParams();
    console.log("Treatment ID: ", treatID);

    const editHandler = async () => {
        try {
          const docSnap = await treatment_data_services.getTreatment(treatID);
          console.log("Got the Data: ", docSnap.data());
          setProduct_name(docSnap.data().product_name);
          setDescription(docSnap.data().description);
          setImageAsset(docSnap.data().imageAsset);
        } catch {}
      };
      useEffect(() => {
        console.log("Got ID: ", treatID);
        if (treatID !== undefined && treatID !== "") {
          editHandler();
          console.log("Check ", treatID);
        }
      }, [treatID]);
      //************************************************ */
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
                            alt="treatment image"/>

                            <h5 className="ml-6 mt-9 text-5xl font-bold tracking-tight text-gradient">
                                {product_name}
                            </h5>
                        </div>

                        <div className="p-4 leading-normal w-full">
                            
                            <div className=" flex flex-col mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Treatment Description :
                            </div>
                            <p className="flex flex-col mb-3 font-normal text-gray-700 dark:text-gray-300 w-full">
                                {description}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </Helmet>
          </div>
        </div>
      </main>
    </div>  )
}

export default TreatmentDetails