import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less then 140 characters</div>;
}

function Author() {
  return (
    <span className="author">
      <span className="name">John Doe</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => {
  return <span className="time">3h ago</span>;
};

const ReplyButton = () => {
  return <i className="fa fa-reply replay-button" />;
};

const RetweetButton = () => {
  return <i className="fa fa-retweet retweet-button" />;
};

const LikeButton = () => {
  return <i className="fa fa-heart like-button" />;
};

const MoreOptionsButton = () => {
  return <i className="fa fa-ellipsis-h more-options-button" />;
};

ReactDOM.render(<Tweet />, document.querySelector("#root"));
