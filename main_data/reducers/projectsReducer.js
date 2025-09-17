const initialState = {
  1: {
    image: "/lms.jpg",
    title: "Learning Management System",
    desc: "A system for course and student enrolment.",
    githubLink: "https://github.com/walkerzjs/LMS_Frontend",
    website: "https://github.com/walkerzjs/LMS_Frontend",
    Technologies: "React, Redux, Azure, SQL Server, .NET Framework, .NET core",
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
    website: "https://www.jacob-portfolio.com/",
    Technologies: "React, Redux, Jest, AWS",
  },
  4: {
    image: "/CatOrBird.jpeg",
    title: "CatOrBird",
    desc: "It can tell a cat from a bird.",
    githubLink: "https://github.com/walkerzjs/CatOrBirdF",
    website: "https://github.com/walkerzjs/CatOrBirdF",
    Technologies: "React, Python, Machine Learning",
  },
  5: {
    image: "/AsADream.jpeg",
    title: "AsADream",
    desc: "My personal blog",
    githubLink: "https://github.com/walkerzjs/AsADream",
    website: "https://www.blog.jacob-portfolio.com",
    Technologies: "React, Redux, Graphql, AWS",
  },

  6: {
    image: "/data_analysis_free_image_unsplash_Markus_Winkler.jpg",
    title: "Bike sharing data analysis",
    desc: "Google data analytics certification case study 1",
    githubLink: "",
    website: "https://www.kaggle.com/code/jacobseater/google-data-analytics-case-study-1-bike-sharing",
    Technologies: "R, Rmarkdown, tidyverse",
  },
  7: {
    image: "/data_analysis_free_image_unsplash_Markus_Winkler.jpg",
    title: "Bellabeat tracker case study using R",
    desc: "Google data analytics certification case study 2 bellabeat",
    githubLink: "",
    website: "https://www.kaggle.com/code/jacobseater/bellabeat-tracker-case-study",
    Technologies: "R, Rmarkdown, tidyverse",
  },
  8: {
    image: "/data_analysis_free_image_unsplash_Markus_Winkler.jpg",
    title: "Bellabeat tracker case study using Python",
    desc: "Google data analytics certification case study 2 bellabeat with Python",
    githubLink: "",
    website: "https://www.kaggle.com/code/jacobseater/bellabeat-tracker-case-study-python",
    Technologies: "Python, Seaborn, Pandas",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
