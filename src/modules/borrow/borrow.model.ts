import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowSchema = new Schema<IBorrow>({
    book:{type:Schema.Types.ObjectId, ref:"Book", required:[true, "Book Id is required"]},
    quantity:{type:Number,
         min:[1,"Quantity must be a positive number and greater than 0"] ,
          required:[true, "Quantity is required"],
          validate:{
            validator:Number.isInteger,
            message:"Quantity must be an integer"

          }},
    dueDate:{type:Date, required:[true,"Due date is required"]}


})

const Borrow = model<IBorrow>('Borrow', borrowSchema)
export default Borrow

