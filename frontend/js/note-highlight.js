import { updateMainContent } from './main-content.js';
import { buttons } from './content.js';

export function initNoteHighlight() {
  const notes = document.querySelectorAll('.note-item');

  notes.forEach(note => {
    note.addEventListener('click', function(){
      notes.forEach(n => n.classList.remove('note-item--active'));

      this.classList.add('note-item--active');
      
      const noteID = this.dataset.id;
      const founfNote = buttons.find(item => item.id == noteID);

      if(founfNote){
        console.log('+' , noteID)
        updateMainContent(founfNote);
      }
      else{
        console.error('-' , noteID);
      }
    });
  });

  if (notes.length > 0) {
    notes[0].click();
  }
}