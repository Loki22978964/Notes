import { buttons, showButtons, setButtons } from "./content.js";

export function createNewNote() {
  const add_btn = document.querySelector(".navbar__add");

  if (!add_btn) return;

  add_btn.onclick = function () {
    const title = "New Note";
    const date = new Date();
    const text = "Clik to write text";
    const tempID = Date.now();

    const newNoteHTML ={
    id: tempID,
    text: text,
    created: date.toString().slice(0, 24),
    updated: null,
  };
    buttons.unshift(newNoteHTML);

    console.log("Current buttons array:", buttons);

    showButtons();

    const firstNote = document.querySelector(".note-item");
    if (firstNote) firstNote.click();
  };
}
