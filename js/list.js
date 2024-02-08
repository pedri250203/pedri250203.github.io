document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0; // Variable para rastrear el índice actual del personaje

    
    // Función para obtener los personajes
    function getCharacters(done) {
        const results = fetch("https://rickandmortyapi.com/api/character");
        results
            .then(response => response.json())
            .then(data => {
                done(data.results);
            });
    }

    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        getCharacters(data => {
            const itemList = document.getElementById("personaje");
            const template = document.getElementById("list-template");
            itemList.innerHTML = ''; // Limpiar el contenido anterior

            data.forEach((personaje, index) => {
                const clone = template.content.cloneNode(true);

                // Llenar los campos del template con la información del personaje
                clone.querySelector("[data-id='number']").textContent = `${index + 1}`;
                clone.querySelector("[data-id='title']").textContent = personaje.name;
                clone.querySelector("[data-id='content']").textContent = `${personaje.status}, ${personaje.species}`;
                clone.querySelector("[data-id='image']").src = personaje.image;

                itemList.appendChild(clone);
            });
        });
    });
});
