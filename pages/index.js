import React from "react";
import HomePage from "../2_containers/Homepage/Homepage";
const Home = (props) => {
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
