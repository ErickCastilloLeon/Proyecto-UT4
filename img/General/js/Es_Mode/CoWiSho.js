const images = [
    { src: "https://otakuteca.com/images/books/cover/658c816be83be.webp", alt: "Imagen 1", title: "Jujutsu Kaisen", link: "html2.html" }, // Para que no se quede vacio
    { src: "https://otakuteca.com/images/books/cover/5bc7cb37a8df5.webp", alt: "Imagen 2", title: "One Piece", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/64cb883e56d87.webp", alt: "Imagen 3", title: "Tensei Shitara Slime Datta Ken", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/5cca10a79a95e.webp", alt: "Imagen 4", title: "Chainsaw Man", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/64cacac18e007.webp", alt: "Imagen 5", title: "Kage no Jitsuryokusha ni Naritakute", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/60dccc7dbac27.webp", alt: "Imagen 5", title: "Mairimashita! Iruma-kun", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/658c7e4b4f0ff.webp", alt: "Imagen 6", title: "Kusuriya no Hitorigoto3", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/61eafd8e45766.webp", alt: "Imagen 7", title: "Vanitas no carte", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/61b75e1112952.webp", alt: "Imagen 8", title: "Boku no Hero Academia", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/60f4daf40dc87.webp", alt: "Imagen 9", title: "Boku no Kokoro no Yabai Yatsu", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/5ca92a3d33898.webp", alt: "Imagen 8", title: "Boku no Hero Academia: School Briefs", link: "html2.html" },
];
// La cantidad de imágenes que se msotraran por pagina
const imagesPerPage = 8;
let currentPage = 1;

function showImages() {
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    const imageGrid = document.getElementById("imageGrid");
    imageGrid.innerHTML = '';

    // Agregar fondo al cuerpo de la página
    //document.body.style.backgroundImage = "url('https://media.tenor.com/RcX3hUY425kAAAAj/toothless-dragon-toothless.gif')";
    document.body.style.backgroundSize = "90% auto"; // 75% de ancho y altura automática
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center"; // Centrar la imagen

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
        overlay.innerHTML = `<h2 class="centered-text">${image.title}</h2>`;

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
