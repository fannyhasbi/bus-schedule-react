import React from 'react';
import { Link } from 'react-router-dom';

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

        <Link to="/add-bus">Tambah Bus</Link>

        <ul>
          {
            this.state.buses.map((el, i) => (
              <li key={el.id}>{ el.perusahaan }</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Buses;