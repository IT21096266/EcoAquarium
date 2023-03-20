import React, { useEffect, useRef } from "react";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

import DiseaseDataService from "../services/disease-services";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AddDisease = () => {
  const { diseaseID } = useParams();

  const [diseaseName, setDiseaseName] = useState("");
  const [diseaseCauses, setDiseaseCauses] = useState("");
  const [diseasePrevention, setDiseasePrevention] = useState("");
  const [diseaseTreatment, setDiseaseTreatment] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDisease = {
      diseaseName,
      diseaseCauses,
      diseasePrevention,
      diseaseTreatment,
    };
    console.log(newDisease);
    try {
      await DiseaseDataService.addDisease(newDisease);
      alert("Disease added successfully!");
      navigate("/diseaseList");
    } catch (err) {
      setMessage({ error: false, msg: err.message });
    }
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="Disease List">
              {console.log("Address ID: ", diseaseID)}
              <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-black">
                        Disease Form
                      </h3>
                      <p className="mt-1 text-sm text-black">
                        Add disease name the discription of the disease
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form
                      onSubmit={handleSubmit}
                      className="bg-box-gradient text-black"
                    >
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-5">
                              <label htmlFor="first_name" className="formLable">
                                Disease Name
                              </label>
                              <input
                                type="text"
                                name="disease_name"
                                id="disease_name"
                                maxLength="10"
                                defaultValue={diseaseName}
                                onSelect={(e) => {
                                  setDiseaseName(e.target.value);
                                }}
                                required
                                className={`${styles.ADtxt}`}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                              <label htmlFor="last_name" className="formLable">
                                Disease Causes
                              </label>
                              <input
                                type="text"
                                name="disease_causes"
                                id="disease_causes"
                                maxLength="15"
                                defaultValue={diseaseCauses}
                                onSelect={(e) => {
                                  setDiseaseCauses(e.target.value);
                                }}
                                required
                                className={`${styles.ADtxt}`}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-5">
                              <label
                                htmlFor="disease_prevention"
                                className="formLable"
                              >
                                Disease Prevention
                              </label>
                              <input
                                type="text"
                                name="disease_prevention"
                                id="disease_prevention"
                                maxLength="15"
                                defaultValue={diseasePrevention}
                                onSelect={(e) => {
                                  setDiseasePrevention(e.target.value);
                                }}
                                required
                                className={`${styles.ADtxt}`}
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-5">
                              <label
                                htmlFor="disease_treatment"
                                className="formLable"
                              >
                                Disease Treatment
                              </label>
                              <input
                                type="text"
                                name="disease_treatment"
                                id="disease_treatment"
                                maxLength="15"
                                defaultValue={diseaseTreatment}
                                onSelect={(e) => {
                                  setDiseaseTreatment(e.target.value);
                                }}
                                required
                                className={`${styles.ADtxt}`}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <div className="text-right grid grid-cols-7 gap-4 content-center ...">
                            <button
                              type="reset"
                              className={`${styles.ALbtn} font-semibold `}
                            >
                              Reset
                            </button>
                            <button
                              type="submit"
                              className={`${styles.ALbtn} font-semibold `}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default AddDisease;
