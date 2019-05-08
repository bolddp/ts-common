"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel["Debug"] = "DEBUG";
    LogLevel["Info"] = "INFO";
    LogLevel["Warn"] = "WARN";
    LogLevel["Error"] = "ERROR";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Log {
    constructor(module) {
        this.module = module;
    }
    static get5DigitTick() {
        return `00000${new Date().getTime() % 100000}`.slice(-5);
    }
    log(level, message) {
        if (Log.logLevelIndex[level] >= Log.logLevel) {
            console.log(`${Log.get5DigitTick()}: ${(level + '  ').substr(0, 5)} [${this.module}] : ${message}`);
        }
    }
    debug(message) {
        this.log(LogLevel.Debug, message);
    }
    info(message) {
        this.log(LogLevel.Info, message);
    }
    warn(message) {
        this.log(LogLevel.Warn, message);
    }
    error(message) {
        this.log(LogLevel.Error, message);
    }
}
Log.logLevelIndex = {
    [LogLevel.Debug]: 0,
    [LogLevel.Info]: 1,
    [LogLevel.Warn]: 2,
    [LogLevel.Error]: 3
};
Log.logLevel = 0;
Log.logDb = (message) => {
    console.log(`${Log.get5DigitTick()}: ${(LogLevel.Debug + '  ').substr(0, 5)} [db] : ${message}`);
};
exports.Log = Log;
