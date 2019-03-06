export class Logger {

    constructor() {}

    log(msg: any) {
        return console.log(msg);
    }

}

// @ts-ignore
global.Logger = new Logger();