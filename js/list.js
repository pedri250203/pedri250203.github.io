function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
    
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`

        <article>

            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>

            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>

        </article>
        `);

        const main = document.querySelector("main");
        
        main.append(article);
});

});

    



document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        var itemList = document.getElementById("personaje");
        var template = document.getElementById("list-template");
        var total = itemList.childElementCount + 1;
        var clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = `${total}`;
        clone.querySelector("[data-id='title']").textContent = "Product";
        clone.querySelector("[data-id='content']").textContent = "It's a new item";
        itemList.appendChild(clone);
    });
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});



    
