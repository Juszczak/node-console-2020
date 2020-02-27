# Wprowadzenie do Node.js - technologii backendowej pozwalającej budować Restful API dla aplikacji internetowych. Praca z konsolą, NPM, NVM, etc.

## Konsola jako gówne narzędzie programisty

Po uruchomieniu terminala na ekranie powinien pojawić się tak zwany `prompt` czyli znak zachęty. Jest to ciąg znaków zawierający kilka podstawowych informacji:

```
student@host:~/project $
```

* `student` - nazwa użytkownika
* `~/project` - ścieżka do katalogu roboczego (`~` oznacza katalog domowy)
* `$` - zakończenie prompta

Wymiana komunikatów pomiędzy użytkownikiem a komputerem odbywa się w trybie tekstowym.

## Podstawowe pojęcia

* `katalog` - lokalizacja w systemie plików, zawierająca pliki i kolejne katalogi.
* `ścieżka dostępu` - ciąg znaków określający położenie dowolnego obiektu w strukturze katalogu na dysku twardym lub innym nośniku danych;
  ma postać listy katalogów odseparowanych ukośnikami (ang. slashem, "/")
* `katalog domowy` - główny katalog użytkownika oznaczany jako `~`
* `katalog roboczy` - katalog w którym obecnie znajduje się użytkownik, oznaczany jako `.`


## Podstawowe komendy

* `cd ścieżka` - zmienia aktualny katalog (od *change directory*)
  * `cd nazwa` – zmienia aktualny katalog na *nazwa*
  * `cd dir1/dir2/dir3` – wchodzi do katalogu *dir3*, który jest w katalogu *dir2*, który jest w *dir1*
  * `cd` – z dowolnego miejsca, zmienia katalog na domowy
  * `cd ..` – przechodzi do katalogu o jeden wyższego w drzewie katalogów niż obecny
  * `cd /home/dir` – z dowolnego miejsca, przechodzi do katalogu zaczynając od początku drzewa: /
  * `cd` -  – przechodzi do poprzedniego katalogu
* `pwd` – wypisuje scieżkę obecnego katalogu (od *print working directory*)
* `ls` – listuje katalog (od *list*)
  * `ls` – listuje katalog . (`ls .`)
  * `ls plik1 plik2 plik3` – listuje tylko wymienione pliki
  * `ls *.txt` – wypisze wszystkie pliki o nazwie konczącej się na '.txt'
  * `ls katalog1 katalog2` – listuje wymienione katalogi
  * `ls -l` – szczegółowa lista
  * `ls -a` – wypisuje również ukryte pliki (czyli te których nazwa zaczyna się kropką)
  * `ls -R` – listuje katalogi rekursywnie (czyli wyświetla również zawartość podkatalógow)
  * `ls -d` – wyświetla tylko nazwy katalogow, tak jak zwyczajnych plików, czyli nie listuje ich zawartości
* `cat` – wypisuje wszystkie podane mu pliki na standardowe wyjście
  * `cat plik` – jeśli nie przekierujemy standardowego wyjścia do innego pliku (>, >>) lub programu (|), to wypisze plik na ekran
  * `cat plik1 plik2 plik3` – wypisze po kolei zawartość wszystkich plików
* `echo` – powtarza na standardowym wyjściu słowa podane w argumencie
  * `echo costam wypisz, czy echo "costam wypisz"` – wypisze 'costam wypisz' i zakończy znakiem nowej linii
  * `echo -n "costam wypisz"` – po wypisaniu argumentów, nie wypisze znaku nowej linii
  * `echo $HOME` – wypisuje zawartość zmiennej środowiskowej HOME
* `wc` – liczy linie, słowa, i znaki w pliku gdy nie podamy argumentu, czyta ze standardowego wejścia (od *word count*)
  * `cat plik1 plik2 | wc -l` – policzy wszystkie linie z połączonych plików plik1 plik2
  * `wc plik` – wypisze linie słowa i znaki oraz nazwe pliku
  * `wc -m` – tylko znaki (lub --chars)
  * `wc -l` – tylko linie (lub --lines)
  * `wc -w` – tylko słowa (lib --words)
* `less` – wygodne i szybkie przegladanie plikow tekstowych
  * `less plik` – wyświetla zawartośc pliku i pozwa przewijac strony (q-wyjscie)

> UWAGA! Brak informacji zwrotnej o błędzie po wykonaniu polecenia najczęściej oznaca sukces.

