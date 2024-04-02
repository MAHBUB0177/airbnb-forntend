import React from 'react'

interface CheckoutProps {
    setCheckout: (checkout: any) => void; // Adjust the type of checkout as per your requirements
    checkout: any; // Adjust the type of checkout as per your requirements
  }

const Checkout = ({setCheckout,checkout}:CheckoutProps) => {
  return (
    <div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border dark:border-gray-700">

            <div className="mb-6">
                {/* <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2> */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">First Name <span className='text-red-400'>*</span></label>
                        <input type="text" required id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" onChange={(e)=>setCheckout({
                            ...Checkout,
                            firstName:e.target.value
                        })}/>
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-white mb-1">Last Name<span className='text-red-400'>*</span></label>
                        <input type="text" required id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        onChange={(e)=>setCheckout({
                            ...Checkout,
                            lastName:e.target.value
                        })}/>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-gray-700 dark:text-white mb-1">Address<span className='text-red-400'>*</span></label>
                    <input type="text" required id="address" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    onChange={(e)=>setCheckout({
                        ...Checkout,
                        address:e.target.value
                    })}/>
                </div>

                <div className="mt-4">
                    <label  className="block text-gray-700 dark:text-white mb-1">City<span className='text-red-400'>*</span></label>
                    <input type="text" required id="city" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    onChange={(e)=>setCheckout({
                        ...Checkout,
                        city:e.target.value
                    })}/>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label className="block text-gray-700 dark:text-white mb-1">State<span className='text-red-400'>*</span></label>
                        <input type="text" required id="state" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                        onChange={(e)=>setCheckout({
                            ...Checkout,
                            state:e.target.value
                        })}/>
                    </div>
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">ZIP Code<span className='text-red-400'>*</span></label>
                        <input type="text" required id="zip" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                         onChange={(e)=>setCheckout({
                            ...Checkout,
                            zip:e.target.value
                        })}/>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>
                <div className="mt-4">
                    <label  className="block text-gray-700 dark:text-white mb-1">Card Number<span className='text-red-400'>*</span></label>
                    <input type="text" required id="card_number" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                     onChange={(e)=>setCheckout({
                        ...Checkout,
                        cardNumber:e.target.value
                    })}/>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">Expiration Date<span className='text-red-400'>*</span></label>
                        <input type="date" required id="exp_date" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                         onChange={(e)=>setCheckout({
                            ...Checkout,
                            expDate:e.target.value
                        })}/>
                    </div>
                    <div>
                        <label  className="block text-gray-700 dark:text-white mb-1">CVV<span className='text-red-400'>*</span></label>
                        <input type="text" required id="cvv" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                         onChange={(e)=>setCheckout({
                            ...Checkout,
                            cvv:e.target.value
                        })}/>
                    </div>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default Checkout