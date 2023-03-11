import React from 'react'
import styles from '../Styles/styles'
import Helmet from './Helmet/Helmet'

const MainContainer = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <main className='mt-1 p-12 w-full '>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Helmet title="MainContainer">
              <div>
                MainContainer
              </div>
            </Helmet>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainContainer