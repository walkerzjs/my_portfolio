const initialState = {
  1: {
    image: "image1",
    title: "My portfolio",
    desc: "This is my personal website to show my recent work and personality.",
    githubLink: "",
    website: "https://my-portfoliojsz.com/",
  },
  2: {
    image: "image2",
    title: "Learning Management System",
    desc: "A system for course and student enrolment.",
    githubLink: "aaa",
    website: "bbb",
  },
  3: {
    image: "image3",
    title: "Burger Builder",
    desc: "A project made following the course: React-The Complete Guide",
    githubLink: "",
    website: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
