class Storage {
    static save(key, value) {
      return new Promise((resolve) => {
        chrome.storage.sync.set({ [key]: value }, resolve);
      });
    }
  
    static get(key) {
      return new Promise((resolve) => {
        chrome.storage.sync.get(key, (result) => resolve(result[key]));
      });
    }
  }
  
  export default Storage;
  