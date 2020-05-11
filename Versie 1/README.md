# Versie 1

## Wat heb ik in versie 1 verwerkt 

### Svg aan Html toegevoegd
Stap een was het namaken van je kunstwerk in illustrator en deze exporteren naar html. Nu viel het namaken van mijn kunstwerk natuulijk wel mee maar het goed indelen van de lagen van mijn svg bleek lastiger te zijn. Ik heb groepen geprobeerd te maken en dit te exporteren, maar dit leverde voor mij meer gedoe op dan alle bollen in één laag te laten staan. Om deze reden heb ik de bollen op volgorde in een laag geplaatst. Zo is het voor mij makkelijk in de css te bepalen welke bol welke regel is in de html.

### Eerste css regels toegepast
1. Nadat mijn svg code succesvol in mijn html stond ben ik alvast begonnen met wat css code. Ik heb als eerst het kunstwerk gecentreerd in het midden omdat ik mijn hele animatie vanuit het midden wil laten afspelen. Ook heb ik drie knoppen toegevoegd en deze aan de zijkant van mijn scherm geplaatst met css. De buttons hebben een image gekregen in plaats van een woord. De bedoeling van deze knoppen is dat ik uiteindelijk een manier vind dat na een klik op de knop de gehele vorm van het kunstwerk veranderd naar de vorm van de knop (vierkant bijvoorbeeld). Ik heb deze knoppen dus alvast toegevoegd omdat ik er later wat mee wil gaan doen.
2. Ook heb ik alvast gekeken naar het responsive maken van mijn kunstwerk. Door de svg flexbox te geven weet ik zeker dat hij mee schaalt. Toch heb ik door middel van media queries de height van de totale svg aangepast voor mobiel formaat. Ik vond het niet mooi dat mijn kunstwerk schermvullend was op mobiel formaat.

### Animatie toegevoegd (ook in javascript)
1. Om de flow van het kunstwerk te laten zien had ik een animatie bedacht waar de cirkels een voor een omhoog springen. Ik heb dit geprobeerd in css waar te maken en dat is gelukt. Hier had ik geen javascript voor nodig. Door middel van keyframes en "of-type(n)" tag heb ik de cirkels een voor een omhoog laten komen. Door de fill van de svg te veranderen (grijs) bij het omhoogkomen van de cirkel lijkt het geheel te flowen. 
2. Ook wilde ik voor een extra leuke flow een soort glans over mijn kunstwerk laten vloeien. Door de fill van de cirkels bij de keyframe eindstate wit te maken maar de default fill zwart te laten zijn vloeit na de spring animatie er een soort gloed over de cirkels heen omdat de animatie een ease heeft. Ook dit is volledig in css gemaakt. 
3. Ook heb ik een beginnend ideetje geprobeerd uit te werken met javascript. Het lijkt mij leuk het contrast van het kunstwerk te laten veranderen na het klikken op een cirkel. Ik wil dus per cirkel een contrast instellen, maar hiervoor heb ik javascript nodig omdat ik classes moet toggelen. Mijn test voorbeeld heb ik een klas laten toggelen (test maar op de eerste grote cirkel van de eerste rij) waardoor de volledige site "invert" dus naar negatief veranderd. Door dit te doen hoef ik alleen maar net zoveel verschillende classes te maken als er cirkels zijn en deze door verschillende formules in javascript te laten toggelen. *Dit wil ik in versie twee verder uitwerken.* Ook heb ik voor de lol een cirkel de class gegeven om de hele pagina met 180deg te laten omdraaien. 


## Wat ga ik in de volgende versie uitwerken
Vanaf versie twee wil ik de contrasten uitwerken per klik op een cirkel. Dat lijkt mij een goed begin. Daarna wil ik mij gaan verdiepen in het maken van andere shapes na een klik op een button. Ik weet niet of dit te realiseren is. Mocht dit gelukt zijn dan is de volgende stap om te kijken of er op verschillende formaten misschien verschillende mogelijkheden zijn met de cikels zoals invliegen of een onscroll event. Denk bijvoorbeeld aan het ontwijken van een cursor. Dit lijkt mij lastig maar wie weet kan ik wel iets erg leuks vinden en coderen. 
