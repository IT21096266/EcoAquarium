import React, { Fragment } from "react";
import { AnimatePresence } from 'framer-motion'
import { MainContainer, CreateContainer, Navbar, Footer } from './components'
import Routers from "../../routers/Routers";

const Layout = () => {

  return (
    <AnimatePresence>
      <Fragment>
        <div className='bg-primary w-full overflow-hidden'>
          <div className={`${styles.paddingX} ${styles.flexCenter} `}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <main className='mt-1 p-8 w-full '>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Routers />
                </div>
              </div>
          </main>

            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Footer />
              </div>
            </div>

        </div>
      </Fragment>
    </AnimatePresence>
  );
};

export default Layout;
