import React from 'react';
import { Link } from 'react-router-dom';

import {
  Jumbotron,
  Container,
  Button
} from 'reactstrap';

const Home = () => (
  <div>
    <Jumbotron className="text-center alert alert-info" fluid>
      <Container fluid>
        <h1>Aplikasi Penjadwalan Bus</h1>
        <p>Aplikasi ini berguna untuk melakukan pendataan jadwal keberangkatan dan kedatang bus.</p>
        <Link to="/admin/bus">
          <Button color="primary" size="lg">Masuk</Button>
        </Link>
      </Container>
    </Jumbotron>
  </div>
);

export default Home;