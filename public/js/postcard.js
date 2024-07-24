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

            // Define the boundary box dimensions based on your image
            const boxX = 60; // X-coordinate of the top-left corner of the box
            const boxY = canvas.height / 2 + 60; // Y-coordinate of the top-left corner of the box
            const boxWidth = 600; // Width of the box
            const boxHeight = 800; // Height of the box

            // Add the message within the boundary box
            context.font = "30px 'LeeSeoyun'"; 
            context.textAlign = "left";
            context.fillStyle = "black";

            const lines = message.value.split("\n");
            const lineHeight = 30;  // Adjusted line height accordingly
            let y = boxY + lineHeight; // Starting Y position inside the box

            lines.forEach(line => {
                if (y + lineHeight <= boxY + boxHeight) { // Ensure the text fits within the box height
                    context.fillText(line, boxX, y);
                    y += lineHeight;
                }
            });

            const link = document.createElement("a");
            link.download = 'postcard_with_message.png';
            link.href = canvas.toDataURL();
            link.click();
        };
    }
});
