import React, {memo} from "react";

const AttemptsList = ({ attempts, dropAttempt }) => {
  console.log('Render AttemptsList')
    return attempts.map((item) => {
      return <div key={item.id} onClick={ () => dropAttempt(item.id) }>{`${item.attemptData} ${item.id}`}</div>;
    });
  };

  // Mark component as Pure
  export default memo(AttemptsList);