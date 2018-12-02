import Buses from 'views/bus/Buses';
import AddBus from 'views/bus/AddBus';
import Departure from 'views/departure/Departure';
import AddDeparture from 'views/departure/AddDeparture';
import Arrival from 'views/arrival/Arrival';

var dashRoutes = [
  {
    path: '/bus',
    name: 'Daftar Bus',
    icon: 'transportation_bus-front-12',
    component: Buses
  },
  {
    path: '/add-bus',
    name: 'Tambah Bus',
    icon: 'transportation_bus-front-12',
    component: AddBus
  },
  {
    path: '/departure',
    name: 'Jadwal Keberangkatan',
    icon: 'transportation_bus-front-12',
    component: Departure
  },
  {
    path: '/add-departure',
    name: 'Tambah Jadwal Keberangkatan',
    icon: 'transportation_bus-front-12',
    component: AddDeparture
  },
  {
    path: '/arrival',
    name: 'Jadwal Kedatangan',
    icon: 'transportation_bus-front-12',
    component: Arrival
  }
];

export default dashRoutes;