## Pliki i katalogi
* `touch` – zmienia czas dostępu i modyfikacji pliku, lub jeśli plik nie istnieje - tworzy go.
  * `touch plik`
* `cp` – kopiuje plik (od *copy*)
  * `cp plik1 plik2` – stworzy ./plik2 identyczny z plik1
  * `cp plik3 ../katalog/jakis/` – stworzy plik ../katalog/jakis/plik3
  * `cp pom.* podkatalog/` – skopiuje wszystkie pliki zaczynające się na 'pom.' do ./podkatalog/
  * `cp plik5 ~/katalog/jakis/pliczek` – stworzy plik ~/katalog/jakis/pliczek
* `mv` – przesuwa plik, służy również do zmiany nazwy (od *move*)
  * `mv plik1 plik2` – zmieni nazwę pliku z ./plik1 na plik2
  * `mv plik3 ../katalog/jakis/` – przesunie plik do ../katalog/jakis/plik3
  * `mv plik4 podkatalog/` – przesunie plik ./podkatalog/plik4
  * `mv plik5 ~/katalog/jakis/pliczek` – przesunie i zmieni nazwę ~/katalog/jakis/pliczek
* `rm` – kasuje plik
  * `rm plik`
  * `rm -r katalog` – kasuje wszystko w katalogu i wszystkie jego podkatalogi (--recursive)
  * `rm -f plik` – nie pyta się czy skasować (--force)
* `mkdir` – tworzy katalog
  * `mkdir moj_nowy_katalog`
  * `mkdir /home/users/ja/moj_nowy_katalog`

> UWAGA! Nazwy tworzonych plików lub folderów nie powinny zawierać spacji, a tylko znaki alfanumeryczne, `_`, `-` czy kropkę `.`.

## Środowisko
* `clear` - czyści zawartość okna Terminala
* `sudo` - wykonanie polecenie jako superużytkownik
  * `sudo apt-get install curl` - instaluje program `curl`
* `[sudo] apt-get install <nazwa>` - instalacja programu o podanej nazwie
  * `sudo apt-get install curl` - instaluje program `curl`
* `which` – wypisuje gdzie znajduje się plik z programem o podanej nazwie
  * `which ls` – zlokalizuj plik, który zostanie uruchomiony po wywołaniu komendy 'ls'

## Przekierowania
* `>` – przekierowanie wyjścia z programu do pliku.
  * Standardowym wyjściem każdego programu jest ekran (konsola tekstowa) a standardowym wejściem jest klawiatura. Można te wejścia i wyjścia przekierowywać dowolnie.

  * `echo "ala ma kota" > plik.txt` – wyjście z programu echo wpisze do pliku plik.txt
  * `ls -l > lista.dat` – wypisze liste plików do pliku lista.dat
* `>>` – doklejenie wyjścia z programu na koniec pliku
  * `echo "ala ma psa" >> plik.txt` – dopisze "ala ma psa" na koniec pliku plik.txt
  * `ls -l > lista.dat` – wypisze liste plików do pliku lista.dat
* `|` – przekierowanie wyjścia jednego programu na wejście drugiego
  * `cat plik.txt | wc -l` – cat wypisuje plik.txt na wyjście które przekierowujemy na program liczący wiersze.
  * `ls -l | lpr` – program drukujący 'lpr' dostanie na wejście liste plików
  * `cat plik.txt | tac | grep "coś" | head > cosie.txt` – wypisanie pliku.txt na program 'tac', który odwaca kolejność wierszy, wynik tego przekierwany na 'grep', który wypisze tylko linie zawierające słowo "coś", wynik tego wysłany na program 'head', który pośle dalej tylk opierwsze 10 wierszy na wyjście, które przekierowaliśmy do pliku cosie.txt.


# Podstawy gita

Przed rozpoczęciem pracy nad projektem warto zatroszczyć się o wersjonowanie swojego projektu aby być w stanie przywrócić działającą wersję jeśli coś pójdzie nie tak. W tym celu należy posłużyć się wcześniej zainstalowanym programem `git`.

Podstawowe komendy gita:
* `git init` - utwórz repozytorium w katalogu w którym obecnie się znajdujesz
* `git status` - zobacz status wersji plików w obecnym katalogu
* `git diff plik` - zobacz zmiany w pliku o nazwie `plik`
* `git add plik` - dodaj `plik` do obecnej wersji
* `git commit -m wiadomość` - zapisz obecną wersję z dodanymi plikami
* `git checkout plik` - wróć do najnowszej zapisanej wersji pliku

