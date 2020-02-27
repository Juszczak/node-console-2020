/* zmienna pomocnicza zawierająca ścieżkę dla zapytań do API */
const NOTES_URL = '/notes';

/* obsługa wydarzenia załadowania strony */
document.addEventListener('DOMContentLoaded', () => {
  /* deklaracja zmiennych z referencjami do elementów DOM z pliku index.html */
  const content = document.getElementById('content'); // ul
  const todos = document.getElementById('todos'); // form
  const todo = document.getElementById('todo'); // input

  /* deklaracja nagłówków dla zapytań */
  const requestHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  /* obsługa wydarzenia próby wysłania formularza */
  todos.addEventListener('submit', event => {
    event.preventDefault(); // zablokowanie domyślnego zachowania przeglądarki
    const note = todo.value; // przypisanie wartości wpisanej w polu tekstowym
    todo.value = ''; // wyczyszczenie pola tekstowego

    const body = {note: note}; // ciało zapytania POST /notes

    addNote(note); // wywołanie funkcji tworzącej element w drzewie DOM

    /* wysłanie zapytania typu POST */
    fetch(NOTES_URL, {
      method: 'POST', // typ zapytania
      headers: requestHeaders, // deklaracja nagłówków
      body: JSON.stringify(body), // serializacja ciała zapytania
    }).then(res => {});
  });

  /* funkcja dodająca element w drzewie DOM */
  function addNote(note) {
    const element = document.createElement('li'); // utworzenie elementu <li>
    element.innerText = note; // deklaracja treści utworzonego elementu
    content.appendChild(element); // dodanie elementu do istniejącego elementu <ul>

    /* obsługa wydarzenia kliknięcia na element <li> */
    element.addEventListener('click', event => {
      /* wysłanie zapytania typu DELETE */
      fetch(NOTES_URL, {
        method: 'DELETE', // typ zapytania
        headers: requestHeaders, // deklaracja nagłówków
        body: JSON.stringify({note: note}), // serializacja ciała zapytania
      }).then(res => { // obsługa pomyślnego zapytania
        content.removeChild(element); // usunięcie elementu z drzewa DOM
      });
    });
  }

  /* pobranie listy elementów po załadowaniu strony */
  fetch(NOTES_URL)
    .then(res => res.json()) // mapowanie odpowiedzi serwera na ciało odpowiedzi
    .then(body => {
      content.innerHTML = ''; // wyczyszczenie tekstu "Loading…"
      const notes = body.notes; // zmienna pomocnicza (tablica)
      /* wywołanie funkcji tworzącej pojedynczy element w drzewie DOM
       * dla każdego z elementów pobranej tablicy */
      notes.forEach(note => addNote(note));
    });
});
