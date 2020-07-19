// module.exports = {
//   excludeFile: (str) => {
//     return /\*.{spec,test}.js/.test(str);
//   },
// };

// const withOffline = require("next-offline");

// module.exports = withOffline();

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  excludeFile: (str) => {
    return /\*.{spec,test}.js/.test(str);
  },
});
