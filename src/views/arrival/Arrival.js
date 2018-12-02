import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Alert,
  Button
} from 'reactstrap';

import { PanelHeader } from '../../components';

import BSR_APP from '../../config/constant';

class Arrival extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      arrivals: []
    }
  }

  componentDidMount(){
    axios.get(BSR_APP.url + '/api/arrival')
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          arrivals: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Maaf, sedang terjadi kesalahan", "warning");
      console.log(error);
    });
  }

  time_formatter(_date){
    var _time = _date.split(' ')[1];
    _time = _time.split(':', 2);
    _time = _time.join(':');
    return _time;
  }

  render(){
    const content = this.state.arrivals.length === 0 ? 
      (
        <Alert color="warning">Tidak ada jadwal kedatangan bus hari ini.</Alert>
      ) :
      (
        <Table>
          <thead className="text-primary">
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
              this.state.arrivals.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{ el.nama_perusahaan }</td>
                    <td>{ el.nama_asal }</td>
                    <td>{ el.nama_tujuan }</td>
                    <td>{ this.time_formatter(el.berangkat) }</td>
                    <td>{ this.time_formatter(el.datang) }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      )

    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Jadwal Kedatangan Bus</CardTitle>
                </CardHeader>
                <CardBody>
                  <Link to="/admin/add-arrival">
                    <Button color="info">
                      <i className="now-ui-icons ui-1_simple-add"></i> Tambah Jadwal Kedatangan
                    </Button>
                  </Link>
                  { content }           
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Arrival;