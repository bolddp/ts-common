export declare enum LogLevel {
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}
export declare class Log {
    private module;
    private static logLevelIndex;
    private static logLevel;
    constructor(module: string);
    private static get5DigitTick;
    log(level: string, message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    static logDb: (message: string) => void;
}
