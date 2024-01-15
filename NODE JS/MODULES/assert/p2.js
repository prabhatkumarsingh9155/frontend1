const assert = require("assert");

const x = [
  {
    name: "john",
  },
];

const y = {
  name: "raju",
};


// deepStrictEqual => code syntax data type,prop and     value                                  
assert.deepStrictEqual(x, y);
