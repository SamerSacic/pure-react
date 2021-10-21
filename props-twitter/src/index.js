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
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
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
  return (
    <span className="reply-button">
      <i className="fa fa-reply" />
    </span>
  );
};

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet" />
      <Count count={count} />
    </span>
  );
};

// const LikeButton = ({ count }) => {
//   return (
//     <span className="like-button">
//       <i className="fa fa-heart" />
//       {count > 0 && <span className="like-count">{count}</span>}
//     </span>
//   );
// };

const LikeButton = ({ count }) => {
  return (
    <span className="like-button">
      <i className="fa fa-heart" />
      <span className="like-count">{count ? count : null}</span>
    </span>
  );
};

const MoreOptionsButton = () => {
  return (
    <span className="more-options-button">
      <i className="fa fa-ellipsis-h" />
    </span>
  );
};

const Count = ({ count }) => {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
};

const testTweet = {
  message: "Something about cats",
  gravatar: "960659496a1c48957034a4b72ffb5d5e?s=80",
  author: {
    handle: "samer",
    name: "Samer Sacic",
  },
  likes: 2,
  retweets: 7,
  timestamp: "2021-10-21 12:55:00",
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
