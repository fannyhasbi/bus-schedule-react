import React from 'react';

class AddBus extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      perusahaan: ''
    }

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(){
    // alert(this.state.perusahaan);
  }
  
  render(){
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