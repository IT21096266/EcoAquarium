import React, { useRef, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer'

const RowContainer = ({ flag, data, scrollValue }) => {

    // Add to Cart
    const [items, setItems] = useState([])
    const [{cartItems}, dispatch] = useStateValue()
    const addToCart = () => { 
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items,
        })
        localStorage.setItem('cartItems', JSON.stringify(items))
    }

    const rowContainer = useRef()
    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    }, [scrollValue])
    
    useEffect(() => {
        addToCart()
    }, [items])

  return (
    <div ref={rowContainer}
        className={`w-full flex items-center gap-4 my-12 scroll-smooth
        ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>

        {data && data.map(item => (

            <div key={item.id} className='min-w-[300px] h-[250px] w-300 md:w-350 md:min-w-[340px] my-12 bg-gray-gradient rounded-lg 
                backdrop-blur-lg p-2 hover:drop-shadow-2xl shadow-lg hover:shadow-blue-500/20 
                hover:duration-500 hover:ease-in-out flex flex-col items-center justify-between'>
                <div className='w-full flex items-center justify-between'>
                    <motion.img src={item?.imageURL} 
                            whileHover={{scale: 1.2}}
                            alt=''
                            className='-mt-8 ml-5 w-60 h-36 shadow-2xl shadow-blue-500/10'/>
                    <motion.div whileTap={{scale: 0.75}} 
                        onClick={() => setItems([...cartItems, item])}
                        className='w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center cursor-pointer mr-2'>
                        <MdShoppingCart />
                    </motion.div>
                </div>
                
                <div className='w-full flex flex-col items-end justify-end'>
                    <p className='font-semibold md:text-[15px] mt-3 text-dimWhite'>
                        {item?.brand}
                    </p>
                    <p className='mt-1 text-sm text-gray-500'>Spray Sheet</p>
                    <div className='flex items-center gap-8'>
                        <p className='text-lg font-semibold'>
                            <span>Rs. </span>
                            {item?.price} .00
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default RowContainer