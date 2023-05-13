import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import DiseaseDataService from "../services/disease-services";
import { storage } from "../services/firebase-config";
import { ref } from "firebase/storage";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const DiseaseList = () => {

  const [disease, setDisease] = useState([]);

  const navigate = useNavigate(); // Navigate

  useEffect(() => {
    getDisease();
  }, []);

  const getDisease = async () => {
    const data = await DiseaseDataService.getAllDisease();
    console.log(data.docs);
    setDisease(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //Delete Disease
  const deleteHandler = async (id) => {
    await DiseaseDataService.deleteDisease(id);
    const deleteRef = ref(storage, imageAsset);
    deleteRef.delete().then(() => {
      console.log('Disease deleted successfully');
      getDisease();
    }).catch((error) => {
      console.log('Error deleting image:', error);
    });
    getDisease();
  };

  // navigate to /addDisease
  const navigateDiseaseForm = () => {
    navigate("/addDisease");
  };

  // navigate to /diseasePDF
  const navigateDiseaseReport = () => {
    navigate("/diseasePDF");
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
        <main className="mt-1 p-12 w-full ">
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Helmet title="Disease List">
            
              <section
                id="Disease List"
                className={`flex md:flex-row flex-col ${styles.paddingY}`}
              >
                <div
                  className={`flex-1 ${styles.flexStart} flex-col xl:px-0 shadow-box-shadow sm:px-16 px-6 bg-box-gradient rounded-md`}
                >
                  <div className="overflow-x-auto relative ">
                    <table className={`${styles.ALtable}`}>
                      <thead className={`${styles.ALthread}`}>
                        <tr>
                          <th scope="col" className={`${styles.ALth}`}>
                            <button
                              className={`${styles.ALbtn} font-semibold`}
                              onClick={navigateDiseaseForm}>
                              Add New Disease
                            </button>
                          </th>
                          <th>
                            <button
                                className={`${styles.ALbtn} font-semibold`}
                                onClick={navigateDiseaseReport}>
                                Generate Report
                            </button>
                          </th>
                          <th scope="col" className={`${styles.ALth}`}></th>
                          <th scope="col" className={`${styles.ALth}`}></th>
                          <th scope="col" className={`${styles.ALth}`}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {disease.map((doc, index) => {
                          return (
                            <tr key={doc.id} className="w-full pt-6 border-t-[1px] border-t-[#f7f2f2] mb-0">
                              <td className={`ml-2 mr-2 ${styles.ALtd}`}>{index + 1}</td>
                              <td className={`${styles.ALtd}text-2xl`}>
                                {doc.diseaseName}
                              </td>
                              <td className={`${styles.ALtd}w-2/6`}>
                                <img src={doc.imageAsset} alt="disease image" />
                              </td>
                              <td className={`${styles.ALtd}w-2/6`}>
                                {doc.diseaseDescription}
                              </td>
                              <td className={`${styles.ALtd}w-1/6`}>
                                <Link to={`diseaseUpdate/${doc.id}`}>
                                  <button className={`${styles.ALbtn}`}>
                                      Edit
                                  </button>
                                </Link>
                              </td>
                              <td className={`${styles.ALtd}w-1/6`}>
                                <button
                                  className={`${styles.ALbtn}`}
                                  onClick={(e) => deleteHandler(doc.id)}>
                                    Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

                    </Helmet>
                </div>
            </div>
        </main>
    </div>
  )
}

export default DiseaseList