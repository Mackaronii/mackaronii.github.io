import React from 'react';
import Container from 'react-bootstrap/Container';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css';
import Icon from './Icon';
import timelineItems from './timeline-exports';
import Button from 'react-bootstrap/Button';

function Timeline() {
    return(
        <Container id="work" fluid>
            <VerticalTimeline>

            { /* Create a VerticalTimelineElement for each item in timelineItems */ }
            {timelineItems.map((item, i) =>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FFF', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FFF' }}
                    date={item.date}
                    iconStyle={{ background: '#FFF' }}
                    icon={<Icon icon={item.icon}/>}>
                    <h3 className="vertical-timeline-element-title">{item.position}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.employer}</h4>
                    <ul>
                        { /* Create an <li> for each job item in jobItems */ }
                        {item.jobItems.map((jobItem, j) => <li>{jobItem}</li>)}
                    </ul>
                    <Button variant="outline-dark" href={item.employerSite} target="_blank">Visit {item.employer}</Button>
                </VerticalTimelineElement>
            )}
            </VerticalTimeline>
        </Container>
    );
}

export default Timeline;