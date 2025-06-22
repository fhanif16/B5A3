"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowController = void 0;
const borrow_model_1 = __importDefault(require("./borrow.model"));
const book_model_1 = __importDefault(require("../book/book.model"));
const createBorrowRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const borrow = new borrow_model_1.default(req.body);
        const book = yield book_model_1.default.findById(req.body.book);
        console.log(book);
        if (!book) {
            res.status(404).send({
                success: false,
                message: "Book not found",
            });
            return;
        }
        if ((book === null || book === void 0 ? void 0 : book.copies) < req.body.quantity) {
            res.status(404).send({
                success: false,
                message: `Only ${book.copies} copies are available`,
            });
        }
        book.copies -= req.body.quantity;
        if ((book === null || book === void 0 ? void 0 : book.copies) === 0) {
            book.available = false;
        }
        yield (book === null || book === void 0 ? void 0 : book.save());
        yield borrow.save();
        res.send({
            success: true,
            message: "Book borrowed successfully",
            data: borrow,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Book can not be created",
            error
        });
    }
});
const getBorrowSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const summary = yield borrow_model_1.default.aggregate([{
                $group: {
                    _id: "$book",
                    totalQuantity: { $sum: "$quantity" },
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
    }
    catch (error) {
        res.send({
            success: false,
            message: "Failed to retrieve borrowed book summary",
            error,
        });
    }
});
exports.borrowController = {
    createBorrowRequest, getBorrowSummary
};
