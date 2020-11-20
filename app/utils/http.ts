enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export interface Headers {
    [key: string]: string;
}

export interface Data {
    [key: string]: unknown;
}

export interface TransportOptions {
    headers?: Headers;
    timeout?: number;
    data?: Data;
    formData?: FormData;
}

export interface RequestOptions extends TransportOptions {
    method: keyof typeof HTTP_METHODS;
}

export class Http {
    static methods = HTTP_METHODS;
    // TODO add generic
    static get = (url: string, options: TransportOptions) => {
        return Http._request(
            // @ts-ignore
            options.data ? url + Http._queryStringify(options.data) : url,
            {
                ...options,
                method: Http.methods.GET
            },
            options.timeout || 5000);

    };


    static post = (url: string, options: TransportOptions) => {
        return Http._request(url, {...options, method: HTTP_METHODS.POST}, options.timeout);
    };

    static put = (url: string, options: TransportOptions) => {
        return Http._request(url, {...options, method: HTTP_METHODS.PUT}, options.timeout);
    };

    static delete = (url: string, options: TransportOptions) => {
        return Http._request(url, {...options, method: HTTP_METHODS.DELETE}, options.timeout);
    };

    private static _request = (url: string, options: RequestOptions, timeout: number = 5000) => {
        const {method, data, formData, headers} = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(Http._isJSON(xhr.response) ? JSON.parse(xhr.response) : null);
                } else {
                    const response = Http._isJSON(xhr.response) ? JSON.parse(xhr.response) : xhr.response;
                    const errorText = response.hasOwnProperty('reason') ? response.reason : response;
                    reject(errorText);
                }
            };
            xhr.timeout = timeout;
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            xhr.withCredentials = true;

            if (headers) {
                Object.entries(headers).forEach(([k, v]) => {
                    xhr.setRequestHeader(k, v);
                });
            } else {
                xhr.setRequestHeader('content-type', 'application/json');
            }

            switch (method) {
                case HTTP_METHODS.GET:
                    xhr.send();
                    break;
                case HTTP_METHODS.POST:
                case HTTP_METHODS.PUT:
                case HTTP_METHODS.DELETE:
                    if (data || formData) {
                        const dataToSend = formData ? formData : JSON.stringify(data);
                        xhr.send(dataToSend);
                    } else {
                        xhr.send()
                    }
                    break;
            }

        })
    };

    private static _queryStringify(data: Data): string {
        return '?' + Object.entries(data).map(([k, v]) => `${k}=${Array.isArray(v) ? v.join(',') : v}`).join('&');
    }

    private static _isJSON(text: string) {
        return /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))
    }
}
