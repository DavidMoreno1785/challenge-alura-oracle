const keys = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
}

const text_area = document.getElementById("text_area");
const result_text_area = document.getElementById("result_text_area");
const btn_cifrar = document.getElementById("btn_cifrar");
const btn_descifrar = document.getElementById("btn_descifrar");
const btn_copy = document.getElementById("btn_copy");

const encrypt = () =>{
  let data = text_area.value;
  if(data) data = data.toLowerCase();

  let lettersArray = data.split("");

  const textEncrypted = lettersArray.map((letter) => keys[letter] || letter).toString().replaceAll(",", "");

  result_text_area.value = textEncrypted;
}

const decrypt = () =>{
  let data = text_area.value;
  if(data) data = data.toLowerCase();

  let textDecrypted = data;

  for(let key in keys ){
    textDecrypted = textDecrypted.replaceAll(keys[key], key);
  }

  result_text_area.value = textDecrypted;
}

const copy = () => {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {

      navigator.clipboard.writeText(result_text_area.value).then(
        () => {
          console.log("texto copiado")
        },
        () => {
          console.log("No se pudo copiar el texto")
        },
      );
    }
  });
}

btn_cifrar.addEventListener("click", encrypt);
btn_descifrar.addEventListener("click", decrypt);
btn_copy.addEventListener("click", copy);

