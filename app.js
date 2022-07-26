import characters from "./characters.js";

function calcIndex(message, key, index, type) {
  if (type === "encrypt") {
    let newIndex =
      (characters.indexOf(message.toUpperCase()[index]) +
        characters.indexOf(key.toUpperCase()[index % key.length])) %
      characters.length;
    return newIndex;
  } else if (type === "decrypt") {
    let newIndex =
      characters.indexOf(message.toUpperCase()[index]) -
      characters.indexOf(key.toUpperCase()[index % key.length]);
    if (newIndex < 0) {
      newIndex += characters.length;
    }
    return newIndex;
  }
}

function encryptDecryptMessage(message, key, type) {
  let newMessage = "";
  for (let i = 0; i < message.length; i++) {
    let newIndex = calcIndex(message, key, i, type);
    newMessage += characters[newIndex];
  }
  return newMessage;
}

const encBtn = document.getElementById("btn-encrypt");
const decBtn = document.getElementById("btn-decrypt");
const copyBtn = document.getElementById("btn-copy");

encBtn.addEventListener("click", () => {
  const type = "encrypt";
  const message = document.getElementById("initial-message").value;
  const key = document.getElementById("secret-code").value;
  document.getElementById("enc-message").innerHTML = encryptDecryptMessage(
    message,
    key,
    type
  );
  document.getElementById("enc-dec").innerHTML = "Your encrypted message: ";
});

decBtn.addEventListener("click", () => {
  const type = "decrypt";
  const message = document.getElementById("initial-message").value;
  const key = document.getElementById("secret-code").value;
  document.getElementById("enc-message").innerHTML = encryptDecryptMessage(
    message,
    key,
    type
  );
  document.getElementById("enc-dec").innerHTML = "Your decrypted message: ";
});

copyBtn.addEventListener("click", () => {
  const newEncMessage = document.getElementById("enc-message").value;
  navigator.clipboard.writeText(newEncMessage);
  window.location.reload("Refresh");
});
