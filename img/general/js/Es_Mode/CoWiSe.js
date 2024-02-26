const images = [
    { src: "https://otakuteca.com/images/books/cover/5dba099b268ca.webp", alt: "Imagen 1", title: "Kimi wa Midara na Boku no Joou\n", link: "html2.html" }, // Para que no se quede vacio
    { src: "https://otakuteca.com/images/books/cover/5dcb9e275c12c.webp", alt: "Imagen 2", title: "Kobayashi-san chi no Maid Dragon: Lucoa wa Boku no XX Desu", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/6238f7cfd9d68.webp", alt: "Imagen 3", title: "Boku no Kawaii Musume wa Futago no Kenja", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/5d2bce7808207.webp", alt: "Imagen 4", title: "Boku no Kanojo wa Kirei ni Warau", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/6576a38f2734f.webp", alt: "Imagen 5", title: "i vida ideal de otro mundo - Reencarnación en un mundo lleno de chicas Nekomimi", link: "html2.html" },
    { src: "https://otakuteca.com/images/books/cover/5bca274c2c5ab.webp", alt: "Imagen 5", title: "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen", link: "html2.html" },
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
