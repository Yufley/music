
const genreScores = {
    heavy: 0,
    doom: 0,
    black: 0,
    death: 0,
    altMetal: 0,
    progMetal: 0,
    punkRock: 0,
    altRock: 0,
    progRock: 0,
    grungeRock: 0,
    garageRock: 0,
    anadoluRock: 0,
    hardRock: 0,
    gangstaRap: 0,
    altHipHop: 0,
    trap: 0,
    emoRap: 0,
    nuMetal: 0,
    lofi: 0,
    pop: 0,
    hiphop: 0,
    indie: 0,
    rnb: 0
};


const genreNames = {
    heavy: "Heavy Metal",
    doom: "Doom Metal",
    black: "Black Metal",
    death: "Death Metal",
    altMetal: "Alternative Metal",
    progMetal: "Progressive Metal",
    punkRock: "Punk Rock",
    altRock: "Alternative Rock",
    progRock: "Progressive Rock",
    grungeRock: "Grunge Rock",
    garageRock: "Garage Rock",
    anadoluRock: "Anadolu Rock",
    hardRock: "Hard Rock",
    gangstaRap: "Gangsta Rap",
    altHipHop: "Alternative Hip Hop",
    trap: "Trap",
    emoRap: "Emo Rap",
    nuMetal: "Nu Metal",
    lofi: "Lo-Fi",
    pop: "Pop",
    hiphop: "Hip Hop",
    indie: "Indie",
    rnb: "R&B"
};


const genreRepresentatives = {
    heavy: { 
        artist: "Iron Maiden", 
        song: "The Number of the Beast",
        additionalArtists: ["Judas Priest", "Black Sabbath", "Metallica"]
    },
    doom: { 
        artist: "Candlemass", 
        song: "Solitude",
        additionalArtists: ["My Dying Bride", "Electric Wizard", "Sleep"]
    },
    black: { 
        artist: "Mayhem", 
        song: "Freezing Moon",
        additionalArtists: ["Burzum", "Darkthrone", "Emperor"]
    },
    death: { 
        artist: "Death", 
        song: "Scream Bloody Gore",
        additionalArtists: ["Cannibal Corpse", "Morbid Angel", "Obituary"]
    },
    altHipHop: { 
        artist: "A Tribe Called Quest", 
        song: "Electric Relaxation",
        additionalArtists: ["Digable Planets", "Death Grips", "Jinsang"]
    },
    altMetal: { 
        artist: "Tool", 
        song: "Schism",
        additionalArtists: ["Three Days Grace", "Deftones", "Slipknot"]
    },
    progMetal: { 
        artist: "Opeth", 
        song: "Burden",
        additionalArtists: ["Gojira", "Dream Theater", "Mastodon"]
    },
    punkRock: { 
        artist: "Green Day", 
        song: "Suzie Chapstick",
        additionalArtists: ["The Clash", "Sex Pistols", "Bad Religion"]
    },
    altRock: { 
        artist: "Nirvana", 
        song: "Heart-Shaped Box",
        additionalArtists: ["Radiohead", "Guns n Roses", "Soundgarden"]
    },
    progRock: { 
        artist: "Pink Floyd", 
        song: "Hey You",
        additionalArtists: ["Yes(jojo referance?)", "Genesis", "King Crimson"]
    },
    grungeRock: { 
        artist: "Alice in Chains", 
        song: "All I Am",
        additionalArtists: ["Nirvana", "Soundgarden", "Pearl Jam"]
    },
    garageRock: { 
        artist: "The White Stripes", 
        song: "Seven Nation Army",
        additionalArtists: ["The Strokes", "Arctic Monkeys", "The Black Keys"]
    },
    anadoluRock: { 
        artist: "Cem Karaca", 
        song: "Resimdeki Gözyaşları",
        additionalArtists: ["Barış Manço", "Erkin Koray", "Duygu Öy"]
    },
    hardRock: { 
        artist: "AC/DC", 
        song: "Back in Black",
        additionalArtists: ["Led Zeppelin(jojo referance?)", "Ozzy Osbourne", "Aerosmith"]
    },
    gangstaRap: { 
        artist: "N.W.A", 
        song: "Straight Outta Compton",
        additionalArtists: ["2Pac", "Biggie", "Eazy-E"]
    },
    nuMetal: { 
        artist: "System of a Down", 
        song: "Toxicity",
        additionalArtists: ["Limp Bizkit", "Disturbed", "Link in Park"]
    },
    trap: { 
        artist: "Future", 
        song: "Mask Off",
        additionalArtists: ["Migos", "Travis Scott", "Lil Uzi Vert"]
    },
    emoRap: { 
        artist: "Lil Peep", 
        song: "Star Shopping",
        additionalArtists: ["XXXTentacion", "Juice WRLD", "Post Malone"]
    },
    lofi: { 
        artist: "Nujabes", 
        song: "Aruarian Dance",
        additionalArtists: ["J Dilla", "Brockhampton", "Tyler Cole"]
    },
    pop: { 
        artist: "Michael Jackson", 
        song: "Billie Jean",
        additionalArtists: ["Beyonce", "Dua Lipa", "The Weeknd"]
    },
    hiphop: { 
        artist: "Kanye West", 
        song: "Brothers",
        additionalArtists: ["Drake", "Kendrick Lamar", "Limp Bizkit"]
    },
    indie: { 
        artist: "Arctic Monkeys", 
        song: "Do I Wanna Know?",
        additionalArtists: ["Tame Impala", "The Strokes", "Vampire Weekend"]
    },
    rnb: { 
        artist: "The Weeknd", 
        song: "Blinding Lights",
        additionalArtists: ["Frank Ocean", "SZA", "Khalid"]
    }
};


