import React from "react";
import "../styles/Card.scss";

const UserCard = props => {
  return (
    <div className="card">
      <img className="card__avatar" alt="avatar" src={props.avatar_url} />
      <div>
        <div className="card__title">{props.name}</div>
        <div className="card__details">
          <a href="{props.blog}">{props.blog}</a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
