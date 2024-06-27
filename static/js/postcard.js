document.addEventListener("DOMContentLoaded", function() {
    const postcard = document.querySelector(".postcard");
    const front = document.getElementById("front");
    const backContainer = document.getElementById("back-container");
    const backImage = document.getElementById("back");
    const message = document.getElementById("message");
    const downloadLink = document.getElementById("download-link");
    let isFlipped = false;

    postcard.addEventListener("click", function(event) {
        // Allow textarea to be clicked without flipping the postcard
        if (event.target === message) {
            return;
        }
        if (isFlipped) {
            front.style.transform = "rotateY(0deg)";
            backContainer.style.transform = "rotateY(180deg)";
        } else {
            front.style.transform = "rotateY(-180deg)";
            backContainer.style.transform = "rotateY(0deg)";
        }
        isFlipped = !isFlipped;
    });

    downloadLink.addEventListener("click", function(e) {
        e.preventDefault();
        generatePostcardWithMessage();
    });

    function generatePostcardWithMessage() {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        const frontImage = new Image();
        frontImage.src = front.src;

        const tempImage = new Image();
        tempImage.src = backImage.src;

        tempImage.onload = function() {
            canvas.width = tempImage.width;
            canvas.height = tempImage.height * 2;

            // Draw front image on the top half of the canvas
            context.drawImage(frontImage, 0, 0, canvas.width, canvas.height / 2);

            // Draw back image on the bottom half of the canvas
            context.drawImage(tempImage, 0, canvas.height / 2, canvas.width, canvas.height / 2);

            // Add the message on the back image
            context.font = "40px 'LeeSeoyun'"; 
            context.textAlign = "center";
            context.fillStyle = "black";

            const lines = message.value.split("\n");
            const lineHeight = 37.5;  // Adjusted line height accordingly
            const x = canvas.width / 2;
            let y = (canvas.height / 2) + (canvas.height / 4) - (lines.length - 1) * lineHeight / 2;

            lines.forEach(line => {
                context.fillText(line, x, y);
                y += lineHeight;
            });

            const link = document.createElement("a");
            link.download = 'postcard_with_message.png';
            link.href = canvas.toDataURL();
            link.click();
        };
    }
});