Ważnym elementem gita jest plik `.gitignore` który informuje program o zawartości, której nie chcemy wersjonować.
Tworzymy go poleceniem `touch .gitignore` w głównym katalogu projektu.
Następnie możemy dodać do niego informacje o plikach i katalogach, które mają nie podlegać wersjonowaniu. Możemy to zrobić otwierając plik i edytując go ręcznie, bądź w prostszy sposób poprzez terminal, poleceniem:

```
echo node_modules >> .gitignore
```

po czym sprawdzamy czy zawartość została dodana poleceniem
```
cat .gitignore
```


# Instalacja Node na lokalnej maszynie

W zależności od używanego systemu operacyjnego instalacja przebiega w różny sposób opisany na stronie `https://nodejs.org`.

Aby ułatwić zarządzanie wersjami Node.js oraz ułatwić instalację zaleca się używanie narzędzia NVM dostępnego pod adresem https://github.com/creationix/nvm


# Instalacja nowszej wersji Node.js przy użyciu narzędzia NVM

Aktualnie używaną wersję Node.js sprawdzamy poleceniem:
```
node -v
```

Dostępne wersje możemy wylistować poleceniem:
```
nvm ls
```

Aby zainstalować inną wersję wykonujemy polecenie `nvm install` z podaniem wybranej wersji:
```
nvm install 10
```

Następnie warto ustawić zainstalowaną wersję jako domyślną:

```
nvm alias default 10
```


# Tworzenie projektu

Każdy projekt webowy powinien rozpocząć się od utworzenia pliku `package.json`, który zawiera podstawowe informacje o projekcie oraz jego zależnościach.


W jednym z poprzednich zadań stworzyliśmy katalog `~/project/src` z plikami źródłowymi: `index.html`, `main.js` oraz `style.css` – będzie to szkielet naszego projektu.

Aby rozpocząć projekt należy przejść do katalogu `~/project` a następnie wykonać polecenie:

```
npm init -y
```

Na ekranie powinniśmy zobaczyć informację zwrotną o utorzeniu pliku:

```
Wrote to ~/project/package.json:

{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
}

```

Po rozpoczęciu projektu możemy go otworzyć w edytorze.

Po otwarciu projektu możemy edytować pliki znajdujące się w katalogu `src`.


# Praca w środowisku lokalnym

Zanim projekt webowy zostanie w drożony na serwer docelowy programista powinien mieć możliwość sprawdzenia go w środowisku lokalnym.

W tym celu wykorzystać można pakiet `serve` dostępny w menadżerze pakietów NPM. Aby go zainstalować użyjemy polecenia
```
npm install -g serve
```

Po instalacji możemy rozpocząć serwowanie naszej strony w środowisku lokalnym używając w katalogu `~/project` polecenia:
```
serve src -p 8080
```

Która powinna zwrócić informację podobną do:
```
   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:8080       │
   │   - On Your Network:  http://192.168.1.128:8080   │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

Następnie w przeglądarce zobaczymy utworzoną wcześniej stronę internetową.

Otwierając konsolę developerską zobaczymy informację `Hello!`.

Chcąc stworzyć większy projekt niezbędne będzie użycie zewnątrznych bibliotek a więc dodawanie kolejnych skryptów w pliku `index.html` - jest to żmudne i uciążliwe, zwłaszcze jeśli jedne skrypty zależą od innych. Aby zautomatyzować ten proces posłużymy się narzędziem o nazwie `webpack` dostępnym w repozytorium NPM.

Webpack jest narzędziem developerskim, a nie zależnością naszej aplikacji, więc zainstalujemy go oraz inne potrzebne narzędzia z użyciem flagi `--save-dev`:

```
npm install --save-dev webpack webpack-cli html-webpack-plugin copy-webpack-plugin webpack-dev-server
```

Aby korzystać z Webpacka niezbędny będzie plik o nazwie `webpack.config.js` w głównym katalogu naszej aplikacji.
Tworzymy go poleceniem `touch webpack.config.js` a następnie otwieramy poprzez `code webpack.config.js` i uzupełniamy go następującą treścią:
```
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([{
      from: './src/style.css'
    }])
  ],
  mode: 'development'
}
```

Następnie w pliku `package.json` należy zastąpić obiekt `scripts` poniższym:
```
"scripts": {
  "dev": "webpack-dev-server",
  "build": "webpack"
},
```

Przed rozpoczęciem pracy z webpackiem należy w pliku `index.html` usunąć linijkę ładującą `main.js` – webpack zadba o dodanie jej i wszystkich innych skryptów automatycznie.

Od teraz komendą `npm run-script dev` wystartujemy developerski serwer, który będzie serwował naszą aplikację i odświeżał ją po naszysz zmianach w kodzie. Serwer developerski domyślnie serwuje aplikację na porcie `8080`.

Dodatkowo w pliku `webpack.config.js` należy dodać wpis konfiguracyjny serwera:
```
  devServer: {
    historyApiFallback: true,
    port: 8080,
  }
