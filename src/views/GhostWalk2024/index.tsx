export function GhostWalk2024() {
  return (
    <>
      <h1>Wadköpingsgatans Förbannelse</h1>
      <h3>Introduktion & Regler</h3>
      <Intro />
      <Stage1 />
      <Stage2 />
      <Stage3 />
      <Stage4 />
      <Stage5 />
      <TurnIn />
    </>
  );
}

function Intro() {
  return (
    <>
      <p>
        Välkomna alla barn och vuxna till spökvandringen "Wadköpingsgatans
        Förbannelse". Ni kommer att ställas in för en handfull prov för att
        hitta Wadköpingsgatans godisskatt. Ni leds av en vuxen som kommer att
        guida er genom prövningarna ni kommer att ställas framför. Innan ni
        börjar vandringen kommer här en varning, det är av yttersta vikt att ni
        INTE avslöjar något av svaren till de andra grupperna som löser samma
        gåtor, det finns absolut INGET monster som gömmer sig i tvättmaskinen
        och ni behöver inte vara rädda för er guide kommer att kunna skydda er
        från alla eventuella vålnader, spöken, gastar, ekon från det förflutna,
        mumier, gengångare, skelett och demoner som hemsöker detta hus. Om någon
        i gruppen blir rädd kan alla i gruppen ropa ordet JUMANJI för att skydda
        er från skräcken som lurar i skuggorna. Nu börjar vi, lycka till och må
        den busiga åsnan Galadriels ljus skina över er och skydda er längs
        vägen.
      </p>

      <code>
        [ Till den vuxna - obs läs ej högt när ni ser text inom klamrar ]
      </code>
    </>
  );
}

function Stage1() {
  return (
    <>
      <h3>Utrusta er!</h3>
      <p>
        Er första uppgift blir att ta er till pysselrummet för att utrusta er
        med en färgpenna och ett ark vitt papper. Längs vägen är det viktigt att
        ni tassar på tå förbi spisen, enligt legenden har en trollkarl kastat en
        besvärjelse över den kan vakna till liv om den hör era fotsteg!
      </p>

      <p>
        <input type="checkbox" name="stage1" id="stage1" />
        <label htmlFor="stage1">
          Samtliga barn har en penna och ett ark papper
        </label>
      </p>
    </>
  );
}

function Stage2() {
  return (
    <>
      <h3>Lost little robot</h3>

      <p>
        Wadköpingsgatans robot "Chelsea" har gått vilse igen. Under hennes färd
        i trädgården såg hon ett läskigt djur och skenade i panik iväg till
        hennes trygga plats i källaren. Er andra uppgift blir att hitta Chelsea,
        lösa gåtan om vilket djur som skrämde henne.
      </p>
      <code>
        [ Gå ner en trappa till källaren, gå förbi tvättmaskinen och påminn
        barnen om att det absolut inte finns något monster i den, passera till
        torkrummet och öppna dörren till vänster, Chelsea är på golvet direkt
        till höger, Gåtan är "Jag är mjuk och lurvig, älskar att mysa och jaga
        möss. Vad är jag?" Svaret är: katt ]
      </code>
      <p>
        <input type="checkbox" name="stage2" id="stage2" />
        <label htmlFor="stage2">Samtliga barn har ritat en katt</label>
      </p>
    </>
  );
}

function Stage3() {
  return (
    <>
      <h3>Play it! Be it!</h3>
      <p>
        Diana och Roma, kända youtubers och alla föräldrars värsta mardröm
        behöver er hjälp med att återvända till sina föräldrar. När de gick en
        spökvandring i Wadköpingsgatan öppnade de tvättmaskinen och sprang till
        badkaret för att söka skydd. Hitta Diana och Roma och lös näta gåta för
        att visa de hur de ska komma hem.
      </p>
      <code>
        [ Gå tillbaka förbi tvättmaskinen, höger innan löpbandet och Diana och
        Roma ligger i de rosa korgarna på badkaret. Gåtan är "Jag visar mig
        efter regn, i en båge av färger. Vad är jag?". Svaret är regnbågen ]
      </code>
      <p>
        <input type="checkbox" name="stage3" id="stage3" />
        <label htmlFor="stage3">Samtliga barn har ritat en regnbåge</label>
      </p>
    </>
  );
}

function Stage4() {
  return (
    <>
      <h3>The care bear</h3>
      <p>
        Björnen Bruno har förvandlat till ett gosedjur efter en incident som
        inblande en spökhistoria, två muggar med whisky och en pirat från Mjörn.
        Piraten lurade Bruno och stal något från honom, lös gåtan för att ge hon
        det han förlorat åter!
      </p>

      <code>
        [ Gå båda trapporna upp, passera vardagsrummet och gå något av barnens
        rum, i sängen finns en stor björn. Gåtan är "Jag symboliserar kärlek och
        vänskap, och klappar varmt i bröstet. Vad är jag?". Svaret är "hjärtat".
        ]
      </code>

      <p>
        <input type="checkbox" name="stage4" id="stage4" />
        <label htmlFor="stage4">Samtliga barn har ritat ett hjärta</label>
      </p>
    </>
  );
}

function Stage5() {
  return (
    <>
      <h3>The blair something project</h3>
      <p>
        En osynlig skepnad har flyttat in i garderoben! De vuxna kan inte sova
        om nätterna och klagar på viskningar, rasslande kedjor, svaveldoft och
        vad som låter som en sprakande eld. Hjälp de stackars vuxna att återigen
        få sova i lugn och ro. Detta blir er sita och svåraste utmaning. Ingen
        har någonsin kommit så långt som ni i den vindlande färd, de vuxna
        räknar med er!
      </p>
      <code>
        [ Gå till det stora sovrummet på övervåningen, på båda sidor finns en
        garderob. Öppna för att avslöja den osynliga varelsen. Gåtan är "Jag bor
        i en mörk stuga och kokar magiska drycker. Vad är jag?" Svaret är "en
        häxa". ]
      </code>
      <p>
        <input type="checkbox" name="stage5" id="stage5" />
        <label htmlFor="stage5">Samtliga barn har ritat en häxa</label>
      </p>
    </>
  );
}

function TurnIn() {
  return (
    <>
      <h3>Turn in quest</h3>
      <p>
        Bra jobbat. Ni har räddat roboten, Diana, Roma, Bruno och skrämt bort
        häxan så de vuxna får sova. Hitta Noomis pappa, visa upp svaren på
        gåtorna och ni får välja ert pris.
      </p>
    </>
  );
}
