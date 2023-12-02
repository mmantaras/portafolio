document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("OM60ec-oht5CDLy9-"); 

  var myForm = document.getElementById("myForm");

  if (myForm) {
    myForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var formData = new FormData(myForm);
      var data = {};
      formData.forEach(function(value, key){
        data[key] = value;
      });

      emailjs.send("service_v4aq93h", "template_cuwo24f", data)
        .then(function(response) {
          console.log("Correo enviado con éxito", response);
          alert("Correo enviado con éxito.");
        })
        .catch(function(error) {
          console.error("Error al enviar el correo", error);
          alert("Error al enviar el correo. Consulta la consola para más detalles.");
        });
    });
  } else {
    console.error("No se encontró el formulario con el ID 'myForm'.");
  }
});
