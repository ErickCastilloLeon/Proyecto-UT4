

// Array de objetos que contiene información sobre imágenes
const images = [
    // Cada objeto contiene src (fuente), alt (texto alternativo), title (título) y link (enlace)
    { src: "/img/Contend/Manga/01010001.webp", alt: "Jujutsu Kaisen", title: "Jujutsu Kaisen", link: "html2.html" }, // Para que no se quede vacio
    { src: "/img/Contend/Manga/01010002.webp", alt: "One Piece", title: "One Piece", link: "html2.html" },
    { src: "/img/Contend/Manga/01010003.webp", alt: "Imagen 1", title: "Tensei Shitara Slime Datta Ken", link: "html2.html" },
    { src: "/img/Contend/Manga/01010004.webp", alt: "Imagen 4", title: "Chainsaw Man", link: "html2.html" },
    { src: "/img/Contend/Manga/01010005.webp", alt: "Imagen 5", title: "Kage no Jitsuryokusha ni Naritakute", link: "html2.html" },
    { src: "/img/Contend/Manga/01010006.webp", alt: "Imagen 5", title: "Mairimashita! Iruma-kun", link: "html2.html" },
    { src: "/img/Contend/Manga/01010007.webp", alt: "Imagen 6", title: "Kusuriya no Hitorigoto3", link: "html2.html" },
    { src: "/img/Contend/Manga/01010008.webp", alt: "Imagen 7", title: "Vanitas no carte", link: "html2.html" },
    { src: "/img/Contend/Manga/01010009.webp", alt: "Imagen 8", title: "Boku no Hero Academia", link: "html2.html" },
    { src: "/img/Contend/Manga/01010010.webp", alt: "Imagen 9", title: "Boku no Kokoro no Yabai Yatsu", link: "html2.html" },
    { src: "/img/Contend/Manga/01010011.webp", alt: "Imagen 10", title: "Boku no Hero Academia: School Briefs", link: "html2.html" },
    { src: "/img/Contend/Manga/02010001.webp", alt: "Imagen 11", title: "Kimi wa Midara na Boku no Joou\n", link: "html2.html" }, // Para que no se quede vacio
    { src: "/img/Contend/Manga/02010002.webp", alt: "Imagen 12", title: "Kobayashi-san chi no Maid Dragon: Lucoa wa Boku no XX Desu", link: "html2.html" },
    { src: "/img/Contend/Manga/02010003.webp", alt: "Imagen 13", title: "Boku no Kawaii Musume wa Futago no Kenja", link: "html2.html" },
    { src: "/img/Contend/Manga/02010004.webp", alt: "Imagen 14", title: "Boku no Kanojo wa Kirei ni Warau",  link: "html2.html" },
    { src: "/img/Contend/Manga/02010005.webp", alt: "Imagen 15", title: "i vida ideal de otro mundo - Reencarnación en un mundo lleno de chicas Nekomimi", link: "html2.html" },
    { src: "/img/Contend/Manga/02010006.webp", alt: "Imagen 16", title: "Kimi to Boku no Saigo no Senjou, Aruiwa Sekai ga Hajimaru Seisen", link: "html2.html" },
];
// Número de imágenes que se mostrarán por página
const imagesPerPage = 9;

// Página actual que se está mostrando
let currentPage = 1;

// Función para mostrar las imágenes en la página actual
function showImages() {
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    // Obtiene el contenedor de imágenes en el HTML
    const imageGrid = document.getElementById("imageGrid");
    imageGrid.innerHTML = '';

    // Itera sobre las imágenes para mostrarlas en la página
    for (let i = start; i < end && i < images.length; i++) {
        const image = images[i];

        // Crea un contenedor para la imagen
        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";


        // Crea un elemento de imagen
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;

        // Crea un overlay para mostrar el título al pasar el cursor
        const overlay = document.createElement("div");
        overlay.className = "image-overlay";
        overlay.innerHTML = `<h2 class="centered-text">${image.title}</h2>`;

        // Crea un enlace para el overlay
        const link = document.createElement("a");
        link.href = image.link;
        link.appendChild(overlay);

        // Agrega la imagen y el enlace al contenedor de imagen
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(link);

        // Agrega el contenedor de imagen al contenedor principal en el HTML
        imageGrid.appendChild(imageContainer);
    }
}

// Función para actualizar los botones de paginación
function updatePaginationButtons() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    // Calcula el número total de páginas necesarias para mostrar todas las imágenes
    const totalPages = Math.ceil(images.length / imagesPerPage);

    // Itera sobre las páginas y crea un botón para cada una
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = 'page-button';

        // Agrega un evento de clic para cambiar a la página correspondiente
        button.addEventListener('click', () => {
            currentPage = i;
            showImages();
            updatePaginationButtons();
        });

        // Agrega el botón al contenedor de paginación en el HTML
        paginationContainer.appendChild(button);
    }

    // Ajusta el ancho del contenedor de imágenes para mantenerlas en una fila
    imageGrid.style.width = (100 * Math.min(images.length, imagesPerPage)) + "%";
}

// Llama a las funciones para mostrar las imágenes y actualizar los botones de paginación
showImages();
updatePaginationButtons();
