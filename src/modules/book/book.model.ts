import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
     title: {type:String, required:[true,"The book’s title is required" ], trim:true},
    author:{type:String, required:[true, "Author name is required"], trim:true},
    genre:{type:String,  enum:{
        values:["FICTION" , "NON_FICTION" ,"SCIENCE" , "HISTORY" , "BIOGRAPHY" , "FANTASY"],
        message:"Genre must be one of: FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY",
    },required:[true, "Genre is required" ]},

    isbn:{type:String, required:[true, "ISBN is required"], unique:true, trim:true},
    description:{type:String, trim:true},
    copies:{type: Number , min:[0, "Copies must be be a non nagetive number"], required:[true, 'Copies count is required'],
        validate:Number.isInteger,
        message:"Number can not be negative"
    },
    available:{type: Boolean , default:true}

},
{timestamps: true}
)

const Book = model<IBook>("Book",bookSchema)
export default Book