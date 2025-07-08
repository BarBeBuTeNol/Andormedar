const fetchMovies = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/movie');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error(`[ERROR FETCHING MOVIES]: ${error.message}`);
        return [];
    }
};

const displayMovies = async () => {
    const movies = await fetchMovies();
    console.log(movies)
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.n_movies}" class="poster" onclick="showDetail('${movie.n_movies}', '${movie.poster}', '${movie.video}', '${movie.des_movies}', '${movie.category_name}')">
        `;
        moviesContainer.appendChild(movieDiv);
    });
};

const showDetail = (name, poster, video, description, id_n_category) => {
    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <h4>${name}</h4>
        <img src="${poster}" alt="${name}" class="poster">
        <p><strong>หมวดหมู่:</strong> ${id_n_category}</p>
        <p><strong>คำอธิบาย:</strong> ${description}</p>
        <iframe src="${video}" width="100%" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
    document.getElementById('movie-detail').style.display = 'block';
    document.getElementById('movies-display').style.display = 'none';
};

const submitMovieForm = async (event) => {
    event.preventDefault();
    const movie_name = document.getElementById('movie_name').value.trim();
    const poster_url = document.getElementById('poster_url').value.trim();
    const video_url = document.getElementById('video_url').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();

    if (!movie_name || !poster_url || !video_url || !description || !category) {
        console.error('กรุณากรอกข้อมูลทั้งหมด');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                n_movies: movie_name,
                poster: poster_url,
                video: video_url,
                des_movies: description,
                category: category
            })
        });

        if (response.ok) {
            await displayMovies(); // อัปเดตแสดงหนังหลังจากเพิ่ม
            document.getElementById('movie-form').reset(); // เคลียร์ฟอร์ม
            document.getElementById('movie-form').style.display = 'none'; // ซ่อนฟอร์ม
            document.getElementById('movies-display').style.display = 'block'; // แสดงรายการหนัง
        } else {
            const errorText = await response.text();
            console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', errorText);
        }
    } catch (error) {
        console.error(`[ERROR SUBMITTING MOVIE]: ${error.message}`);
    }
};

const showFormButton = document.getElementById('addMovieButton');
const movieForm = document.getElementById('movie-form');
const moviesDisplay = document.getElementById('movies-display');

showFormButton.addEventListener('click', () => {
    if (movieForm.style.display === 'block') {
        movieForm.style.display = 'none'; // ซ่อนฟอร์ม
        moviesDisplay.style.display = 'block'; // แสดงรายการหนัง
    } else {
        movieForm.style.display = 'block'; // แสดงฟอร์ม
        moviesDisplay.style.display = 'none'; // ซ่อนรายการหนัง
    }
});

document.getElementById('movie-form').addEventListener('submit', submitMovieForm);
document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('movie-detail').style.display = 'none';
    document.getElementById('movies-display').style.display = 'block';
});

displayMovies();

const fetchCategories = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/movie/categories');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const { data } = await response.json();
        const categorySelect = document.getElementById('category');
        categorySelect.innerHTML = '';
        data.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.name;
            categorySelect.appendChild(option);
        });
    } catch (error) {
        console.error(`[ERROR FETCHING CATEGORIES]: ${error.message}`);
    }
};

const showMoviesTable = async () => {
    const movies = await fetchMovies();
    const moviesTableContainer = document.getElementById('movies-table-container');
    moviesTableContainer.innerHTML = `
        <table class="tableData">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Poster</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                ${movies.map(movie => `
                    <tr>
                        <td>${movie.category_name}</td>
                        <td>${movie.n_movies}</td>
                        <td><img src="${movie.poster}" alt="${movie.n_movies}" /></td>
                        <td><button class="btn-edit" onclick="prepareEditMovie(${movie.id})">Edit</button></td>
                        <td><button class="btn-delete" onclick="confirmDeleteMovie(${movie.id})">Delete</button></td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    document.getElementById('movies-display').style.display = 'none'; // ซ่อนการแสดงหนังปกติ
    moviesTableContainer.style.display = 'block'; // แสดงตารางหนัง
};

const confirmDeleteMovie = (id) => {
    if (confirm("คุณต้องการลบหนังนี้หรือไม่?")) {
        deleteMovie(id);
    }
};

const deleteMovie = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/movie/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            showMoviesTable();
        } else {
            console.error('เกิดข้อผิดพลาดในการลบหนัง');
        }
    } catch (error) {
        console.error(`[ERROR DELETING MOVIE]: ${error.message}`);
    }
};

const prepareEditMovie = async (id) => {
    const movie = await fetchMovies().then(movies => movies.find(movie => movie.id === id));
    if (movie) {
        document.getElementById('movie_name').value = movie.n_movies;
        document.getElementById('poster_url').value = movie.poster;
        document.getElementById('video_url').value = movie.video;
        document.getElementById('description').value = movie.des_movies;
        document.getElementById('category').value = movie.category;

        currentEditMovieId = movie.id; // ตั้งค่า ID ของหนังที่กำลังแก้ไข

        // ลบปุ่ม Confirm เก่าถ้ามี
        const existingConfirmButton = document.getElementById('confirm-button');
        if (existingConfirmButton) {
            existingConfirmButton.remove();
        }

        // สร้างปุ่ม Confirm ใหม่
        const confirmButton = document.createElement('button');
        confirmButton.className = 'btn-confirm'; // ใช้คลาส btn-confirm
        confirmButton.id = 'confirm-button';
        confirmButton.type = 'button';
        confirmButton.textContent = 'Confirm';
        confirmButton.onclick = () => submitEditMovie(movie.id);
        movieForm.appendChild(confirmButton);

        movieForm.style.display = 'block';
        
    }


const submitMovieForm = async (event) => {
    event.preventDefault();
    const movie_name = document.getElementById('movie_name').value.trim();
    const poster_url = document.getElementById('poster_url').value.trim();
    const video_url = document.getElementById('video_url').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();

    if (!movie_name || !poster_url || !video_url || !description || !category) {
        console.error('กรุณากรอกข้อมูลทั้งหมด');
        return;
    }

    try {
        if (currentEditMovieId) { // ถ้ามี ID แสดงว่ากำลังแก้ไข
            const response = await fetch(`http://localhost:3000/api/movie/${currentEditMovieId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    n_movies: movie_name,
                    poster: poster_url,
                    video: video_url,
                    des_movies: description,
                    category: category
                })
            });

            if (response.ok) {
                await displayMovies();
                currentEditMovieId = null; // รีเซ็ต ID หลังจากแก้ไขเสร็จ
            } else {
                const errorText = await response.text();
                console.error('เกิดข้อผิดพลาดในการแก้ไขข้อมูล:', errorText);
            }
        } else { // ถ้าไม่มี ID แสดงว่ากำลังเพิ่มหนังใหม่
            const response = await fetch('http://localhost:3000/api/movie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    n_movies: movie_name,
                    poster: poster_url,
                    video: video_url,
                    des_movies: description,
                    category: category
                })
            });

            if (response.ok) {
                await displayMovies();
            } else {
                const errorText = await response.text();
                console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', errorText);
            }
        }
        
        document.getElementById('movie-form').reset();
        movieForm.style.display = 'none';
    } catch (error) {
        console.error(`[ERROR SUBMITTING MOVIE]: ${error.message}`);
    }
};

