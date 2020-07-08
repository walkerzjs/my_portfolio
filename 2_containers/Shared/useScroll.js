import { useEffect } from "react";

const useScroll = (elementId) => {
  let element = null;
  useEffect(() => {
    element = document.getElementById(elementId);
  });

  const onClick = () => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - 62,
    });
  };
  return onClick;
};

export default useScroll;
