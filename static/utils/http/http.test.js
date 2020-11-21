import { Http } from "./http.js";
let baseUrl = process.env.testServerUrl || 'http://localhost:3001';
describe('utils/http', () => {
    it('should send requests by GET method', async () => {
        const res = await Http.get(baseUrl, { data: { hello: 'world' } });
        expect(res).toEqual({ hello: 'world' });
    });
    it('should send requests by POST method', async () => {
        const res = await Http.post(baseUrl, { data: { hello: 'world' } });
        expect(res).toEqual({ hello: 'world' });
    });
    it('should send requests by PUT method', async () => {
        const res = await Http.put(baseUrl, { data: { hello: 'world' } });
        expect(res).toEqual({ hello: 'world' });
    });
    it('should send requests by DELETE method', async () => {
        const res = await Http.delete(baseUrl, { data: { hello: 'world' } });
        expect(res).toEqual({ hello: 'world' });
    });
    it('should send requests by DELETE method', async () => {
        const res = await Http.delete(baseUrl, { data: { hello: 'world' } });
        expect(res).toEqual({ hello: 'world' });
    });
    it('should handle body on server error during the GET method request', async () => {
        const res = await Http.get(baseUrl + '/404', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual({ error: 'error text' });
    });
    it('should handle body on server error during the POST method request', async () => {
        const res = await Http.post(baseUrl + '/404', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual({ error: 'error text' });
    });
    it('should handle body on server error during the PUT method request', async () => {
        const res = await Http.put(baseUrl + '/404', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual({ error: 'error text' });
    });
    it('should handle body on server error during the DELETE method request', async () => {
        const res = await Http.delete(baseUrl + '/404', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual({ error: 'error text' });
    });
    it('should rejected on network error during the GET request', async () => {
        const res = await Http.get('_____fake_____', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual(expect.anything());
    });
    it('should rejected on network error during the POST request', async () => {
        const res = await Http.post('_____fake_____', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual(expect.anything());
    });
    it('should rejected on network error during the PUT request', async () => {
        const res = await Http.put('_____fake_____', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual(expect.anything());
    });
    it('should rejected on network error during the DELETE request', async () => {
        const res = await Http.delete('_____fake_____', { data: { hello: 'world' } })
            .catch(error => error);
        expect(res).toEqual(expect.anything());
    });
    it('should send requests with custom headers by GET method', async () => {
        const res = await Http.get(baseUrl + '/headers', { data: {}, headers: { 'custom-header': 'hello world' } })
            .catch(error => error);
        expect(res['custom-header']).toEqual('hello world');
    });
    it('should send requests with custom headers by POST method', async () => {
        const res = await Http.post(baseUrl + '/headers', { data: {}, headers: { 'custom-header': 'hello world' } })
            .catch(error => error);
        expect(res['custom-header']).toEqual('hello world');
    });
    it('should send requests with custom headers by PUT method', async () => {
        const res = await Http.put(baseUrl + '/headers', { data: {}, headers: { 'custom-header': 'hello world' } })
            .catch(error => error);
        expect(res['custom-header']).toEqual('hello world');
    });
    it('should send requests with custom headers by DELETE method', async () => {
        const res = await Http.delete(baseUrl + '/headers', { data: {}, headers: { 'custom-header': 'hello world' } })
            .catch(error => error);
        expect(res['custom-header']).toEqual('hello world');
    });
});
//# sourceMappingURL=http.test.js.map