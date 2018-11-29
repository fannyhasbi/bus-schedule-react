import React from 'react';
import { Redirect } from 'react-router';
import TimeInput from 'react-time-input';
import Swal from 'sweetalert2';

class AddDeparture extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      is_done: false,
      id_perusahaan: 1,
      perusahaan: 'Sinar Jaya',
      asal: 'Semarang',
      tujuan: 'Tegal',
      berangkat: '15:00',
      sampai: '18:00'
    }

    this.handleSave = this.handleSave.bind(this);
    this.handleBerangkat = this.handleBerangkat.bind(this);
    this.handleSampai = this.handleSampai.bind(this);
  }

  handleBerangkat(val){
    this.setState({ berangkat: val });
  }

  handleSampai(val){
    this.setState({ sampai: val });
  }

  handleSave(e){
    e.preventDefault();
    Swal({
      title: "Berhasil menyimpan",
      type: "success"
    }).then((result) => {
      this.setState({ is_done: true });
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
            <option value="1">Sinar Jaya</option>
            <option value="2">Nusantara</option>
            <option value="3">Subur Jaya</option>
          </select><br/>

          <label htmlFor="asal">Asal</label>
          <input type="text" value={this.state.asal} onChange={(e) => this.setState({ asal: e.target.value})} /><br/>

          <label htmlFor="tujuan">Tujuan</label>
          <input type="text" value={this.state.tujuan} onChange={(e) => this.setState({ tujuan: e.target.value})} /><br/>

          <label htmlFor="berangkat">Jam Berangkat</label>
          <TimeInput
            initTime={this.state.berangkat}
            onTimeChange={this.handleBerangkat}
          />
          <br/>

          <label htmlFor="sampai">Jam Sampai</label>
          <TimeInput
            initTime={this.state.sampai}
            onTimeChange={this.handleSampai}
          />
          <br/>

          <input type="submit" value="Simpan Jadwal" onClick={this.handleSave} />
        </form>
      </div>
    )
  }
}

export default AddDeparture;