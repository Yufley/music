// Müzik türleri ve puanları
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

// Müzik türlerinin Türkçe isimleri
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

// Her müzik türü için temsili grup ve şarkı
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
    altMetal: { 
        artist: "Tool", 
        song: "Schism",
        additionalArtists: ["System of a Down", "Deftones", "Korn"]
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
        additionalArtists: ["Radiohead", "Pearl Jam", "Soundgarden"]
    },
    progRock: { 
        artist: "Pink Floyd", 
        song: "Hey You",
        additionalArtists: ["Yes", "Genesis", "King Crimson"]
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
        additionalArtists: ["Led Zeppelin", "Deep Purple", "Aerosmith"]
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
        artist: "Limp Bizkit", 
        song: "Take a look around",
        additionalArtists: ["Drake", "Kendrick Lamar", "Kanye West"]
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

// 15 soru
const questions = [
    {
        question: "Müzik dinlerken hangi ruh halinde hissedersin?",
        options: [
            {
                text: "Agresif ve güçlü hissettiren, beni bam bam yapan müzikler tercih ederim",
                scores: { heavy: 6, doom: 4, black: 5, death: 6, hardRock: 3, nuMetal: 4, gangstaRap: 2 }
            },
            {
                text: "Melankolik ve derin duygular arıyorum",
                scores: { doom: 5, black: 4, emoRap: 5, altRock: 4, progRock: 3, indie: 3, lofi: 2 }
            },
            {
                text: "Enerjik ve neşeli müzikler dinlemeyi tercih ederim",
                scores: { pop: 5, hiphop: 4, trap: 3, punkRock: 4, garageRock: 3, altMetal: 2 }
            },
            {
                text: "Bazen sakin ve düşünceli bazen çılgınca enstürman cümbüşünün yaşandığı bir atmosfer arıyorum",
                scores: { lofi: 1, progMetal: 6, progRock: 6, indie: 4, rnb: 3, altHipHop: 3 }
            }
        ]
    },
    {
        question: "Hangi enstrüman sesini daha çok seviyorsun?",
        options: [
            {
                text: "Dehşet ötesi gitar riffleri",
                scores: { heavy: 5, death: 4, black: 4, altMetal: 4, hardRock: 5, doom: 3 }
            },
            {
                text: "Bas gitarın derin sesi",
                scores: { nuMetal: 4, trap: 5, hiphop: 4, rnb: 3, lofi: 3, gangstaRap: 3 }
            },
            {
                text: "Akustik gitar ve piyano",
                scores: { indie: 5, altRock: 4, progRock: 4, anadoluRock: 5, lofi: 3, emoRap: 3 }
            },
            {
                text: "Elektronik sesler ve synthesizer",
                scores: { pop: 5, altHipHop: 4, progMetal: 3, trap: 4, lofi: 4, rnb: 3 }
            }
        ]
    },
    {
        question: "Hangi tempo seni daha çok etkiler?",
        options: [
            {
                text: "Çok hızlı ve agresif",
                scores: { death: 5, black: 5, punkRock: 5, nuMetal: 4, heavy: 4, hardRock: 3 }
            },
            {
                text: "Orta tempo, ritimli",
                scores: { altRock: 5, hiphop: 5, pop: 4, garageRock: 4, altMetal: 3, indie: 3 }
            },
            {
                text: "Yavaş ve ağır",
                scores: { doom: 5, progMetal: 4, progRock: 4, emoRap: 4, lofi: 3, rnb: 3 }
            },
            {
                text: "Değişken tempo, dinamik",
                scores: { progMetal: 5, progRock: 5, altHipHop: 4, altMetal: 4, anadoluRock: 3, indie: 3 }
            }
        ]
    },
    {
        question: "Vokal tarzında neyi tercih edersin?",
        options: [
            {
                text: "Growling/screaming (çığlık tarzı)",
                scores: { death: 5, black: 5, doom: 4, heavy: 3, altMetal: 3, nuMetal: 4 }
            },
            {
                text: "Güçlü ve yüksek sesli",
                scores: { heavy: 5, hardRock: 5, anadoluRock: 4, altRock: 3, pop: 3, rnb: 3 }
            },
            {
                text: "Melodik ve duygusal",
                scores: { indie: 5, altRock: 4, progRock: 4, emoRap: 4, pop: 4, rnb: 5 }
            },
            {
                text: "Rap tarzı (sözlü)",
                scores: { hiphop: 5, trap: 5, gangstaRap: 5, nuMetal: 5, altHipHop: 4, emoRap: 3 }
            }
        ]
    },
    {
        question: "Şarkı sözlerinde neyi arıyorsun?",
        options: [
            {
                text: "Karanlık ve felozofik temalar",
                scores: { black: 5, doom: 5, death: 4, progMetal: 4, altMetal: 3, emoRap: 3 }
            },
            {
                text: "Sosyal eleştiri ve isyan",
                scores: { punkRock: 5, altRock: 4, gangstaRap: 4, altHipHop: 4, anadoluRock: 3, nuMetal: 3 }
            },
            {
                text: "Aşk ve romantik duygular",
                scores: { pop: 5, rnb: 5, indie: 4, emoRap: 4, altRock: 3, hiphop: 2 }
            },
            {
                text: "Başarı ve kendine güven",
                scores: { hiphop: 5, trap: 5, gangstaRap: 4, pop: 3, nuMetal: 4, altHipHop: 3 }
            }
        ]
    },
    {
        question: "Hangi dönemin müzik estetiğini seviyorsun?",
        options: [
            {
                text: "70-80'ler klasik rock dönemi",
                scores: { hardRock: 5, heavy: 4, progRock: 5, anadoluRock: 5, doom: 3, garageRock: 3 }
            },
            {
                text: "90'lar alternatif/grunge dönemi",
                scores: { grungeRock: 5, altRock: 5, altMetal: 4, indie: 3, punkRock: 3, doom: 3 }
            },
            {
                text: "2000'ler pop ve rock karışımı",
                scores: { pop: 4, altRock: 4, altMetal: 4, emoRap: 3, indie: 4, garageRock: 4 }
            },
            {
                text: "2010'lar sonrası modern ses",
                scores: { trap: 5, nuMetal: 5, altHipHop: 4, lofi: 4, emoRap: 4, pop: 4 }
            }
        ]
    },
    {
        question: "Hangi müzik atmosferini tercih edersin?",
        options: [
            {
                text: "Karanlık ve kasvetli",
                scores: { black: 5, doom: 5, death: 4, emoRap: 4, altMetal: 3, nuMetal: 3 }
            },
            {
                text: "Enerjik ve coşkulu",
                scores: { punkRock: 5, hardRock: 5, garageRock: 4, hiphop: 4, pop: 4, heavy: 4 }
            },
            {
                text: "Duygusal ve içten",
                scores: { indie: 5, altRock: 5, rnb: 4, emoRap: 4, progRock: 3, anadoluRock: 3 }
            },
            {
                text: "Rahat ve chill",
                scores: { lofi: 5, altHipHop: 4, indie: 4, rnb: 4, pop: 3, trap: 3 }
            }
        ]
    },
    {
        question: "Konserde hangi deneyimi yaşamak istersin?",
        options: [
            {
                text: "Mosh pit ve çılgın kalabalık",
                scores: { death: 5, black: 4, heavy: 5, punkRock: 5, hardRock: 4, altMetal: 4 }
            },
            {
                text: "Duygusal bağlantı ve şarkı eşliği",
                scores: { indie: 5, altRock: 5, pop: 4, rnb: 4, anadoluRock: 4, emoRap: 3 }
            },
            {
                text: "Ritim eşliğinde dans",
                scores: { hiphop: 5, trap: 5, pop: 5, nuMetal: 4, rnb: 4, lofi: 2 }
            },
            {
                text: "Müzikal virtüözite ve teknik performans",
                scores: { progMetal: 5, progRock: 5, altHipHop: 3, doom: 3, heavy: 3, altMetal: 3 }
            }
        ]
    },
    {
        question: "Hangi müzik dinleme saatini tercih edersin?",
        options: [
            {
                text: "Gece geç saatler",
                scores: { black: 5, doom: 5, lofi: 4, emoRap: 4, altRock: 3, progRock: 3 }
            },
            {
                text: "Sabah erken saatler",
                scores: { pop: 5, hiphop: 4, indie: 4, altHipHop: 3, rnb: 3, lofi: 3 }
            },
            {
                text: "Öğleden sonra",
                scores: { garageRock: 5, altRock: 4, punkRock: 4, grungeRock: 4, indie: 3, pop: 3 }
            },
            {
                text: "Akşam saatleri",
                scores: { progMetal: 5, progRock: 5, heavy: 4, anadoluRock: 4, altMetal: 3, rnb: 3 }
            }
        ]
    },
    {
        question: "Hangi müzik aktivitesini daha çok seviyorsun?",
        options: [
            {
                text: "Şarkı sözlerini ezbere bilmek",
                scores: { pop: 5, hiphop: 5, gangstaRap: 4, altRock: 4, punkRock: 4, indie: 3 }
            },
            {
                text: "Enstrümental kısımları dinlemek",
                scores: { progMetal: 5, progRock: 5, heavy: 4, doom: 4, altMetal: 4, lofi: 3 }
            },
            {
                text: "Ritime eşlik etmek",
                scores: { trap: 5, nuMetal: 5, hiphop: 4, garageRock: 4, altHipHop: 3, rnb: 3 }
            },
            {
                text: "Müziğin duygusal atmosferini hissetmek",
                scores: { black: 5, doom: 5, emoRap: 4, altRock: 4, indie: 4, progRock: 3 }
            }
        ]
    },
    {
        question: "Hangi müzik prodüksiyonu tarzını seviyorsun?",
        options: [
            {
                text: "Ham ve doğal ses",
                scores: { black: 5, punkRock: 5, garageRock: 4, grungeRock: 4, anadoluRock: 3, altRock: 3 }
            },
            {
                text: "Yüksek prodüksiyon kalitesi",
                scores: { pop: 5, progMetal: 5, progRock: 4, rnb: 4, altHipHop: 4, heavy: 3 }
            },
            {
                text: "Ağır ve güçlü ses",
                scores: { death: 5, doom: 5, heavy: 4, altMetal: 4, nuMetal: 4, hardRock: 3 }
            },
            {
                text: "Elektronik ve modern efektler",
                scores: { trap: 5, altHipHop: 5, lofi: 4, emoRap: 4, pop: 3, nuMetal: 3 }
            }
        ]
    },
    {
        question: "Müzik grubunda hangi unsur daha önemli?",
        options: [
            {
                text: "Karizmali vokal performansı",
                scores: { pop: 5, rnb: 5, hardRock: 4, heavy: 4, anadoluRock: 4, altRock: 3 }
            },
            {
                text: "Teknik gitar becerisi",
                scores: { progMetal: 5, progRock: 5, heavy: 4, death: 4, altMetal: 4, doom: 3 }
            },
            {
                text: "Güçlü ritim seksiyonu",
                scores: { nuMetal: 5, trap: 5, hiphop: 4, garageRock: 4, punkRock: 4, altHipHop: 3 }
            },
            {
                text: "Genel müzikal uyum",
                scores: { indie: 5, altRock: 5, progRock: 4, grungeRock: 4, lofi: 3, emoRap: 3 }
            }
        ]
    },
    {
        question: "Hangi müzik keşif yöntemini tercih edersin?",
        options: [
            {
                text: "Popüler listelerden",
                scores: { pop: 5, hiphop: 5, trap: 4, rnb: 4, altHipHop: 3, indie: 2 }
            },
            {
                text: "Müzik dergilerinden ve eleştirilerden",
                scores: { progRock: 5, progMetal: 5, altRock: 4, indie: 4, altMetal: 3, doom: 3 }
            },
            {
                text: "Arkadaş önerilerinden",
                scores: { garageRock: 5, altRock: 4, indie: 4, grungeRock: 4, punkRock: 3, lofi: 3 }
            },
            {
                text: "Underground ve alternatif kanallardan",
                scores: { black: 5, death: 5, doom: 4, emoRap: 4, altHipHop: 4, nuMetal: 3 }
            }
        ]
    },
    {
        question: "Müzik koleksiyonunda hangi format tercih edersin?",
        options: [
            {
                text: "Dijital streaming",
                scores: { pop: 5, trap: 5, hiphop: 4, altHipHop: 4, rnb: 4, emoRap: 3 }
            },
            {
                text: "Vinyl plaklar",
                scores: { progRock: 5, anadoluRock: 5, hardRock: 4, heavy: 4, altRock: 4, doom: 3 }
            },
            {
                text: "CD'ler",
                scores: { progMetal: 5, death: 4, black: 4, altMetal: 4, grungeRock: 3, indie: 3 }
            },
            {
                text: "Fark etmez, müzik önemli",
                scores: { garageRock: 5, punkRock: 5, lofi: 4, nuMetal: 4, indie: 4, altRock: 3 }
            }
        ]
    },
    {
        question: "Son soru: Müziğin hayatındaki rolü nedir?",
        options: [
            {
                text: "Günlük yaşamın vazgeçilmez parçası",
                scores: { pop: 5, hiphop: 5, indie: 4, altRock: 4, rnb: 4, lofi: 3 }
            },
            {
                text: "Duygusal boşalım ve terapi",
                scores: { emoRap: 5, doom: 5, black: 4, altMetal: 4, progMetal: 4, altRock: 3 }
            },
            {
                text: "Sosyal kimlik ve topluluk",
                scores: { punkRock: 5, gangstaRap: 5, nuMetal: 4, garageRock: 4, altHipHop: 4, heavy: 3 }
            },
            {
                text: "Sanatsal ve entelektüel deneyim",
                scores: { progRock: 5, progMetal: 5, altHipHop: 4, indie: 4, anadoluRock: 3, altMetal: 3 }
            }
        ]
    }
];

// Anket durumu
let currentQuestionIndex = 0;
let selectedAnswers = {};

// Anketi başlat
function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Skorları sıfırla
    Object.keys(genreScores).forEach(genre => {
        genreScores[genre] = 0;
    });
    
    currentQuestionIndex = 0;
    selectedAnswers = {};
    
    showQuestion();
}

