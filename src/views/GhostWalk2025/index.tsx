import Puzzle from "@/components/Puzzle";
import "./index.css";

function GhostWalk2025() {
  return (
    <>
      <h1>Labyrintens Hemlighet</h1>
      <h3>Introduktion & Regler</h3>
      <Intro />
      <Stage1 />
      <Stage2 />
      <Puzzle code={["0", "0", "1", "6"]} />
      <Stage3 />
      <Puzzle code={["3", "2", "3", "1"]} />
      <Stage4 />
      <Puzzle code={["8", "0", "5", "6"]} />
      <Stage5 />
      <Puzzle code={["4", "7", "7", "4"]} />
      <h3>Uppdrag</h3>
      <Task1 />
      <Task2 />
      <Task3 />
    </>
  );
}

function Intro() {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
    >
      <p>
        Välkomna till spökvandringen "Labyrintens Hemlighet". I år har
        Wadköpingsgatans godisskatt hamnat på havsbotten! Ni kommer att behöva
        låsa upp labyrintens hemligheter för att kunna fiska upp en skatt som
        hamnat på havets botten. Tyvärr har den enarmade fiskaren Justinia det
        enda fiskespöt i huset och belagt samtliga lån av spöt med en avgift,
        1000 svenska kronor.
      </p>
      <p>
        Uppgiften fixar ni enkelt, gå längs labyrinten, lös uppgifterna ni
        hittar längs vägen och 1000 spännn blir era! En vuxen kommer att guida
        er genom samtliga pussel och klurigheter ni ställs inför i labyrinten.
        Innan ni börjar vandringen kommer här en varning, det är av yttersta
        vikt att ni INTE avslöjar något av svaren till de andra grupperna.
        Avslutningsvis och oturligt nog finns det en orm i källaren som vi inte
        matat sedan julafton. Vid händelse av ett barn eller vuxen blir rädd för
        ormen kan man säga <strong>TRÄDGÅRDSSLANG</strong> så förvandlas ormen
        till en trädgårdsslang, rätt praktiskt om jag får säga det själv.
      </p>

      <code style={{ color: "hotpink" }}>
        [ Till den vuxna - OBS läs ej högt när ni ser text inom klamrar, råkade
        du läsa detta högt? Ingen fara, detta var ju inte hemligt! ]
      </code>
    </section>
  );
}

function Stage1() {
  return (
    <>
      <h3>Hämta Nödvändig Utrustning</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>
          Er första uppgift blir att ta er till pysselrummet för att utrusta er
          med en valfri penna och ett ark vitt papper. Skriv lagnamn,
          lagmedlemmarnas namn och en symbol för erat lag.
        </p>
        <code style={{ color: "hotpink" }}>
          [A4 blir bra, skriv ner lösningen till varje pussel ifall sidan laddar
          om sig av misstag. Förslag på symbol, en hand, spindel, döskalle,
          valfritt monster et. c.]
        </code>

        <p>
          <input type="checkbox" name="stage1" id="stage1" />
          <label htmlFor="stage1">
            &nbsp;Ni har ett papper med laginformation och en fungerande penna.
          </label>
        </p>
      </section>
    </>
  );
}

function Stage2() {
  return (
    <>
      <h3>Den Knarrande Trappan</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>
          Dags att klättra upp till labyrintens övre del. För att nå ända högst
          upp kommer ni att behöva gå längs de vindlade trätrapporna. Med andra
          ord, dags för det första pusslet och vilken bättre start än att börja
          med en enkel räkneövning?
        </p>
        <p>Hur många trappsteg består den knarrande trappan av?</p>
        <code style={{ color: "hotpink" }}>
          [Det finns 16 trappsteg, för att få rätt måste barnen lista ut att man
          ska skriva 0016 som lösning på uppgiften, led de in på det om de
          tvekar!]
        </code>
      </section>
    </>
  );
}

