import React from 'react'
import axios from 'axios'
import baseUrl from "../utils/baseUrl";
import { useState } from 'react';


function Donation({setShowDonation}) {
    
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    let payment_info={
        
        amount:0
      
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
            if (!res) {
                alert('Razropay failed to load!!')
                return
            }
            let result = await axios.post(`${baseUrl}/api/payment/create-order`,{payment_info} );
            console.log(result)
            if(!result){
                console.log("no result found")
            }
            let options={
                key:"rzp_test_l1w2TZvd5ER58a",
                currency:result.data.currency,
                amount:result.data.amount,
                order_id:result.data.id,
                name:"Dev-India",
                handler:async function(responce){             
                const result = await axios.post(`${baseUrl}/api/payment/checkout`, responce.razorpay_payment_id);
                console.log(result,"resultfinal")
                }

            }
            console.log("options",options)
            let payment_obj= await new window.Razorpay(options);
            payment_obj.open();
        
        } catch (error) {
            console.log(error)
        }
      
    }
  

        const [amount, setAmount] = useState("");
        const [message, setMessage] = useState("");
        const [donated, setDonated] = useState(false);


  return (
   <>
       
              <div className="max-w-md m-auto bg-white p-8 shadow-md rounded-md">
              <div className='' onClick={() => { setShowDonation(false) }}>
                  <img className='w-8 cursor-pointer' src="/images/back_arrow_icon.svg" alt="" />
              </div>
                  <h2 className="text-3xl  font-bold text-center mb-6 text-purple-600">
                      Make a Donation
                  </h2>
                  {donated ? (
                      <div className="text-center text-green-600 font-semibold mb-6">
                          Thank you for your donation!
                      </div>
                  ) : (
                      <form onSubmit={handleSubmit}>
                          <div className="mb-4">
                              <label htmlFor="amount" className="block text-gray-700">
                                  Amount (INR)
                              </label>
                              <input
                                  type="number"
                                  id="amount"
                                  name="amount"
                                  value={amount}
                                  onChange={(e) => setAmount(e.target.value)}
                                  className="mt-2 p-2 border text-gray-900 font-semibold border-purple-600 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                  placeholder="Enter the amount you wish to donate"
                              />
                          </div>
                          <div className="mb-4">
                              <label htmlFor="message" className="block text-gray-700">
                                  Message (optional)
                              </label>
                              <textarea
                                  id="message"
                                  name="message"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  rows="4"
                                  className="mt-2 p-2 border border-purple-600 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                                  placeholder="Write a message to accompany your donation"
                              ></textarea>
                          </div>
                          <button
                              type="submit"
                              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full transition-transform transform hover:scale-105"
                          >
                              Donate
                          </button>
                      </form>
                  )}
              </div>
       
        
   </>
  )
}

export default Donation