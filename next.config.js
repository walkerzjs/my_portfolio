const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
  },
  excludeFile: (str) => {
    return /\*.{spec,test}.js/.test(str);
  },
});

// module.exports = {
//   excludeFile: (str) => {
//     return /\*.{spec,test}.js/.test(str);
//   },
// };
