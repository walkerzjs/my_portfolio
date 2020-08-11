(() => {
  var currentTheme;

  function changeTheme(inputTheme) {
    console.log(
      "inputtheme: ",
      JSON.parse(inputTheme),
      typeof JSON.parse(inputTheme)
    );
    if (JSON.parse(inputTheme).mode === "dark") {
      console.log("change dark mode");
      const theme = themeConfig.dark;
      for (let key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    } else {
      const theme = themeConfig.light;
      for (let key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    }
  }

  function setCSSVar(property, color) {
    document.documentElement.style.setProperty(property, color);
  }
  try {
    currentTheme = localStorage.getItem("theme") || { mode: "light" };
    window.__theme = currentTheme.mode;
    console.log("current theme: ", currentTheme);
    var themeConfig = {
      dark: {
        "--white": "#000000",
        "--grey-1": "#000000",
        "--black": "#ffffff",
        "--grey-4": "#2e2e2e",
        "--red-origin": "#ff5f57",
        "--blue-2": "#2e2e2e",
      },
    };

    changeTheme(currentTheme);
    console.log(document.documentElement.style);
  } catch (err) {
    console.log(new Error("accessing theme has been denied"));
  }
})();
