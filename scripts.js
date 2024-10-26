// // Acessando o conteúdo do documento
// console.log(document)

// // Acessar o elemento pelo ID
// // const guest = document.getElementById("guest-2")
// // console.log(guest)

// // Acessar elemento com class (SELETOR class).
// const guestByClass = document.getElementsByClassName("guest")
// console.log(guestByClass)

// // Selecionar lista de elementos pela tag
// const guestbyTag = document.getElementsByTagName("li")
// console.log(guestbyTag)

// QUERY SELECTOR

// Acessa o elemento pelo seletor ID
// const guest = document.querySelector("#guest-1")
// console.log(guest)

// Acessa o elemento pelo seletor class
// const guests = document.querySelector(".guest")
// console.log(guests)

// Retorna todos os elementos encontrados pela query
// const guests = document.querySelectorAll(".guest")
// console.log(guests)

// // MANIPULAÇÃO DE CONTEÚDO

// const guest = document.querySelector("#guest-1")

// // Retorna o conteúdo como texto
// console.log(guest.textContent)
// guest.textContent = "Sophia"

// console.log(guest.textContent) // Retorna o conteúdo visível e oculto
// console.log(guest.innerText) // Retorna somente o conteúdo visível
// console.log(guest.innerHTML) // Retorna o HTML como texto.

// // ALTERANDO ESTILOS

// const input = document.querySelector("#name")

// // Adiciona a classe.
// input.classList.add("input-error")

// // Remove a classe.
// input.classList.remove("input-error")

// // Se não tiver a classe adiciona. Se tem, remove.
// input.classList.toggle("input-error")

// const button = document.querySelector("button")
// button.style.backgroundColor = "red"

// CRIANDO ELEMENTOS

const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");
const guestName = document.createElement("span");

guestName.textContent = "Roberta";

//Adiciona após o último filho.
newGuest.append(guestName);

// Adiciona antes do primeiro filho.
newGuest.prepend(guestName);

// É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName);

// guests.append(newGuest)
guests.prepend(newGuest);

// MANIPULANDO ATRIBUTOS

// const input = document.querySelector("input")

// // Atualizar um atributo
// input.setAttribute("disabled", true)
// input.setAttribute("type", "file")

// // Remover um atributo
// input.removeAttribute("id")

// EVENTOS
// window.addEventListener("load", () => {
//    console.log("A página foi carregada!")
// })

// addEventListener("click", (event) => {
//    event.preventDefault()

// // Retorna todas as informações do evento
// console.log(event)

// // Retorna o elemento clicado
// console.log(event.target)

// // Retorna o textContent do elemento clicado
// console.log(event.target.textContent)
// })

// Evento em um elemento específico

// const button = document.querySelector("button");
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("clicou!");
// });

// EVENTOS DE FORMULÁRIO

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Você fez submit no formulário");
});
