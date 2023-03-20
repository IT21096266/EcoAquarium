import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { async } from "@firebase/util";
import treatment_data_services from "../services/treatment_services";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const AddTreatment = () => {
  const [product_name, setProduct_name] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTreatment = {
      product_name,
      description,
    };
    console.log(newTreatment);
    try {
      await treatment_data_services.addTreatment(newTreatment);
      alert("New Treatment Added Successfully!");
      //navigate("/stocklist");
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setProduct_name("");
    setDescription("");
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <main className="mt-1 p-12 w-full ">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="Treatment Form">
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      for="small-input"
                      class="block mb-2 text-sm font-medium text-gray-900 text-black"
                    >
                      Product Name
                    </label>
                    <input
                      required
                      defaultValue={product_name}
                      onSelect={(e) => {
                        setProduct_name(e.target.value);
                      }}
                      type="text"
                      id="small-input"
                      class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                    required
                    defaultValue={description}
                    onSelect={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>

                  <div>
                    <button
                      type="submit"
                      class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Helmet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddTreatment;
