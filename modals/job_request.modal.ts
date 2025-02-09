import { Schema , model ,models } from "mongoose";
const userShema = new Schema({
    email : {
        type:   String ,
        required: true ,
        unique : true ,

    },
    fullname : {
        type:   String ,
        required: true ,
    },
    feedback : {
        type:   String ,
    },
}
,    {
    timestamps  : true 
}
)

const Job_offert = models.Job_offert || model("Job_offert",userShema)

export default Job_offert

