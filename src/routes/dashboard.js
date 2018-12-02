import Buses from 'views/bus/Buses';
import AddBus from 'views/bus/AddBus';
import Departure from 'views/departure/Departure';
import AddDeparture from 'views/departure/AddDeparture';
import Arrival from 'views/arrival/Arrival';
import AddArrival from 'views/arrival/AddArrival';

var dashRoutes = [
  {
    path: '/admin/bus',
    name: 'Daftar Bus',
    icon: 'transportation_bus-front-12',
    component: Buses
  },
  {
    path: '/admin/add-bus',
    name: 'Tambah Bus',
    icon: 'ui-1_simple-add',
    component: AddBus
  },
  {
    path: '/admin/departure',
    name: 'Jadwal Keberangkatan',
    icon: 'shopping_delivery-fast',
    component: Departure
  },
  {
    path: '/admin/add-departure',
    name: 'Tambah Jadwal Keberangkatan',
    icon: 'ui-1_simple-add',
    component: AddDeparture
  },
  {
    path: '/admin/arrival',
    name: 'Jadwal Kedatangan',
    icon: 'ui-1_calendar-60',
    component: Arrival
  },
  {
    path: '/admin/add-arrival',
    name: 'Tambah Jadwal Kedatangan',
    icon: 'ui-1_simple-add',
    component: AddArrival
  }
];

export default dashRoutes;