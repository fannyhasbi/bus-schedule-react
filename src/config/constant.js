const APP_STATUS = 'production';

const BSR_APP = {
  url: APP_STATUS === 'development' ? 'http://localhost/bus-schedule-rest' : 'https://bus-schedule.000webhostapp.com'
}

export default BSR_APP;