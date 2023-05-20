import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import treatment_data_services from "../services/treatment_services";
import styles from "../Styles/styles";

const TreatmentView = () => {
  const [treatment, setTreatment] = useState([]);

  // Navigate
  const navigate = useNavigate();
  const navigateMap = () => {
    navigate("/map");
  };

  //fetch data
  useEffect(() => {
    getTreatment();
  }, []);

  const getTreatment = async () => {
    const data = await treatment_data_services.getAllTreatments();
    console.log(data.docs);
    setTreatment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //search bar
  const [value, setValue] = useState("");
  const [filterValue, setFilterValue] = useState([]);
  const filterData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterValue = treatment.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setFilterValue([...filterValue]);
    } else {
      setValue(e.target.value);
      setTreatment([...treatment]);
    }
  };

  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <main className="mt-1 p-12 w-full ">
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <div>
                <button
                  className="absolute S-btn bg-btn-gradient hover:bg-btn-gradient duration-500 text-black py-2 px-2 rounded shadow SL-table"
                  onClick={navigateMap}
                >
                  Find nearest vet
                </button>
              </div>
              <div className="w-96 float-right mb-10 ">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <input
                  value={value}
                  onChange={filterData}
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Search"
                  required
                />
              </div>
              <section>
                <div
                  className={`w-full items-center justify-evenly gap-5 my-12 flex flex-wrap`}
                >
                  {value.length > 0
                    ? filterValue.map((doc) => {
                        return (
                          
                            <div className="max-w-sm col-span-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60">
                              <Link to={`treatmentdetails/${doc.id}`}>
                              <img
                                src={doc.imageAsset}
                                alt="treatment image"
                                className="rounded-lg h-60"
                              />

                              <div className="p-5">
                                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  {doc.product_name.substring(0, 17)}
                                  {doc.product_name.length > 17 ? "..." : ""}
                                </h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                  {doc.description.substring(0, 45)}
                                  {doc.description.length > 45 ? "..." : ""}
                                </p>
                              </div>
                              </Link>

                            </div>
                        );
                      })
                    : treatment.map((doc) => {
                        return (
                          <Link to={`treatmentdetails/${doc.id}`}>
                            {/* <div key={doc.id}> */}
                            <div className="max-w-sm col-span-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60">
                              <img
                                src={doc.imageAsset}
                                alt="treatment image"
                                className="rounded-lg h-60"
                              />

                              <div className="p-5">
                                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                                  {doc.product_name.substring(0, 17)}
                                  {doc.product_name.length > 17 ? "..." : ""}
                                </h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                  {doc.description.substring(0, 45)}
                                  {doc.description.length > 45 ? "..." : ""}
                                </p>
                              </div>
                            </div>
                            {/* </div> */}
                          </Link>
                        );
                      })}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TreatmentView;
