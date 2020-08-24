const initialState = {
  1: {
    image: "/lms.jpg",
    title: "Learning Management System",
    desc: "A system for course and student enrolment.",
    githubLink: "https://github.com/walkerzjs/LMS_Frontend",
    website: "https://lms-jz.azurewebsites.net/",
    Technologies:
      "React, Redux, Azure, AWS, SQL Server, .NET Framework, .NET core",
  },
  // 2: {
  //   image: "/burgerBuilder.jpg",
  //   title: "Burger Builder",
  //   desc: [
  //     "A project made following the course: ",
  //     <a
  //       href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
  //       key="courseReference"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       React-The Complete Guide
  //     </a>,
  //   ],
  //   githubLink: "https://github.com/walkerzjs/Burger_Builder",
  //   website: "https://react-my-burger-2ef30.firebaseapp.com/",
  //   Technologies: "React, Redux",
  // },
  3: {
    image: "/myPortfolio.jpg",
    title: "Portfolio website",
    desc: "My personal website.",
    githubLink: "https://github.com/walkerzjs/my-portfolioJSZ",
    website: "https://my-portfoliojsz.com/",
    Technologies: "React, Redux, Jest, AWS",
  },
  4: {
    image: "/AsADream.jpeg",
    title: "AsADream",
    desc: "My personal blog",
    githubLink: "https://github.com/walkerzjs/AsADream",
    website: "https://asadream.my-portfoliojsz.com/",
    Technologies: "React, Redux, Graphql, AWS",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
