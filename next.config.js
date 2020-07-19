// module.exports = {
//   excludeFile: (str) => {
//     return /\*.{spec,test}.js/.test(str);
//   },
// };

const withOffline = require("next-offline");

module.exports = withOffline();
