document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const movieDetail = document.getElementById('movie-detail');
    const movieVideo = document.getElementById('movie-video');
    const movieTitle = document.getElementById('movie-title');
    const movieDescriptionText = document.getElementById('movie-description-text');
    const backButton = document.getElementById('back-button');

    // ข้อมูลภาพยนตร์
 const movies = {
    "deadpool 3": {
         video: "/Video/Deadpool & Wolverine.mp4",
         poster: "/Photo/Deadpool & Wolverine (2024).jpg",
         description: "เรื่องย่อ Marvel Studios' Deadpool & Wolverine : ขณะที่ วูลฟ์เวอร์รีน ผู้เหนื่อยล้ากำกังฟื้นฟูอาการบาดเจ็บของตนเอง เขาก็ได้มาพบกับจอมพูดมากอย่าง เดดพูล ผู้ที่เดินทางข้ามเวลามายังอนาคตเพื่อที่จะรักษามิตรสหายที่ยิ่งใหญ่ที่สุดของเขา ด้วยความหวังที่ว่าจะสามารถผูกมิตรกับเจ้าสัตว์ร้ายและร่วมมือกันเพื่อนที่จะปราบศัตรูที่พวกเขามีร่วมกัน "
     },
     'deadpool': {
         title: 'Deadpool (2016)',
         poster: '/Photo/Deadpool 1.jpg',
         video: '/Video/Deadpool.mp4',
         description: "เรื่องย่อ Deadpool : อดีตเจ้าหน้าที่หน่วยเฉพาะกิจที่ผันตัวเองเป็นทหารรับจ้าง เวด วิลสัน เขาต้องผ่านการทดลองลับทำให้เขามีพลังสมานแผลได้อย่างรวดเร็ว และได้แปลงร่างเป็นเดดพูล ถูกหล่อหลอมด้วยคุณสมบัติใหม่และดูลึกลับ เปลี่ยนไปจากคนที่เคยอารมณ์ดี เดดพูลจึงออกล่าตามหาคนที่เกือบจะทำลายชีวิตของเขาไป"
     },
     'deadpool 2': {
         title: 'Deadpool 2 (2018)',
         poster: '/Photo/Deadpool 2.jpg',
         video: '/Video/Deadpool 2.mp4',
         description: "เรื่องย่อ : เดดพูล รวมทีมปกป้องเด็กอ้วนจาก เคเบิล คู่ปรับคนใหม่ของเดดพูลที่มาเพื่อฆ่าเด็กคนนี้โดยเฉพาะ เพราะเป็นภารกิจยิ่งใหญ่จึงจำเป็นต้องเกณฑ์คนร่วมทีมทั้งมนุษย์กลายพันธุ์อย่าง โดมิโน มิวแทนต์ที่เกิดจากโครงการเพาะพันธุ์มิวแทนต์ที่คาดว่าจะนำไปใช้ทางการทหาร พลังของเธอคือความโชคดี ซึ่งเธอมีพลังพิเศษที่ควบคุมโชคชะตาให้เข้าข้างเธอได้ และคนธรรมดาที่.. แค่อยากได้งานทำ !!"
     },
 };

    // สร้างภาพยนตร์ในแกลเลอรี
    for (const title in movies) {
        const showItem = document.createElement('div');
        showItem.className = 'show-item';
        showItem.setAttribute('data-title', title);
        showItem.innerHTML = `<img src="${movies[title].poster}" alt="${title}">`;

        showItem.addEventListener('click', function() {
            showMovieDetails(title);
        });

        gallery.appendChild(showItem);
    }

    // แสดงรายละเอียดหนัง
    function showMovieDetails(title) {
        const movie = movies[title];
        movieVideo.src = movie.video;
        movieTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1);
        movieDescriptionText.textContent = movie.description;

        gallery.style.display = 'none';
        movieDetail.style.display = 'block';
    }

    // กลับไปที่แกลเลอรี
    backButton.addEventListener('click', function() {
        movieDetail.style.display = 'none';
        gallery.style.display = 'grid';
    });
});
