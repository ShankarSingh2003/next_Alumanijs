
"use client"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@radix-ui/react-toast'
import axios from 'axios'
import React, { useState } from 'react'

function page() {
  const[jobForm,setJobForm]=useState<JobForm>({
    jobdescription:"",
    joblocation:"",
    jobrole:"",
    jobtitle:"",
    package:"",
    companyname:""
  })
  const[loading,setLoading]=useState<boolean>(false)
  const {toast}=useToast()
  const handleFormInput=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
try {
  setLoading(true)
  axios.post("/api/JobForm",{
  ...jobForm
  }).then((res)=>{
    const response=res.data
  if(response.status==200){
    setLoading(false)
    toast({
      title: "Job Form Created Successfully",
      description: "Thanks For your support",
    })
    setJobForm({
      jobdescription:"",
      joblocation:"",
      jobrole:"",
      jobtitle:"",
      package:"",
      companyname:""
    })

  }
  if(response.status==400){
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
      action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }
  })
} catch (error) {
  console.log(error)
}
  }

  return (
 <>  
    <div className="flex justify-center items-center w-screen h-screen bg-white mt-20">

      <div className="container mx-auto my-4 px-4 lg:px-20">
    
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">Send us a <br /> message</h1>
          </div>
          <form className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5" onSubmit={handleFormInput}>
            
            <Input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Job Title" onChange={(e)=>setJobForm({...jobForm,jobtitle:e.target.value})} required value={jobForm.jobtitle}/>
            <Textarea className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                 placeholder="Job Descriptions"onChange={(e)=>setJobForm({...jobForm,jobdescription:e.target.value})} required value={jobForm.jobdescription} />
            <Input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Job Location"onChange={(e)=>setJobForm({...jobForm,joblocation:e.target.value})} required value={jobForm.joblocation} />
            <Input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Package" onChange={(e)=>setJobForm({...jobForm,package:e.target.value})} required value={jobForm.package}/>
                 <Input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Job Role"onChange={(e)=>setJobForm({...jobForm,jobrole:e.target.value})} required value={jobForm.jobrole} />
                 <Input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Company Name"onChange={(e)=>setJobForm({...jobForm,companyname:e.target.value})} required value={jobForm.companyname} />
                  <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-48 
                          focus:outline-none focus:shadow-outline mt-5" type='submit'>
           Create Job
              </button>
            </div>
            </form>
           
          
          </div>
    
          <div
            className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">Jobs Created By Our Alumini</h1>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam,
                eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>
    
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">MIT Muzaffarpur</h2>
                  <p className="text-gray-400">Laxmi chawk police-line Muzaffarpur Bihar</p>
                </div>
              </div>
              
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                </div>
              </div>
              
              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-linkedin-in text-blue-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </div>

    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <img className="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"/>
        </a>
      </div>
    </div>
    </> 
  )
}

export default page
