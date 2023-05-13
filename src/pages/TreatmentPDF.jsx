import { React, useState, useEffect } from "react";
import styles from "../Styles/styles";
import treatment_data_services from "../services/treatment_services";
import { storage } from "../services/firebase-config";
import { doc } from "firebase/firestore";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from "react";

const TreatmentPDF = () => {
  //fetch data
  const [treatment, setTreatment] = useState([]);

  useEffect(() => {
    getTreatment();
  }, []);

  const getTreatment = async () => {
    const data = await treatment_data_services.getAllTreatments();
    console.log(data.docs);
    setTreatment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleExportWithComponent = (e) => {
    pdfExportComponent.current.save();
  };
  const pdfExportComponent = useRef(null);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            
      <div>
      <button
              className={`${styles.ADbtn}`}
              onClick={handleExportWithComponent}
            >
              Download the report
            </button>
                <PDFExport fileName="Treatment" ref={pdfExportComponent} paperSize="A4">
              {treatment.map((doc, index) => {
                return (
                  <div >
                    {/* <img
                      src={doc.imageAsset}
                      alt="treatment image"
                      className="rounded-lg h-56"
                    /> */}
                    <div class="flex flex-col justify-between p-10 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        
                      </h5>
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {index + 1}. {doc.product_name}
                      </h5>
                      <p class="mb-3 font-normal text-gray-800">
                      {doc.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              </PDFExport>
      </div>
      </div>
      </div>
      </main>
      </div>
           
  );
};

export default TreatmentPDF;
