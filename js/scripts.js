// Function to filter career fields based on search input
function filterCareers() {
    let input = document.getElementById('careerSearch').value.toLowerCase();
    let careerItems = document.querySelectorAll('.career-field');

    careerItems.forEach(function(career) {
        let careerName = career.querySelector('span').innerText.toLowerCase();
        if (careerName.includes(input)) {
            career.style.display = "block"; // Show the career field
        } else {
            career.style.display = "none"; // Hide the career field
        }
    });
}

// Optional Alert Function (Example for Career Categories)
function showAlert(career) {
    alert(`You are exploring the ${career} field!`);
}

// Example: Attach the alert function to career categories
document.querySelectorAll('.categories div').forEach(function(category) {
    category.addEventListener('click', function() {
        let careerName = category.querySelector('span').innerText;
        showAlert(careerName);
    });
});
