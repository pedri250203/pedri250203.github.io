document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0; // Variable para rastrear el índice actual del personaje

    // Función para obtener los personajes
    function getCharacters(done) {
        const searchTerm = document.getElementById("searchInput").value.trim();
        const apiUrl = `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(searchTerm)}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                done(data.results);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Manejador de eventos para el botón de búsqueda
    document.getElementById("searchButton").addEventListener("click", event => {
        getCharacters(data => {
            renderCharacters(data);
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
      getCharacters(data => {
        renderCharacters(data);
    });
});
