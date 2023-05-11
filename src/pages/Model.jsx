import React, { useState } from "react";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";
import * as tf from "@tensorflow/tfjs";

const Model = () => {
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [model, setModel] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setImageSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = async () => {
    const modelUrl = "/assets/models/model.json";
    const model = await tf.loadLayersModel(modelUrl);
    setModel(model);

    const image = new Image();
    image.src = imageSrc;
    image.width = 224;
    image.height = 224;
    const tensor = tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims();
    const resized = tf.image.resizeBilinear(tensor, [256, 256]);

    const predictions = await model.predict(resized).data();
    setResult(predictions[0]);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="Check Disease">
              <div className="flex flex-col justify-center items-center">
                <input
                  className="my-4 p-2 border-2 border-gray-400 rounded-lg"
                  type="file"
                  onChange={handleFileChange}
                />
                {imageSrc && (
                  <img
                    className="my-4 border-2 border-gray-400 rounded-lg"
                    src={imageSrc}
                    alt="Fish"
                    width="500"
                    height="500"
                  />
                )}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleUpload}
                >
                  Check
                </button>
                {result !== null && (
                  <div className="my-10">
                    <h4
                      className={`${
                        result > 0.5 ? "text-green-500" : "text-red-500"
                      } text-4xl font-bold`}
                    >
                      {result > 0.5 ? "This fish is Healthy" : "This fish is sick"}
                    </h4>
                  </div>
                )}
              </div>
            </Helmet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Model;
