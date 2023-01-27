import React from 'react';
import { 
    VerticalTimeline, 
    VerticalTimelineElement 
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#c90076">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2019-2023"
                iconStyle={{background: "#c90076", color: "#fff"}}
                icon={<SchoolIcon />}
            >
            <h3 className="vertical-timeline-element-title"> University of Massachusetts - Boston </h3>
            <p> Computer Science (B.S.) </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{background: "#c90076", color: "#fff"}}
                icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title"> ALERT Innovation </h3>
            <p> Software Development Intern </p>
                </VerticalTimelineElement>               
                <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                date="2022"
                iconStyle={{background: "#c90076", color: "#fff"}}
                icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title"> GoDaddy </h3>
            <p> Software Engineering Intern </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                className="vertical-timeline-element--work"
                date="2023-present"
                iconStyle={{background: "#c90076", color: "#fff"}}
                icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title"> GoDaddy </h3>
            <p> Software Engineer I </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;