import { useState } from "react";
import React from "react";
import treatment_data_services from "../services/treatment_services";

const TreatmentSearch = () => {
    const [treatment, setTreatment] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <main className="mt-1 p-12 w-full ">
          <div className="flex w-96 float-right rounded-lg">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <input
              value={value}
              onChange={onChange}
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              onClick={() => onSearch(value)}
              type="submit"
              className="p-2.5 mr-5 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              search
            </button>
          </div>
          <div>
          {treatment.filter((doc) => {
            const searchTerm = value.toLowerCase();
            const product_name = doc.product_name.toLowerCase();

            return (
                searchTerm &&
                product_name.startsWith(searchTerm) &&
                product_name !== searchTerm
              );
          })
          
          .map((doc) => {
                 
                    <div className="max-w-sm col-span-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-60">
                      {/* <a href="#">
                        <img
                          src={doc.imageAsset}
                          alt="treatment image"
                          className="rounded-lg h-60"
                        />
                      </a> */}
                      <div className="p-5">
                        <a href="#">
                          <h5 onClick={()=> onSearch(doc.product_name)} key={item.product_name} className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {doc.product_name}
                          </h5>
                        </a>
                        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {doc.description.substring(0, 45)}
                          {doc.description.length > 45 ? "..." : ""}
                        </p> */}
                      </div>
                    </div>
                
                })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TreatmentSearch;
