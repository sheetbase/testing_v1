export class HtmlService {

    constructor() {}

    createHtmlOutput(html: string) {
        return new HtmlOutput(html);
    }

}

export class HtmlOutput {

    body: string;

    constructor(content: string) {
        this.body = content;
    }

}

// @ts-ignore
global.HtmlService = new HtmlService();