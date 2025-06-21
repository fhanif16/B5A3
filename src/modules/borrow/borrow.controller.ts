import { Request, Response } from "express";
import Borrow from "./borrow.model";
import Book from "../book/book.model";

const createBorrowRequest = async (req: Request, res: Response) :Promise<void>=>{
    try {

        const borrow = new Borrow (req.body);
        const book = await Book.findById(req.body.book);
        console.log(book)
        if(!book){
           res.status(404).send({
                success: false,
                 message: "Book not found",
          


            }
          )

          return
        }


        if(book?.copies < req.body.quantity){
           res.status(404).send({
                success: false,
        message: `Only ${book.copies} copies are available`,

            })
        }

        book.copies -= req.body.quantity;
        if(book?.copies ===0){
            book.available = false;
        }

        await book?.save();
        await borrow.save();
          res.send({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });


      

        
    } catch (error) {
        res.send({
            success: false,
            message:"Book can not be created",
            error

        })
        
        
    }
}


const getBorrowSummary = async(req: Request, res: Response) =>{

    try {
        const summary = await Borrow.aggregate([{
            $group:{
                _id:"$book",
                totalQuantity : {$sum: "$quantity"},


            }
           },
      {
        $lookup: {
          from: "books", 
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      {
        $unwind: "$bookDetails",
      },
      {
        $project: {
          _id: 0,
          bookId: "$bookDetails._id",
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
          totalQuantity: 1,
        },
      },
    ]);

    res.send({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });

        
    } catch (error) {

        res.send({
            success: false,
    message: "Failed to retrieve borrowed book summary",
    error,
        })
        
    }
    
}


export const borrowController ={
    createBorrowRequest, getBorrowSummary

}