const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age }),
  throwErr: () => {
    throw new Error("error");
  },
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age);
      }, 3000);
    });
  },
  getAgeErr: () => {
    const age = 30;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("error");
      }, 3000);
    });
  },
};

module.exports = fn;
