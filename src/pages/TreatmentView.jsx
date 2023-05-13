import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import treatment_data_services from "../services/treatment_services";
import { storage } from "../services/firebase-config";
import styles from "../Styles/styles";


const TreatmentView = () => {
  const [treatment, setTreatment] = useState([]);
  const navigate = useNavigate(); // Navigate
  useEffect(() => {
    getTreatment();
  }, []);

  const getTreatment = async () => {
    const data = await treatment_data_services.getAllTreatments();
    console.log(data.docs);
    setTreatment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <main className="mt-1 p-12 w-full ">
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <div class="w-10 float-right my-6">
                <Link to={'/treatmentsearch'}>
                <svg 
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                </Link>
              </div>

              <div
                className={`w-full items-center justify-evenly gap-5 my-12 flex flex-wrap`}
              >
                {treatment.map((doc) => {
                  return (
                    <div className="max-w-sm col-span-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60">
                      <a href="#">
                        <img
                          src={doc.imageAsset}
                          alt="treatment image"
                          className="rounded-lg h-60"
                        />
                      </a>
                      <div className="p-5">
                        <a href="#">
                          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {doc.product_name.substring(0, 17)}
                            {doc.product_name.length > 17 ? "..." : ""}
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {doc.description.substring(0, 45)}
                          {doc.description.length > 45 ? "..." : ""}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TreatmentView;
