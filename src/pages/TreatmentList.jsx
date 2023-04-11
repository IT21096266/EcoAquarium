import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import treatment_data_services from "../services/treatment_services";
import { storage } from "../services/firebase-config";
import { ref } from "firebase/storage";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const TreatmentList = () => {

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

  //Delete Treatment
  const deleteHandler = async (id) => {
    await treatment_data_services.deleteTreatment(id);
    const deleteRef = ref(storage, imageAsset);
    deleteRef.delete().then(() => {
      console.log('Treatment deleted successfully');
      getTreatment();
    }).catch((error) => {
      console.log('Error deleting image:', error);
    });
    getTreatment();
  };

  // navigate to addtreatment
  const navigateTreatmentForm = () => {
    navigate("/addtreatment");
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
        <main className="mt-1 p-12 w-full ">
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                <Helmet title="Stock List">
      
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 SL-bg-table rounded-md SL-log`}
      >
        <div>
          <button className={`${styles.ADbtn}`} onClick={navigateTreatmentForm}>
            Add Treatments
          </button>
          {/* <button className={`${styles.ADbtn}`} onClick={navigateReport}>
            Genarate A Report
          </button> */}
        </div>

        <table className={`${styles.SLtable}`}>
          <thead className={`${styles.SLthead}`}>
            <tr>
              <th className={`${styles.SLtd}`}>ID</th>
              <th className={`${styles.SLtd}`}>Treatment</th>
              <th className={`${styles.SLtd}`}>Description</th>
              <th className={`${styles.SLtd}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {treatment.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td className={`${styles.SLtd}`}>{index + 1}</td>
                  <td className={`${styles.SLtd}`}>{doc.product_name} </td>
                  <td className={`${styles.SLtd}`}>{doc.description}</td>
                
                  <td>
                    <button className={`${styles.SLbtn}`}>
                      <Link to={`treatmentupdate/${doc.id}`}>Edit</Link>
                    </button>

                    <button
                      className={`${styles.SLbtn}`}
                      onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Helmet>
                </div>
            </div>
        </main>
    </div>
  )
}

export default TreatmentList