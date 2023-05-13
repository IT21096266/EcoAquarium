import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import treatment_data_services from "../services/treatment_services";
import { storage } from "../services/firebase-config";
import { ref } from "firebase/storage";
import styles from "../Styles/styles";

import { doc } from "firebase/firestore";

const TreatmentList = () => {
  const [treatment, setTreatment] = useState([]);

  useEffect(() => {
    getTreatment();
  }, []);

  const getTreatment = async () => {
    const data = await treatment_data_services.getAllTreatments();
    console.log(data.docs);
    setTreatment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //Delete Treatment
  const deleteHandler = async (id) => {
    await treatment_data_services.deleteTreatment(id);
    window.location.reload();
    alert("are sure?");
    const deleteRef = ref(storage, imageAsset);
    deleteRef
      .delete()
      .then(() => {
        getTreatment();
      })
      .catch((error) => {
        console.log("Error deleting image:", error);
      });
    getTreatment();
  };

  const navigate = useNavigate(); // Navigate
  // navigate to addtreatment
  const navigateTreatmentForm = () => {
    navigate("/addtreatment");
  };

  const navigateReport = () => {
    navigate("/treatmentpdf");
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div>
              <button
                className={`${styles.ADbtn}`}
                onClick={navigateTreatmentForm}
              >
                Add Treatments
              </button>
              <button className={`${styles.ADbtn}`} onClick={navigateReport}>
                Genarate A Report
              </button>
            </div>
            {treatment.map((doc, index) => {
              return (
                <div class="gap-5 my-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative">
                  <img
                    src={doc.imageAsset}
                    alt="treatment image"
                    className="rounded-lg h-56"
                  />
                  <div class="absolute top-0 right-0 flex items-end">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      <Link to={`treatmentupdate/${doc.id}`}>Edit</Link>
                    </button>
                    <button
                      onClick={(e) => deleteHandler(doc.id)}
                      type="button"
                      class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </div>
                  <div class="flex flex-col justify-between p-10 leading-normal">
                    {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {index + 1}
                      </h5> */}
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {doc.product_name}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {doc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TreatmentList;
