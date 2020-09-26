const pin = {
  pin: {
    p: "rer",
    pin: {
      p: "//rer",
      test: "//ssss",
    },
  },
};
const re = /^\/\//;
const recursive = (obj) => {
  for (i in obj) {
    if (typeof obj[i] == "object") {
      recursive(obj[i]);
    } else {
      console.log(re.test(obj[i]) + " ");
    }
  }
};

recursive(pin);
