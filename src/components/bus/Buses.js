import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import BSR_APP from '../../config/constant';

class Buses extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buses: []
    }
  }

  componentDidMount(){
    axios.get(BSR_APP.url + '/api/bus')
    .then((response) => {
      console.log(response);
      if(response.data.status === 200){
        this.setState({
          buses: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Maaf, sedang terjadi kesalahan", "warning");
      console.log(error);
    });
  }

  render(){
    return (
      <div>
        <h1>List Bus</h1>

        <Link to="/add-bus">Tambah Bus</Link>

        <ul>
          {
            this.state.buses.map((el, i) => (
              <li key={el.id}>{ el.nama }</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Buses;