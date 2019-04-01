(function(){



document.getElementById('buscar-1').onsubmit = function() {
           window.location = 'http://www.google.com/search?q=site:lulasmovement.info' + " " + document.getElementById('buscar-2').value;
        return false;
      };


      var nombre = document.getElementById('nombre');
      var apellidos = document.getElementById('apellidos');
      var email = document.getElementById('email');
      var pais = document.getElementById('pais');
      var texto = document.getElementById('areadetexto');
      var boton = document.getElementById('boton');


      function nombreCheck (e){
        if (nombre.value.length >= 3) {

        }else {
          alert("Escribe tu nombre");
          e.preventDefault();
        }
      }

      function apellidosCheck (e){
        if (apellidos.value.length >= 3) {

        }else {
          alert("Escribe tus apellidos");
          e.preventDefault();
        }
      }

      function emailCheck (e){
        if (email.value.length >= 3 && email.value.indexOf("@") !== -1 && email.value.indexOf(".") !== -1) {

        }else {
          alert("Escribe tu email");
          e.preventDefault();
        }
      }

      function paisCheck (e){
        if (pais.value.length >= 3) {

        }else {
          alert("Escribe tu pais");
          e.preventDefault();
        }

      }

      function mensajeCheck (e){
        if (texto.value.length >= 3) {

        }else {
          alert("Escribe un mensaje");
          e.preventDefault();
        }

      }

      var validarTodo = function(e){
       nombreCheck(e);
       apellidosCheck(e);
       emailCheck(e);
       paisCheck(e);
       mensajeCheck(e);

       };

      boton.addEventListener("click",validarTodo);

      })();

      // var boton = document.getElementById("boton"),
      // video = document.getElementById("videoaddon");
      //
      // boton.onclick = function mute() {
      //
      //   if (video.muted) {
      //     video.muted = (false);
      //     boton.innerHTML= ("Mute");
      //
      //   }else {
      //   video.muted = (true);
      //   boton.innerHTML= ("Sound");
      //   }
      // }
      //
      // video.onclick = function playpause(){
      //
      //   if (video.paused) {
      //      video.play();
      //   } else {
      //     video.pause();
      //   }
      //
      // };
