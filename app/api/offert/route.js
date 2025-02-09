import { NextResponse } from "next/server"
import {connect} from "../../../db"
import Job_offert from "@/modals/job_request.modal"


export async  function POST(req) {

  try{
await connect()
const {email , fullname , feedback} = await  req.json()

const exist = await Job_offert.findOne({email}) 
if(exist){
  return NextResponse.json({message : 'email already used '},{status : 400})
}

const newJobOffert = new Job_offert({email,fullname, feedback})
await newJobOffert.save()

return NextResponse.json({
  message: "Job offer created successfully",
  data: newJobOffert,
});
  }
    
  catch(e) {
    console.log("connection Error")
    console.log(e) 

    return NextResponse.json({
      message : 'error  creating job offert' ,
      error  : e.message
    }, {status : 500})
  }

  
}