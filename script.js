document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-inicio-sesion").addEventListener('submit', validarFormulario); 
  });

  

  function validarFormulario(evento) {
    
    if (!validacion()){
        evento.preventDefault();
        Swal.fire({
            icon: "error",
            title: "Atención",
            text: "Los campos no pueden estar vacíos"
          });
    }else{
        if (!validarEmail(document.getElementById("email").value)) {
            evento.preventDefault();
            Swal.fire({
                icon: "error",
                title: "Atención",
                text: "El formato del email es inválido"
              });
        }else{
                alert("Bienvenido")
           }
    } 



    function validacion(){
        let email= document.getElementById("email").value
        let pass= document.getElementById("pass").value
        if (email==="" || pass ===""){
            return false
        }else{
            return true
        }
    }


    function validarEmail(email) {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
        return pattern.test(email);
    }
    
 
    

}
