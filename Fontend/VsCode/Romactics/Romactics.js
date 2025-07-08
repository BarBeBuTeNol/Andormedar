document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const movieDetail = document.getElementById('movie-detail');
    const movieVideo = document.getElementById('movie-video');
    const movieTitle = document.getElementById('movie-title');
    const movieDescriptionText = document.getElementById('movie-description-text');
    const backButton = document.getElementById('back-button');

    // ข้อมูลภาพยนตร์
 const movies = {
     "anong": {
         video: "/Video/anong.mp4",
         poster: "/Photo/anong 1.jpg 2.webp",
         description: "“โจ” เกมเมอร์หนุ่มดวงตก ได้รับมรดกเป็นบ้านที่มีผีเจ้าของบ้านคนเก่า “อนงค์” แถมมาด้วย แต่คนก็ไม่ยอมหนี ผีก็ไม่ยอมไป คนกับผีเลยจับมือกันเปิดบ้านผีสิงให้คนมาเที่ยวเล่น แถมยังได้เห็นความน่ารักของผีบ้านนี้มากขึ้นทุกวันจนเกิดเป็นความรัก"
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
     'fall guy': {
         title: 'Fall Guy',
         poster: '/Photo/fall guy --1.jpg',
         video: '/Video/Fall Guy.mp4',
         description: "เรื่องย่อ The Fall Guy สตันท์แมนคนจริงเขาคือ โคลต์ ซีเวอร์ส นักแสดงสตันท์แมนที่เลือกจะผละตัวและออกจากอาชีพนี้ไปเมื่อปีก่อน เพื่อใส่ใจกับเรื่องสุขภาพกายและสุขภาพจิตใจของเขา แต่เขากลับถูกทาบทามให้กลับมารับหน้าที่อีกครั้ง หลังจากที่ดาราหนังที่สตูดิโอชื่อดังได้วางตัวเอาไว้และทุ่มทุนสร้างอย่างมหาศาลได้หายตัวไป การจึงต้องค้นหาและเรียกคืนจิตวิญญาณแห่งอาชีพของตัวเองกลับมาอีกครั้ง"
     },
     'supparoi': {
         title: 'Supparoi (2024)',
         poster: '/Photo/Supperroi.jpg',
         video: '/Video/Supa.mp4',
         description: "เรื่องย่อหนัง สัปเหร่อสัปเหร่อ เป็นเรื่องราวที่เกิดขึ้นในหมู่บ้านโนนคูณในจักรวาลไทบ้าน เล่าถึงชีวิต เจิด เด็กหนุ่มวัย 25 ปีที่เรียนจบกฎหมาย 7-8 ปี มีพ่อทำอาชีพ สัปเหร่อ เขาหวังจะไปสอบเป็นทนายหรือปลัดอำเภอ แต่ต้องมาช่วยพ่อเป็นสัปเหร่อ เพราะพ่อมีอาการป่วยจนต้องมาช่วยพ่อทำงาน แต่ลังเลเพราะเกิดเป็นคนที่กลัวผีมากๆ และต้องมาทำงานกับศพ"
     },
     'twisters': {
         title: 'Twisters (2024)',
         poster: '/Photo/Twisters Movie Poster.jpg 1.jpg',
         video: '/Video/Twisters.mp4',
         description: "เรื่องย่อ : Twisters หนังว่าด้วยเรื่องราวของ เคท คูเปอร์ นักล่าพายุที่เคยเผชิญหน้ากับพายุทอร์นาโดในช่วงเรียนมหาวิทยาลัย ตอนนี้เธอกำลังศึกษารูปแบบของพายุบนหน้าจออย่างปลอดภัยในนิวยอร์ก ซิตี แต่แล้วก็มีเหตุให้ต้องออกไปทำงานภาคสนามเพื่อทดสอบระบบติดตามพายุสุดล้ำ ซึ่งที่นั่นเธอได้บังเอิญพบกับไทเลอร์ โอเวนส์ ซูเปอร์สตาร์โซเชียลมีเดียผู้มีเสน่ห์และบ้าบิ่น ที่ประสบความสำเร็จในการโพสต์การผจญภัยไล่ล่าพายุไปพร้อมกับทีมของเขา ยิ่งอันตรายมากเท่าไรก็ยิ่งดี"
     },
     'wiman': {
         title: 'Wimannuam (2024)',
         poster: '/Photo/Wiman.webp',
         video: '/Video/Wiman.mp4',
         description: "เรื่องย่อ วิมานหนาม ภาพยนตร์ดราม่าทริลเลอร์ ค่าย จีดีเอช ร่วมกับ ใจ สตูดิโอ เมื่อบ้านพร้อมสวนทุเรียน ที่ควรเป็น ‘วิมาน’ ความรักของชายสองคน ถูกช่วงชิงไปด้วยกฎหมาย การขุด ‘หนาม’ ในตัว เพื่อปกป้องและทำลาย จึงเริ่มต้นขึ้น นำแสดงโดย เจฟ ซาเตอร์, อิงฟ้า วราหะ 22 สิงหาคมนี้ ในโรงภาพยนตร์"
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
