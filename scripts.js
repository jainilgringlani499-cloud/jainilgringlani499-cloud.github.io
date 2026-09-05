    function generateStars(count) {
        let shadows = [];
        for (let i = 0; i < count; i++) {
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            shadows.push(x + "px " + y + "px #fff");
        }
        return shadows.join(",");
    }

    document.querySelector(".stars").style.boxShadow = generateStars(300);
    document.querySelector(".stars2").style.boxShadow = generateStars(100);
    document.querySelector(".stars3").style.boxShadow = generateStars(50);
