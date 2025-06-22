import { Request, Response } from "express";
import Book from "./book.model";

const createBook = async (req: Request, res: Response)=>{
    try {

        const data = await (Book.create(req.body));
        res.send({
            success:true,
            message:"Book created successfully",
            data
        })
        
    } catch (error) {
        res.send({
            success: false,
            message:"Book can not be created",
            error

        })
        
    }
}


const getBooks =async (req: Request, res: Response)=> {
    try {

        const {filter, sortBy='createdAt', sort='asc', limit=10}=req.query;
        const query: any ={};
        if(filter){
            query.genre = filter;
        }

        const sortOptions : any ={};
        sortOptions[sortBy as string] = sort=== 'desc' ? -1:1;


        const data = await Book.find(query)
        .sort(sortOptions)
        .limit(Number(limit))
          res.send({
            success:true,
            message:"Books retrieved successfully",
            data
        })

        
    } catch (error) {
         res.send({
            success: false,
            message:"Books could not be retrieved",
            error

        })
        
    }

}


const getBookById = async (req: Request , res: Response) => {
    try {

        const bookId = req.params.bookId;
        const data = await Book.findById(bookId);
        //    if (!data) {
        //     return res.status(404).send({
        //         success: false,
        //         message: "Book not found",
        //     });
        // }
        res.send({
            success: true,
            message:"Book retrieved successfully",
            data

        })
        
    } catch (error) {
         res.send({
            success: false,
            message:"Books could not be retrieved",
            error

        })

        
    }
}

const updateBook = async (req: Request , res: Response) => {
    try {

          const bookId = req.params.bookId;
        const data = await Book.findByIdAndUpdate(bookId,req.body, {new:true, runValidators:true} );
        //    if (!data) {
        //     return res.status(404).send({
        //         success: false,
        //         message: "Book not found",
        //     });
        // }
        res.send({
            success: true,
            message:"Book updated successfully",
            data


        })
            
        


        
    } catch (error) {
        res.send({
        success : false,
        message: "Could not update",
        error

       })

        
    }

}


const deleteBookById = async (req: Request , res: Response) => {
    try {

          const bookId = req.params.bookId;
        const data = await Book.findByIdAndDelete(bookId );
        //    if (!data) {
        //     return res.status(404).send({
        //         success: false,
        //         message: "Book not found",
        //     });
        // }
        res.send({
            success: true,
            message:"Book deleted successfull",
            data:null


        })
            
        


        
    } catch (error) {
        res.send({
        success : false,
        message: "Could not delete the book",
        error

       })

        
    }

}



export const bookController ={
    createBook, getBooks, getBookById, updateBook, deleteBookById


}