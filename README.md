# EvaVeldtVID1

# De opdracht voor het vak webanimatie
De opdracht voor het vak webanimatie luidt als volgt. De bedoeling is dat ik los ga met css op een gekozen kunstwerk uit een archief. Ik heb daarvoor onderstaand kunstwerk gekozen. Om een leuke animatie hiervoor te bedenken heb ik niet alleen mijn eigen creativiteit gebruikt maar ook onderzoek gedaan naar de ontwerper en de bedoeling van het kunstwerk. Er was helaas niet erg veel tevinden over dit specifieke werk. Daarom heb ik mij vooral verdiept in zijn werken, zijn stijl en zijn biografie. Daar heb ik het een en ander ontdekt.

## De link naar mijn kunstwerk en achtergrond informatie
https://designarchives.aiga.org/#/entries/%2Bcollections%3A%22California%20Graphic%20Design%201980%E2%80%931982%22/_/detail/relevance/asc/85/7/12931/venture-graphics/1

Het werk is gemaakt door Michael van der Byl. Hij maakte onder andere logo's. Dit kunstwerk is ook een logo voor het bedrijf "Venture Graphics". Van der Byl werkte voornamelijk met monochromen. Dit houd in dat zijn werk maar één kleur had. In zijn geval was dit altijd zwart op een witte achtergrond. Hij werkte met grote contrasten. Dit is een stijl waarin hij werkte, hij maakte ook nog andere soorten werken. Mijn kunstwerk valt binnen deze stijl en daarom heb ik mij hier in verdiept. De verdere informatie gaat dus ook over zijn monochrome stijl en de relatie daarmee met mijn kunstwerk.

Nog een eigenschap van de werken van Michael is dat hij werkte met schalen (scales) en groottes. Er zit in bijna al zijn werk diepte. Dit doet hij door precies dezelfde vorm, op meerdere groottes te laten zien en van groot naar klein te zetten. Zo lijkt er een flow te ontstaan. Zo lijkthet alsof er een overgang is tussen de grootste vorm en de kleinste vorm. Soms lijkt het zelfs alsof de tint van de vormen veranderen. 

Ook maakte Michael met één vorm vaak een andere vorm. Zo maakt hij in dit kunstwerk van meerdere cirkels samen een driehoek. Zo maakt hij andere vormen.

## Wat heb ik met dit stilstaande beeld gedaan


### Flow uitgebeeld  
Omdat dit kunstwerk van Michael van der Byl een flow lijkt te hebben door het gebruik van verschillende groottes, heb ik besloten deze flow te animeren. Dit heb ik gedaan door middel van keyframes. In deze keyframes pas ik bij 90% van de animatie duur en bij 100% van de animatie duur de scale van de cirkel aan zodat deze lijkt te poppen. Omdat deze animatie opzichelf nog niet echt een mooie flow als resultaat geeft heb ik de kleur (de fill) van de cirkels bij 90% grijs gemaakt en bij 100% zwart. 

In mijn illustrator bestand heb ik al mijn cirkels op volgorde gezet per rij. Zo was het voor mij gemakkelijk om ze individueel te stijlen. Dit heb ik gedaan door de pseudo class ( :nth-of-type(n) ) te gebruiken en de animatie elke keer een andere delay te geven waardoor de bollen een voor een omhoog springen. Ik heb in totaal 13 verschillende delays gemaakt en deze per rij toegepast. Omdat rij een meer bollen heeft dan rij twee lopen de delays van rij twee maar tot 11 in plaats van 13, waardoor alle rijen gelijk flowen en dit erg vloeiend gaat.

Ook heb ik de flow toegepast in een hover effect. Ik heb dertien verschillende grijstinten gezocht en deze per rij van donker naar licht laten lopen. Ook in dit geval geldt dat een rij van 11 bollen dus ook tot de 11e grijstint gaat zodat het kunstwerk één vloeiend geheel blijft. 

### Contrast kleuren
Zoals ik hierboven in mijn onderzoeksresultaten heb omschreven maakt Michael van der Byl in elk monochroom gebruik van het sterke contrast zwart en wit. Dit leek mij een leuk gegeven om nog verder mee te experimenteren. Ik heb weer 13 contrasten samengesteld. Ik heb het mogelijk gemaakt dat wanneer er op een cirkel wordt geklikt de body en de cirkel fill veranderen naar dat contrast. Bijvoorbeeld de body wordt oranje en de cirkels worden lichtblauw. Ook wilde ik verder experimenteren en een disco achtergrond maken met contrast kleuren.

#### Hoe heb ik dit gedaan
Dit heb ik voor elkaar gekregen met Javascript en het schrijven van verschillende functies. Elk contrast heeft een eigen functie gekregen. Deze heb ik dan weer random aan een cirkel toegevoegd zodat het klikken op een bol elke keer een verrassend contrast geeft. Hiervoor heb ik een toggle functie geschreven in JavaScript, zodat bij het klikken op dezelfde cirkel deze class weer van de body en cirkels afgehaald wordt. 

Om nog verder te experimenteren met keyframes en animaties leek het mij ook leuk om één cirkel toe te voegen waar de background color als een soort disco animeert. Dit is de tweede cirkel van de bovenste rij van de driekhoek geworden. Door in JavaScript de class disco toe te voegen en vervolgens in css deze class een animation te geven die ik met keyframes heb geschreven, is het mij gelukt dit voor elkaar te krijgen.

### Meerdere shapes
Ik verklapte het net al een beetje maar misschien wel mijn grootste uitdaging naast het apart animeren van de flow per cirkel, was het maken van meerdere shapes. Het leek mij leuk om een vierkant en een cirkel samen te stellen van dezelfde bollen als waar de driehoek uit bestaat. En deze op een klik van een button te laten verschijnen

