// Función para redirigir a otras páginas
function redirectTo(page) {
    window.location.href = page;
  }
  
  // Función para manejar la búsqueda de libros
  document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-bar input').value.trim().toLowerCase();
    
    if (searchTerm) {
      // Filtramos las tarjetas de libros basándonos en el término de búsqueda
      const bookCards = document.querySelectorAll('.book-card');
      
      bookCards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        const author = card.querySelector('p').textContent.toLowerCase();
  
        // Si el título o el autor contienen el término de búsqueda, mostramos la tarjeta
        if (title.includes(searchTerm) || author.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    } else {
      // Si no hay término de búsqueda, mostramos todas las tarjetas
      const bookCards = document.querySelectorAll('.book-card');
      bookCards.forEach(card => {
        card.style.display = 'block';
      });
    }
  });
  
  // Opcional: Limpiar la búsqueda al hacer clic fuera del campo
  document.querySelector('.search-bar input').addEventListener('focus', function() {
    this.value = ''; // Limpiar el campo de búsqueda al hacer foco
  });



  

const books = [
  { title: "El Alquimista", author: "Paulo Coelho", genre: "Ficción", description: "Un viaje de autodescubrimiento...", image: "img/El Alquimista.jpg" },
  { title: "Cien Años de Soledad", author: "Gabriel García Márquez", genre: "Novela", description: "La historia de la familia Buendía...", image: "img/portada cien años de soledad.jpg" },
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

let filteredBooks = books;

function displayBooks(booksToDisplay) {
  const bookCardsContainer = document.getElementById("bookCards");
  bookCardsContainer.innerHTML = "";

  booksToDisplay.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <button onclick="showModal('${book.title}', '${book.author}', '${book.genre}', '${book.description}', '${book.image}')">Ver más</button>
    `;
    bookCardsContainer.appendChild(bookCard);
  });
}

function filterBooksByGenre(genre) {
  filteredBooks = genre === 'Todos' ? books : books.filter(book => book.genre === genre);
  displayBooks(filteredBooks);
}

function showModal(title, author, genre, description, image) {
  document.getElementById("bookTitle").textContent = title;
  document.getElementById("bookAuthor").textContent = author;
  document.getElementById("bookGenre").textContent = genre;
  document.getElementById("bookDescription").textContent = description;
  document.getElementById("bookImage").src = image;
  document.getElementById("bookModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookModal").style.display = "none";
}

function interchangeBook() {
  alert("¡Intercambio realizado con éxito!");
}

// Mostrar todos los libros al cargar la página
displayBooks(books);




