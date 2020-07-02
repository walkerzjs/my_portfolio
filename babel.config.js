module.exports = {
  // https://github.com/babel/babel/issues/9849
  presets: ["@babel/preset-env", "@babel/react", "next/babel"],
  // https://github.com/MarchWorks/nextjs-with-material-ui-and-styled-components
  plugins: [
    "@babel/plugin-transform-runtime",
    ["babel-plugin-styled-components", { ssr: true }],
  ],
  // https://levelup.gitconnected.com/configuring-jest-for-next-js-react-and-babel-from-scratch-bb3b7751329b
  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/react", "next/babel"],
    },
    development: {
      presets: ["next/babel"],
    },
    // https://babeljs.io/docs/en/6.26.3/babelrc
    production: {
      presets: ["@babel/preset-env", "@babel/react", "next/babel"],
    },
  },
};
