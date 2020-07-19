import React from "react";
import HomePage from "../2_containers/Homepage/Homepage";
// import dynamic from "next/dynamic";
const Home = (props) => {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //       navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           // Registration was successful
  //           console.log(
  //             "ServiceWorker registration successful with scope: ",
  //             registration.scope
  //           );
  //         },
  //         function (err) {
  //           // registration failed :(
  //           console.log("ServiceWorker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, []);
  return <HomePage></HomePage>;
};

export default Home;

// test diable SSR
// const HomeNoSSR = dynamic(() => import("../2_containers/homepage/homepage"), {
//   ssr: false,
// });
// export default HomeNoSSR;

// test static generation
// export async function getServerSideProps() {
//   // Note that in this case we're returning the state directly, without creating
//   // the store first (like in /pages/ssr.js), this approach can be better and easier
//   return {
//     props: {},
//   };
// }
