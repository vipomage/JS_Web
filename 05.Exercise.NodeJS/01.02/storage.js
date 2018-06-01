const fs = require("fs");
let storage = {};

module.exports = {
  put: (key, val) => {
    if (typeof key === "string") {
      if (!storage.hasOwnProperty(key)) {
        storage[key] = val;
      } else {
        throw new Error("Key already exists");
      }
    } else {
      throw new Error("Key must be string type");
    }
  },
  get: key => {
    if (typeof key === "string") {
      if (storage.hasOwnProperty(key)) {
        return storage[key];
      } else {
        throw new Error("Key does not exist");
      }
    } else {
      throw new Error("Key must be string type");
    }
  },
  getAll: () => {
    if (Object.keys(storage).length !== 0) {
      return storage;
    } else {
      return "There are no items in the storage";
    }
  },
  update: (key, newVal) => {
    if (typeof key === "string") {
      if (storage.hasOwnProperty(key)) {
        storage[key] = newVal;
      } else {
        throw new Error("Key does not exist");
      }
    } else {
      throw new Error("Key must be string type");
    }
  },
  delete: key => {
    if (typeof key === "string") {
      if (storage.hasOwnProperty(key)) {
        delete storage[key];
      } else {
        throw new Error("Key does not exist");
      }
    } else {
      throw new Error("Key must be a string type");
    }
  },
  clear: () => {
    storage = {};
  },
  save: () => {
    fs.writeFileSync("storage.json", JSON.stringify(storage), "utf8");
  },
  load: () => {
    if (fs.existsSync("storage.json")) {
      let data = fs.readFileSync("storage.json", "utf8");
      storage = JSON.parse(data);
    }
  },
  loadAsync: () => {
    
    return new Promise((resolve, reject) => {
      if (fs.existsSync("storage.json")) {
        let data = fs.readFile("storage.json", "utf8", (err, data) => {
          if (err) {
            reject(err);
            console.dir(err);
          }
          storage = JSON.parse(data);
          resolve();
        });
      }
      resolve();
    });
  }
};