```

# Budowanie aplikacji produkcyjnej

Aby zbudować aplikację na produkcję użyjemy komendy `npm run-script build`.

Zanim jednak wdrożymy naszą aplikację na produkcję warto zadbać o minifikację kodu w celu zwiększenia jej wydajności. Użyjemy w tym celu dostępnych dostępnych narzędzi.

Oznacza ona, że jeśli podczas działania procesu programu `webpack` będzie istniała zmienna środowiskowa `PRODUCTION` to do tablicy pluginów należy dodać kolejny, który zadba o minifikację kodu.

Aby program zaczął działać ponownie musimy dokonać zmian w pliku `package.json` – zmienimy zawartość skryptu `build` na poniższą:
```
"build": "PRODUCTION=true webpack"
```

Możemy teraz sprawdzić, że po zbudowaniu zawartość pliku `dist/main.js` będzie zminifikowana.

# Wstęp do Node.js

Należy pamiętać, że kod JavaScript wykonywany na serwerze, pomimo braku różnic w samym języku, różni się znacząco biblioteką standardową. W aplikacji wykonywanej na serwerze nie mamy dostępu do obiektów globalnych takich jak `document` czy `window` a także do całej palety funkcji związanych z Document Object Model.

Wykonując skrypt poniższy skrypt w przeglądarce

```
document.write(window.location.href)
```

zobaczymy, że dokument z tekstem odpowiadającym obecnemu adresowi URL na którym aktualnie jesteśmy, natomiast wykonując ten sam skrypt w Node zobaczymy poniższy błąd:
```
ReferenceError: document is not defined
```

Biblioteka standardowa Node.js daje nam jednak wiele innych możliwości, takich jak funkcja `require`, która pozwala na ładowanie dodatkowych bibliotek spośród dostępnych natywnie w Node.js jak i zainstalowanych przez NPM.

Używając polecenia `node` bez żadnych parametrów w terminalu możemy wejść do interaktywnego interpretera kodu JavaScript na platformie Node.js, natomiast podając jako pierwszy parametr ścieżkę do pliku JavaScript wykonać go bezpośrednio przez maszynę wirtualną Node.js.

Dokumentacja biblioteki standardowej Node.js znajduje się pod adresem https://nodejs.org/dist/latest-v10.x/docs/api/

# Tworzenie aplikacji backendowej w Node.js z użyciem frameworka Express.js

Aplikacja backendowa w Node.js to nic innego jak skrypt napisany JavaScript wykonywany przez maszynę wirtualną Node.js, którą wcześniej zainstalowaliśmy.

Tworzymy plik wejściowy o nazwie `index.js` poleceniem w głównym katalogu aplikacji:
```
cd ~/project
touch index.js
```

Serwer webowy dla aplikacji możemy napisać w całości używając komponentów biblioteki standardowej Node.js, jak w prostym przykładnie poniżej:
```
var http = require('http')

var PORT = 3000;

var app = http.createServer();

app.addListener('request', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.write('{"hello": "world"}');
  res.end();
})

app.listen(PORT, function() {
  console.log('listening on port', PORT);
})
```

Natomiast w tym przypadku musimy samodzielnie zadbać o trasowanie, parsowanie wiadomości przychodzących, sprawdzanie nagłówków czy zapisywanie kodów HTTP dla odpowiedzi na zapytania.

Aby nie wymyślać koła na nowo użyjemy frameworka Express.js, w którym ten tę samą funkcjonalność możemy zapisać w dużo bardziej czytelny sposób:
```
var express = require('express')

var PORT = 3000;

