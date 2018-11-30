import React from 'react';

import {
  Button
} from "reactstrap";

class Try extends React.Component {
  render(){
    return (
      <div>
        <h1>Just Try</h1>
        <Button
          color="primary"
          onClick={() => alert("hello")}
        >
          Top Left
        </Button>
      </div>
    )
  }
}

export default Try;