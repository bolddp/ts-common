export enum LogLevel {
  Debug = 'DEBUG',
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR'
}

export class Log {
  private module: string;
  private static logLevelIndex: { [key: string]: number } = {
    [LogLevel.Debug]: 0,
    [LogLevel.Info]: 1,
    [LogLevel.Warn]: 2,
    [LogLevel.Error]: 3
  }
  private static logLevel: number = 0;

  constructor(module: string) {
    this.module = module;
  }

  private static get5DigitTick(): string {
    return `00000${new Date().getTime() % 100000}`.slice(-5);
  }

  log(level: string, message: string) {
    if (Log.logLevelIndex[level] >= Log.logLevel) {
      console.log(`${Log.get5DigitTick()}: ${(level + '  ').substr(0, 5)} [${this.module}] : ${message}`);
    }
  }

  debug(message: string) {
    this.log(LogLevel.Debug, message);
  }

  info(message: string) {
    this.log(LogLevel.Info, message);
  }

  warn(message: string) {
    this.log(LogLevel.Warn, message);
  }

  error(message: string) {
    this.log(LogLevel.Error, message);
  }

  static logDb = (message: string) => {
    console.log(`${Log.get5DigitTick()}: ${(LogLevel.Debug + '  ').substr(0, 5)} [db] : ${message}`);
  }
}