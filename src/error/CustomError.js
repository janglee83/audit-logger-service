class CustomError extends Error {
    constructor(code, message) {
      super(message)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomError);
      }
      this.code = code;
    }

    toJSON() {
      return {
        code: this.code,
        message: this.message,
        data: this.data,
      };
    }
  }

module.exports = CustomError;
