// Get the modal
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-content");
var captionText = document.getElementById("caption");
var closeModalButton = document.getElementById("closeModal");

// Function to open the modal
function openModal(imgElement) {
  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add click event handlers
document.querySelectorAll(".modalimg").forEach(function(imgElement) {
  imgElement.addEventListener("click", function() {
    openModal(imgElement);
  });
});

closeModalButton.addEventListener("click", closeModal);