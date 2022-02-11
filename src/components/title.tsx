import { useState } from "react";
import Video from "../assets/videos/video.mp4";

const Title = () => {
  return (
    <div className="background">
      title
      <video src={Video} controls />
    </div>
  );
};

export default Title;
