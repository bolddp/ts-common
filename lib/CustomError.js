"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base class for all errors in the Typescript libraries.
 */
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