var app = express();

app.get('*', function(req, res) {
  res.json({
    hello: 'world'
  })
})

app.listen(PORT, function() {
  console.log('listening on port', PORT);
});
```

Aby przejść do tworzenia właściwego backendu aplikacji webowej potrzebujemy zainstalować zależność w postaci frameworka Express.js oraz jego dodatkowych komponentów.

Wykonujemy polecenie:
```
npm install --save express body-parser
```

> UWAGA! Tym razem powyższe zależności będą wymagane podczas działania aplikacji, dlatego instalujemy je z flagą `--save`, a nie jak w przypadku zależności developerskich `--save-dev`

Kolejnym krokiem będzie edycja kodu źródłowego `index.js` na podany w przykładnie implementacji z użyciem frameworka `express`.

Po zakończeniu wstępnego etapu implementacji należy dodać kolejny skrypt NPM w pliku `package.json`:

```
"server": "node index.js"
```

Po dodaniu skryptu możemy go uruchomić poleceniem
```
npm run-script server
```

W informacji zwrotnej powinniśmy zobaczyć wiadomość:
```
listening on port 3000
```

Oznacza to, iż nasz serwer nasłuchuje na zapytania na porcie `8080`.

Aby przetestować działanie aplikacji możemy odpytać serwer narzędziem `curl`, które wcześniej zainstalowaliśmy:
```
curl http://localhost:3000
```

Innym sposobem na sprawdzenie działania aplikacji jest uruchomienie w przeglądarce adresu URL `http://localhost:8080` bądź kliknięcie przycisku _Preview_ w środowisku Cloud9.


# Serwowanie statycznych plików

Aby aplikacja webowa była w stanie komunikować się z użytkownikiem w sposób interaktywny powinna wyświetlać użytkownikowi interfejs w postaci dokumentu HTML.

Wykorzystamy w tym celu stworzone wcześniej pliki `index.html`, `main.js` oraz `style.css`.

Po zbudowaniu frontendu poleceniem `npm run-script build` pliki produkcyjne są dostępne w katalogu `dist`.

Aby użyć ich jako interfejsu naszej aplikacji posłużymy się modułem `static` udostępnionym przez Express.js. W tym momencie możemy zastąpić kod odpowidzialny za generowanie odpowiedzie na dowolne zapytanie jako `{"hello": "world"}` kodem, który wyśle do przeglądarki stworzone przez nas pliki:

```
app.get('*', express.static('./dist));
```

Próba uruchomienia aplikacji zakończy się błędem, ponieważ użyliśmy w kodzie modułu `path`, który nie został jeszcze zadeklarowany. Naprawimy to dodając poniższą linijkę na początku pliku:
```
var path = require('path')
```

Każda zmiana w pliku `index.js` wymaga restartu aplikacji, aby zautomatyzować tę czynność zainstalujemy pakiet o nazwie `nodemon`, który będzie restartować serwer podczas zmian w pliku źródłowym w sposób automatyczny.

```
npm install --save-dev nodemon
```

Po instalacji edytujemy skrypt `"server"` na poniższy:
```
"server": "nodemon index.js"
```

Następnym razem po wykonaniu skryptu:
```
npm run-script server
```

zobaczymy poniższy komunikat, a aplikacja zrestartuje się po dokonaniu zmian.

```
> nodemon index.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
listening on port 8080
```

Kolejnym krokiem jest możliwość podglądu zmian w interfejsie użytkownika podczas edycji kodu. Tę funkcjonalność zaimplementowaliśmy wcześniej w skrypcie o nazwie `dev`, lecz uruchamianie wielu skryptów w tym samym czasie jest uciążliwe. Aby rozwiązać ten problem posłużymy się pakietem o nazwie `npm-run-all`.

Narzędzie to pozwala na uruchimienie kilku skryptów NPM równolegle.

```
npm install --save-dev npm-run-all
```

Po instalacji edytujemy skrypty w `package.json` jak w przykładzie poniżej.

```
"scripts": {
  "dev": "run-p dev:client dev:server",
  "dev:client": "webpack-dev-server",
  "dev:server": "nodemon index.js",
  "build": "PRODUCTION=true webpack"
},
```

Pomimo wystartowania obydwu skryptów naraz, jeden z nich serwuje warstwę kliencką aplikacji poprzez **Webpack Dev Server** na porcie `8080`, natomiast drugi nadal serwuje statyczne pliki z folderu `dist` na porcie `8081`.

