// Social Icon
//import instagramIcon from "./images/instagram.svg"


export const getYear = () => {
    return new Date().getFullYear();
}

const Settings = {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  // API server URL
  serverUrl: "https://wp.престиж-ремонт.рф/wp-json/contact/v1/send",
  googleAnalyticsId: "G-VPRX4KFFB1",
  // Work Section ------------------------
  projects: [
    /*
    If You Want To Add More Project just Copy and Paste This At The End
    {
        title: 'Имя проекта',
        para: 'описание',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  //   Contact Section --------------

  /*  contactSubHeading: "свяжитесь с нами любым удобным способом",
  social: [
    {
      img: instagramIcon, url: "https://www.instagram.com/",
    },
  ],*/

  // End Contact Section ---------------
}

export default Settings