#### Hoe heb ik dit gedaan
1. Mijn eerste idee was om elke cirkel uit de svg een aparte transform:translate te geven. Maar na een goed gesprek met Danny bleek dit een te enthousiast idee te zijn en was het slimmer om een tweede svg in te laden. 
2. Dit heb ik dan ook gedaan. Ik heb een vierkant in illustrator gemaakt van dezelfde bollen als de driehoek. Deze heb ik geimporteerd en display:none gegeven zodat ik deze op een click event in beeld kon laten verschijnen. Vervolgens heb ik drie  knoppen toegevoegd, een vierkant knopje, driehoekig knopje en een cirkelvormig knopje. 
3. Na veel online te hebben gezocht (zie bronnenlijst) heb ik het voor elkaar gekregen dat het vierkant en de driehoek na het klikken van de juiste knop verschijnen. 
4. Voor de cirkel had ik een ander leuk idee. We hadden de opdracht gekregen om met meerdere css properties te experimenteren. Daarom leek het mij leuk om hier de property clip-path toe te passen. Daarover lees je hieronder meer.


### Experimenteren met verschillende css properties 
De cirkel knop wilde ik dus een andere functie geven dan het inladen van een andere svg. Ik kwam er namelijk achter dat je met clip-path ook een cirkel kan maken. Ik had clip-path uitgezocht uit de lijst met properties van CSS-tricks.com. Ik heb een clip-path aangemaakt in de vorm van een cirkel dat over een section valt. Deze section bevat alle svg's. Zoals je misschien al voelt aankomen is de cirkel die onstaat door middel van de clip-path dan gevuld met de bollen van de driehoek svg of het vierkant svg. Dit zorgt ervoor dat er alsnog een cirkel onstaat zonder dat ik een nieuwe svg hoef in te laden.

Om het kunstwerk nog interatiever te maken heb ik ervoor gezorgd dat je op een bolletje van de svg's kan klikken om de clip-path class weer te verwijderen. Dit heb ik aangegeven door een ::before property toe te voegen aan de clip-path class. Hier heb ik content geschreven dat aangeeft dat het de bedoeling is om de juiste bol te vinden en daar op te klikken.

Ook heb ik de property *"transition-timing-function"* uitgezocht uit dezelfde lijst van CSS-tricks.com. Hiermee heb ik door middel van cubic bezier een transistion toevoegd waardoor de clip-path in beeld komt schuiven wanneer er op de ronde knop wordt geklikt. 



### Keyboard

### Door middel van keyframes en animaties

### Animaties met keyframe
- Disco achtergrond
- De flow
- Kleine bolletjes op mobiel formaat

## Gebruikte pseudoclasses 
- :nth-of-type(n)
- :fist-of-type
- :hover
- :active
- :focus

### JavaScript 
- Keycode en events
-.classList.toggle
- Switch div

#### Mobiel formaat javascript experimenten 
- Long-press
- Touchstart
### Het grote verschil tussen mobiel en desktop 
- Het contrast 
- De bolletjes op de achtergrond
- Het vierkant is een rij korter

### Responsive
- Desktop: witte achtergrond met zwart kunstwerk
- Tablet: zelfde als desktop maar dan geschaald naar een mooi passend formaat
- Mobiel: Alles van desktop in contrast weergegeven. Dit houdt in; zwarte achtergrond en een wit kunstwerk. Ook heb ik bolletjes aan de achtergrond toegevoegd die in de tegenovergestelde richting animeren als de bollen van het kunstwerk.


## Bronnen
- https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path#inset()
- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
- https://stackoverflow.com/questions/8508275/how-to-center-a-position-absolute-element/25776315
- https://q42.github.io/delighters/
- https://davidwalsh.name/invert-colors-css
- https://helpx.adobe.com/illustrator/using/css-extraction.html

- http://www.vanderbyl.com/assets/Vanderbulletins/PDFs/Teknion_DesignDoesMatter.pdf
- http://www.vanderbyl.com/?p=g_identities_logos
- https://www.cssscript.com/handle-long-press-tap-event-in-javascript-long-press-js





## Wat ben ik van plan?
Deze inzichten die ik heb opgedaan met het bestuderen van al zijn werken en het lezen van zijn biografie wil ik proberen te verwerken in mijn animatie.
1. Ik wil de flow die Michael probeert in een stilstaand uit te beelden, echt gaan animeren. Zo hoop ik extra waarde toe te kunnen voegen aan het werk.
2. Ook wil ik kijken wat ik kan doen met kleur en contrast. Ik denk namelijk dat het leuk is om iets te doen met clickable cirkels. Dat wanneer je op een cirkel klikt je een ander contrast te zien krijgt. 
3. Nog een idee om te doen is om met deze cirkels meerdere vormen te maken zoals een vierkant. Dat wanneer de gebruiker op een vierkant knopje drukt, de cirkels van positie veranderen en een andere vorm vormen. *Dit lijkt mij de grootste uitdaging.*

## Responsive
De functionaliteit van het kunstwerk wil ik niet veranderen op andere schermgroottes. Wel lijkt het mij leuk om op mobiel formaat het andere contrast als default te laten zien. Hier bedoel ik mee: op desktop is het kunstwerk zwart en de achtergrond wit en op mobiel formaat is het kunstwerk wit en de achtergrond zwart. 

Ik heb nog niet nagedacht over een tablet formaat. Ik denk dat deze hetzelfde zal zijn als desktop maar dan responsive geschaald. 

