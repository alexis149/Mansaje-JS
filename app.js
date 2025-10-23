const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando....';

   const serviceID = 'default_service';
   const templateID = 'template_tjvbdc2';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviado!!';
      alert('Se a Enviado Tu Comunicado');
    }, (err) => {
      btn.value = 'Enviado!!';
      alert(JSON.stringify(err));
    });
});