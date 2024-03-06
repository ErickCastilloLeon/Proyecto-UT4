const images = [
    { src: "../img/Contend/Manga/01010001.webp", alt: "", title: "Jujutsu Kaisen", link: "../es_mode/contend/manga/chapter/jujutsu_kaisen.html" }, // Para que no se quede vacio
    { src: "../img/Contend/Manga/01010002.webp", alt: "", title: "One Piece", link: "/contend/manga/chapter/jujutsu-kaisen.html" },
    { src: "../img/Contend/Manga/01010003.webp", alt: "", title: "Tensei Shitara Slime Datta Ken", link: "html2.html" },
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

//

function search() {
    var input, filter, imageContainer, imgElement, overlay, title, i, txtValue;
    input = document.getElementById("q");
    filter = input.value.toUpperCase();

    for (i = 0; i < images.length; i++) {
        imageContainer = document.getElementsByClassName("image-container")[i];
        imgElement = imageContainer.getElementsByTagName("img")[0];
        overlay = imageContainer.getElementsByClassName("image-overlay")[0];
        title = overlay.getElementsByClassName("centered-text")[0];
        txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            imageContainer.style.display = "";
        } else {
            imageContainer.style.display = "none";
        }
    }
}
