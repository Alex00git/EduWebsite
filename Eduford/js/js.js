function send() {
var templateParams = {
    
  };
  
  emailjs.send('service_q5ocyzp', 'template_4a2sqqk', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}