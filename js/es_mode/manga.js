const images = [
    { src: "../img/Contend/Manga/01010001.webp", alt: "Jujutsu Kaisen", title: "Jujutsu Kaisen", link: "../../Contend/Manga/Chapter/Jujutsu_Kaisen.html" }, // Para que no se quede vacio
    { src: "../img/Contend/Manga/01010002.webp", alt: "One Piece", title: "One Piece", link: "Contend/Manga/" },
    { src: "../img/Contend/Manga/01010003.webp", alt: "Imagen 1", title: "Tensei Shitara Slime Datta Ken", link: "html2.html" },
    { src: "../img/Contend/Manga/01010004.webp", alt: "Imagen 4", title: "Chainsaw Man", link: "html2.html" },
    { src: "../img/Contend/Manga/01010005.webp", alt: "Imagen 5", title: "Kage no Jitsuryokusha ni Naritakute", link: "html2.html" },
    { src: "../img/Contend/Manga/01010006.webp", alt: "Imagen 5", title: "Mairimashita! Iruma-kun", link: "html2.html" },
    { src: "../img/Contend/Manga/01010007.webp", alt: "Imagen 6", title: "Kusuriya no Hitorigoto", link: "html2.html" },
    { src: "../img/Contend/Manga/01010008.webp", alt: "Imagen 7", title: "Vanitas no carte", link: "html2.html" },
    { src: "../img/Contend/Manga/01010009.webp", alt: "Imagen 8", title: "Boku no Hero Academia", link: "html2.html" },
    { src: "../img/Contend/Manga/01010010.webp", alt: "Imagen 9", title: "Boku no Kokoro no Yabai Yatsu", link: "html2.html" },
    { src: "../img/Contend/Manga/01010011.webp", alt: "Imagen 10", title: "Boku no Hero Academia: School Briefs", link: "html2.html" },
    { src: "../img/Contend/Manga/02010001.webp", alt: "Imagen 11", title: "Kimi wa Midara na Boku no Joou", link: "html2.html" }, // Para que no se quede vacio
    { src: "../img/Contend/Manga/02010002.webp", alt: "Imagen 12", title: "Kobayashi-san chi no Maid Dragon: Lucoa wa Boku no XX Desu", link: "html2.html" },
    { src: "../img/Contend/Manga/02010003.webp", alt: "Imagen 13", title: "Boku no Kawaii Musume wa Futago no Kenja", link: "html2.html" },
    { src: "../img/Contend/Manga/02010004.webp", alt: "Imagen 14", title: "Boku no Kanojo wa Kirei ni Warau",  link: "html2.html" },
    { src: "../img/Contend/Manga/02010005.webp", alt: "Imagen 15", title: "i vida ideal de otro mundo - Reencarnación en un mundo lleno de chicas Nekomimi", link: "html2.html" },
    { src: "../img/Contend/Manga/02010006.webp", alt: "Imagen 16", title: "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen", link: "html2.html" },
];
// La cantidad de imágenes que se msotraran por pagina
const imagesPerPage = 9;
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
