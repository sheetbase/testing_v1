export class SpreadsheetApp {

    constructor() {}

    getActive() {
        return new Spreadsheet();
    }

    openById(id: string) {
        return new Spreadsheet();
    }

}

export class Spreadsheet {

    constructor() {}

    getSheets() {
        return [new Sheet()];
    }

    getActiveSheet() {
        return new Sheet();
    }

    getSheetByName(name: string) {
        return new Sheet();
    }

    getActiveRange() {
        return new Range();
    }

    getRange(notation: string) {
        return new Range();
    }

}

export class Sheet {

    constructor() {}

    getLastColumn() {
        return 0;
    }

    getLastRow() {
        return 0;
    }

}

export class Range {

    constructor() {}

    getValues() {
        return [[]];
    }

    setValues(values: any[]) {
        return values;
    }

}

// @ts-ignore
global.SpreadsheetApp = new SpreadsheetApp();