import React from 'react';

class Buses extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buses: [
        {
          id: 1,
          perusahaan: 'Sinar Jaya'
        },
        {
          id: 2,
          perusahaan: 'Nusantara'
        },
        {
          id: 3,
          perusahaan: 'Subur Jaya'
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <h1>List Bus</h1>

        <ul>
          {
            this.state.buses.map((el, i) => (
              <li>{ el.perusahaan }</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Buses;