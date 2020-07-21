const initialState = {
  1: {
    image: "/myPortfolio.jpg",
    title: "My portfolio",
    desc: "This is my personal website to show my recent work and personality.",
    githubLink: "https://github.com/walkerzjs/my_portfolio",
    website: "https://my-portfoliojsz.com/",
  },
  2: {
    image: "/burgerBuilder.jpg",
    title: "Burger Builder",
    desc: [
      "A project made following the course: ",
      <a
        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
        key="courseReference"
      >
        React-The Complete Guide
      </a>,
    ],
    githubLink: "",
    website: "https://react-my-burger-2ef30.firebaseapp.com/",
  },
  3: {
    image: "/lms.jpg",
    title: "Learning Management System",
    desc: "A system for course and student enrolment.",
    githubLink: "https://github.com/walkerzjs/LMS_Frontend",
    website: "https://lms-jz.azurewebsites.net/",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
