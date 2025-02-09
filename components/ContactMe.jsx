"use client"
import Image from 'next/image'
import React, {  useState } from 'react'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactMe() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const  [data, setData] = useState({
    email : '' , 
    fullname : '' , 
    feedback : ''
   })


const [loading, setLoading] = useState(false);

   const handleChange = (e) => {


    
    setData({
      ...data,  // Spread the existing state values
      [e.target.name]: e.target.value,  // Dynamically update the field based on input name
    });
  };
 
   const handelSubmit  = async (e)=>{
    e.preventDefault(); 
    console.log(data)

    if (!emailPattern.test(data.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
      });
    
      return;
    }


    if (!data.email || !data.fullname || !data.feedback) {
      toast.error('You need to fill all the inputs', {
        position: "top-right",
      });
      return;
    }



    
    try {
      setLoading(true);
      const response = await fetch("/api/offert",{
        method : 'POST' ,
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data), 
      })
      if(response.ok){
        const result = await response.json(); // Parse the response from the server
        toast.success(result.message, {
          position: "top-right",
        })
        setData({
          email: '',
          fullname: '',
          feedback: ''
        });
        setLoading(false);
      }
      else{   
        toast.error('Error Notification!', {
          position: "top-right",
        })
        setLoading(false);
        // throw  new Error('Form submisiopm faild ')
      }
    }catch(error){
      toast.error('Error Form submission failed', {
        position: "top-right",
      });
      setLoading(false);
        console.log(error)
    }
    
   }




  return (
<>
<div
id='contact'
  className="flex flex-col lg:flex-row w-full  -mt-16  mb-8 dark:bg-black   bg-[#E8EAED] items-center  xl:items-stretch   justify-center"
>

<div className='flex items-center    w-full  xl:w-1/2 flex-col justify-center p-32 xl:p-56'>

<div className='max-w-[650px] max-h-[650px]'>


{/* Text  */}
<div className=" max-w-lg   ">
      <h1 className="font-bold  text-center text-4xl">Let’s Discuss Your Project</h1>
      <p className="mt-4 text-center dark:text-gray-300 text-gray-500">
      Have a project in mind or just want to say hello? Feel free to reach out! You can contact me via email at yousseflaidani6@gmail.com or connect with me on LinkedIn, GitHub, and Twitter.
Let’s build something amazing together! 🚀
 
      </p>
    </div>



    
{/* Form */}
<div className='   max-w-lg  '>


<div className='my-4'>

  <div className="relative">
    <input
      type="email"
      
      name='email'
      value={data.email}
      className="w-full rounded-lg  dark:bg-white dark:text-black   border-gray-200 p-4 pe-12 text-xl shadow-sm"
      placeholder="Enter email"
      onChange={handleChange}
    />


  </div>
</div>

<div className='my-4'>

  <div className="">
    <input
      
      name='fullname'
      value={data.fullname}
      className="w-full rounded-lg  dark:bg-white dark:text-black border-gray-200 p-4 pe-12 text-xl shadow-sm"
      onChange={handleChange}
      placeholder="Enter your full name "
    />

  </div>
</div>

  <textarea 
    name='feedback' 
    value={data.feedback}
    onChange={handleChange}
    className="my-t w-full rounded-lg dark:bg-white  dark:text-black border-gray-200 resize-none align-top shadow-sm  text-xl p-4 "
    rows="4"
    placeholder="Enter any additional order notes Or message..."
  ></textarea>
<div className="flex items-center justify-between">


  <button 
    onClick={handelSubmit}
    className="inline-block rounded-lg hover:scale-105 transition-all  bg-primary mt-4 px-8 py-2 text-xl font-medium text-white"
  >
      {loading ? 'Loading...' : 'Submit Message'}
  </button>
</div>
</div>

</div>







  
</div>




          <div className="hidden xl:flex items-center justify-center w-1/2">
            <Image width={650} height={650} className="z-99 rounded-3xl" alt="me" src={"/ana.jpg"} />
          </div>
      





  
          <ToastContainer 
                 position="top-center"
                 autoClose={5000}
                 hideProgressBar
                 newestOnTop
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
          
          />

  </div>



</>
  )
}

export default ContactMe