const questions = [
    {
        question: "Müzik dinlerken hangi ruh halinde hissedersin?",
        options: [
            {
                text: "Agresif ve güçlü hissettiren, beni bam bam yapan müzikler tercih ederim",
                scores: { heavy: 6, doom: 4, black: 5, death: 6, hardRock: 6, nuMetal: 5, gangstaRap: 3, drill: 4, hiphop: 3 }
            },
            {
                text: "Melankolik ve derin duygular arıyorum",
                scores: { doom: 5, black: 4, emoRap: 5, altRock: 4, progRock: 4, indie: 5, lofi: 4, grungeRock: 4, rnb: 5 }
            },
            {
                text: "Enerjik ve coşkulu müzikler dinlemeyi tercih ederim",
                scores: { pop: 6, hiphop: 5, trap: 5, punkRock: 5, garageRock: 4, altMetal: 2, drill: 5, hardRock: 4 }
            },
            {
                text: "Bazen sakin ve düşünceli bazen çılgınca enstürman cümbüşünün yaşandığı bir atmosfer arıyorum",
                scores: { lofi: 3, progMetal: 6, progRock: 6, indie: 4, rnb: 3, altHipHop: 3, anadoluRock: 4 }
            }
        ]
    },
    {
        question: "Hangi enstrüman sesini daha çok seviyorsun?",
        options: [
            {
                text: "Dehşet ötesi gitar riffleri",
                scores: { heavy: 6, death: 4, black: 3, altMetal: 4, hardRock: 5, doom: 2, nuMetal: 3, grungeRock: 5 }
            },
            {
                text: "Bas gitarın ve baterinin derinden gelen sesi",
                scores: { nuMetal: 5, trap: 5, hiphop: 4, rnb: 3, lofi: 3, gangstaRap: 4, altHipHop: 4, drill: 5 }
            },
            {
                text: "Akustik gitar ve piyano",
                scores: { indie: 5, altRock: 4, progRock: 5, anadoluRock: 6, lofi: 3, emoRap: 3, grungeRock: 3, hiphop: 3 }
            },
            {
                text: "Elektronik sesler ve benzeri",
                scores: { pop: 5, altHipHop: 5, progMetal: 3, trap: 4, lofi: 4, rnb: 3, garageRock: 4, drill: 4 }
            }
        ]
    },
    {
        question: "Hangi tempo seni daha çok etkiler?",
        options: [
            {
                text: "Çok hızlı ve agresif",
                scores: { death: 5, black: 5, punkRock: 5, nuMetal: 4, heavy: 5, hardRock: 4, drill: 5, gangstaRap: 3, hiphop: 3 }
            },
            {
                text: "Orta tempo, ritimli",
                scores: { altRock: 5, hiphop: 3, pop: 3, garageRock: 4, altMetal: 3, indie: 3, anadoluRock: 4, grungeRock: 4 }
            },
            {
                text: "Yavaş ve ağır",
                scores: { doom: 5, progRock: 5, emoRap: 4, lofi: 5, rnb: 4, grungeRock: 3 }
            },
            {
                text: "Değişken tempo, dinamik",
                scores: { progMetal: 6, progRock: 6, altHipHop: 4, altMetal: 4, indie: 3, hardRock: 3 }
            }
        ]
    },
    {
        question: "Vokal tarzında neyi tercih edersin?",
        options: [
            {
                text: "AAAAAAALLAHH diyip böğüren lavukların sesi gerçekten beni derinden etkiliyor",
                scores: { death: 5, doom: 4, heavy: 5, altMetal: 6, nuMetal: 4, grungeRock: 3, black: 4 }
            },
            {
                text: "Güçlü ve yüksek sesli olması önemli",
                scores: { heavy: 5, hardRock: 6, anadoluRock: 4, altRock: 3, pop: 3, punkRock: 4, black: 2 }
            },
            {
                text: "Melodik ve duygusal olmalı",
                scores: { indie: 6, altRock: 5, progRock: 4, emoRap: 4, pop: 4, rnb: 7, grungeRock: 4, trap: 3, black: 2 }
            },
            {
                text: "Rap hip hop tarzı hızlı olsun",
                scores: { hiphop: 7, trap: 4, gangstaRap: 7, altHipHop: 7, emoRap: 3, drill: 6, nuMetal: 3 }
            }
        ]
    },
    {
        question: "Şarkı sözlerinde ne olmasını tercih ederdin?",
        options: [
            {
                text: "Karanlık ve felozofik temalar",
                scores: { black: 5, doom: 5, death: 4, progMetal: 4, altMetal: 4, emoRap: 3, grungeRock: 4, hardRock: 2 }
            },
            {
                text: "Sosyal eleştiri ve isyan",
                scores: { punkRock: 7, altRock: 4, gangstaRap: 5, altHipHop: 4, anadoluRock: 3, nuMetal: 3, drill: 4, grungeRock: 5, hiphop: 3 }
            },
            {
                text: "Aşk ve romantik duygular",
                scores: { pop: 5, rnb: 5, indie: 4, emoRap: 4, altRock: 3, hiphop: 2, hardRock: 2, garageRock: 4 }
            },
            {
                text: "Başarı ve kendine güven",
                scores: { hiphop: 6, trap: 6, gangstaRap: 4, pop: 3, nuMetal: 4, altHipHop: 6, drill: 5 }
            }
        ]
    },
    {
        question: "Belirli bir zamandaki müzik akımıyla şu an ki müzikler yer değiştiricek, hangisi gelsin?",
        options: [
            {
                text: "70-80'ler klasik rock dönemi",
                scores: { hardRock: 6, heavy: 6, progRock: 5, anadoluRock: 5, doom: 3, garageRock: 3, altRock: 3 }
            },
            {
                text: "90'lar alternatif/grunge dönemi",
                scores: { grungeRock: 6, altRock: 5, altMetal: 5, indie: 3, punkRock: 3, doom: 3, nuMetal: 4 }
            },
            {
                text: "2000'ler pop ve rock karışımı",
                scores: { pop: 4, altRock: 4, altMetal: 5, emoRap: 3, indie: 4, garageRock: 4, nuMetal: 4, black: 3, hiphop: 3 }
            },
            {
                text: "2010'lar sonrası modern ses",
                scores: { trap: 5, nuMetal: 6, altHipHop: 6, lofi: 4, emoRap: 4, pop: 3, drill: 6 }
            }
        ]
    },
    {
        question: "Hangi müzik atmosferini tercih edersin?",
        options: [
            {
                text: "Karanlık ve kasvetli",
                scores: { black: 5, doom: 5, death: 5, emoRap: 4, altMetal: 3, nuMetal: 4, grungeRock: 4 }
            },
            {
                text: "Enerjik ve coşkulu",
                scores: { punkRock: 6, hardRock: 5, garageRock: 4, hiphop: 5, pop: 5, heavy: 6, drill: 4, death: 2 }
            },
            {
                text: "Duygusal ve içten",
                scores: { indie: 5, altRock: 5, rnb: 4, emoRap: 4, progRock: 3, anadoluRock: 3, grungeRock: 4, black: 2 }
            },
            {
                text: "Rahat ve chill",
                scores: { lofi: 5, altHipHop: 4, indie: 4, rnb: 4, pop: 3, trap: 3, gangstaRap: 2 }
            }
        ]
    },
    {
        question: "Konserde hangi deneyimi yaşamak istersin?",
        options: [
            {
                text: "Yer gök titreten brutal vokallerle kafa sallamak",
                scores: { death: 4, black: 4, doom: 4, heavy: 5, altMetal: 4, progMetal: 3, hardRock: 4, grungeRock: 3, nuMetal: 3 }
            },
            {
                text: "Kalabalığın hep bir ağızdan söylediği sözlere eşlik etmek",
                scores: { emoRap: 5, indie: 5, altRock: 4, pop: 4, rnb: 4, anadoluRock: 3, punkRock: 4, grungeRock: 4 }
            },
            {
                text: "Hareketli beatlerle ortamın ruhunu yakalayıp coşmak",
                scores: { hiphop: 6, trap: 5, lofi: 4, altHipHop: 5, nuMetal: 3, pop: 3, drill: 5, gangstaRap: 5 }
            },
            {
                text: "Sahnedeki müzisyenleri dakikalarca sololarda izlemek mmh",
                scores: { progRock: 6, progMetal: 5, garageRock: 4, grungeRock: 3, heavy: 3, doom: 2, hardRock: 4, death: 1 }
            }
        ]
    },
    {
        question: "Hangi müzik dinleme saatini tercih edersin?",
        options: [
            {
                text: "Gece geç saatler",
                scores: { black: 4, doom: 4, lofi: 5, emoRap: 4, altRock: 3, progRock: 3, grungeRock: 3, drill: 3, death: 2 }
            },
            {
                text: "Sabah erken saatler",
                scores: { pop: 5, hiphop: 4, indie: 4, altHipHop: 3, rnb: 3, lofi: 3, hardRock: 3 }
            },
            {
                text: "Öğleden sonra",
                scores: { garageRock: 5, altRock: 4, punkRock: 4, grungeRock: 5, indie: 3, pop: 3, drill: 4, death: 2, hardRock: 3 }
            },
            {
                text: "Akşam saatleri",
                scores: { progMetal: 5, progRock: 3, heavy: 5, anadoluRock: 4, altMetal: 4, rnb: 3, gangstaRap: 3 }
            }
        ]
    },
    {
        question: "Hangi müzik aktivitesini daha çok seviyorsun?",
        options: [
            {
                text: "Şarkı sözlerini ezbere bilmek",
                scores: { pop: 5, hiphop: 5, gangstaRap: 4, altRock: 4, punkRock: 4, indie: 3, drill: 4, anadoluRock: 3 }
            },
            {
                text: "Enstrümental kısımları dinlemek",
                scores: { progMetal: 5, progRock: 5, heavy: 5, doom: 4, altMetal: 5, lofi: 3, hardRock: 4, grungeRock: 3, anadoluRock: 2, nuMetal: 2 }
            },
            {
                text: "Şarkıları enstrümansız (sadece vokal/beat) dinleyip remix yapmayı hayal etmek",
                scores: { trap: 6, nuMetal: 5, hiphop: 4, garageRock: 4, altHipHop: 3, rnb: 3, anadoluRock: 3, drill: 5 }
            },
            {
                text: "Müziğin duygusal atmosferini hissetmek",
                scores: { black: 5, doom: 5, emoRap: 4, altRock: 4, indie: 4, progRock: 3, grungeRock: 4, black: 4, anadoluRock: 4, nuMetal: 2 }
            }
        ]
    },
    {
        question: "2+2 kaç yapar?",
        options: [
            {
                text: "مرحباً، اسمي نيغا. هل يمكننا اللقاء من فضلك؟",
                scores: { altHipHop: 5, trap: 3, nuMetal: 4, emoRap: 5, indie: 3, altRock: 3, lofi: 4, drill: 3, altMetal: 4, altHipHop: 3, blackMetal: 3 }
            },
            {
                text: "Toplumsal hiyerarşi içindeki herkes gibi ben de malım, beynim yok, düşünebilme yetimi yıllar önce kaybettim. Benim için ne büyük nimettir ki bunun erken farkına vardım.",
                scores: { punkRock: 5, garageRock: 5, grungeRock: 5, hardRock: 4, doom: 4, death: 3, gangstaRap: 3 }
            },
            {
                text: "Kardeş ne gerek var şimdi böyle sorulara, dünyanın daha büyük sorunları var",
                scores: { progRock: 3, anadoluRock: 5, altMetal: 4, progMetal: 4, rnb: 3, black: 3, punkRock: 3, drill: 3 }
            },
            {
                text: "Uzun uğraşlar sonucunda 4 sonucuna vardım",
                scores: { pop: 5, hiphop: 5, altRock: 4, lofi: 3, heavy: 3, grungeRock: 2, drill: 4 }
            }
        ]
    },
    {
        question: "Müzik grubunda hangi unsur daha önemli?",
        options: [
            {
                text: "Dehşet bir vokal performansı",
                scores: { pop: 5, rnb: 5, hardRock: 5, heavy: 5, anadoluRock: 4, altRock: 3, grungeRock: 3, black: 4 }
            },
            {
                text: "Teknik müzikal kabiliyet ve özellikle gitar becerisi",
                scores: { progMetal: 5, progRock: 4, heavy: 4, death: 4, altMetal: 4, doom: 5, hardRock: 4, grungeRock: 3 }
            },
            {
                text: "Etkileyici ve güçlü bir ritim seksiyonu bulunması. Davulcuyla bascının uyumla hareket etmesi",
                scores: { nuMetal: 5, trap: 5, hiphop: 4, garageRock: 4, punkRock: 4, altHipHop: 3, rnb: 4, drill: 5, gangstaRap: 3 }
            },
            {
                text: "Genel müzikal uyum olması, hatanın az olması, sesin temiz gelmesi",
                scores: { indie: 5, altRock: 5, progRock: 4, grungeRock: 2, lofi: 3, emoRap: 3, pop: 3 }
            }
        ]
    },
    {
        question: "Hangi yolla yeni müzikler keşfetmeyi tercih edersin?",
        options: [
            {
                text: "Spotify önerileri ve otomatik listeler",
                scores: { pop: 5, hiphop: 5, trap: 4, rnb: 4, altHipHop: 3, indie: 2, drill: 4 }
            },
            {
                text: "Albüm albüm gezip kendim keşfederim",
                scores: { progRock: 4, progMetal: 4, altRock: 4, indie: 4, altMetal: 3, doom: 3, hardRock: 4, grungeRock: 3, heavy: 3, hiphop: 2 }
            },
            {
                text: "Arkadaş tavsiyesiyle dinlerim",
                scores: { garageRock: 5, altRock: 4, indie: 4, grungeRock: 4, punkRock: 3, lofi: 3, anadoluRock: 3 }
            },
            {
                text: "Daha az bilinen underground kaynakları takip ederim",
                scores: { black: 5, death: 5, doom: 4, emoRap: 4, altHipHop: 4, nuMetal: 3, rnb: 2, gangstaRap: 3, drill: 3 }
            }
        ]
    },
    {
        question: "Bir şarkının seni etkilemesi ve beğenmen için en önemli şey nedir?",
        options: [
            {
                text: "Sözlerin-müziğin anlamı ve derinliği",
                scores: { emoRap: 5, indie: 4, altMetal: 4, altRock: 3, black: 2, rnb: 3, anadoluRock: 4, grungeRock: 3, hiphop: 2 }
            },
            {
                text: "Enstrümantal yapı ve solo performanslar",
                scores: { progRock: 5, progMetal: 5, heavy: 4, death: 3, doom: 3, hardRock: 4, grungeRock: 3 }
            },
            {
                text: "Ritmik yapı beat",
                scores: { hiphop: 5, trap: 5, drill: 5, altHipHop: 4, lofi: 3, pop: 3, gangstaRap: 4, nuMetal: 3 }
            },
            {
                text: "Hissiyat ve atmosfer, kulağa güzel gelmesi",
                scores: { lofi: 5, anadoluRock: 4, doom: 4, nuMetal: 3, garageRock: 3, rnb: 3, indie: 3, grungeRock: 3 }
            }
        ]
    },
    {
        question: "Son soru: Müziğin hayatındaki rolü nedir?",
        options: [
            {
                text: "Günlük yaşamın vazgeçilmez parçası",
                scores: { pop: 5, hiphop: 4, indie: 4, altRock: 4, rnb: 4, altMetal: 3, hardRock: 3, drill: 3 }
            },
            {
                text: "Duygusal boşalım ve terapi",
                scores: { emoRap: 5, doom: 4, black: 4, altMetal: 4, progMetal: 3, altRock: 3, grungeRock: 4, heavy: 3, hiphop: 2 }
            },
            {
                text: "Sosyal kimlik ve topluluğu anlatan yaşamıma şekil veren şeydir",
                scores: { punkRock: 5, gangstaRap: 5, nuMetal: 4, garageRock: 4, altHipHop: 4, heavy: 3, drill: 4, grungeRock: 3 }
            },
            {
                text: "Daha iyi hissetmemi sağlayan sanatsal bir deneyim",
                scores: { progRock: 4, progMetal: 5, altHipHop: 4, indie: 4, anadoluRock: 3, altMetal: 3, lofi: 3 }
            }
        ]
    }
];

