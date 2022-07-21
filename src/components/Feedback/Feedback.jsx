import React from 'react';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map((arNum, key) => {
      return (
        <button
          key={key}
          type="button"
          name={arNum}
          value={arNum}
          onClick={onLeaveFeedback}
        >
          {arNum}
        </button>
      );
    })}
  </div>
);

export default Feedback;
