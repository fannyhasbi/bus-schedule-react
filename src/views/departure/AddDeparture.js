import React from 'react';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';
import qs from 'qs';
import axios from 'axios';

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { PanelHeader, Button } from 'components';

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
      is_berangkat_valid: false,
      sampai: '00:00',
      is_sampai_valid: false
    }

    this.time_validator = this.time_validator.bind(this);
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

  time_validator(stateName, val){
    const regex = new RegExp("([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]");
    const cek = regex.test(val);

    if(cek){
      switch(stateName){
        case 'berangkat':
          this.setState({
            is_berangkat_valid: true,
            berangkat: val
          });
          break;
        case 'sampai':
          this.setState({
            is_sampai_valid: true,
            sampai: val
          });
          break;
        default: return false;
      }
    }
    else {
      switch(stateName){
        case 'berangkat':
          this.setState({
            is_berangkat_valid: false
          });
          break;
        case 'sampai':
          this.setState({
            is_sampai_valid: false,
          });
          break;
        default: return false;
      }
    }
  }

  handleSave(e){
    e.preventDefault();

    const {
      id_perusahaan,
      id_tujuan,
      id_asal,
      berangkat,
      sampai,
      is_berangkat_valid,
      is_sampai_valid } = this.state;

    if(!is_berangkat_valid || !is_sampai_valid){
      Swal({
        text: 'Format waktu sampai atau berangkat salah. (HH:MM)',
        type: 'warning',
        toast: true
      });
      return;
    }

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
      return <Redirect to="/departure" />

    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Tambah Keberangkatan</h5>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label>Perusahaan</Label>
                    <Input type="select" name="perusahaan" id="id_perusahaan" onChange={(e) => this.setState({ id_perusahaan: e.target.value })}>
                      {
                        this.state.list_bus.map((el, i) => 
                          <option key={i} value={el.id}>{el.nama}</option>
                        )
                      }
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Asal</Label>
                    <Input type="select" name="asal" id="id_asal" onChange={(e) => this.setState({ id_asal: e.target.value })}>
                      {
                        this.state.list_tempat.map((el, i) => 
                          <option key={i} value={el.id}>{el.nama}</option>
                        )
                      }
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Tujuan</Label>
                    <Input type="select" name="tujuan" id="id_tujuan" onChange={(e) => this.setState({ id_tujuan: e.target.value })}>
                      {
                        this.state.list_tempat.map((el, i) => 
                          <option key={i} value={el.id}>{el.nama}</option>
                        )
                      }
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Berangkat</Label>
                    <Input type="text" name="berangkat" id="berangkat" defaultValue={this.state.berangkat} onChange={(e) => this.time_validator('berangkat', e.target.value)} />
                  </FormGroup>

                  <FormGroup>
                    <Label>Sampai</Label>
                    <Input type="text" name="sampai" id="sampai" defaultValue={this.state.sampai} onChange={(e) => this.time_validator('sampai', e.target.value)} />
                  </FormGroup>

                  <Button color="success" wd onClick={this.handleSave}>Simpan</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default AddDeparture;