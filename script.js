const Input = document.querySelector(".Input");
const Btn = document.querySelector(".Btn");
const Output = document.querySelector(".Output");

const link = "https://api.funtranslations.com/translate/chef.json";

function chefurl(Input) {
  return link + "?" + "text=" + Input;
}

function errorHandle(error) {
  console.log("error orrured", error);
}

function handleclick() {
  var Value = Input.value;

  fetch(chefurl(Value))
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let finaltxt = json.contents.translated;
      Output.innerText = finaltxt;
    })
    .catch(errorHandle);
}

Btn.addEventListener("click", handleclick);
