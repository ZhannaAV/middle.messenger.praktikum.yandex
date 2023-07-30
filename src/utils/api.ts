enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function queryStringify(data: Record<string, any>): string {
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
  data: Record<string, any>;
  headers: Record<string, any>;
  timeout?: number;
}

interface IOptions extends IMethodOptions {
  method: METHODS;
}

type HTTPMethod = (url: string, options?: IMethodOptions) => Promise<unknown>

class Api {
  get: HTTPMethod = (url, options) => this._request(`${url}${queryStringify(options.data)}`, {
    ...options,
    method: METHODS.GET
  }, options?.timeout);

  put: HTTPMethod = (url, options) => this._request(url, {
    ...options,
    method: METHODS.PUT
  }, options?.timeout);

  post: HTTPMethod = (url, options) => this._request(url, {
    ...options,
    method: METHODS.POST
  }, options?.timeout);

  delete: HTTPMethod = (url, options) => this._request(url, {
    ...options,
    method: METHODS.DELETE
  }, options?.timeout);

  _request = (url: string, options: IOptions, timeout = 5000) => {
    const {
      method,
      data,
      headers
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      Object.entries(headers)
        .forEach(([title, value]) => xhr.setRequestHeader(title, value));

      xhr.onload = () => resolve(xhr);

      if (method === METHODS.GET) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }

      xhr.timeout = timeout;

      xhr.onerror = reject;
      xhr.ontimeout = reject;
    });
  };
}
