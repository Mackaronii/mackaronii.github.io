import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from '../ProjectCard/ProjectCard';
import './style.css';
import projects from './project-exports';

class Projects extends React.Component {
    render() {
        return(
            <Container id='projects' fluid>
                <Container>
                    { /* Create a Row for every 3 projects */ }
                    {Array(Math.ceil(projects.length / 3)).fill().map((_, i) =>
                        <Row key={i}>

                            { /* Create 3 Cols, each containing a ProjectCard */ }
                            {projects.slice(i * 3, i * 3 + 3).map((project, k) =>
                                <Col xs={12} sm={6} lg={4}>
                                    <ProjectCard key={k} project={project}/>
                                </Col>
                            )}
                        </Row>
                    )}
                </Container>
            </Container>
        );
    }
}

export default Projects;