import React from 'react';
import { Redirect } from 'react-router';
import TimeInput from 'react-time-input';
import Swal from 'sweetalert2';
import qs from 'qs';
import axios from 'axios';

import BSR_APP from '../../config/constant';

class AddDeparture extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      is_done: false,
      list_bus: [],
      list_tempat: [],
      id_perusahaan: 1,
      id_asal: 1,
      id_tujuan: 1,
      berangkat: '00:00',
      sampai: '00:00'
    }

    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount(){
    axios.get(BSR_APP.url + '/api/bus')
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          list_bus: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Maaf, sedang terjadi kesalahan", "warning");
      console.log(error);
    });

    axios.get(BSR_APP.url + '/api/place')
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          list_tempat: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Maaf, sedang terjadi kesalahan", "warning");
      console.log(error);
    });
  }

  handleSave(e){
    e.preventDefault();

    const {
      id_perusahaan,
      id_tujuan,
      id_asal,
      berangkat,
      sampai } = this.state;

    const postData = qs.stringify({
      id_perusahaan,
      id_tujuan,
      id_asal,
      berangkat,
      sampai
    });

    axios.post(BSR_APP.url + '/api/add-departure',
      postData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    .then((response) => {
      if(response.data.status === 200){
        Swal({
          title: 'Berhasil',
          text: 'Jadwal keberangkatan berhasil ditambahkan',
          type: 'success',
        }).then(() => {
          this.setState({ is_done: true });
        });
      }
      else {
        Swal({
          title: 'Oops',
          text: 'Maaf, sedang terjadi kesalahan 1',
          type: 'warning',
        });
      }
    })
    .catch((error) => {
      Swal({
        title: 'Oops',
        text: 'Maaf, sedang terjadi kesalahan',
        type: 'warning',
      });
      console.log('error', error);
    });
  }

  render(){
    if(this.state.is_done)
      return <Redirect to="/departure" />

    return (
      <div>
        <h1>Tambah Jadwal Keberangkatan Bus</h1>
        <br/>

        <form onSubmit={this.handleSave} >
          <label htmlFor="perusahaan">Perusahaan</label><br/>
          <select onChange={(e) => this.setState({ id_perusahaan: e.target.value })}>
            {
              this.state.list_bus.map((el, i) => 
                <option key={i} value={el.id}>{el.nama}</option>
              )
            }
          </select><br/>

          <label htmlFor="asal">Asal</label>
          <select onChange={(e) => this.setState({ id_asal: e.target.value })}>
            {
              this.state.list_tempat.map((el, i) => 
                <option key={i} value={el.id}>{el.nama}</option>
              )
            }
          </select><br/>

          <label htmlFor="tujuan">Tujuan</label>
          <select onChange={(e) => this.setState({ id_tujuan: e.target.value })}>
            {
              this.state.list_tempat.map((el, i) => 
                <option key={i} value={el.id}>{el.nama}</option>
              )
            }
          </select><br/>

          <label htmlFor="berangkat">Jam Berangkat</label>
          <TimeInput
            initTime={this.state.berangkat}
            onTimeChange={(val) => this.setState({ berangkat: val })}
          />
          <br/>

          <label htmlFor="sampai">Jam Sampai</label>
          <TimeInput
            initTime={this.state.sampai}
            onTimeChange={(val) => this.setState({ sampai: val })}
          />
          <br/>

          <input type="submit" value="Simpan Jadwal" onClick={this.handleSave} />
        </form>
      </div>
    )
  }
}

export default AddDeparture;