document.addEventListener("DOMContentLoaded", function () {
  var myButton = document.getElementById("myButton");
  var modalContainer = document.querySelector(".modal");
  var myModal = document.querySelector(".modal-content");
  var closeButton = document.querySelector(".close-button");
  var numberInputs = myModal.getElementsByClassName("number-input");
  var applyButton = myModal.getElementsByClassName("submit-input")[0];
  myModal.style.display = "none";
  var originalValue = myButton.textContent; // Store the original value of the button
  var modalVisible = false;

  function toggleModal(closeOnly) {
    if (modalVisible) {
      modalVisible = false;
      myModal.style.display = "none";
      //   myButton.style.borderBottom = "solid";
      //   myButton.style.borderBottomColor = "#ddd";
      closeButton.style.borderBottom = "solid";
      closeButton.style.borderBottomColor = "#ddd";
    } else if (!closeOnly) {
      modalVisible = true;
      myModal.style.display = "flex";
      myModal.style.flexDirection = "column";
      modalContainer.style.flexDirection = "column";
      //   myButton.style.borderBottom = "none";
    }
  }

  myButton.addEventListener("click", function () {
    toggleModal();
  });

  applyButton.addEventListener("click", function () {
    var input1Value = parseInt(numberInputs[0].value);
    var input2Value = parseInt(numberInputs[1].value);
    var newValue =
      "Value " +
      Math.min(input1Value, input2Value) +
      " - " +
      Math.max(input1Value, input2Value);

    myButton.textContent = newValue;
    myButton.style.backgroundColor = "lightyellow";
    closeButton.style.display = "inline-block"; // Show the close button
    toggleModal();
    numberInputs[0].value = "";
    numberInputs[1].value = "";
  });

  closeButton.addEventListener("click", function () {
    myButton.textContent = originalValue; // Reset the button's text to its original value
    myButton.style.backgroundColor = ""; // Reset the button's background color
    closeButton.style.display = "none"; // Hide the close button
  });
  window.addEventListener("click", function (event) {
    if (!myModal.contains(event.target) && event.target !== myButton) {
      toggleModal(true);
    }
  });
});
