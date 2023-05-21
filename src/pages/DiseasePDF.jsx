import { React, useState, useEffect } from "react";
import styles from "../Styles/styles";
import DiseaseDataService from "../services/disease-services";
import { storage } from "../services/firebase-config";
import { doc } from "firebase/firestore";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from "react";

const DiseasePDF = () => {
  //fetch data
  const [disease, setDisease] = useState([]);

  useEffect(() => {
    getDisease();
  }, []);

  const getDisease = async () => {
    const data = await DiseaseDataService.getAllDisease();
    console.log(data.docs);
    setDisease(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
                onClick={handleExportWithComponent}>
                    Download the report
              </button>

              <PDFExport
                fileName="Disease_DB_Report"
                ref={pdfExportComponent}
                paperSize="A4"
              >
                {disease.map((doc, index) => {
                  return (
                    <div key={doc.id}>
                      {/* <img
                      src={doc.imageAsset}
                      alt="disease image"
                      className="rounded-lg h-56"
                    /> */}
                      <div className="flex flex-col justify-between p-5 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"></h5>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          {index + 1}. {doc.diseaseName}
                        </h5>

                        <p className="mt-2 mb-3 font-semibold text-gray-800">
                            Disease Description :
                        </p>
                        <p className="mb-3 font-normal text-gray-800">
                            {doc.diseaseDescription}
                        </p>
                        
                        <p className="mb-3 font-semibold text-gray-800">
                            Disease Causes :
                        </p>
                        <p className="mb-3 font-normal text-gray-800">
                            {doc.diseaseCauses}
                        </p>

                        <p className="mb-3 font-semibold text-gray-800">
                            Disease Prevention :
                        </p>
                        <p className="mb-3 font-normal text-gray-800">
                            {doc.diseasePrevention}
                        </p>

                        <p className="mb-3 font-semibold text-gray-800">
                            Disease Treatment :
                        </p>
                        <p className="mb-3 font-normal text-gray-800">
                            {doc.diseaseTreatment}
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

export default DiseasePDF;
