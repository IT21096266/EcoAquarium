import React from 'react'

import styles from '../../Styles/styles'
import Helmet from "../Helmet/Helmet";
import { discount, repairMan } from '../../assets/index'

const HomeContainer = () => {
  
    return (
    <section id='Home' className='bg-primary w-full overflow-hidden'>
        <main className='mt-1 p-12 w-full h-screen'>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Helmet title="Home">
                        <div  className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='p-4 flex-1 flex flex-col items-start justify-start gap-2'>
                            <div className='flex items-center gap-4 justify-center bg-black-gradient px-3 py-0 rounded-full'>
                                <p className={`text-base ${styles.paragraph} text-[9px] md:text-[11px]`}>
                                    Free delivery for purchase above Rs. 25k
                                </p>
                                <div className='w-8 h-8 rounded-full overflow-hidden drop-shadow-xl'>
                                <img src={discount} className='w-full h-full object-contain' />
                                </div>
                            </div>
                                <h2 className='text-[2.5rem] font-bold tracking-wide'>
                                    Island Wide Delivery<br/><span className='text-[3.5rem] text-gradient'> Now Available</span>
                                </h2>
                                <p className={`${styles.paragraph} mt-2 text-center text-[0.8rem] md:text-left`}>
                                    Island wide delivery on all orders.
                                    Colombo & selected suburbs to be delivered on the following day, and island wide fulfilment within 5 days
                                    (Working days only). Minimum order value Rs.5000. The above does not apply to areas under travel restrictions
                                </p>
                                <button type="button" 
                                className="bg-btn-gradient text-black w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 mt-3 md:w-auto">
                                    Order Now
                                </button>
                            </div>


                            <div className='p-2 flex-1 flex items-center'>
                                <img src={repairMan}/>
                            </div>
                        </div>
                    </Helmet>
                </div>
            </div>
        </main>
    </section>
    )}

export default HomeContainer