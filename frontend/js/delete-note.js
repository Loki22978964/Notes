import { buttons, showButtons, setButtons } from "./content.js";



export function deleteNewNote() {


  const delete_btn = document.querySelector(".btn-remove");
  if (!delete_btn) return;
  delete_btn.onclick = function () {
    const activeNote = document.querySelector(".note-item.note-item--active");
    if(!activeNote) return;

    const allNotes = Array.from(document.querySelectorAll(".note-item"));
    const index = allNotes.indexOf(activeNote);

    if (index !== -1) {
      buttons.splice(index, 1);
      showButtons();


    }
  };
}
