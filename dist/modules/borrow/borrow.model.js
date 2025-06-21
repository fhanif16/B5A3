"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const borrowSchema = new mongoose_1.Schema({
    book: { type: mongoose_1.Schema.Types.ObjectId, ref: "Book", required: [true, "Book Id is required"] },
    quantity: { type: Number,
        min: [1, "Quantity must be a positive number and greater than 0"],
        required: [true, "Quantity is required"],
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be an integer"
        } },
    dueDate: { type: Date, required: [true, "Due date is required"] }
});
const Borrow = (0, mongoose_1.model)('Borrow', borrowSchema);
exports.default = Borrow;
