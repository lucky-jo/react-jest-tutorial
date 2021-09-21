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
  connectUserDb: () => {
    return new Promise((resolve, reject) => {
      const user = {
        name: "Mike",
        age: 30,
        gender: "male",
      };
      setTimeout(() => {
        resolve(user);
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((resolve, reject) => {
      resolve();
    }, 500);
  },
  connectCarDb: () => {
    return new Promise((resolve, reject) => {
      const car = {
        brend: "BMW",
        name: "z4",
        color: "red",
      };
      setTimeout(() => {
        resolve(car);
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((resolve, reject) => {
      resolve();
    }, 500);
  },
};

module.exports = fn;
