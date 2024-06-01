function validar(){

    const formulario = document.querySelector("form")

    formulario.addEventListener("submit", (event)=>{
        if (!validacion()){
            Swal.fire({
                type: "error",
                title: "Debe llenar todos los campos",
              });
              event.preventDefault()
        }else{
            swal({
                title: 'Bienvenido',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.value) {
                  window.location.href = "index.html";
                }
              })

        }
    })
    
    function validacion(){
        let email= document.getElementById("email").value
        let pass= document.getElementById("pass").value

        if (email==="" || pass ===""){
            return false
        }else{
            return true
        }
    }

}


s