document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const addMovieButton = document.getElementById("add-movie-button");
    const movieForm = document.getElementById("movie-form");
    const moviesContainer = document.getElementById("movies-container");

    let movies = []; // Array to hold movie data

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
        resetForm();
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Reset form fields
    function resetForm() {
        movieForm.reset();
        movieForm.dataset.editIndex = "";
    }

    // Add movie item to the display
    function addMovieToDisplay(movie, index) {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.description}</p>
            <button class="edit-button" data-index="${index}">Edit</button>
            <button class="edit-button delete-button" data-index="${index}">Delete</button>
        `;
        moviesContainer.appendChild(movieItem);
    }

    // Update movie item display
    function updateMovieDisplay() {
        moviesContainer.innerHTML = ""; // Clear current list
        movies.forEach((movie, index) => addMovieToDisplay(movie, index));
    }

    // Handle form submission
    movieForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("movie-title").value;
        const poster = document.getElementById("movie-poster").value;
        const video = document.getElementById("movie-video").value;
        const description = document.getElementById("movie-description").value;
        const index = movieForm.dataset.editIndex;

        if (index !== "") {
            // Edit existing movie
            movies[index] = { title, poster, video, description };
        } else {
            // Add new movie
            movies.push({ title, poster, video, description });
        }
        closeModal();
        updateMovieDisplay();
    });

    // Event listeners
    addMovieButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    
    // Handle edit and delete button clicks
    moviesContainer.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        if (event.target.classList.contains("edit-button") && !event.target.classList.contains("delete-button")) {
            // Edit button clicked
            const movie = movies[index];
            document.getElementById("movie-title").value = movie.title;
            document.getElementById("movie-poster").value = movie.poster;
            document.getElementById("movie-video").value = movie.video;
            document.getElementById("movie-description").value = movie.description;
            movieForm.dataset.editIndex = index;
            openModal();
        } else if (event.target.classList.contains("delete-button")) {
            // Delete button clicked
            movies.splice(index, 1);
            updateMovieDisplay();
        }
    });
    
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
