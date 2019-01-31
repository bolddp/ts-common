/**
 * Base class for all errors in the Typescript libraries.
 */
export declare class CustomError extends Error {
    statusCode?: number;
    constructor(statusCode: number, message: string);
}
