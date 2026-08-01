document.addEventListener("DOMContentLoaded", () => {
    
    // --- Fix: Stop Unintended Music on Picture Click ---
    // Make sure your main music only plays when a specific button is clicked, NOT the document body.
    const startButton = document.getElementById("btn-yes"); // Or any specific start button
    const mainAudio = document.getElementById("bg-music");
    
    if(startButton && mainAudio) {
        startButton.addEventListener("click", () => {
            mainAudio.play().catch(e => console.log("Audio play failed", e));
        });
    }

    // --- Memories Section Logic ---
    const friendSelect = document.getElementById("friend-select");
    const memoryImage = document.getElementById("memory-image");
    const memoryAudio = document.getElementById("memory-audio");
    const playMemoryMusicBtn = document.getElementById("play-memory-music");

    // [FILL: List of friends, their pictures, and music files]
    const memoryData = {
        "akarsh": {
            img: "assets/akarsh-pic.jpg",
            music: "assets/akarsh-music.mp3"
        },
        "rahul": {
            img: "assets/rahul-pic.jpg",
            music: "assets/rahul-music.mp3"
        }
    };

    if (friendSelect) {
        friendSelect.addEventListener("change", (e) => {
            const selectedFriend = e.target.value;
            const data = memoryData[selectedFriend];
            
            if (data) {
                // Update Image
                memoryImage.src = data.img;
                
                // Update Music
                memoryAudio.pause();
                memoryAudio.src = data.music;
                memoryAudio.load();
                playMemoryMusicBtn.innerText = "Play Memory Music";
            }
        });
    }

    if (playMemoryMusicBtn) {
        playMemoryMusicBtn.addEventListener("click", () => {
            if (memoryAudio.paused) {
                memoryAudio.play();
                playMemoryMusicBtn.innerText = "Pause Music";
            } else {
                memoryAudio.pause();
                playMemoryMusicBtn.innerText = "Play Memory Music";
            }
        });
    }

    // --- Hearts Animation (Bottom to Top) ---
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("anim-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s"; // 4s to 7s
        document.getElementById("hearts-container").appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 7000);
    }

    // --- Ribbons Animation (Top to Bottom) ---
    function createRibbon() {
        const ribbon = document.createElement("div");
        ribbon.classList.add("anim-ribbon");
        
        // Randomize ribbon colors based on your luxury theme
        const colors = ["#ff6b9e", "#9d4edd", "#4cc9f0"];
        ribbon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        ribbon.style.left = Math.random() * 100 + "vw";
        ribbon.style.animationDuration = (Math.random() * 3 + 3) + "s"; // 3s to 6s
        document.getElementById("ribbons-container").appendChild(ribbon);
        
        setTimeout(() => { ribbon.remove(); }, 6000);
    }

    // Generate elements at intervals
    setInterval(createHeart, 800);
    setInterval(createRibbon, 600);
});