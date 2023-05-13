import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import DiseaseDataService from "../services/disease-services";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const DiseaseView = () => {

  const [disease, setDisease] = useState([]);

  useEffect(() => {
    getDisease();
  }, []);

  // Fetch Data
  const getDisease = async () => {
    const data = await DiseaseDataService.getAllDisease();
    console.log(data.docs);
    setDisease(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Navigate
  const navigate = useNavigate(); 
  const navigateModel = () => {
    navigate("/model");
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="Disease List">
              <div>
                <button
                  className={`${styles.ADbtn}`}
                  onClick={navigateModel}>
                  Check Disease
                </button>
              </div>
        {disease.map((doc, index) => {
                return (
                    <div>
                        <Link to={`diseaseDetails/${doc.id}`}>
                            <div class="gap-5 my-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  
                                        hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative">
                                <img
                                src={doc.imageAsset}
                                alt="disease image"
                                className="rounded-lg h-56"/>
                                <div class="flex flex-col justify-between p-10 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hidden">
                                    {index + 1}
                                </h5>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {doc.diseaseName}
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {doc.diseaseDescription}
                                </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
              })}
            </Helmet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DiseaseView;
