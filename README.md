# Sheetbase Testing

Tools for testing Sheetbase backend.

## Install

`npm install --save-dev @sheetbase/testing`

## Usage

```ts
// import testing browser
import { Browser } from '@sheetbase/testing';

// import app instance
import * as App from '../src/index';

// init a browser instance for the app
const browser = new Browser(App);

// begin test
describe('Home routes', () => {

    it('GET /', () => {
        const { body } = browser.get('/');
        expect(body).to.contain('Sheetbase Backend');
    });

    it('POST /', () => {
        const { body } = browser.post('/');
        expect(body.data).to.eql({ title: 'Sheetbase Backend' });
    });

});

```

## API

```ts
const browser = new Browser(App);

// GET /
const { body } = browser.get('/', { /* params */ });

// POST /xxx
const { body } = browser.post('/xxx', { /* params */ }, { /* body */ });

// PUT /
const { body } = browser.put('/', { /* params */ }, { /* body */ });

// PATCH /
const { body } = browser.patch('/', { /* params */ }, { /* body */ });

// DELETE /
const { body } = browser.delete('/', { /* params */ }, { /* body */ });

```

## License

This theme is released under the [MIT][license_url] license.

<!-- block:footer -->

[license_url]: https://github.com/sheetbase/testing/blob/master/LICENSE

<!-- /block:footer -->