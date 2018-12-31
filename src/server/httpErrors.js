// 命名参考：http://www.restapitutorial.com/httpstatuscodes.html

class HttpError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

class BadRequestError extends HttpError {
  constructor(message) {
    super(message, 400);
  }
}

class NoAuthError extends HttpError {
  constructor(message) {
    super(message, 401);
  }
}

class ForbiddenError extends HttpError {
  constructor(message) {
    super(message, 403);
  }
}

class NotFoundError extends HttpError {
  constructor(message) {
    super(message, 404);
  }
}

class ServerInternalError extends HttpError {
  constructor(message) {
    super(message, 500);
  }
}

export default {
  BadRequestError,
  NoAuthError,
  ForbiddenError,
  NotFoundError,
  ServerInternalError,
};
