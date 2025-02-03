// resultados.js

// Obtener el formulario y los elementos relevantes
const searchForm = document.querySelector('.search-form');
const searchInput = document.getElementById('searchInput');
const searchQueryElement = document.getElementById('searchQuery');
const resultCardsContainer = document.getElementById('resultCards');

// Función para redirigir a otra página
function redirectTo(url) {
  window.location.href = url;
}

// Función para simular la búsqueda de libros
function searchBooks(query) {
  // Aquí puedes agregar la lógica para hacer la búsqueda real (por ejemplo, una llamada a una API)
  const books = [
    { title: 'El Quijote', author: 'Miguel de Cervantes', description: 'Una novela sobre las aventuras de un caballero.' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez', description: 'Una novela que cuenta la historia de la familia Buendía.' },
    { title: 'La sombra del viento', author: 'Carlos Ruiz Zafón', description: 'Un misterio literario ambientado en la Barcelona de la posguerra.' },
    { title: "El Alquimista", author: "Paulo Coelho", genre: "Ficción", description: "Un viaje de autodescubrimiento...", image: "img/El Alquimista.jpg" },
    { title: "1984", author: "George Orwell", genre: "Ciencia Ficción", description: "Una crítica al totalitarismo...", image: "img/40 best books to read before you die.jpg" },
    { title: "Orgullo y Prejuicio", author: "Jane Austen", genre: "Romance", description: "El amor entre Elizabeth y Darcy...", image: "img/Sumérgete en la Magia de Orgullo y Prejuicio.jpg" },
    { title: "El Hobbit", author: "J.R.R. Tolkien", genre: "Fantasía", description: "Las aventuras de Bilbo Bolsón...", image: "img/El Hobbit, Un Viaje Inesperado.jpg" },
    { title: "La Historia Interminable", author: "Michael Ende", genre: "Fantasía", description: "Un niño que entra en un libro mágico...", image: "img/La Historia Interminable - Michael Ende_.jpg" },
    { title: "El Visitante", author: "Stephen King", genre: "Misterio", description: "Un viaje de autodescubrimiento...", image: "img/30 libros de terror y novela negra para una noche de miedo.jpg" },
    { title: "Boulevard", author: "Flor M. Salvador", genre: "Romance", description: "La historia de la familia Buendía...", image: "img/BOULEVARD 🌈🚬💫.jpg" },
    { title: "El Jardin De Las Mariposas", author: "Dot Hutchison", genre: "Misterio", description: "Una crítica al totalitarismo...", image: "img/El Jardín De Las Mariposas.jpg" },
    { title: "La Cancion De Aquiles", author: "Madeline Miller", genre: "Romance", description: "El amor entre Elizabeth y Darcy...", image: "img/LA CANCIÓN DE AQUILES (Madeline Miller).jpg" },
    { title: "Fabricante De Lagrimas", author: "Erin Doom", genre: "Romance", description: "Las aventuras de Bilbo Bolsón...", image: "img/Fabricante de lágrimas (Spanish Edition).jpg" },
    { title: "Romper El Circulo", author: "Colleen Hoover", genre: "Autoayuda", description: "Un niño que entra en un libro mágico...", image: "img/ROMPER EL CÍRCULO_ Collen Hoover_.jpg" }
  ];

  // Filtrar los libros que coinciden con la consulta
  return books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
}

// Función para mostrar los resultados
function displayResults(books) {
  resultCardsContainer.innerHTML = ''; // Limpiar resultados anteriores

  if (books.length === 0) {
    resultCardsContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda.</p>';
    return;
  }

  // Mostrar los resultados
  books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h4>${book.title}</h4>
      <p><strong>Autor:</strong> ${book.author}</p>
      <p>${book.description}</p>
    `;
    resultCardsContainer.appendChild(bookCard);
  });
}
// Manejar el envío del formulario
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar la recarga de la página
  const query = searchInput.value.trim();

  if (query) {
    searchQueryElement.textContent = query; // Mostrar la consulta de búsqueda
    const books = searchBooks(query); // Buscar los libros
    displayResults(books); // Mostrar los resultados
  }
});
