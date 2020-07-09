module.exports = {
  excludeFile: (str) => {
    return /\*.{spec,test}.js/.test(str);
  },
};
