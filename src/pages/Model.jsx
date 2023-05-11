import React, { useState } from "react";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";
import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";

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
    const modelUrl = "../assets/models/model.json";
    const model = await loadGraphModel(modelUrl);
    setModel(model);

    const image = new Image();
    image.src = imageSrc;
    image.width = 224;
    image.height = 224;
    const tensor = tf.browser
      .fromPixels(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims();

    const predictions = await model.predict(tensor).data();
    setResult(predictions[0]);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="New Disease">
            <div>
                <input type="file" onChange={handleFileChange} />
                {imageSrc && <img src={imageSrc} alt="Fish" width="224" height="224" />}
                    <button onClick={handleUpload}>
                        Upload
                    </button>
                    {result && 
                        <div>
                            <h4>
                            {result > 0.5 ? "Sick" : "Healthy"}
                            </h4>
                        </div>
                    }
            </div>
            </Helmet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Model;
