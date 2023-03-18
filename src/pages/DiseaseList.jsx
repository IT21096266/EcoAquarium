import React, { useEffect, useState, useRef  } from "react";
import styles from "../Styles/styles";
import Helmet from "../components/Helmet/Helmet";

const DiseaseList = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
        <main className="mt-1 p-12 w-full ">
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Helmet title="Address List">
            
            <div>DiseaseList</div>

                    </Helmet>
                </div>
            </div>
        </main>
    </div>
  )
}

export default DiseaseList