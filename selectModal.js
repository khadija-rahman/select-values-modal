document.addEventListener("DOMContentLoaded", function () {
  var myButton = document.getElementById("myButton");
  var modalContainer = document.querySelector(".modal");
  var myModal = document.querySelector(".modal-content");
  var closeButton = document.querySelector(".close-button");
  var topButtonsContainer = document.querySelector(".top-buttons-container");
  var numberInputs = myModal.getElementsByClassName("number-input");
  var applyButton = myModal.getElementsByClassName("submit-input")[0];
  myModal.style.display = "none";
  var originalValue = myButton.textContent; // Store the original value of the button

  myButton.addEventListener("click", function () {
    myModal.style.display = "flex";
    myModal.style.flexDirection = "column";
    modalContainer.style.flexDirection = "column";
    myButton.style.borderBottom = "none";
  });

  applyButton.addEventListener("click", function () {
    var newValue = "";
    var input1Value = parseInt(numberInputs[0].value);
    var input2Value = parseInt(numberInputs[1].value);
    if (input1Value > input2Value) {
      newValue = "Value " + input2Value + " - " + input1Value;
    } else {
      newValue = "Value " + input1Value + " - " + input2Value;
    }

    myButton.textContent = newValue;
    myButton.style.backgroundColor = "lightyellow";
    closeButton.style.display = "inline-block"; // Show the close button
    myModal.style.display = "none";
    modalContainer.style.flexDirection = "row";
    numberInputs[0].value = "";
    numberInputs[1].value = "";
    myButton.style.borderBottom = "solid";
    myButton.style.borderBottomColor = "#ddd";
  });

  closeButton.addEventListener("click", function () {
    myButton.textContent = originalValue; // Reset the button's text to its original value
    myButton.style.backgroundColor = ""; // Reset the button's background color
    closeButton.style.display = "none"; // Hide the close button
    // if (myModal.style.display !== "none" && !originalValue) {
    //   closeButton.style.borderBottom = "none";
    // }
  });
  window.addEventListener("click", function (event) {
    if (!myModal.contains(event.target) && event.target !== myButton) {
      myModal.style.display = "none";
      myButton.style.borderBottom = "solid";
      myButton.style.borderBottomColor = "#ddd";
    }
  });
});

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".btn-open");
// const closeModalBtn = document.querySelector(".btn-close");

// // close modal function
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
//   openModalBtn.classList.remove("hidden")
// };

// // close the modal when the close button and overlay is clicked
// closeModalBtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// // close modal when the Esc key is pressed
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// // open modal function
// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   openModalBtn.classList.add("hidden")
// };
// // open modal event
// openModalBtn.addEventListener("click", openModal)
