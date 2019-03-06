import { readFileSync } from 'fs';

export class ContentService {

    MimeType = { JSON: 'JSON' };

    constructor() {}

    createTextOutput(content: string) {
        return new TextOutput(content);
    }

    createTemplateFromFile(path: string) {
        return readFileSync(path, 'utf8');
    }

}

export class TextOutput {

    body: any;

    constructor(content: string) {
        this.body = content;
    }

    setMimeType(type: string) {
        if (type === 'JSON') {
            this.body = JSON.parse(this.body);
        }
    }

}

// @ts-ignore
global.ContentService = new ContentService();