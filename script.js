function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight !== "" && height !== "") {
        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        displayBoxedResult("Your BMI is: " + bmi);
    } else {
        displayResult("Please enter both weight and height.");
    }
}

function displayResult(result) {
    document.getElementById("result").innerHTML = result;
}

function displayBoxedResult(result) {
    var resultContainer = document.getElementById("result");

    // Remove any existing boxed result
    var existingBox = resultContainer.querySelector(".boxed-result");
    if (existingBox) {
        resultContainer.removeChild(existingBox);
    }

    // Create and append the new boxed result
    var resultBox = document.createElement("div");
    resultBox.innerHTML = result;
    resultBox.className = "boxed-result";

    resultBox.addEventListener("mouseover", function () {
        this.style.fontWeight = "bold";
        this.style.color = "#fff";
        this.style.backgroundColor = "#3498db";
    });

    resultBox.addEventListener("mouseout", function () {
        this.style.fontWeight = "normal";
        this.style.color = "#333";
        this.style.backgroundColor = "#fff";
    });

    resultContainer.appendChild(resultBox);
}

