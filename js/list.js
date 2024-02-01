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
                clone.querySelector("[data-id='number']").textContent = `${total}`;
                clone.querySelector("[data-id='title']").textContent = personaje.name;
                clone.querySelector("[data-id='content']").textContent = personaje.status;
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


    