function Stage3() {
  return (
    <>
      <h3>Den hemsökta dockgarderoben</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>
          Sedan urminnes tider har det legat en besvärjelse över dockgarderoben.
          Labyrinten lovar att häva besvärjelsen <strong>OM</strong> ni kan lösa
          nästa kluriga pussel. Labyrinten har varit snäll nog att lämna en
          ledtråd för varje siffra i nästa kombination. Fortsätt förbi den
          knarrande trappan och fortsätt till Leias rum för att lösa pusslet.
        </p>
        <p>
          <ol>
            <li>KATTER</li>
            <li>SYSTRAR</li>
            <li>DOCKHUS</li>
            <li>NYCKEL</li>
          </ol>
        </p>
        <code style={{ color: "hotpink" }}>
          [Lösningen är att Leia har 3 katter, det är 2 systrar som bor i huset,
          det finns 3 dockhus och 1 nyckel till den hemsökta garderoben.]
        </code>
      </section>
    </>
  );
}

function Stage4() {
  return (
    <>
      <h3>Ett stinkande problem.</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>
          På tal om katter så har katterna lämnat stinkande avfall i labyrinten.
          Labyrinten vill att ni hittar katternas &#128169; och får den att
          försvinna för gott. Tyvärr kommer en i gruppen att behöva ta i
          &#128169; och vända den upp och ner för att kunna lösa detta klibbiga
          pussel. Ledtråden denna gången är att den stora stinkande &#128169;
          syntes till i rummet intill källarens badrum.
        </p>
        <code style={{ color: "hotpink" }}>
          [Katterna har en liten koja med en &#128169;-formad kudde i källaren.
          Om barnen lyfter den och vrider och vänder på den står koden 8056
          fasttejpad på den.]
        </code>
      </section>
    </>
  );
}

function Stage5() {
  return (
    <>
      <h3>Ormen är lös.</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>
          Labyrinten fortsätter i källaren till torkrummet där ormen Vanessa
          slagit läger efter att ha rymt från sitt terrarium.I torkrummet har
          labyrinten varit snäll och lämnat lösningen till det sista pusslet
          intakt, men Vanessa har i sin jakt på mat misstagit lösningen för
          ormmat. Detta har lett till att lösningen ligger i delar i rummet. Det
          är bara att börja leta!
        </p>
        <code style={{ color: "hotpink" }}>
          [Det finns fyra lappar fasttejpade i rummet. En under "ormens" korg,
          en under diskhon, en bakom dörren och en på avfuktaren. Den lilla
          siffran i hörnet anger positionen och den stora siffran anger värdet.
          Koden är 4774.]
        </code>
      </section>
    </>
  );
}

function Task1() {
  return (
    <>
      <h3>Uppdrag 1</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>
          Uppdraget består av att fråga Logistikmästare (ja, det är en riktig
          titel) Anneli (också känd som Leias mormor) och fråga henne hur många
          barnbarn hon har.
        </p>
        <code style={{ color: "hotpink" }}>
          [Anneli hittar ni säkerligen i köket, hon har 12 barnbarn (om jag inte
          räknat fel)]
        </code>

        <p>
          <input type="checkbox" name="task1" id="task" />
          <label htmlFor="task1">
            &nbsp;Skriv rätt svar på pappret och märk med Uppdrag 1.
          </label>
        </p>
      </section>
    </>
  );
}

function Task2() {
  return (
    <>
      <h3>Uppdrag 2</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>
          Leias pappa kommer från ett land långt härifrån, fråga Leia om vad
          landet heter.
        </p>
        <code style={{ color: "hotpink" }}>
          [Om Leia har glömt kommer Leias pappa från Chile.]
        </code>

        <p>
          <input type="checkbox" name="task1" id="task" />
          <label htmlFor="task1">
            &nbsp;Skriv rätt svar på pappret och märk med Uppdrag 2.
          </label>
        </p>
      </section>
    </>
  );
}

function Task3() {
  return (
    <>
      <h3>Uppdrag 3</h3>
      <section
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p>Hur många kalasdeltagare bor på en ö utanför Göteborg?</p>
        <code style={{ color: "hotpink" }}>
          [Jag får det till 7 st om man räknar i Leias minsta kusin Axel]
        </code>

        <p>
          <input type="checkbox" name="task1" id="task" />
          <label htmlFor="task1">
            &nbsp;Skriv rätt svar på pappret och märk med Uppdrag 3.
          </label>
        </p>
      </section>
    </>
  );
}

export default GhostWalk2025;
