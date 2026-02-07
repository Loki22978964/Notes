import { showButtons } from "./content.js"; 

export function updateMainContent(note) {
  const titleElement = document.querySelector(".main__note-card-title");
  const dataElement = document.querySelector(".main__note-card-date");
  const textContainer = document.querySelector(".main__note-card-text");

  console.log("1. Функція отримала нотатку:", note);
    console.log("2. Контейнер для тексту знайдено?", textContainer);
    console.log("3. Текст для вставки:", note?.text);

  if (titleElement) titleElement.textContent = "New Note"; 
  if (dataElement) dataElement.textContent = note.created;

  if (textContainer) {
    textContainer.innerHTML = "";

    const paragraphs = note.text?.split(/(\n\s*\n)/) ?? [];
    if (paragraphs.length === 0) paragraphs.push(note.text || "");

    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.className = "main__note-card-text";
      p.textContent = text.trim();
      
      p.onclick = function () {
        enableEditing(note, textContainer);
      };
      
      textContainer.appendChild(p);
    });
  }
}

function enableEditing(note, container) {
  const textarea = document.createElement("textarea");
  textarea.value = note.text;

  textarea.style.width = "100%";
  textarea.style.height = "300px";
  textarea.style.fontFamily = "inherit";
  textarea.style.fontSize = "inherit";
  textarea.style.border = "1px solid #444";
  textarea.style.background = "none";
  textarea.style.color = "#000000";
  textarea.style.padding = "10px";
  textarea.style.resize = "none";

  container.innerHTML = "";
  container.appendChild(textarea);
  textarea.focus();

  textarea.onblur = function () {
    const newText = textarea.value;

    note.text = newText;
    note.updated = new Date().toISOString();

    updateMainContent(note);
    showButtons();
  };
}