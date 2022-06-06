import React from "react";

function Content(props) {
  return (
    <div>
      <p>
        {props.props.part1} {props.props.exercises1}
      </p>
      <p>
        {props.props.part2} {props.props.exercises2}
      </p>
      <p>
        {props.props.part3} {props.props.exercises3}
      </p>
    </div>
  );
}

export default Content;
