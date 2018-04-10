import React from 'react';
import { Progress } from 'reactstrap';

const ProgressTracker = (props) => {
  return (
    <div>
      <Progress striped color="danger" value={props.indexValue} />
    </div>
  );
};

export default ProgressTracker;
