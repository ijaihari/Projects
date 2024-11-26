const container = document.querySelector(".notescontainer");

// Load notes from localStorage
function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach(({ title, content }) => addNoteToDOM(title, content));
}

// Save notes to localStorage
function saveNotes() {
  const notes = [];
  document.querySelectorAll(".note").forEach((note) => {
    const title = note.querySelector(".notetitle").innerText;
    const content = note.querySelector(".notepara").innerText;
    notes.push({ title, content });
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Add a new note to the DOM
function addNoteToDOM(title = "Title", content = "Write your note here...") {
  const note = document.createElement("div");
  note.className = "note";

  const noteTitle = document.createElement("h3");
  noteTitle.setAttribute("contenteditable", "true");
  noteTitle.className = "notetitle";
  noteTitle.innerText = title;

  const notePara = document.createElement("p");
  notePara.setAttribute("contenteditable", "true");
  notePara.className = "notepara";
  notePara.innerText = content;

  const delButton = document.createElement("button");
  delButton.className = "delbutton";
  delButton.innerText = "X";
  delButton.onclick = function () {
    container.removeChild(note);
    saveNotes();
  };

  noteTitle.oninput = saveNotes;
  notePara.oninput = saveNotes;

  note.appendChild(noteTitle);
  note.appendChild(notePara);
  note.appendChild(delButton);
  container.appendChild(note);
}

// Create a new note
function createNote() {
  addNoteToDOM();
  saveNotes();
}

// Load saved notes on page load
loadNotes();
