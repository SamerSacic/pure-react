const IncDecButton = ({ min, max, label, value, step = 1, onAction }) => {
  return (
    <div>
      <div className="d-flex align-items-baseline">
        <button
          className="decrement btn fs-4"
          onClick={() => onAction(value - parseInt(step))}
          disabled={value <= min || value <= 0}
        >
          <i className="fas fa-minus-circle text-dark decrement"></i>
        </button>
        <div className="text-center mx-2">
          <input
            className="form-control text-center border-0 fs-4"
            type="number"
            value={value ? value : 0}
            onChange={onAction}
          />
          <p className="text-uppercase text-dark">
            {label ? label : "Your label"}
          </p>
        </div>
        <button
          className="increment btn fs-4"
          onClick={() => onAction(value + parseInt(step))}
          disabled={value >= max || value >= 100}
        >
          <i className="fas fa-plus-circle text-dark increment"></i>
        </button>
      </div>
    </div>
  );
};

export default IncDecButton;
