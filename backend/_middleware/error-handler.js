module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        // If headers have been sent, delegate to Express default error handler
        return next(err);
    }

    // Log the error for debugging
    console.error(err);

    // Determine the status code and message based on the error
    let statusCode = 500;
    let message = 'Internal Server Error';

    if (typeof err === 'string') {
        // Custom application error
        statusCode = err.toLowerCase().endsWith('not found') ? 404 : 400;
        message = err;
    } else if (err.name === 'UnauthorizedError') {
        // JWT authentication error
        statusCode = 401;
        message = 'Unauthorized';
    } else if (err instanceof ValidationError) {
        // Validation error (e.g., using express-validator)
        statusCode = 422;
        message = err.errors.map(error => error.msg).join('; ');
    }

    // Send the error response
    res.status(statusCode).json({ message });
}

// Custom error class for validation errors
class ValidationError extends Error {
    constructor(errors) {
        super();
        this.errors = errors;
    }
}

// Example usage:
// throw new ValidationError([{ msg: 'Email is required' }, { msg: 'Invalid email format' }]);
