import React from "react";
import "./NewsItem.css";

//as per our design we are passing title, description and image as props
function NewsItem({ title, description, image, url }) {
  return (
    <div className="news-item">
      <a href={url}>
        <img className="news-image" src={image} alt="" />
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </a>
    </div>
  );
}

export default NewsItem;