// เรียกใช้ listener บนฟอร์ม
document.getElementById('movie-form').addEventListener('submit', submitMovieForm);

};

const submitEditMovie = async (id) => {
    const movie_name = document.getElementById('movie_name').value.trim();
    const poster_url = document.getElementById('poster_url').value.trim();
    const video_url = document.getElementById('video_url').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value.trim();

    try {
        const response = await fetch(`http://localhost:3000/api/movie/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                n_movies: movie_name,
                poster: poster_url,
                video: video_url,
                des_movies: description,
                category: category
            })
        });

        if (response.ok) {
            await displayMovies();
            document.getElementById('movie-form').reset();
            document.getElementById('movie-form').style.display = 'none';
            document.getElementById('movies-display').style.display = 'block';
        } else {
            const errorText = await response.text();
            console.error('เกิดข้อผิดพลาดในการแก้ไขข้อมูล:', errorText);
        }
    } catch (error) {
        console.error(`[ERROR EDITING MOVIE]: ${error.message}`);
    }
};

const toggleDataDisplay = async () => {
    const moviesTableContainer = document.getElementById('movies-table-container');
    if (moviesTableContainer.style.display === 'block') {
        moviesTableContainer.style.display = 'none';
        document.getElementById('movies-display').style.display = 'block';
    } else {
        await showMoviesTable();
    }
};

document.getElementById('homeButton').addEventListener('click', () => {
    window.location.href = '/Fontend/VsCode/Home/Home.html';
});

document.getElementById('showTableButton').addEventListener('click', toggleDataDisplay);

// เรียกใช้ fetchCategories เมื่อโหลดหน้า


