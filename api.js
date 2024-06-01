let personajesApi = document.getElementById("contenedor-personajes")

   fetch("https://rickandmortyapi.com/api/character")
    .then((response)=>response.json())
    .then((datos)=>{

        console.log(datos)
        console.log(datos.results)

        datos.results.forEach((elementos) => {
            console.log(elementos.name)

            const contenedorCreado = document.createElement('div')

            contenedorCreado.innerHTML = `
            <h3>${elementos.name}</h3>
            <img style="width:200px; border-radius:10px;" src="${elementos.image}">                
            `;


        personajesApi.append(contenedorCreado)
    });

})
