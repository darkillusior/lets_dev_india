import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Task = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name:{type:String},
  
  name: { type: String, required: true },
  rookies:{type:Boolean,default: true},

  traine:{type:Boolean,default:false},
  elite:{type:Boolean,default:false},

  core:{type:Boolean,default:false},
  userpicUrl:{type:String,required: true},
  dev:{type:Boolean,default:false},
  task:{type:String},
  status:{type:String},
  index:{type:Number},
  time:{type:Date},
  img:[String],
  updated:[String]
 
},
{ timestamps: true }
);

export default mongoose.models?.Task || mongoose.model("Task", Task);