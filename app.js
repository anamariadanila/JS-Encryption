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
};

decryptMessage("abdde", "aab", "decrypt");
decryptMessage("bcdef", "bbbbb", "decrypt");
