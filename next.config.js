module.exports = {
  excludeFile: (str) => {
    console.log("str:", str);
    return /\*.{spec,test}.js/.test(str);
  },
};