let currentQuestionIndex = 0;
let selectedAnswers = {};


function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
   
    Object.keys(genreScores).forEach(genre => {
        genreScores[genre] = 0;
    });
    
    currentQuestionIndex = 0;
    selectedAnswers = {};
    
    showQuestion();
}


function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index);
        
        if (selectedAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-label">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option.text}</div>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    updateNavigation();
}


function selectOption(optionIndex) {
    selectedAnswers[currentQuestionIndex] = optionIndex;
    
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    
    options[optionIndex].classList.add('selected');
    
    updateNavigation();
}


function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = selectedAnswers[currentQuestionIndex] === undefined;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = 'Sonuçları Gör';
    } else {
        nextBtn.textContent = 'Sonraki';
    }
}


function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}


function nextQuestion() {
    if (selectedAnswers[currentQuestionIndex] !== undefined) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            calculateResults();
        }
    }
}


function calculateResults() {
    // Skorları hesapla
    Object.keys(selectedAnswers).forEach(questionIndex => {
        const selectedOptionIndex = selectedAnswers[questionIndex];
        const selectedOption = questions[questionIndex].options[selectedOptionIndex];
        
        Object.keys(selectedOption.scores).forEach(genre => {
            genreScores[genre] += selectedOption.scores[genre];
        });
    });
    
    
    const sortedGenres = Object.keys(genreScores).sort((a, b) => genreScores[b] - genreScores[a]);
    
    const winningGenre = sortedGenres[0];
    const secondGenre = sortedGenres[1];
    
   
    showResults(winningGenre, secondGenre);
}


function showResults(winningGenre, secondGenre) {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
   
    document.getElementById('winningGenre').textContent = genreNames[winningGenre];
    document.getElementById('winningScore').textContent = genreScores[winningGenre];
    
    
    const mainRep = genreRepresentatives[winningGenre];
    document.getElementById('mainArtist').textContent = mainRep.artist;
    document.getElementById('mainSong').textContent = mainRep.song;
    
    
    document.getElementById('secondGenre').textContent = genreNames[secondGenre];
    document.getElementById('secondArtist').textContent = genreRepresentatives[secondGenre].artist;
    
   
    const artistsList = document.getElementById('artistsList');
    artistsList.innerHTML = '';
    
    mainRep.additionalArtists.forEach(artist => {
        const artistTag = document.createElement('div');
        artistTag.className = 'artist-tag';
        artistTag.textContent = artist;
        artistsList.appendChild(artistTag);
    });
}


function restartQuiz() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

