const images = [
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
// La cantidad de imágenes que se msotraran por pagina
const imagesPerPage = 9;
let currentPage = 1;

function showImages() {
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;

    const imageGrid = document.getElementById("imageGrid");
    imageGrid.innerHTML = '';

    // Iterar sobre las imágenes para mostrarlas en la página
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
        link.appendChild(overlay);

        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(link);
        imageGrid.appendChild(imageContainer);
    }
    imageGrid.style.width = (100 * Math.min(images.length, imagesPerPage)) + "%";
}
showImages();
updatePaginationButtons();

