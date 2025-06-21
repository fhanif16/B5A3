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
exports.bookController = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (book_model_1.default.create(req.body));
        res.send({
            success: true,
            message: "Book created successfully",
            data
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
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy = 'createdAt', sort = 'asc', limit = 10 } = req.query;
        const query = {};
        if (filter) {
            query.genre = filter;
        }
        const sortOptions = {};
        sortOptions[sortBy] = sort === 'desc' ? -1 : 1;
        const data = yield book_model_1.default.find(query)
            .sort(sortOptions)
            .limit(Number(limit));
        res.send({
            success: true,
            message: "Books retrieved successfully",
            data
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Books could not be retrieved",
            error
        });
    }
});
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findById(bookId);
        res.send({
            success: true,
            message: "Book retrieved successfully",
            data
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Books could not be retrieved",
            error
        });
    }
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndUpdate(bookId, req.body, { new: true, runValidators: true });
        res.send({
            success: true,
            message: "Book updated successfully",
            data
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Could not update",
            error
        });
    }
});
const deleteBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.bookId;
        const data = yield book_model_1.default.findByIdAndDelete(bookId);
        res.send({
            success: true,
            message: "Book deleted successfull",
            data: null
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: "Could not delete the book",
            error
        });
    }
});
exports.bookController = {
    createBook, getBooks, getBookById, updateBook, deleteBookById
};
