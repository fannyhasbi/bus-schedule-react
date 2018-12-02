import React from 'react';
import { Redirect } from 'react-router';
import qs from 'qs';
import axios from 'axios';
import Swal from 'sweetalert2';

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from 'reactstrap';

import { PanelHeader, Button, FormInputs } from 'components';

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
    if(this.state.perusahaan.length === 0){
      Swal({
        text: 'Harap isi nama perusahaan',
        type: 'error',
        toast: true
      });

      return;
    }

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
      return <Redirect to="/admin/bus" />

    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={8} xs={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">Tambah Bus</h5>
                </CardHeader>
                <CardBody>
                  <FormInputs
                    ncols={[
                      "col-md-8"
                    ]}
                    proprieties={[
                      {
                        label: "Nama Perusahaan",
                        inputProps: {
                          type: "text",
                          value: this.state.perusahaan,
                          onChange: (e) => this.setState({ perusahaan: e.target.value })
                        }
                      }
                    ]}
                  />

                  <Button color="success" wd onClick={this.handleSave}>Simpan</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AddBus;