Aby rozwiązać powyższy problem, posłużymy się biblioteką `express-http-proxy` dostępną w NPM. Instalujemy bibliotekę poleceniem:
```
npm install --save express-http-proxy
```

Następnie w pliku `index.js` w jednej z pierwszych linii dodajemy deklarację:
```
var proxy = require('express-http-proxy')
```

oraz zastępujemy kod odpowiedzialny za serwowanie statycznych plików poniższym:
```
var frontend;
if (process.env['PRODUCTION']) {
  frontend = express.static('./dist');
} else {
  frontend = proxy('http://localhost:8080');
}
app.get('*', frontend)
```

Powyższe zmiany pozwalają na rozróżnienie przez serwer środowiska produkcyjnego od developerskiego i w zależności od potrzeby serwowane są statyczne pliki z katalogu `dist` w środowisku produkcyjnym, natomiast w środowisku developerskim zamiast serwowania statycznych plików, serwer staje się serwerem proxy pomiędzy przeglądarką a serwerem developerskim pozwalającym na Live Reload.

# Tworzenie RESTful API

Aplikacja backendowa służąca jedynie do serwowania statycznych plików jest zbędnym przedsięwzięciem, ponieważ za samo serwowanie statycznych plików może z łatwością odpowiadać dowolny z serwerów statycznych plików jak `apache` czy `nginx`. Celem budowy naszej aplikacji webowej jest umożliwienie utrzymywania wspólnego kodu dla warstwy klienckiej i serwerowej oraz możliwość wdrażania zmian jednocześnie na obydwie platformy.

Kolejnym krokiem tworzenia naszej aplikacji będzie implementacja RESTful API, które umożliwi użytkownikowi interakcję z aplikacją oraz przechowa jej stan.

## Trasowanie (routing)

Pierwszym krokiem podczas budowy API jest deklaracja ścieżek do których użytkownik będzie mógł wysyłać zapytania i otrzymywać odpowiedzi.

W pliku `index.js` tuż po zadeklarowaniu zmiennej `app` należy dodać poniższy kod:

```
var NOTES_URL = '/notes';

app.get(NOTES_URL, function(req, res) {
    res.json({
      notes: []
    })
});

app.post(NOTES_URL, function(req, res) {
    res.json({
      status: 'added'
    })
});

app.delete(NOTES_URL, function(req, res) {
    res.json({
      status: 'deleted'
    })
});
```

Zdefiniowaliśmy tak zwane **endpointy** dla zapytań typu `GET`, `POST` oraz `DELETE`, które posłużą kolejno do listowania, dodawania oraz kasowania notatek.

Odpowiedzi na zapytania zwrócą pustą listę dla zapytania `GET` o listę notatek, oraz kolejno statusy `added` oraz `deleted` dla zapytać `POST` oraz `DELETE`.

Aby sprawdzić ich działanie poslużymy po raz kolejny narzędziem `curl` orpytując kolejno każdy z endpointów aplikacji:

```
curl localhost:3000/notes
curl -X POST localhost:3000/notes
curl -X DELETE localhost:3000/notes
```

> UWAGA! Flaga `-X` oznacza, że kolejnym argumentem wywołania jest informacja o metodzie, której `curl` powinien użyć do odpytania serwera.

# Wymiana danych pomiędzy serwerem a klientem

Podstawowe REST API jest już gotowe, chodź jego funkcjonalność jest obecnie bardzo uboga. Warto jednak teraz skupić się na implementacji zapytań po stronie klienckiej.

Aby wyświetlać listę notatek w przeglądarce niezbędne będą następujące zmiany w pliku `index.html` wewnątrz znacznika `<body>`

```
<h1>Notes</h1>
<p id="content">Loading&hellip;</p>
<form id="todos">
  <input id="todo" name="todo"></input>
  <button type="submit">add note</button>
</form>
```

Po zapisaniu zmian w przeglądarce zobaczymy nagłówek `Notes`, komunikat `Loading…` oraz formularz służący do dodawania nowych notatek z przyciskiem.

Następnie w pliku `main.js` zastąpimy jedyną linię kodu, poniższymi:
```
document.addEventListener('DOMContentLoaded', function() {
  var content = document.getElementById('content');
  var form = document.getElementById('todos');
  var input = document.getElementById('todo');

  function addNote(note) {
    var element = document.createElement('div')
    element.innerHTML = note;
    element.className = 'note'
    content.appendChild(element);
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var note = input.value;
    input.value = '';
    addNote(note);
  });
});
```

