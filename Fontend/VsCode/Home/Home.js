document.addEventListener('DOMContentLoaded', function() {
    const trendingShows = document.querySelector('.trending-shows'); // ใช้ querySelector แทน getElementById
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const playButton = document.getElementById('play-button');
    
    document.addEventListener('mousedown', () => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.transform = 'scale(0.8)';
        }
    });
    
    document.addEventListener('mouseup', () => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.transform = 'scale(1)';
        }
    });

    // การจัดการกับการคลิกที่รายการภาพยนตร์
    const movieItems = document.querySelectorAll(".show-item");
    movieItems.forEach(item => {
        item.addEventListener('click', () => {
            const movieTitle = item.getAttribute('data-title').toLowerCase();
            const movieDescription = document.getElementById('movie-description-text');
            
            if (movies[movieTitle]) {
                document.getElementById('movie-video').src = movies[movieTitle].video;
                document.getElementById('movie-poster').src = movies[movieTitle].poster;
                movieDescription.textContent = movies[movieTitle].description;
            } else {
                movieDescription.textContent = "Movie not found!";
            }
        });
    });

    // การเลื่อนแนวนอนในส่วน trending-shows
    const scrollAmount = 300; // จำนวนพิกเซลในการเลื่อนสำหรับแต่ละคลิก

    prevButton.addEventListener('click', () => {
        trendingShows.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        trendingShows.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // การเล่นวิดีโอ (ปุ่ม play)
    playButton.addEventListener('click', () => {
        alert("The Movie is about to play!");
    });

   // ข้อมูลภาพยนตร์
 const movies = {
    "deadpool 3": {
         video: "/Video/Deadpool & Wolverine.mp4",
         poster: "/Photo/Deadpool & Wolverine (2024).jpg",
         description: "เรื่องย่อ Marvel Studios' Deadpool & Wolverine : ขณะที่ วูลฟ์เวอร์รีน ผู้เหนื่อยล้ากำกังฟื้นฟูอาการบาดเจ็บของตนเอง เขาก็ได้มาพบกับจอมพูดมากอย่าง เดดพูล ผู้ที่เดินทางข้ามเวลามายังอนาคตเพื่อที่จะรักษามิตรสหายที่ยิ่งใหญ่ที่สุดของเขา ด้วยความหวังที่ว่าจะสามารถผูกมิตรกับเจ้าสัตว์ร้ายและร่วมมือกันเพื่อนที่จะปราบศัตรูที่พวกเขามีร่วมกัน "
     },
     "alien": {
         video: "/Video/Alien Romurus.mp4",
         poster: "/Photo/ALIEN_ ROMULUS (2024) 🔥.jpg 2.jpg",
         description: "เรื่องย่อของ Alien Romulus จะว่าถึงเรื่องราวของกลุ่มนักล่าอาณานิคม และคนเก็บขยะจำนวน 20 คน ต้องเผชิญหน้ากับซีโนมอร์ฟ ในสถานีอวกาศที่ทรุดโทรม ซึ่งผู้กำกับเฟเด้ อัลวาเรซ บอกว่าภาคนี้จะโฟกัสไปที่ตัวละครอายุน้อย ที่นำแสดงโดย Cailee Spaeny และ Isabela Merced"
     },
     "anong": {
         video: "/Video/anong.mp4",
         poster: "/Photo/anong 1.jpg 2.webp",
         description: "“โจ” เกมเมอร์หนุ่มดวงตก ได้รับมรดกเป็นบ้านที่มีผีเจ้าของบ้านคนเก่า “อนงค์” แถมมาด้วย แต่คนก็ไม่ยอมหนี ผีก็ไม่ยอมไป คนกับผีเลยจับมือกันเปิดบ้านผีสิงให้คนมาเที่ยวเล่น แถมยังได้เห็นความน่ารักของผีบ้านนี้มากขึ้นทุกวันจนเกิดเป็นความรัก"
     },
     "furiosa": {
         video: "/Video/furiosa.mp4",
         poster: "/Photo/Furiosa A Mad Max Saga (2024).jpg 2.jpg",
         description: "เรื่องย่อ Furiosa: A Mad Max Saga ฟูริโอซ่า มหากาพย์ แมด แม็กซ์ เมื่อโลกล่มสลาย สาวน้อย ฟิรูโอซ่า ถูกแย่งชิงจากกลุ่มแมนนี มาเธอร์ส ผู้รักสันติ และตกไปอยู่ในมือของ ไบค์เกอร์ ฮอร์ด ผู้ยิ่งใหญ่ ที่นำโดย วอร์ลอร์ด เดเมนตัส พวกเขากวาดล้างดินแดนรกร้างและพบเข้ากับป้อมปราการซึ่งมี อิมมอร์ทัล โจ เป็นประธาน ในขณะที่ ไทรแอนท์ ทั้งสองทำสงครามเพื่อแย่งชิงอำนาจ ฟูริโอซ่าจะต้องเอาชีวิตรอดจากการทดลองมากมาย ในขณะเดียวกันเธอก็ต้องหาทางกลับบ้านให้ได้"
     },
     'a quiet place day one': {
         title: 'A quiet Place Day One (2024)',
         poster: '/Photo/A q 1.jpg 4.jpg',
         video: '/Video/A Quiet Place Day one.mp4',
         description: "เรื่องย่อ A Quiet Place: Day One ดินแดนไร้เสียง วันที่หนึ่งย้อนกลับไปสู่ปฐมบทของทุกสิ่งอย่าง เมื่อมหานครนิวยอร์กถูกรุนรานโดยสิ่งมีชีวิตจากต่างดาวที่ออกตามล่าด้วยเสียง หญิงสาวที่ชื่อว่า แซมมี่ ก็พยายามที่จะเอาชีวิตรอดจากมหันตภัยในครั้งนี้"
     },
     'abigail': {
         title: 'Abigail (2024)',
         poster: '/Photo/ab 1.jpg',
         video: '/Video/Abigail.mp4',
         description: "เรื่องย่อ Abigail ภายหลังจากที่แก๊งอาชญากรได้ก่อเหตุลักพาตัวหนูน้อยนักบัลเลต์ ที่เป็นลูกสาวมหาเศรษฐีผู้ทรงอิทธิพลของเมือง ด้วยการจับมากักขังเอาไว้ในห้องใต้ดินชื้น ๆ ใต้ตฤหาสน์อันโดดเดี่ยวแห่งหนึ่ง เพื่อหวังจะมาเรียกค่าไถ่ แต่พวกเขาไม่ล่วงรู้มาก่อเหตุว่าเด็กหญิงตัวน้อย ๆ ที่ชื่อว่า อบิเกล เธออาจจะไม่ใช่คนอ่อนแอที่พวกเขาคิด"
     },
     'the crow': {
         title: 'The Crow (2024)',
         poster: '/Photo/Crow 1.jpg',
         video: '/Video/The Crow.mp4',
         description: "เรื่องย่อ The Crow อีกาพญายม เอริค ดราเวน ผู้ซึ่งมีชีวิตที่ได้รับความไม่ยุติธรรมและถูกพรากสิ่งสำคัญในชีวิตไปจากการรุมทำร้าย เขาเสียชีวิตไปแต่แล้วในเวลาต่อมาเขาฟื้นคืนชีพขึ้นมาพร้อมกับอีกาและเขาพร้อมที่จะล้างแค้นให้กับสิ่งที่เขาได้สูญเสียไป"
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
     'dune': {
         title: 'Dune',
         poster: '/Photo/Dune --1.jpg',
         video: '/Video/Dune 1.mp4',
         description: "เรื่องย่อ : Dune เรื่องราวในอาณาจักรกาแลคซีอันไกลโพ้น ราชวงศ์อาทรีเดสของพอลได้มารับหน้าที่ปกครองดาวทะเลทรายชื่ออาร์ราคีสซึ่งมีทรัพยากรที่สำคัญที่สุดในจักรวาลที่เรียกว่า สไปรย์ ซึ่งช่วยในการเดินทางข้ามจักรวาล ขณะเดียวกัน จักรพรรดิแห่งกาแลคซีก็หวั่นเกรงต่อราชวงศ์อาทรีเดสที่เริ่มเป็นที่นิยมชมชอบของราชวงศ์อื่น ๆ จึงได้ร่วมมือกันกับราชวงศ์ที่เป็นปรปักษ์วางแผนลอบสังหารตระกูลอาทรีเดส แต่พอลกับเลดี้ เจสซิกา แม่ของเขาหนีไปได้ และเข้าร่วมกลุ่มกับชาวฟรีแมนที่เป็นชนพื้นเมือง"
     },

     'dune part two': {
         title: 'Dune Part Two',
         poster: '/Photo/Dune --2.jpg',
         video: '/Video/Dune Part 2.mp4',
         description: "เรื่องย่อ : Dune Part Two เรื่องราวการผจญภัยของ พอล อะเทรดีส (แสดงโดย ทิโมธี ชาลาเมต์) แห่งอะเทรดีส ที่ต้องเดินทางออกจากมาตุภูมิบ้านเกิด ท่ามกลางกับดักทางการเมืองและสงครามแสวงหาทรัพยากรในโลกยุคอนาคต โดยในภาคนี้พอลจะต้องพิสูจน์ตัวเองเอาชนะความกลัวด้วยการเข้าร่วมกับ เดอะเฟรเมน ชนเผ่าพื้นเมืองที่มีความสามารถในการเรียกหนอนทะเลทรายยักษ์ได้ เพื่อผ่านด่านทดสอบใน ดูน โดยมีเรื่องราวของโชคชะตาและคำพยากรณ์ที่กำหนดผู้ถูกเลือก"
     },
     'exhuma': {
         title: 'Exhuma (2024)',
         poster: '/Photo/Ex 1.jpg',
         video: '/Video/Exhuma.mp4',
         description: "เรื่องย่อ EXHUMA ขุดมันขึ้นมาจากหลุม ภาพยนตร์ดราม่า ระทึกขวัญ-สยองขวัญเหนือธรรมชาติลึกลับ เรื่องราวของหมอผีที่ทำพิธีขุดสุสาน เมื่อเริ่มการขุด พวกเขากําลังเผชิญหน้ากับบางสิ่งที่น่ากลัวและเป็นลางร้ายมากกว่าที่พวกเขาคาดไว้ ผลงานกำกับโดย จาง แจ-ฮยอน (Jang Jae-hyun) (ผลงานที่ผ่านมา Svaha: The Sixth Finger) นำแสดงโดย ชเว มิน-ชิก (Choi Min-sik), คิม โก-อึน (Kim Go-eun), ยู แฮ-จิน (Yoo Hae-jin) และ อี โด-ฮยอน (Lee Do-hyun) เข้าฉาย 21 มีนาคม 2024"
     },
     'fall guy': {
         title: 'Fall Guy',
         poster: '/Photo/fall guy --1.jpg',
         video: '/Video/Fall Guy.mp4',
         description: "เรื่องย่อ The Fall Guy สตันท์แมนคนจริงเขาคือ โคลต์ ซีเวอร์ส นักแสดงสตันท์แมนที่เลือกจะผละตัวและออกจากอาชีพนี้ไปเมื่อปีก่อน เพื่อใส่ใจกับเรื่องสุขภาพกายและสุขภาพจิตใจของเขา แต่เขากลับถูกทาบทามให้กลับมารับหน้าที่อีกครั้ง หลังจากที่ดาราหนังที่สตูดิโอชื่อดังได้วางตัวเอาไว้และทุ่มทุนสร้างอย่างมหาศาลได้หายตัวไป การจึงต้องค้นหาและเรียกคืนจิตวิญญาณแห่งอาชีพของตัวเองกลับมาอีกครั้ง"
     },
     'kong': {
         title: 'Godzilla Versus Kong The New Emprie (2024)',
         poster: '/Photo/kong 1.jpg',
         video: '/Video/Kong.mp4',
         description: "อีกหนึ่งการขยายจักรวาลมอนสเตอร์เวิร์ส หลังจากที่ปูทางไว้แล้วใน Kong: Skull Island (2017) และ Godzilla vs. Kong (2021) โดยครั้งนี้ได้ อดัม วิงการ์ด (Adam Wingard) รับหน้าที่พาทุกคนไปร่วมผจญภัยใน Godzilla x Kong: The New Empire ก็อดซิลล่า ปะทะ คอง 2 อาณาจักรใหม่ ซึ่งในครั้งนี้คองผู้ยิ่งใหญ่และก็อดซิลล่าผู้น่าสะพรึงต้องเผชิญกับภัยคุกคามขนาดมหึมาที่ซ่อนอยู่ภายในโลกของเรา และยังท้าทายการดำรงอยู่ของพวกมันรวมถึงพวกเราด้วย หนังจะเจาะลึกไปถึงประวัติศาสตร์และการกำเนิดของเหล่าไททัน เช่นเดียวกับความลึกลับของ Skull Island และที่อื่น ๆ ขณะเดียวกันก็เปิดเผยการต่อสู้ในตำนานที่ช่วยสร้างสิ่งมีชีวิตที่ไม่ธรรมดาเหล่านี้และผูกมัดพวกมันไว้กับมนุษยชาติตลอดไป"
     },
     'ghost': {
         title: 'GhostBuster Frozen Empire (2024)',
         poster: '/Photo/ghost 1.jpg',
         video: '/Video/Ghost.mp4',
         description: "เรื่องย่อ Ghostbuster: Frozen Empire โกสต์บัสเตอร์ส: มหันตภัยเมืองเยือกแข็งครอบครัวสแปงเลอร์จะกลับมาสู่ที่ที่ทุกอย่างเริ่มต้นขึ้นอีกครั้ง ซึ่งก็คือสถานีดับเพลิงที่เราคุ้นเคยกันดี โดยพวกเขาและเธอจะมาร่วมทีมกับบริษัทกำจัดผีชุดดั้งเดิม ที่ได้ทำการพัฒนาศูนย์วิจัยลับกำจัดผีให้พัฒนาขึ้นไปอีกขั้นเป็นที่เรียบร้อยแล้ว แต่เมื่อการค้นพบวัตถุโบราณกลับกลายเป็นการปลดปล่อยพลังชั่วร้ายออกมา เหล่าโกสต์บัสเตอร์ทั้งหน้าเก่าและหน้าใหม่จึงต้องร่วมมือกันเพื่อปกป้องบ้านของพวกเขาและเธอ และช่วยเหลือโลกใบนี้ไม่ให้เข้าสู่ยุคนํ้าแข็งครั้งที่สอง"
     },
     'ma': {
         title: 'Ranhma (2024)',
         poster: '/Photo/ma 1.jpg',
         video: '/Video/Ma.mp4',
         description: "เรื่องย่อ หลานม่า (LAHN MAH) ภาพยนตร์ไทยแนวครอบครัวดราม่าจากค่าย GDH มีแรงบันดาลใจจากเรื่องจริงที่มีทุกครอบครัว ภาพยนตร์บันทึกช่วงเวลามีค่าของสิ่งที่เรียกว่า ครอบครัว ผลงานภาพยนตร์เรื่องแรกของ บิวกิ้น พุฒิพงศ์ มีกำหนดเข้าฉาย 4 เมษายน 2024"
     },
     'kungfu': {
         title: 'Kungfu Panda 4 (2024)',
         poster: '/Photo/Panda 1.jpg',
         video: '/Video/Kungfu Panda 4.mp4',
         description: "เรื่องย่อ Kung Fu Panda 4 กังฟูแพนด้า 4 หลังจากการผจญภัยท้ามฤตยูเพื่อปราบวายร้ายระดับโลกมาถึงสามครั้งสามคราด้วยความกล้าหาญที่หาตัวจับยากและทักษะศิลปะการต่อสู้สุดบ้าคลั่งของเขา โป นักรบมังกร ก็ถูกชะตากรรมลิขิตให้...พักผ่อนเสียที หรือถ้าจะพูดให้เฉพาะเจาะจงกว่านั้น เขาได้รับการทาบทามให้เป็นผู้นำทางจิตวิญญาณแห่งหุบเขาสันติภาพ ซึ่งทำให้เกิดปัญหาที่ชัดเจนหลายประการด้วยกัน ข้อแรก โปรู้เรื่องเกี่ยวกับการเป็นผู้นำทางจิตวิญญาณมากพอๆ กับที่เขารู้เกี่ยวกับวิถีการลดน้ำหนักด้วยการกินแบบมนุษย์ยุคหิน และข้อสอง เขาต้องตามหาและฝึกฝนนักรบมังกรคนใหม่ให้ไวก่อนที่เขาจะเข้ารับตำแหน่งใหม่ที่สูงส่งของเขาได้"
     },
     'a hunting in venice': {
         title: 'A Hunting In Venice (2024)',
         poster: '/Photo/paoro 1.jpg',
         video: '/Video/A Hunting In Venice.mp4',
         description: " A Haunting in Venice ฆาตกรรมหลอนแห่งนครเวนิส หนังแนวสืบสวนสอบสวน พบกับอดีดนักสืบแอร์กูล ปัวโรต์ เมื่อเขามาพบแขกของงานเทศกาลฮาโลวีนคนหนึ่งถูกสังหารด้วยความบังเอิญ ก็ขึ้นอยู่กับอดีตนักสืบคนนี้แล้วที่จะกลับมาสืบสวนสอบสวนเปิดโปงตัวฆาตกรอีกครั้ง มาพบกับความท้าทายในการไขคดีปริศนาหาว่าใครคือฆาตกรไปพร้อม ๆ กัน"
     },
     'supparoi': {
         title: 'Supparoi (2024)',
         poster: '/Photo/Supperroi.jpg',
         video: '/Video/Supa.mp4',
         description: "เรื่องย่อหนัง สัปเหร่อสัปเหร่อ เป็นเรื่องราวที่เกิดขึ้นในหมู่บ้านโนนคูณในจักรวาลไทบ้าน เล่าถึงชีวิต เจิด เด็กหนุ่มวัย 25 ปีที่เรียนจบกฎหมาย 7-8 ปี มีพ่อทำอาชีพ สัปเหร่อ เขาหวังจะไปสอบเป็นทนายหรือปลัดอำเภอ แต่ต้องมาช่วยพ่อเป็นสัปเหร่อ เพราะพ่อมีอาการป่วยจนต้องมาช่วยพ่อทำงาน แต่ลังเลเพราะเกิดเป็นคนที่กลัวผีมากๆ และต้องมาทำงานกับศพ"
     },
     'trap': {
         title: 'Trap (2024)',
         poster: '/Photo/trap 1.jpg',
         video: '/Video/Trap.mp4',
         description: "เรื่องย่อ Trap เรื่องราวของพ่อและลูกสาววัยรุ่นไปคอนเสิร์ตเพลงป๊อปไอดอลชื่งดัง เลดี้ เรเวน แต่ไม่ทันไรพวกเขาก็ค้นพบว่า พวกเขาดันมาอยู่ท่ามกลางสถานการณ์อันน่ากลัว เมื่อตำรวจกำลังปิดพื้นที่ล้อมจับตัวฆาตกรต่อเนื่องที่ชื่อว่า บุชเชอร์"
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
     'term 3': {
         title: 'Term 3 (2024)',
         poster: '/Photo/term 3.webp',
         video: '/Video/Term 3.mp4',
         description: "ขอต้อนรับสู่ภาคเรียนสยองเทอมใหม่กับภาพยนตร์ไทยสยองขวัญแห่งปี ที่จะปลุกตำนานเรื่องเล่าและพิธีกรรม “บนบาน บายศรี ขอขมา” ในรั้วมหาวิทยาลัยของไทยให้หลอนสะพรึงสุดขีด"
     },
     'john 1': {
         title: 'John Wick (2014)',
         poster: '/Photo/John Wick 1.1.jpg',
         video: '/Video/John Wick 1.mp4',
         description: "จอห์น วิค (คีอานู รีฟส์) นักฆ่ามือ 1 ของวงการ ที่ตัดสินใจล้างมือจากโลกมืดและเริ่มต้นใช้ชีวิตใหม่อย่างเงียบสงบหลังจากภรรยาเสียชีวิต แต่ชีวิตของเขาไม่เป็นอย่างที่คิด เมื่อเขาถูกหมายหัวจากหัวหน้าแก๊งอาชญากรที่มีอำนาจที่สุดของนิวยอร์ค โดยมีนักฆ่าฝีมือฉกาจที่เคยเป็นเพื่อนสนิทที่สุดกับเขามารับหน้าที่ตามล่าตัวเขา ยอดนักฆ่าอย่าง จอห์น วิค จึงต้องทำทุกวิถีทางเพื่อหาคำตอบว่าเกิดอะไรขึ้นกับเขากันแน่ พวกมันต้องการตามล่าเขาไปทำไม และพร้อมจะเอาคืนชนิดกระสุนแลกกระสุน"
     },
     'john 2': {
         title: 'John Wick 2 (2017)',
         poster: '/Photo/John Wick 2.1.jpg',
         video: '/Video/John Wick 2.1.mp4',
         description: "John Wick: Chapter 2 จะเล่าเรื่องราวของ จอห์น วิค มือสังหารผู้เป็นตำนานที่ถูกบีบให้กลับมาทำงานอีกครั้งหลังจากเกษียณตัวเองไป เพราะอดีตเพื่อนร่วมงานได้วางแผนเข้าควบคุมองค์กรมือสังหารลับข้ามชาติ ด้วยความผูกพันธ์ดุจพี่น้องต่างสายเลือด จอห์น วิค ให้คำมั่นว่าจะช่วย เขาได้เดินทางไปยังกรุงโรม ที่ซึ่งเขาต้องเผชิญหน้ากับเหล่าบรรดานักฆ่าที่อันตรายที่สุดในโลก"
     },
     'john 3': {
         title: 'John Wick Parabellum (2019)',
         poster: '/Photo/John Wick 3.1.jpg',
         video: '/Video/John Wick 3.mp4',
         description: "John Wick 3: Parabellum ในภาคใหม่นี้ John Wick ต้องถูกคนทั้งโลกตามล่าด้วยค่าหัว $14 ล้านเหรียญ เนื่องจากเขาได้แหกกฎกลาง โดยการฆ่าคนในพื้นที่โรงแรมของ Continental และยิ่งคนที่เขาฆ่าคือสมาชิกระดับสูง เขาจึงต้องสู้และฆ่ากับศัตรูรอบด้านเพื่อหาทางหลบหนีออกจากเมืองนิวยอร์ก"
     },
     'john 4': {
         title: 'John Wick Chapter 4 (2023)',
         poster: '/Photo/John Wick 4.1.jpg',
         video: '/Video/John Wick 4.mp4',
         description: "เรื่องย่อ John Wick Chapter 4 พาผู้ชมไปสู่จักรวาลนักฆ่าที่ถูกขยายขอบเขตยิ่งกว่าเดิม หลักจากที่ จอห์น วิค (คีอานู รีฟส์) เอาตัวรอดจากนักฆ่าและการตามล่าจากสภาสูงมาได้ เขาได้ค้นพบว่าหนทางรอดเดียวที่จะทำให้ชีวิตเขาเป็นอิสระ คือการต้องกลับมาเผชิญหน้ากับชะตากรรมที่รอเขาอยู่และเป้าหมายเดียวคือต้องโค่นสภาสูงให้สำเร็จ โดยครั้งนี้เขาต้องรับมือกับศัตรูอำมหิตรายใหม่ที่มีอิทธิพลกว้างขวางไปทั่ววงศ์วานนักฆ่าทั้งโลก ผู้พร้อมจะเปลี่ยนมิตรให้กลายเป็นศัตรู เปลี่ยนลมหายใจให้กลายเป็นร่างไร้วิญญาณ เปิดฉากการตามล่าครั้งใหม่ที่กินอาณาเขตแค้นไปถึง 3 ทวีป ทั้งในนิวยอร์ก ปารีส เบอร์ลิน และโอซาก้า"
     },
 };

    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.toLowerCase();
        const matchedMovie = Object.keys(movies).find(movie => movie.toLowerCase().includes(searchQuery));

        if (matchedMovie) {
            document.getElementById('movie-video').src = movies[matchedMovie].video;
            document.getElementById('movie-poster').src = movies[matchedMovie].poster;
            document.getElementById('movie-description-text').textContent = movies[matchedMovie].description;
        } else {
            alert("Movie not found!");
        }
    });
});



 


