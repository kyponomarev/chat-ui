var HTTP_METHODS;
(function (HTTP_METHODS) {
    HTTP_METHODS["GET"] = "GET";
    HTTP_METHODS["POST"] = "POST";
    HTTP_METHODS["PUT"] = "PUT";
    HTTP_METHODS["DELETE"] = "DELETE";
})(HTTP_METHODS || (HTTP_METHODS = {}));
export class Http {
    static _queryStringify(data) {
        return '?' + Object.entries(data).map(([k, v]) => `${k}=${Array.isArray(v) ? v.join(',') : v}`).join('&');
    }
    static _isJSON(text) {
        return /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
    }
}
Http.methods = HTTP_METHODS;
// TODO add generic
Http.get = (url, options) => {
    return Http._request(
    // @ts-ignore
    options.data ? url + Http._queryStringify(options.data) : url, {
        ...options,
        method: Http.methods.GET
    }, options.timeout || 5000);
};
Http.post = (url, options) => {
    return Http._request(url, { ...options, method: HTTP_METHODS.POST }, options.timeout);
};
Http.put = (url, options) => {
    return Http._request(url, { ...options, method: HTTP_METHODS.PUT }, options.timeout);
};
Http.delete = (url, options) => {
    return Http._request(url, { ...options, method: HTTP_METHODS.DELETE }, options.timeout);
};
Http._request = (url, options, timeout = 5000) => {
    const { method, data, formData, headers } = options;
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(Http._isJSON(xhr.response) ? JSON.parse(xhr.response) : null);
            }
            else {
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
        }
        else {
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
                    console.log(data);
                    const dataToSend = formData ? formData : JSON.stringify(data);
                    console.log(dataToSend);
                    xhr.send(dataToSend);
                }
                else {
                    xhr.send();
                }
                break;
        }
    });
};
//# sourceMappingURL=http.js.map