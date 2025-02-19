import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiousPublic from '../../Shared/useAxiousPublic';
import { AuthContext } from '../../Authprovider/AuthProvider';
import { toast } from 'react-toastify';
import useAxiousSecure from '../../Shared/useAxiousSecure';

const ChekOut = ({session,bookfetch}) => {
  const {user}=useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const axiousPublic=useAxiousPublic()
    const axiousSecure=useAxiousSecure()
    const [secret,setsecret]=useState('')
  useEffect(()=>{
    getpaymentintent()
  },[session._id])
  const getpaymentintent=async()=>{
    try{
         const {data} =await axiousPublic.post('/creatpayment-intent',{sessionid:session._id,registrationFee:session.registrationFee})
         setsecret(data.client_secret)
    
    }
    catch{

    }
  }

    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
       
        return;
      }
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
 
      } else {
       // console.log('[PaymentMethod]', paymentMethod);
      }
      //confirm payment
    const{
      paymentIntent
      }= await stripe.confirmCardPayment(secret,{
        payment_method:{
          card:card,
          billing_details:{
            name: user?.displayName,
            email: user?.email,
          }
        }
      })
    if( paymentIntent.status==='succeeded'){
      const bookdata={
        sessionId:session._id,
        studentEmail:user?.email,
       TutorEmail:session.tutorEmail,
       sessionTitle:session.sessionTitle,
       tutorName:session.tutorName,
       tutorphoto:session.tutorphoto,
        sessionFee:session.registrationFee,
        transitionId:paymentIntent?.id,
       
    
     }
     //console.log(paymentIntent)
    const {data} =await axiousPublic.post('/booked-data',bookdata)
    if(data.acknowledged){
    //  console.log(data)
    bookfetch()
        toast.success('payment sucess and booked ')
    }
      }
    



    };

    return (
        <div>
              <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn w-full dark:text-white  bg-indigo-600 text-white hover:bg-indigo-700' type="submit" disabled={!stripe}>
      Pay <span className='text-yellow-400 dark:text-white '>{session.registrationFee}$</span> && Book Now 
      </button>

    </form>
        </div>
    );
};

export default ChekOut;