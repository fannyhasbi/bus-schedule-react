import Buses from 'views/bus/Buses';
import Departure from 'views/departure/Departure';

var dashRoutes = [
  {
    path: '/bus',
    name: 'Bus',
    icon: 'transportation_bus-front-12',
    component: Buses
  },
  {
    path: '/departure',
    name: 'Departure',
    icon: 'transportation_bus-front-12',
    component: Departure
  }
];

export default dashRoutes;