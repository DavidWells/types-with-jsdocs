export interface HTTPRequest {
  headers?: { [k: string]: any };
  params?: { [k: string]: any };
  query?: { [k: string]: any };
  body?: any;
}