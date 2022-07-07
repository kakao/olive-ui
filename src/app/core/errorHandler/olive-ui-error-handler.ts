import { ErrorHandler } from "@angular/core";

export class OliveUiErrorHandler implements ErrorHandler {
    handleError(error) {
        const exception = error.message || error.error || error.originalError || error;
        console.error(exception);
    }
}
