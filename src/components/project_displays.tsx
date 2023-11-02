import React from "react";

const ProjectDisplays: React.FC = () => {
  return (
    <div id="SquareProjectDisplay">
      <img
        className="TurtleProject"
        src="http://picsum.photos/id/584/300/600"
        alt="Turtle Project"
      />
      <img
        className="FoodsProject"
        src="https://picsum.photos/id/237/300/600"
        alt="Foods Project"
      />
      <img
        className="ProjectsProject"
        src="https://picsum.photos/id/324/300/600"
        alt="Projects Project"
      />
    </div>
  );
};
export default ProjectDisplays;
