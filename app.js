const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "?",
  "!",
  "'",
  "_",
  "-",
  "&",
  "@",
  "#",
  "$",
  "%",
  "*",
  "(",
  ")",
  " ",
];

function calcIndex(message, key, index, type) {
  if (type === "encrypt") {
    let newIndex =
      characters.indexOf(message.toUpperCase()[index]) +
      characters.indexOf(key.toUpperCase()[index]);
    return newIndex;
  } else if (type === "decrypt") {
    let newIndex =
      characters.indexOf(message.toUpperCase()[index]) -
      characters.indexOf(key.toUpperCase()[index]);
    return newIndex;
  }
}

const encryptMessage = function (message, key, type) {
  let newMessage = "";
  if (message.length === key.length) {
    for (let i = 0; i < key.length; i++) {
      let newIndex = calcIndex(message, key, i, type);
      newMessage += characters[newIndex];
    }
  } else if (message.length > key.length) {
    for (let i = 0; i < key.length; i++) {
      let newIndex = calcIndex(message, key, i, type);
      newMessage += characters[newIndex];
    }
    for (let i = key.length; i < message.length; i++) {
      newMessage += message.toUpperCase()[i];
    }
  }

  console.log(newMessage);
  return newMessage;
};

encryptMessage("abcde", "bbbbb", "encrypt");
encryptMessage("abcde", "aab", "encrypt");

const decryptMessage = function (message, key, type) {
  let newMessage = "";
  if (message.length === key.length) {
    for (let i = 0; i < key.length; i++) {
      let newIndex = calcIndex(message, key, i, type);
      newMessage += characters[newIndex].toLowerCase();
    }
  } else if (message.length > key.length) {
    for (let i = 0; i < key.length; i++) {
      let newIndex = calcIndex(message, key, i, type);
      newMessage += characters[newIndex].toLowerCase();
    }
    for (let i = key.length; i < message.length; i++) {
      newMessage += message[i];
    }
  }
  console.log(newMessage);
  return newMessage;
};

decryptMessage("abdde", "aab", "decrypt");
decryptMessage("bcdef", "bbbbb", "decrypt");

const encBtn = document.getElementById("btn-encrypt");
const decBtn = document.getElementById("btn-decrypt");
const copyBtn = document.getElementById("btn-copy");

encBtn.addEventListener("click", () => {
  const type = "encrypt";
  const message = document.getElementById("initial-message").value;
  const key = document.getElementById("secret-code").value;
  document.getElementById("enc-message").innerHTML = encryptMessage(
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
  document.getElementById("enc-message").innerHTML = decryptMessage(
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
