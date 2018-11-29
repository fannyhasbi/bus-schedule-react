import React from 'react';
import { Link } from 'react-router-dom';

class Arrival extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      arrivals: [
        {
          id: 1,
          perusahaan: 'Subur Jaya',
          asal: 'Tegal',
          tujuan: 'Semarang',
          berangkat: '13.00',
          datang: '16.00'
        },
        {
          id: 2,
          perusahaan: 'Nusantara',
          asal: 'Pekalongan',
          tujuan: 'Semarang',
          berangkat: '14.00',
          datang: '16.00'
        },
        {
          id: 3,
          perusahaan: 'Nusantara',
          asal: 'Pekalongan',
          tujuan: 'Semarang',
          berangkat: '15.00',
          datang: '17.00'
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <h1>Jadwal Kedatangan Bus</h1>

        <Link to="/add-arrival">Tambah Jadwal Kedatangan</Link>
        <br /><br />

        <table border="1" cellSpacing="0" cellPadding="5">
          <thead>
            <tr>
              <th>Perusahaan</th>
              <th>Asal</th>
              <th>Tujuan</th>
              <th>Jam Keberangkatan</th>
              <th>Jam Kedatangan</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.arrivals.map((el, i) => 
                <tr key={el.id}>
                  <td>{ el.perusahaan }</td>
                  <td>{ el.asal }</td>
                  <td>{ el.tujuan }</td>
                  <td>{ el.berangkat }</td>
                  <td>{ el.datang }</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Arrival;