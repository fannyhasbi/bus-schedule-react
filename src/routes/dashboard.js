import Buses from 'views/bus/Buses';
import Departure from 'views/departure/Departure';
import Arrival from 'views/arrival/Arrival';

var dashRoutes = [
  {
    path: '/bus',
    name: 'Daftar Bus',
    icon: 'transportation_bus-front-12',
    component: Buses
  },
  {
    path: '/departure',
    name: 'Jadwal Keberangkatan',
    icon: 'transportation_bus-front-12',
    component: Departure
  },
  {
    path: '/arrival',
    name: 'Jadwal Kedatangan',
    icon: 'transportation_bus-front-12',
    component: Arrival
  }
];

export default dashRoutes;