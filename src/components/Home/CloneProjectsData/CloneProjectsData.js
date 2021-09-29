import React from "react";
import CloneProjects from "../CloneProjects/CloneProjects";
import hulu from "../../../images/hulu.PNG";
import airbnb from "../../../images/airbnb.png";
import dashboard from "../../../images/dashboard.PNG";
const CloneProjectsData = () => {
  const fakeData = [
    {
      id: 1,
      name: "Bioskop Streaming",
      img: hulu,
      tech1: "Tailwind CSS",
      tech2: "Next JS",
      tech3: "Rest API",
      codeLink: "https://github.com/ronybarua-ethical18/bioskop-streaming",
      livesite: "https://bioskop-streaming.vercel.app/",
    },
    {
      id: 2,
      name: "Airbnb next app",
      tech1: "Tailwind CSS",
      tech2: "Next JS",
      tech3: "Google Map",
      img: airbnb,
      codeLink: "https://github.com/ronybarua-ethical18/airbnb-next-app",
      livesite:
        "https://airbnb-next-app-8xaw7dhbl-ronybarua-ethical18.vercel.app/",
    },
    {
      id: 3,
      name: "Admin Dashboard",
      img: dashboard,
      tech1: "React JS",
      tech2: "Material UI",
      tech3: "React Router",
      codeLink:
        "https://github.com/ronybarua-ethical18/react-admin-dashboard",
      livesite: "https://xenodochial-brown-257974.netlify.app/",
    },
  ];
  console.log(fakeData)
  return (
    <div className="main-container common-margin">
      <div className="row no-gutters">
        <div className="col-md-10 offset-md-1 px-3">
          <h3 className="heading">Practice Projects</h3>
          <div className="row">
               {fakeData.map(project => (
               <CloneProjects key={project.id} project={project}/>
               ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloneProjectsData;