// Soruyu göster
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

// Seçeneği seç
function selectOption(optionIndex) {
    selectedAnswers[currentQuestionIndex] = optionIndex;
    
    // Önceki seçimi kaldır
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Yeni seçimi ekle
    options[optionIndex].classList.add('selected');
    
    updateNavigation();
}

// Navigasyon butonlarını güncelle
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

// Önceki soru
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Sonraki soru
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

// Sonuçları hesapla
function calculateResults() {
    // Skorları hesapla
    Object.keys(selectedAnswers).forEach(questionIndex => {
        const selectedOptionIndex = selectedAnswers[questionIndex];
        const selectedOption = questions[questionIndex].options[selectedOptionIndex];
        
        Object.keys(selectedOption.scores).forEach(genre => {
            genreScores[genre] += selectedOption.scores[genre];
        });
    });
    
    // En yüksek skorlu türleri bul
    const sortedGenres = Object.keys(genreScores).sort((a, b) => genreScores[b] - genreScores[a]);
    
    const winningGenre = sortedGenres[0];
    const secondGenre = sortedGenres[1];
    
    // Sonuçları göster
    showResults(winningGenre, secondGenre);
}

// Sonuçları göster
function showResults(winningGenre, secondGenre) {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    // Kazanan tür
    document.getElementById('winningGenre').textContent = genreNames[winningGenre];
    document.getElementById('winningScore').textContent = genreScores[winningGenre];
    
    // Ana öneri
    const mainRep = genreRepresentatives[winningGenre];
    document.getElementById('mainArtist').textContent = mainRep.artist;
    document.getElementById('mainSong').textContent = mainRep.song;
    
    // İkinci tür
    document.getElementById('secondGenre').textContent = genreNames[secondGenre];
    document.getElementById('secondArtist').textContent = genreRepresentatives[secondGenre].artist;
    
    // Ek sanatçılar
    const artistsList = document.getElementById('artistsList');
    artistsList.innerHTML = '';
    
    mainRep.additionalArtists.forEach(artist => {
        const artistTag = document.createElement('div');
        artistTag.className = 'artist-tag';
        artistTag.textContent = artist;
        artistsList.appendChild(artistTag);
    });
}

// Anketi yeniden başlat
function restartQuiz() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

