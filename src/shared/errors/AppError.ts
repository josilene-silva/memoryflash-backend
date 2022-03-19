export class AppError implements Error {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly name: string;

  constructor(message: string, statusCode = 400) {
    this.name = "AppError";
    this.message = message;
    this.statusCode = statusCode;
  }
}
