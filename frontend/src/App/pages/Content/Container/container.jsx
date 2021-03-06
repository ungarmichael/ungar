import "./Container.scss";
import Aos from "aos";
import { useSpring, animated as a } from "react-spring";
import React, { useState, useRef, useCallback,useEffect } from "react";
import useOnScreen from "../../../utils/useOnScreen.jsx";
import { useHistory } from "react-router-dom";

const Container = (props) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [hoverStatus, setHoverStatus] = useState(false);
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? "10px" : "-500px",
  })
  const history = useHistory();
  const onClick = useCallback(() => {
    const to = `/content/${props.Route}`;
    history.push(to);
  }, [props.Route, history]);

  const backgroundSpring = useSpring(
    {
      backgroundColor: !hoverStatus ? "#FFFFFF" : "#000000"
    }
  );
  
  return (
    <a.div
      ref={ref}
      style={springProps}
      className="ug-container"
      onClick={onClick}
      onMouseEnter={() => setHoverStatus(true)}
      onMouseLeave={() => setHoverStatus(false)}
    >
      {/* <Link className="ug-container-link" to={`/content/${props.heading}`}> */}
      <div className="ug-container-heading">{props.Name}</div>
      <div className="ug-container-small_description">{props.Description}</div>
      {/* </Link> */}
    </a.div>
  );
};

export default Container;
