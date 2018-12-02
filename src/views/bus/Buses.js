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
  Button
} from 'reactstrap';

import { PanelHeader } from '../../components';

import BSR_APP from '../../config/constant';

class Buses extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buses: []
    }
  }

  componentDidMount(){
    axios.get(BSR_APP.url + '/api/bus')
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          buses: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Maaf, sedang terjadi kesalahan", "warning");
      console.log(error);
    });
  }

  render(){
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Daftar Bus</CardTitle>
                </CardHeader>
                <CardBody>
                  <Link to="/admin/add-bus">
                    <Button color="info">
                      <i className="now-ui-icons ui-1_simple-add"></i> Tambah Bus
                    </Button>
                  </Link>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>No.</th>
                        <th>Nama Perusahaan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.buses.map((el, i) => {
                          return (
                            <tr key={i}>
                              <td>{i+1}</td>
                              <td>{el.nama}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Buses;