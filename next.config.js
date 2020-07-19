// module.exports = {
//   excludeFile: (str) => {
//     return /\*.{spec,test}.js/.test(str);
//   },
// };
const withOffline = require("next-offline");

module.exports = withOffline();
// const withOffline = require("next-offline");
// console.log("running next.config.js");
// module.exports = withOffline({
//   workboxOpts: {
//     swDest: process.env.NEXT_EXPORT
//       ? "service-worker.js"
//       : "static/service-worker.js",
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: "NetworkFirst",
//         options: {
//           cacheName: "offlineCache",
//           expiration: {
//             maxEntries: 200,
//           },
//         },
//       },
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/service-worker.js",
//         destination: "/_next/static/service-worker.js",
//       },
//     ];
//   },
// });
