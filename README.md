# EvaVeldtVID1
[Demo van de eindversie](https://veldte.github.io/EvaVeldtVID1/Versie%205/)
# De opdracht voor het vak webanimatie
De opdracht voor het vak webanimatie luidt als volgt. De bedoeling is dat ik los ga met css op een gekozen kunstwerk uit een archief. Ik heb daarvoor onderstaand kunstwerk gekozen. Om een leuke animatie hiervoor te bedenken heb ik niet alleen mijn eigen creativiteit gebruikt maar ook onderzoek gedaan naar de ontwerper en de bedoeling van het kunstwerk. Er was helaas niet erg veel tevinden over dit specifieke werk. Daarom heb ik mij vooral verdiept in zijn werken, zijn stijl en zijn biografie. Daar heb ik het een en ander ontdekt.

## De link naar mijn kunstwerk en achtergrond informatie

Het werk is gemaakt door Michael van der Byl. Hij maakte onder andere logo's. Dit kunstwerk is ook een logo voor het bedrijf "Venture Graphics". Van der Byl werkte voornamelijk met monochromen. Dit houd in dat zijn werk maar één kleur had. In zijn geval was dit altijd zwart op een witte achtergrond. Hij werkte met grote contrasten. Dit is een stijl waarin hij werkte, hij maakte ook nog andere soorten werken. Mijn kunstwerk valt binnen deze stijl en daarom heb ik mij hier in verdiept. De verdere informatie gaat dus ook over zijn monochrome stijl en de relatie daarmee met mijn kunstwerk.

Nog een eigenschap van de werken van Michael is dat hij werkte met schalen (scales) en groottes. Er zit in bijna al zijn werk diepte. Dit doet hij door precies dezelfde vorm, op meerdere groottes te laten zien en van groot naar klein te zetten. Zo lijkt er een flow te ontstaan. Zo lijkthet alsof er een overgang is tussen de grootste vorm en de kleinste vorm. Soms lijkt het zelfs alsof de tint van de vormen veranderen. 

Ook maakte Michael met één vorm vaak een andere vorm. Zo maakt hij in dit kunstwerk van meerdere cirkels samen een driehoek. 

![Het kunstwerk](https://designarchives.aiga.org/assets/images/000/019/941/19941_lg.jpg)

https://designarchives.aiga.org/#/entries/%2Bcollections%3A%22California%20Graphic%20Design%201980%E2%80%931982%22/_/detail/relevance/asc/85/7/12931/venture-graphics/1

## Mijn grootste trots

Ik denk dat ik wel kan zeggen dat deze opdracht een grote uitdaging voor mij was. Ik had nog nooit met svg gewerkt, laat staan in code een svg geanimeerd. Ik ben toch wel erg trots op het feit dat ik van een simpel kunstwerk een creatief en out of the box geheel heb gemaakt (al zeg ik het zelf). Ik denk dat met het toevoegen van meerdere vormen en het spelen met contrasten, knoppen (keypress) en animaties ik iets totaal nieuws van het kunstwerk heb gemaakt. Het kunstwerk is nog altijd goed te herkennen, maar met de altijd afspelende flow krijgt het al een heel ander gevoel. Ik denk dat ik daar het meest trots op ben. Ik ben trots op het feit het kunstwerk nog steeds goed te herkennen is, maar ook totaal anders is dan het stilstaande beeld. 

# Wat heb ik met dit stilstaande beeld gedaan


### Flow uitgebeeld  

Omdat dit kunstwerk van Michael van der Byl een flow lijkt te hebben door het gebruik van verschillende groottes, heb ik besloten deze flow te animeren. Dit heb ik gedaan door middel van keyframes. In deze keyframes pas ik bij 90% van de animatie duur en bij 100% van de animatie duur de scale van de cirkel aan zodat deze lijkt te poppen. Omdat deze animatie op zichzelf nog niet echt een mooie flow als resultaat geeft heb ik de kleur (de fill) van de cirkels bij 90% grijs gemaakt en bij 100% zwart. 

In mijn illustrator bestand heb ik al mijn cirkels op volgorde gezet per rij. Zo was het voor mij gemakkelijk om ze individueel te stijlen. Dit heb ik gedaan door de pseudo class ( :nth-of-type(n) ) te gebruiken en de animatie elke keer een andere delay te geven waardoor de bollen een voor een omhoog springen. Ik heb in totaal 13 verschillende delays gemaakt en deze per rij toegepast. Omdat rij een meer bollen heeft dan rij twee lopen de delays van rij twee maar tot 11 in plaats van 13, waardoor alle rijen gelijk flowen en dit erg vloeiend gaat.

Ook heb ik de flow toegepast in een hover effect. Ik heb dertien verschillende grijstinten gezocht en deze per rij van donker naar licht laten lopen. Ook in dit geval geldt dat een rij van 11 bollen dus ook tot de 11e grijstint gaat zodat het kunstwerk één vloeiend geheel blijft. 

### Contrast kleuren

Zoals ik hierboven in mijn onderzoeksresultaten heb omschreven maakt Michael van der Byl in elk monochroom gebruik van het sterke contrast zwart en wit. Dit leek mij een leuk gegeven om nog verder mee te experimenteren. Ik heb weer 13 contrasten samengesteld. Ik heb het mogelijk gemaakt dat wanneer er op een cirkel wordt geklikt de body en de cirkel fill veranderen naar dat contrast. Bijvoorbeeld de body wordt oranje en de cirkels worden lichtblauw. Ook wilde ik verder experimenteren en een disco achtergrond maken met contrast kleuren.

##### Hoe heb ik dit gedaan?

Dit heb ik voor elkaar gekregen met Javascript en het schrijven van verschillende functies. Elk contrast heeft een eigen functie gekregen. Deze heb ik dan weer random aan een cirkel toegevoegd zodat het klikken op een bol elke keer een verrassend contrast geeft. Hiervoor heb ik een toggle functie geschreven in JavaScript, zodat bij het klikken op dezelfde cirkel deze class weer van de body en cirkels afgehaald wordt. 

Om nog verder te experimenteren met keyframes en animaties leek het mij ook leuk om één cirkel toe te voegen waar de background color als een soort disco animeert. Dit is de tweede cirkel van de bovenste rij van de driekhoek geworden. Door in JavaScript de class disco toe te voegen en vervolgens in css deze class een animation te geven die ik met keyframes heb geschreven, is het mij gelukt dit voor elkaar te krijgen.

![Het contrast](/img/con.png)

### Meerdere shapes gemaakt 

Ik verklapte het net al een beetje maar misschien wel mijn grootste uitdaging naast het apart animeren van de flow per cirkel, was het maken van meerdere shapes. Het leek mij leuk om een vierkant en een cirkel samen te stellen van dezelfde bollen als waar de driehoek uit bestaat. En deze op een klik van een button te laten verschijnen

##### Hoe heb ik dit gedaan?

1. Mijn eerste idee was om elke cirkel uit de svg een aparte transform:translate te geven. Maar na een goed gesprek met Danny bleek dit een te enthousiast idee te zijn en was het slimmer om een tweede svg in te laden. 
2. Dit heb ik dan ook gedaan. Ik heb een vierkant in illustrator gemaakt van dezelfde bollen als de driehoek. Deze heb ik geimporteerd en display:none gegeven zodat ik deze op een click event in beeld kon laten verschijnen. Vervolgens heb ik drie  knoppen toegevoegd, een vierkant knopje, driehoekig knopje en een cirkelvormig knopje. 
3. Na veel online te hebben gezocht (zie bronnenlijst) heb ik het voor elkaar gekregen dat het vierkant en de driehoek na het klikken van de juiste knop verschijnen. 
4. Voor de cirkel had ik een ander leuk idee. We hadden de opdracht gekregen om met meerdere css properties te experimenteren. Daarom leek het mij leuk om hier de property clip-path toe te passen. Daarover lees je hieronder meer.

![Het driehoek](/img/driehoek.png)
![Het vierkant](/img/vierkant.png)


### ( *Voor mij* ) Nieuwe Css properties die ik heb gebruikt 

- Clip-path
- Transition-timing-function
- Cubic bezier
- Before selector

De cirkel knop wilde ik dus een andere functie geven dan het inladen van een andere svg. Ik kwam er namelijk achter dat je met clip-path ook een cirkel kan maken. Ik had clip-path uitgezocht uit de lijst met properties van CSS-tricks.com. Ik heb een clip-path aangemaakt in de vorm van een cirkel dat over een section valt. Deze section bevat alle svg's. Zoals je misschien al voelt aankomen is de cirkel die onstaat door middel van de clip-path dan gevuld met de bollen van de driehoek svg of het vierkant svg. Dit zorgt ervoor dat er alsnog een cirkel onstaat zonder dat ik een nieuwe svg hoef in te laden.

Om het kunstwerk nog interatiever te maken heb ik ervoor gezorgd dat je op een bolletje van de svg's kan klikken om de clip-path class weer te verwijderen. Dit heb ik aangegeven door een ::before property toe te voegen aan de clip-path class. Hier heb ik content geschreven dat aangeeft dat het de bedoeling is om de juiste bol te vinden en daar op te klikken.

Ook heb ik de property *"transition-timing-function"* uitgezocht uit dezelfde lijst van CSS-tricks.com. Hiermee heb ik door middel van cubic bezier een transistion toevoegd waardoor de clip-path in beeld komt schuiven wanneer er op de ronde knop wordt geklikt. 

![Het cirkel](/img/clip.png)


### Keyboard animaties 

Naast het animeren voor de muis heb ik ook geanimeerd voor het keyboard. Dit heb ik gedaan met de code uit de les. Hieraan heb ik meerdere knoppen toegevoegd. Ik heb drie verschillende dingen mogelijk gemaakt:

1. Wanneer je op een toets tussen 0 tot en met 9 en a tot en met l klikt veranderd het contrast net zoals dat gebeurd na het klikken op een cirkel.
2. Wanneer je een van de twee haakjes " < > " klikt draait het kunstwerk 90 graden naar links of naar rechts.
3. Wanneer je de pijltjes toetsen gebruikt verschuift het kunstwerk in die richting. Hier heb ik nog meer code aan toegevoegd. Je kan namelijk tussen links en rechts heen en weer pendelen en ook tussen up en down omdat hij de classes weer removed na een klik op die toetsen. Voorbeeld: Wanneer je op de linker toets klikt, wordt er een class .links toegevoegd aan de svg. Maar wanneer je dan op de rechter toets klikt wordt de class .links weggehaalt en de class .rechts toegevoegd. Hierdoor kan je spelen met waar het kunstwerk binnen je scherm staat en naartoe vliegt.

Al deze keyCodes zijn geanimeerd met een transistion en een ease. 

![Het code](/img/code.png)



### Animaties met keyframes 
Ik heb met @keyframes verschillende animaties geschreven. 

1. Ik heb een animatie geschreven dat het kunstwerk laat "flowen" / vloeien. Onder het kopje "Flow uitgebeeld" heb ik uitgelegd hoe ik dit heb gedaan. 

2. Ongeveer dezelfde animatie heb ik geschreven voor het mobiele formaat. Dit formaat heeft namelijk een achtergrond met 168 kleine bolletje. Ook deze bolletjes heb ik door middel van keyframes en de pseudo class ( :nth-of-type(n) ) laten vloeien. Het enige verschil is de kleur van de cirkels wanneer ze op de grootste scale zijn. Bij de grote cirkels is dit grijs maar bij de kleine cirkels is dit wit.

3. De disco achtergrond heb ik ook door middel van keyframes en animation gemaakt. Hoe ik dit heb gedaan heb ik uitgelegd onder het kopje " Contrast kleuren -> hoe ik dit heb gedaan". (Ik verwijs hiernaar omdat ik niet in herhaling wil vallen)


### Ik heb veel gewerkt met pseudo-classes 

- :nth-of-type(n)
- :fist-of-type
- :hover
- :active
- :focus

Ik heb verschillende pseudo-classes gebruikt om mijn ontwerp goed te stylen. Ik heb de ( :ntn-of-type(n) ) class heel erg vaak moeten schrijven voor het individueel laten bewegen van de cirkels. Zoals ik eerder al vertelde was dit niet echt een probleem. Ik heb ik mijn *Illustrator* bestand alle cirkels op volgorde gezet waardoor ik precies wist per nummer om welke cirkel het gaat. Hier heb ik ook de ( :first-of-type ) class voor gebruikt omdat deze samengaat met de ( :ntn-of-type(n) ) class.

Zoals eerder omschreven onder het kopje "Flow uitgebeeld" heb ik ook een hover toegepast op de cirkels binnen het kunstwerk. Ik heb 13 verschillende grijstinten gezocht en per cirkel op volgorde van donker naar licht een tint op een hover toegevoegd. Wanneer je met je muis over de cirkels heen gaat lijkt dit ook op een flow. Zo zit de flow er dubbel in. 

De :hover, :active en :focus pseudo-classes heb ik op de buttons toegepast. Ik vond het namelijk niet mooi om een focus te geven aan de cirkels en een active state zou de flow verstoren van het kunstwerk. Zonder een active vloeit het kunstwerk namelijk in zijn geheel.
De buttons heb ik dus wel deze pseudo-classes gegeven. De hover heb ik een rotate van 75 graden gegeven. Zo ziet de gebruiker dat deze button klikbaar is en dat hij boven de betreffende knop hangt. De active state is een rotatie van 180 graden en een scale van 1.2. Dit heb ik gedaan om het verschil tussen de hover en de active goed zichtbaar te maken. Zo ziet de gebruiker nog welke knop geselecteerd is. De focus state bevat dezelfe styling als de active state zodat dit zichtbaar blijft wanneer je met je muis van de knop afgaat.

![Het hover](/img/hover.png)
![Het active](/img/active.png)

Als laatste heb de buttons nog een cursor: pointer gegeven. Zo ziet de gebruiker ook duidelijk dat het kunstwerk klikbaar is. 

### JavaScript 

Voor het mogelijk maken van meerdere klikbare elementen binnen mijn site heb ik zeker ook gebruik moeten maken van JavaScript. Hierin heb ik verschillende functies geschreven.

Er zijn drie verschillende soorten functies die ik binnnen JavaScript heb geschreven.

- Keycode en events: *Deze heb ik geschreven voor de animaties op een keypress.*
- .classList.toggle:  *Voor onclick toggles van classes, bijvoorbeeld voor het veranderen van het contrast op de body en cirkels.*
- Switch div: *Deze functie heb ik geschreven voor het inladen van een andere svg en het verwijderen van de svg die er al stond.*

#### Mobiel formaat javascript touch experimenten 

Voor het mobiele formaat heb ik ook nog JavaScript geschreven. Ik heb een *Long-press* en een *Touchstart* functie geschreven. Beide functies heb ik uiteindelijk werkend gekregen met wat hulp van stackoverflow.com. 
Toch heb ik deze regels uiteindlijk uitgecommentarieerd. Ik vond dat mijn mobiele versie niet meer bruikbaar was door deze functies. Ik had het namelijk mogelijk gemaak dat op een touch of longpress de achtergrond de class disco zou krijgen. Maar door dit te doen werkte het klikken op de cirkels niet meer en vond ik dat het een beetje te onduidlijk en onbruikbaar werd. De code heb ik wel bewaard. 

- Long-press
- Touchstart


![Het code](/img/mobieljava.png)


### Het grote verschil tussen mobiel en desktop 

1. Het contrast 
2. De bolletjes ( cirkeltjes) op de achtergrond
3. Het vierkant (svg) is een rij korter
4. De schaal 
5. De knoppen staan onderaan de pagina.

Dit zijn de vijf grootste verschillen tussen de mobiele versie en de desktop versie. 
1. Het contrast is precies tegenovergesteld aan de desktop versie. Ook zijn de knoppen "inverted" zodat deze wit zijn in plaats van zwart. Op deze manier hoefde ik geen nieuwe image in te laden maar kon ik met een filter de kleur veranderen.
2. Ook de achtergrond van de mobiele versie is anders. Er zijn veel meer cirkels / bolletjes op de achtergrond die ook animeren.
3. Het vierkant heb ik een rij ingekort. Dit heb ik gedaan zodat deze iets minder lang is en minder ruimte inneemt zonder dat ik het vierkant heel klein moet schalen. 
4. De schaal is ook anders. Door display:flex is het kunstwerk responsive. Toch vond ik het kunstwerk nog steeds te groot. Daarom heb ik met media queries de height nog iets verkleind. 
5. Ook de buttons zijn anders in deze versie. Deze staan namelijk in plaats van in het midden aan de zijkant, nu onderaan de pagina. 

Hierdoor is de beleving van de mobiele versie echt anders dan de desktop versie.

![Desktop](/img/desk.png)
![Mobiel](/img/mobiel.png)

## Responsive verschillen

- Desktop: witte achtergrond met zwart kunstwerk
- Tablet: zelfde als desktop maar dan geschaald naar een mooi passend formaat
- Mobiel: Alles van desktop in contrast weergegeven. Dit houdt in; zwarte achtergrond en een wit kunstwerk. Ook heb ik bolletjes (cirkeltjes)  aan de achtergrond toegevoegd die in de tegenovergestelde richting animeren als de bollen van het kunstwerk.


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







