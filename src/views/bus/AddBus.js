import React from 'react';
import { Redirect } from 'react-router';
import qs from 'qs';
import axios from 'axios';
import Swal from 'sweetalert2';

import BSR_APP from '../../config/constant';

class AddBus extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      is_done: false,
      perusahaan: ''
    }

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(){
    const postData = qs.stringify({
      perusahaan: this.state.perusahaan,
    });

    axios.post(BSR_APP.url + '/api/add-bus',
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
          text: 'Perusahaan Bus berhasil ditambahkan',
          type: 'success',
        }).then(() => {
          this.setState({ is_done: true });
        });
      }
      else {
        Swal({
          title: 'Oops',
          text: 'Maaf, sedang terjadi kesalahan',
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
      return <Redirect to="/buses" />

    return (
      <div>
        <h1>Tambah Bus</h1>

        <form>
          <div>
            <label htmlFor="Perusahaan">Perusahaan</label><br/>
            <input type="text" value={this.state.perusahaan} onChange={(e) => this.setState({ perusahaan: e.target.value })} />

            <br/><br/>
            <button type="button" onClick={this.handleSave}>Simpan</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBus;