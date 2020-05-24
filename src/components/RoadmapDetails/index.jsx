import React from "react";
import "./styles.css";
import ContentPreviewCard from "../ContentPreviewCard";

function RoadmapDetails(props) {
  return (
    <div className="roadmap-details-component">
      <ContentPreviewCard type="roadmap" {...props} />
    </div>
  );
}

export default RoadmapDetails;
