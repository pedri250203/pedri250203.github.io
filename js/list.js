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

    // Función para filtrar los personajes según el término de búsqueda
    function filterCharacters(term, data) {
        return data.filter(personaje => personaje.name.toLowerCase().includes(term.toLowerCase()));
    }

    // Manejador de eventos para el botón de búsqueda
    document.getElementById("searchButton").addEventListener("click", event => {
        const searchTerm = document.getElementById("searchInput").value.trim(); // Obtener el término de búsqueda
        getCharacters(data => {
            const filteredData = filterCharacters(searchTerm, data); // Filtrar los personajes
            renderCharacters(filteredData); // Renderizar los personajes filtrados
        });
    });

    // Función para renderizar los personajes en la lista
    function renderCharacters(data) {
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
    }

    // Cargar todos los personajes al cargar la página inicialmente
    getCharacters(data => {
        renderCharacters(data);
    });
});
