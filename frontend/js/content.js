import { initNoteHighlight } from "./note-highlight.js";

export let buttons = [
  {
    id: 1,
    text: "reewrew mgkkmskgmkfgmlksdmglkmflkmglkmf mlksfnlglfnglkfdslkglkfmglkfdg flkg lfdgfdslgfklj glkfjglkfjkg jflkdg lkfdglkfdlkg lf glkfglk fdlk glkf jglkdsfglk fsdlkg fdlkglkfsd glkfd glk lk j",
    created: "2026-01-03T19:10:18",
    updated: null,
  },
  {
    id: 2,
    text: "asd",
    created: "2026-01-03T19:11:06",
    updated: null,
  },
  {
    id: 4,
    text: "kakahi.ru",
    created: "2026-01-04T10:19:51",
    updated: "2026-01-04T10:52:12",
  },
];

export function setButtons(newButtons) {
  buttons = newButtons;
}

export function showButtons() {
  const buttonsContainer = document.querySelector(".sidebar");
  if (!buttonsContainer) return;

  buttonsContainer.innerHTML = buttons
    .map(
      (item) => `
        <button
            class="note-item"
            data-id="${item.id}"
            data-note-title="New Note"
            data-note-date="${item.updated || item.created}"
            data-note-content="${item.text}" 
        >
            <div class="note-item__header">
                <h3 class="note-item__title">New Note</h3>
                <span class="note-item__meta">${item.created}</span>
            </div>

            <p class="note-item__preview">
                ${item.text}
            </p>
        </button>
    `,
    )
    .join("");

  if (typeof initNoteHighlight === "function") {
    initNoteHighlight();
  }
}
