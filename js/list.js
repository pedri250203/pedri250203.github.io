document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0; // Variable para rastrear el índice actual del personaje

    // Función para obtener los personajes
    function getCharacters(done) {
        const results = fetch("https://rickandmortyapi.com/api/character");
        results
            .then(response => response.json())
            .then(data => {
                done(data);
            });
    }

    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        getCharacters(data => {
            const personaje = data.results[currentIndex];

            if (personaje) {
                const itemList = document.getElementById("personaje");
                const template = document.getElementById("list-template");
                const total = itemList.childElementCount + 1;
                const clone = template.content.cloneNode(true);
                
                // Llenar los campos del template con la información del personaje
                clone.querySelector("[data-id='number']").textContent = `${total}`;
                clone.querySelector("[data-id='title']").textContent = personaje.name;
                clone.querySelector("[data-id='content']").textContent = `${personaje.status}, ${personaje.species}`;

                // Mostrar el id, species e image en el atributo data-* del elemento li
                clone.querySelector("[data-id='number']").setAttribute("data-id", personaje.id);
                clone.querySelector("[data-id='number']").setAttribute("data-species", personaje.species);
                clone.querySelector("[data-id='number']").setAttribute("data-image", personaje.image);

                itemList.appendChild(clone);

                currentIndex++; // Incrementa el índice para el próximo personaje
            }
        });
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("personaje");
        itemList.replaceChildren();
        currentIndex = 0; // Reinicia el índice al principio cuando se borran todos los elementos
    });
});


    
