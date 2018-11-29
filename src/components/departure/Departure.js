import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import BSR_APP from '../../config/constant';

class Departure extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      departures: []
    }
  }

  componentDidMount(){
    axios.get(BSR_APP.url + '/api/departure')
    .then((response) => {
      console.log(response.data);
      if(response.data.status === 200){
        this.setState({
          departures: response.data.data
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
        <h1>Jadwal Keberangkatan Bus</h1>
        <Link to="/add-departure">Tambah Jadwal Keberangkatan</Link><br/><br/>

        <table border="1" cellSpacing="0" cellPadding="5">
          <thead>
            <tr>
              <th>Perusahaan</th>
              <th>Asal</th>
              <th>Tujuan</th>
              <th>Jam Berangkat</th>
              <th>Jam Sampai</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.departures.map((el, i) => 
                <tr key={el.id}>
                  <td>{ el.nama_perusahaan }</td>
                  <td>{ el.nama_asal }</td>
                  <td>{ el.nama_tujuan }</td>
                  <td>{ el.berangkat }</td>
                  <td>{ el.sampai }</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Departure;