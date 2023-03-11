import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import styles from '../../Styles/styles'
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'
import { emptyCart } from '../../assets'
import CartItem from './CartItem'

const CartContainer = () => {

  // For Cart
  const [{ cartShow, cartItems }, dispatch] = useStateValue()
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <motion.div initial={{opacity : 0, x : 200}}
                animate={{opacity : 1, x : 0}}
                exit={{opacity : 0, x : 200}}
        className='fixed top-0 right-0 w-full md:w-375 h-screen bg-gray-gradient flex flex-col z-[101]'>
        <div className='w-full flex items-center justify-between p-4 cursor-pointer' onClick={showCart}>
            <motion.div whileTap={{scale:0.60}}>
                <MdOutlineKeyboardBackspace className='text-white text-3xl'/>
            </motion.div>
            <p className='text-lg text-white font-semibold'>Cart</p>
            <motion.p whileTap={{scale:0.75}}
                      onClick={clearCart}
                      className='flex items-center gap-2 p-1 px-2 my-2 rounded-md'>
                Clear Cart <RiRefreshFill />
            </motion.p>
        </div>
{/* --------- Bottom Section --------- */}
        {cartItems && cartItems.length > 0 ? (

        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
    {/* --------Cart Items Center-------- */}
            <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
    {/* --------Cart Items-------- */}
                {cartItems && cartItems.map(item => (
                    <CartItem key={item.id} 
                              item={item}
                              setFlag={setFlag}
                              flag={flag} />
                ))}
            </div>
    {/* --------Total Items Center-------- */}
            <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center
                justify-evenly px-8 py-2'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>
                        Sub Total:
                    </p>
                    <p className='text-gray-400 text-lg'>
                        <span>Rs. </span> {parseFloat(tot)}
                    </p>
                </div>
                <div className='w-full flex items-center justify-between -mt-4'>
                    <p className='text-gray-400 text-lg'>
                        Delivery:
                    </p>
                    <p className='text-gray-400 text-lg'>
                        <span>Rs. </span> 2.00
                    </p>
                </div>

                <div className='w-full border-b border-gray-600 my-2'></div>
                <div className='w-full flex items-center justify-between -mt-4'>
                    <p className='text-gray-200 text-xl font-semibold'>
                        Total:
                    </p>
                    <p className='text-gray-200 text-xl font-semibold'>
                        <span>Rs. </span> {tot + 2.5}
                    </p>
                </div>
                <motion.button whileTap={{scale: 0.60}}
                    type='button'
                    className= {`${styles.ALbtn} font-semibold w-full p-2 rounded-full 
                        shadow-lg hover:shadow-blue-500/30 hover:duration-500 hover:ease-in-out`}>
                        Checkout
                </motion.button>
            </div>
        </div>
         ) : (
            <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                <img src={emptyCart} className='w-300'/>
                <p className='text-xl text-dimWhite font-semibold'>
                    Cart is Empty
                </p>
            </div>
         )}
    </motion.div>
  )
}

export default CartContainer