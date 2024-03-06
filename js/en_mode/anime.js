const images = [
    // Cada objeto contiene src (fuente), alt (texto alternativo), title (título) y link (enlace)
    { src: "../img/Contend/Anime/RJ01010001.webp", alt: "Imagen 1", title: "One Piece", link: "html2.html"}, // Para que no se quede vacio
    { src: "../img/Contend/Anime/RJ01010002.webp", alt: "Imagen 2", title: "Detective Conan", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010003.webp", alt: "Imagen 3", title: "High Card", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010004.webp", alt: "Imagen 4", title: "Hikari no Ou", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010005.webp", alt: "Imagen 5", title: "Boku no kokoro", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010006.webp", alt: "Imagen 6", title: "Mashle", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010007.webp", alt: "Imagen 7", title: "Synduality: Noir", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010008.webp", alt: "Imagen 8", title: "Sousou no Frieren", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010009.webp", alt: "Imagen 9", title: "Megumi no Daigo: Kyuukoku no Orange", link: "html2.html" },
    { src: "../img/Contend/Anime/RJ01010001.webp", alt: "Imagen 10", title: "Ragna Crimson", link: "html2.html" },
    { src: "https://media.tenor.com/RcX3hUY425kAAAAj/toothless-dragon-toothless.gif", alt: "Imagen 1", title: "Más contenido pronto", link: "html2.html" }, // Para que no se quede vacio
];
// El por defecto , basicamente la resolucion 1024 o más
let columns = 1;
let rows = 3;
let imagesPerPage = 12; // Variable global para almacenar la cantidad de imágenes por página

// Pagina a mostrarse ...practicamente el inicio
let currentPage = 1;
function adjustColumnsAndRows() { // quien diria que los if que tanto utilisaba en java me terminaria ayudando en esto
    if (window.innerWidth >= 1024) { // Pantalla grande como laptops y PC cuyas pantallas sean más grandes
        imagesPerPage = 12; // 3 columnas x 3 filas = 9 imágenes
    } else if (window.innerWidth >= 768) { // Pantalla mediana, como tablets por ejemplos o mini laptops
        imagesPerPage = 6; // 2 columnas x 3 filas = 6 imágenes
    } else { // Basicamente si no se cumple ninguno de las condiciones anteriores se ejecutará este...algo asi es 1
        imagesPerPage = 3; // 1 columna x 3 filas = 3 imágenes
    }
}

function showImages() {
    adjustColumnsAndRows();

    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    const imageGrid = document.getElementById("imageGrid");
    imageGrid.innerHTML = '';

    //document.body.style.backgroundImage = "url('https://media.tenor.com/RcX3hUY425kAAAAj/toothless-dragon-toothless.gif')";
    document.body.style.backgroundSize = "90% auto"; // 75% de ancho y altura automática
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center"; // Centrar la imagen */

    // Iterar sobre las imágenes para mostrarlas en la página , cierta parte del codigo me base en el codigo de TMO
    for (let i = start; i < end && i < images.length; i++) {
        const image = images[i];

        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;

        const overlay = document.createElement("div"); // Para cuando el cursor pase se muestre el titulo
        overlay.className = "image-overlay";
        overlay.innerHTML = `<h2w class="centered-text">${image.title}</h2w>`;

        // Agregar enlace al overlay
        const link = document.createElement("a");
        link.href = image.link;
        // link.target = "_blank" No se si usarlo , lo habre en otra pagina
        link.appendChild(overlay);

        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(link);
        imageGrid.appendChild(imageContainer);
    }
}

function updatePaginationButtons() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(images.length / imagesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = 'page-button';
        button.addEventListener('click', () => {
            currentPage = i;
            showImages();
            updatePaginationButtons();
        });
        paginationContainer.appendChild(button);
    }
}

showImages();
updatePaginationButtons();
