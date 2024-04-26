export default class CustomError {
  private _status: number;
  private _message: string;
  
  constructor(status: number, message: string) {
    this._status = status;
    this._message = message;
  }
  
  get status() {
    return this._status;
  }

  get message() {
    return this._message;
  }

  toString() {
    return {
      status: this._status,
      message: this._message
    }
  }
}