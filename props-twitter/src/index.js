import moment from "moment";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
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

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeToString = moment(time).fromNow();
  return <span className="time">{timeToString}</span>;
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

const testTweet = {
  message: "Something about cats",
  gravatar: "960659496a1c48957034a4b72ffb5d5e?s=80",
  author: {
    handle: "samer",
    name: "Samer Sacic",
  },
  likes: 2,
  retweets: 0,
  timestamp: "2021-10-21 12:55:00",
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
