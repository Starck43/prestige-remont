
//import instagramIcon from "./images/instagram.svg"


export const getYear = () => {
    return new Date().getFullYear();
}

const Settings = {

    SERVER: process.env.SERVER,
    API_SERVER: process.env.SERVER + '/wp-json',
    API_ENDPOINTS: {
      sendMessage: '/contact/v1/send',
    },

  // API server URL
  serverUrl: 'https://wp.престиж-ремонт.рф/wp-json/contact/v1/send',
  googleAnalyticsId: 'G-VPRX4KFFB1',
}

export default Settings
