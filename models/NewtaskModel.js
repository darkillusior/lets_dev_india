import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },

    name: { type: String, required: true },
    task:{type: String, required: true },
    rookies:{type:Boolean,default: true},
    taskname:{ type: String },
    traine:{type:Boolean,default:false},
    elite:{type:Boolean,default:false},

    core:{type:Boolean,default:false},

    dev:{type:Boolean,default:false},
   
    text: { type: String, required: true },

    picUrl:[String],
    userpicUrl:{type:String,required: true},
    likes: [{ user: { type: Schema.Types.ObjectId, ref: "User" } }],

   
  },
  { timestamps: true }
);


export default mongoose.models?.Post || mongoose.model("Post", PostSchema);