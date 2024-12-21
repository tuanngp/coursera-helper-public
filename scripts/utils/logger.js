class Logger {
    static log(title, message) {
      console.log(`[${title}]: ${message}`);
    }
  
    static error(title, error) {
      console.error(`[${title}]: ${error}`);
    }
  }
  
  export default Logger;
  