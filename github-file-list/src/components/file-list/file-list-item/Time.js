import moment from "moment";

const Time = ({ time }) => {
  const timeToString = moment(time).fromNow();
  return (
    <div>
      <p className="m-0 text-end">{timeToString}</p>
    </div>
  );
};

export default Time;
