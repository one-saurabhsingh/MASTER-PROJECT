class ErrorHandler extends Error {
    constructor(statusCode,message){
        super(message);// super is array class ka constructor
        this.statusCode=statusCode;
    }
}

export default ErrorHandler;