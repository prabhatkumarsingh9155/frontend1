

const assert = require("assert");

const x = [
  {
    name: "john",
  },
];
const y = [
    {
      name: "john",
    },
  ];



// deepStrictEqual => code syntax data type,prop and     value                                  
assert.notDeepStrictEqual(x, y);
