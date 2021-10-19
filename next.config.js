// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//   },
//   excludeFile: (str) => {
//     return /\*.{spec,test}.js/.test(str);
//   },
// });

module.exports = {
  excludeFile: (str) => {
    return /\*.{spec,test}.js/.test(str);
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'Set-Cookie',
  //           value: 'Cookie = This is a cookie;SameSite=None; Secure',
  //         },
  //         {
  //           key: 'x-another-custom-header',
  //           value: 'my other custom header value',
  //         },
  //       ],
  //     },
  //   ]
  // },
};