Powyższy kod deklaruje zmienne powiązane z elementami DOM oraz pozwala na nasłuchiwanie na zdarzenia typu `submit` na formularzu, a następnie dodaje nowe notatki do drzewa DOM.

Niestety dodawane notatki są trzymane jedynie w pamięci komputera przeznaczonej na zawartość aktywnej karty przeglądarki i po odświeżeniu zawartości wszystkie dane są tracone.

Aby temu zapobiec zaimplementujemy zapisywanie danych na serwerze poprzez zapytanie do utworzonego wcześniej REST API. Do wysyłania zapytań posłużymy się Fetch API.

Aby wysyłać do serwera informację o utowrzeniu nowej notatki zmienimy napisany wcześniej kod odpowiedzialny za obsługę zdarzenia `submit` w następujący sposób:
```
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var note = input.value;
  input.value = '';
  addNote(note);
  fetch('/notes', {
    method: 'post',
    headers: headers,
    body: JSON.stringify({note: note})
  });
});
```

Aby być w stanie odczytywać listę notatek dodamy także:
```
fetch('/notes').then(function(res) {
  res.json().then(function(data) {
    content.innerHTML = '';
    data.notes.forEach(function(note) {
      addNote(note);
    })
  })
})
```

Kod ten odpowiada za pobranie i wyświetlenie listy notatek tuż po załadowaniu strony oraz usunięcie informacji o ładowaniu po zakończeniu zapytania.

Niestety zapytanie o listę notatek zawsze zwraca pustą listę, zgodnie z implementacją naszego REST API.

Pierwszym krokiem do komunikacji pomiędzy klientem a serwerem jest przesyłanie informacji o wysyłanym i akceptowanym typie danych – w pliku `main.js` należy na początku dodać poniższy fragment kodu:
```
var headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
```

Kolejnym krokiem jest implementacja zapisu i odczytu notatek po stronie serwera.

Aby Express był w stanie w w prosty sposób parsować komunikaty przesyłane przez przeglądarkę należy w pliku `index.js` zaimportować oraz użyć biblioteki `body-parser`, która została zainstalowana wcześniej:

```
var bodyParser = require('body-parser');

app.use(bodyParser.json());
```

W pliku `index.js` należy zadeklarować tablicę, w której przechowywana będzie informacja o zapisanych notatkach, a także zedytować istniejące metody odpowiadające za zapis i odczyt notatek:

```
var notes = [];

app.post('/note/add', function(req, res) {
  var note = req.body.note;
  notes.push(note);
  res.json({value: note});
});

app.get('/notes', function(req, res) {
  res.json({notes: notes});
})
```

Lista notatek będzie od teraz przechowywana na serwerze i kolejne odświeżenie okna przeglądarki nie będzie powodowało utraty danych.

Ostatnim krokiem jest umożliwienie kasowanie niepotrzebnych notatek. Aby to osiągnąć w pliku `main.js` należy rozszerzyć funkcję `addNote` w następujący sposób:
```
function addNote(note) {
  var element = document.createElement('div')
  element.innerHTML = note;
  element.className = 'note'
  element.addEventListener('click', function() {
    var info = document.createElement('span');
    info.className = 'info';
    info.innerHTML = 'deleting…';
    element.appendChild(info)
    fetch('/notes', {
        method: 'delete',
        headers: headers,
        body: JSON.stringify({
          note: note
        })
      })
      .then(function(res) {
        res.json().then(function(data) {
          if (data.deleted === note) {
            content.removeChild(element);
          }
        })
      })
  })
  content.appendChild(element);
}
```

Na serwerze natomiast należy zmienić funkcję odpowiadającą za metodę `DELETE` w następujący sposób:
```
app.delete('/notes', function(req, res) {
  var note = req.body.note;
  var index = notes.indexOf(note);
  notes = notes.splice(index, 1);
  res.json({deleted: note});
});
```

Aby polepszyć tzw. User Experience aplikacji, warto dodać też style dla komunikatu o kasowaniu notatki w pliku `style.css`:
```
.note {
  cursor: pointer;
}

.note:hover {
  color: #666;
}

.info {
  color: #999;
  font-size: 0.8em;
  margin-left: 10px;
}
```
