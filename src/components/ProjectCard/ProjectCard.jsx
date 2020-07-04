import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css";

function ProjectCard(props) {
  const cardStyle = {
    minWidth: "100%",
  };

  return (
    <Card
      style={cardStyle}
      border="dark"
      className="h-100 wow fadeInUp"
      data-wow-delay="0.5s"
    >
      <Card.Img variant="top" src={props.project.image} />
      <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
        <Card.Text>{props.project.description}</Card.Text>
        {props.project.liveLink && (
          <Button
            variant="outline-dark"
            href={props.project.liveLink}
            target="_blank"
          >
            Visit Website
          </Button>
        )}
        <Button
          variant="outline-dark"
          href={props.project.githubLink}
          target="_blank"
        >
          View Source Code
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
