import './side-menu.js';
import { createNewNote } from './add-note.js';
import { deleteNewNote } from './delete-note.js';
import { initNoteHighlight } from './note-highlight.js';
import { showButtons  } from './content.js';

function init() {
  showButtons();
  initNoteHighlight();
  createNewNote();
  deleteNewNote();
}

document.addEventListener('DOMContentLoaded', init);
document.body.addEventListener('htmx:afterSwap', init);


