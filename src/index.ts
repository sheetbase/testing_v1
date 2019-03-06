import './mocks/base';
import './mocks/content';
import './mocks/html';
import './mocks/spreadsheet';

export class Browser {

    private HTTP: any;

    constructor(app: any) {
        this.HTTP = app.Sheetbase.HTTP;
    }

    get(endpoint = '', query: {} = {}) {
        return this.HTTP.get(this.httpEvent(endpoint, query));
    }

    post(endpoint = '', query: {} = {}, body: {} = {}) {
        return this.HTTP.post(this.httpEvent(endpoint, query, body));
    }

    put(endpoint = '', query: {} = {}, body: {} = {}) {
        return this.post(endpoint, { ... query, method: 'PUT' }, body);
    }

    patch(endpoint = '', query: {} = {}, body: {} = {}) {
        return this.post(endpoint, { ... query, method: 'PATCH' }, body);
    }

    delete(endpoint = '', query: {} = {}, body: {} = {}) {
        return this.post(endpoint, { ... query, method: 'DELETE' }, body);
    }

    private httpEvent(endpoint = '', query: {} = {}, body: {} = {}) {
        return {
            parameter: { ... query, e: endpoint},
            postData: {
                contents: !!body ? JSON.stringify(body) : '{}',
            },
        };
    }

}