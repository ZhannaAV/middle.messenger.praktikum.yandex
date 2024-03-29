import { rootUrl } from './rootUrl';

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function queryStringify(data: Record<string, any> | string): string {
  if (Object.keys(data).length === 0) return '';
  let item;
  const asw = Object.entries(data)
    .reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        item = `${key}=${value.join()}&`;
      } else if (typeof value === 'object') {
        item = `${key}=[object Object]&`;
      } else {
        item = `${key}=${value}&`;
      }
      return acc + item;
    }, '?');

  return asw.slice(0, -1);
}

interface IMethodOptions {
  data?: XMLHttpRequestBodyInit | undefined;
  headers?: Record<string, any>;
  timeout?: number | undefined;
  params?: Record<string, any> | string
}

interface IOptions extends IMethodOptions {
  method: METHODS;
}

type HTTPMethod = (url: string, options?: IMethodOptions) => Promise<unknown>

export class Http {
  private _url: string;

  constructor(rootEndpoint: string) {
    this._url = rootEndpoint;
  }

  get: HTTPMethod = (url, options) => {
    const fullUrl = options?.params ? `${url}${queryStringify(options.params)}` : url;

    return this._request(fullUrl, {
      ...options,
      method: METHODS.GET
    });
  };

  put: HTTPMethod = (url, options) => this._request(url, {
    ...options,
    method: METHODS.PUT
  });

  post: HTTPMethod = (url, options) => this._request(url, {
    ...options,
    method: METHODS.POST
  });

  delete: HTTPMethod = (url, options) => this._request(url, {
    ...options,
    method: METHODS.DELETE
  });

  _request = (url: string, options: IOptions) => {
    const {
      method,
      data,
      headers,
      timeout = 50000
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, this._url.concat('', url));

      if (headers) {
        Object.entries(headers)
          .forEach(([title, value]) => xhr.setRequestHeader(title, value));
      }
      xhr.onload = () => resolve(xhr);
      xhr.withCredentials = true;
      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }

      xhr.timeout = timeout;

      xhr.onerror = reject;
      xhr.ontimeout = reject;
    });
  };
}

export const httpRequest = new Http(`${rootUrl}`);
