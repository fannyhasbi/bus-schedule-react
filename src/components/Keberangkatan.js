import React from 'react';

class Keberangkatan extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      departures: [
        {
          id: 1,
          perusahaan: 'Sinar Jaya',
          asal: 'Semarang',
          tujuan: 'Tegal',
          berangkat: '15.00',
          sampai: '18.00'
        },
        {
          id: 2,
          perusahaan: 'Sinar Jaya',
          asal: 'Semarang',
          tujuan: 'Tegal',
          berangkat: '16.00',
          sampai: '19.00'
        },
        {
          id: 3,
          perusahaan: 'Nusantara',
          asal: 'Semarang',
          tujuan: 'Pekalongan',
          berangkat: '16.00',
          sampai: '18.00'
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <h1>Jadwal Keberangkatan Bus</h1>

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
                <tr>
                  <td>{ el.perusahaan }</td>
                  <td>{ el.asal }</td>
                  <td>{ el.tujuan }</td>
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

export default Keberangkatan;