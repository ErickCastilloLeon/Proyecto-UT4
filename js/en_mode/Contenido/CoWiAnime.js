import { name, age } from "./CoWiAnime.json";
// Array de objetos que contiene información sobre imágenes
const images = [
    // Cada objeto contiene src (fuente), alt (texto alternativo), title (título) y link (enlace)
    { src: "https://www3.animeflv.net/uploads/animes/covers/7.jpg", alt: "Imagen 1", title: "One Piece", link: "html2.html"}, // Para que no se quede vacio
    { src: "https://www3.animeflv.net/uploads/animes/covers/606.jpg", alt: "Imagen 2", title: "Detective Conan", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3751.jpg", alt: "Imagen 3", title: "High Card", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3762.jpg", alt: "Imagen 4", title: "Hikari no Ou", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3770.jpg", alt: "Imagen 5", title: "Boku no kokoro", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3790.jpg", alt: "Imagen 5", title: "Mashle", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3850.jpg", alt: "Imagen 6", title: "Synduality: Noir", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3859.jpg", alt: "Imagen 7", title: "Sousou no Frieren", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3860.jpg", alt: "Imagen 8", title: "Megumi no Daigo: Kyuukoku no Orange", link: "html2.html" },
    { src: "https://www3.animeflv.net/uploads/animes/covers/3862.jpg", alt: "Imagen 9", title: "Ragna Crimson", link: "html2.html" },
    { src: "https://media.tenor.com/RcX3hUY425kAAAAj/toothless-dragon-toothless.gif", alt: "Imagen 1", title: "Más contenido pronto", link: "html2.html" }, // Para que no se quede vacio
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