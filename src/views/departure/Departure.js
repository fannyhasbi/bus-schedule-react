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

class Departure extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      departures: []
    }
  }

  componentDidMount(){
    axios.get(BSR_APP.url + '/api/departure')
    .then((response) => {
      console.log(response);
      if(response.data.status === 200){
        this.setState({
          departures: response.data.data
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
    const content = this.state.departures.length === 0 ?
      (
        <Alert color="warning">Tidak ada jadwal keberangkatan bus hari ini.</Alert>
      ) :
      (
        <Table responsive>
          <thead className="text-primary">
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
              this.state.departures.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{ el.nama_perusahaan }</td>
                    <td>{ el.nama_asal }</td>
                    <td>{ el.nama_tujuan }</td>
                    <td>{ this.time_formatter(el.berangkat) }</td>
                    <td>{ this.time_formatter(el.sampai) }</td>
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
                  <CardTitle tag="h4">Jadwal Keberangkatan Bus</CardTitle>
                </CardHeader>
                <CardBody>
                  <Link to="/admin/add-departure">
                    <Button color="info">
                      <i className="now-ui-icons ui-1_simple-add"></i> Tambah Jadwal Keberangkatan
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

export default Departure;