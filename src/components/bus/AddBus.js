import React from 'react';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';

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
    Swal({
      title: 'Berhasil menyimpan',
      type: 'success',
    }).then(() => {
      this.setState({ is_done: true });
    })
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