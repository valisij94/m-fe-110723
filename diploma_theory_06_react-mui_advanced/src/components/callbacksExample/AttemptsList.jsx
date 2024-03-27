import React, {memo} from "react";

const AttemptsList = ({ attempts, dropAttempt }) => {

    return (attempts && attempts.length > 0) ? attempts.map((item) => {
      return <div key={item.id} onClick={ () => dropAttempt(item.id) }>{`${item.attemptData} ${item.id}`}</div>;
    }) : <p>Empty Attempts List!</p>;
  };

  // Mark component as Pure
  export default memo(AttemptsList);