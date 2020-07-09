let name = 'erhan';
let nachname = 'ince';
let alter = 38;
let geburtsort = 'Neuss';
let groese = '1.8 cm';
let gewicht = '100 kg';
let hobbys = 'laufen';
let computerspiele = 'batman';
let lieblingsessen = 'nudeln';
let lieblingssport = 'fussball';
let lieblingsbekleidungshersteller = 'kik';
let lieblingsjahreszeit = 'winter';
let lieblingsurlaubsort = 'alaska';

function satz() {
     console.log(
          `Hallo ich bin ${name} ${nachname}, ich bin ${alter} Jahre alt und bin in  ${geburtsort} geboren. Meine größe ist ${groese}, mein gewicht ist ${gewicht}. Zu meinen hobbys gehört das ${hobbys}. ${computerspiele} ist mein lieblingsspiel am Computer. Mein lieblingsessen ist ${lieblingsessen} . ${lieblingssport} gehört zu meinen lieblings sportarten.Die marke die mir am besten gefällt ist ${lieblingsbekleidungshersteller}. Die Jahreszeit die ich am meisten mag ist ${lieblingsjahreszeit}. Mein traum reiseziel ist ${lieblingsurlaubsort}`
     );
}
satz(
     'erhan',
     'ince',
     38,
     'Neuss',
     '1.8cm',
     '100 kg',
     'laufen',
     'batman',
     'nudeln',
     'fussball',
     'kik',
     'winter',
     'alaska'
);
// Erstelle für den Text des Songs passende Variablen.
// Schreibe mit Hilfe von String concatenation und Template literals.
// Jeder sich wiederholende Reim und Refrain soll durch eine Variable ersetzt.
// Songtexte, Beispiele für Variablen:

// var lunatic = "lunatic is";
// var darkSide = "I'll see you on the dark side of the moon";
// var hall = "hall";
// var head = "in my head";
// var door = "You lock the door";
// var paperboy = "paperboy";
// var and = “And”;
// var the = “The”;

let theLunatic = 'The lunatic is on the grass';
let theHall = 'The lunatic is in the hall';
let myHead = 'The lunatic is in my head';
console.log(theLunatic.concat(theHall).concat(myHead));
console.log(`${theLunatic} ${theHall} ${myHead}`);

// Erstelle zwei Variablen nachName und vorName.
// Zeige die Länge der beiden Variablen in der Konsole an.
// Erstelle noch ein Variable “name”, die die Summe der beiden Variablen ist.
// Zeige die Länge der Variable “name” in der Konsole an.
let nachName = 'müller';
let vorName = 'josef';
console.log(nachName.length);
console.log(vorName.length);

// Verwende den Befehl indexOf() um die Position eines Zeichens in einer Zeichenketten als Ergebnis in der Konsole zu erhalten.

// var txt = ”How inappropriate to call this planet Earth, when clearly it is Ocean.”

// Suche die Position des Zeichens “h” in der Variablen txt.
// Suche die Position des Zeichens “Earth” in der Variablen txt.
// Suche die Position des Zeichens “Moon” in der Variablen txt.
var txt =
     'How inappropriate to call this planet Earth, when clearly it is Ocean.';
console.log(txt.indexOf('h'));
console.log(txt.indexOf('Earth'));
console.log(txt.indexOf('Moon'));

// Aufgabenstellung

// Verwende den Befehl search() um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.

// var txt2 = ”Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.”

// Suche die Position des Zeichens “;” in der Variablen txt.
// Suche die Position des Zeichens “green” in der Variablen txt.
// Suche die Position des Zeichens “blue” in der Variablen txt.
var txt2 =
     'Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.';
console.log(txt2.search(';'));
console.log(txt2.search('green'));
console.log(txt2.search('blue'));

// Aufgabenstellung

// Verwende den Befehl slice() um das Ergebnis zu erhalten.

// var A = 'Sam is going to codingschool';

// Verwende die Methode "slice" um diese Ausgabe auf dem Bildschirm anzuzeigen:
// Sam
// is
// am is going to school
// is going to school
// school
// Sam is school

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis im Dokument auszugeben.
// var A = 'Sam is going to codingschool';
// let school = A.slice(22, 29);

// console.log(A.slice(0, 3));
// console.log(A.slice(4, 6));
// console.log(A.slice(1, 15) + ' ' + school);
// console.log(A.slice(4, 15) + ' ' + school);
// console.log(school);
// console.log(A.slice(0, 7) + ' ' + school);

// let result1 = A.slice(0, 3);
// document.write(result1 + '<br>');
// let result2 = A.slice(4, 6);
// document.write(result2 + '<br>');
// let result3 = A.slice(1, 15) + ' ' + school;
// document.write(result3 + '<br>');
// let result4 = A.slice(4, 15) + ' ' + school;
// document.write(result4 + '<br>');
// let result5 = school;
// document.write(result5 + '<br>');
// let result6 = A.slice(0, 3);
// document.write(A.slice(0, 7) + ' ' + school + '<br>');

// Aufgabenstellung

// Verwende den Befehl substring() um die gewünschten Zeichenketten zu erhalten.

// var text = 'Sam is back from codingschool';

// Zeige mit Hilfe der Methode "substring" diese Ausgabe in einem HTML-Dokument an:

// Sam
// is
// school
// Sam is school

// Speichere jedes Ergebnis in einer Variablen und verwende document.write(var1+"<br"), um das Ergebnis anzuzeigen.
var text5 = 'Sam is back from codingschool';
let school1 = text5.slice(23, 30);

console.log(text5.substring(0, 3));
console.log(text5.substring(4, 7));
console.log(text5.substring(23, 29));
console.log(text5.substring(0, 7) + ' ' + school1);
console.log(text5.substring(23, 30));
let result7 = text5.substring(0, 3);
document.write(result7 + '<br>');
let result8 = text5.substring(4, 7);
document.write(result8 + '<br>');
let result9 = text5.substring(23, 29);
document.write(result9 + '<br>');
let result10 = text5.substring((0, 7) + ' ' + school1);
document.write(result10 + '<br>');
