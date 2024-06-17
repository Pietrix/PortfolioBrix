import Link from "next/link"


export default function leeswijzer() {
    return <div className="flex flex-col justify-center text-center items-center mt-8 mx-auto w-2/3 max-w-4xl">
      <h1>PROJECTOPDRACHT</h1>
        <div className="flex flex-col text-left mt-6">
          <h2>Context</h2>
          <p>Ik ga mijn stageperiode werken aan een opdracht binnen het bedrijf Brix.team. Het bedrijf is een marketing- en communicatiebureau gevestigd in Tilburg, gespecialiseerd in het optimaal positioneren van bedrijven. Ze bieden een breed scala aan diensten, variërend van het opstellen van commerciële teksten en het ontwikkelen van concepten tot webdesign en huisstijlen.

De opdracht die ik ga uitvoeren is voor Abel installatie, een coöperatie van installatiebedrijven die hun leden ondersteunt op strategisch, tactisch en operationeel niveau, om de efficiëntie en effectiviteit van hun werk te verbeteren.

Abel installatie is momenteel bezig met de ontwikkeling van een nieuw platform om de leden op een geoptimaliseerde manier te laten werken en onderling contact te bevorderen. Door een sterke basis neer te zetten moet de nieuwe portal instaat zijn om de komende jaren te dienen als het centrale knooppunt voor alle initiatieven en beloften van Abel Installatie aan haar klanten. De portal moet mee kunnen groeien met het bedrijf en de mogelijkheid bieden om flexibel mee te kunnen bewegen met de wensen van Abel installatie. De huidige website heeft beperkingen die dit niet mogelijk maken, vandaar de noodzaak van dit nieuwe platform. 
</p>
        </div>
        <div className="flex flex-col text-left mt-8">
          <h2>Doel van het project</h2>
          <p>De voorkant van de nieuwe abelinstallatie.nl website is ontworpen en uitgedacht door Stijlbreuk. Achter een login op deze website zal een klantenportaal worden geïmplementeerd die zal dienen als een centrale hub waar gebruikers toegang hebben tot alle diverse diensten die Abel aanbiedt. Ook kunnen leden hier alle relevante informatie vinden over hun lopende diensten, inkooporders, huurcontracten, en meer. Het doel van het portaal is om installateurs (leden van Abel) te voorzien van een centraal punt waar ze efficiënt toegang hebben tot alle benodigde informatie en middelen. Daarnaast zal binnen het portaal de workflow van een specifiek huur- en onderhoudsconcept worden uitgewerkt. Deze workflow kan dienen als een model voor andere diensten die Abel momenteel aanbiedt of in de toekomst wil ontwikkelen. De nieuwe portal streeft ernaar om een groter deel van de leden te betrekken bij het gebruik van de verschillende diensten, en dit op een meer gestroomlijnde manier. Veel leden haakten af of waren niet op de hoogte van de verschillende diensten die werden aangeboden, omdat ze verspreid waren over verschillende platforms.</p>
        </div>
        <div className="flex flex-col text-left mt-8">
          <h2>De opdracht</h2>
          <p>Hoe kan de nieuwe ledenportal van Abel Installatie worden geoptimaliseerd om het voor leden zo eenvoudig mogelijk te maken om verhuur- en leaseabonnementen aan consumenten aan te bieden, en deze gemakkelijk in te zien en te beheren, met als doel het proces efficiënter en overzichtelijker te maken, zodat meer leden de portal in gebruik zullen nemen?</p>
        </div>
        <h1 className="mt-20">PROCES</h1>
        <div className="flex flex-col text-left mt-6">
          <h2>Discover</h2>
          <p>
          Ik ben begonnen met het verkrijgen van een duidelijker beeld van <Link className='linkLees' href={`/Post/portfolioproject/63`}>Abel Installatie</Link> door middel van een literatuurstudie. Ik heb me verdiept in de geschiedenis, de diensten die Abel aanbiedt, en haar unique selling points. Daarnaast heb ik de <Link className='linkLees' href={`/Post/portfolioproject/65`}>huidige portal</Link> onderzocht om te begrijpen hoe deze momenteel functioneert, waarbij ik alle vragen, ideeën en mogelijke toevoegingen heb genoteerd die bij me opkwamen. Ik heb deze analyse verder uitgebreid door elk onderdeel van de huidige portal te bekijken om te achterhalen wat er momenteel beschikbaar is en waar mogelijke verbeterpunten liggen. De grootste conclusie was dat de huidige portal voelt als een bij elkaar geraapt geheel en niet als een samenhangend platform waar installateurs alles kunnen vinden wat ze nodig hebben.
          </p>
          <br></br>
          <p>
          Met deze bevindingen in gedachten ben ik in gesprek gegaan met Abel Installatie en heb ik mijn <Link className='linkLees' href={`/Post/portfolioproject/projectplan`}>projectplan</Link> opgesteld, waarin ik onder andere de opdracht heb beschreven en een opdeling in fasen heb voorgesteld. Om een beter beeld te krijgen van de doelgroep en hun huidige ervaringen met Abel en het gebruik van de portal, ben ik samen met Maud (stagiaire bij Abel Installatie) leden van Abel Installatie gaan <Link className='linkLees' href={`/Post/portfolioproject/interviews`}>interviewen</Link>. Vanwege het drukke schema van installatiebedrijven was dit een uitdagend en tijdrovend proces. Maar in de <Link className='linkLees' href={`/Post/portfolioproject/interviews-resultaten`}>resultaten</Link> werd al snel duidelijk dat de betrokkenheid van de leden laag was en dat de communicatie met Abel minimaal was. De huidige portal functioneert meer als een digitaal formulier en veroorzaakt vaak vertraging bij de dienstverlening, waardoor deze vaak niet wordt gebruikt.
          </p>
          <br></br>
          <p>
          Om deze resultaten te bevestigen, heb ik een van de processen binnen de portal uitgewerkt in een <Link className='linkLees' href={`/Post/portfolioproject/user-flow-huurplan`}>user flow van het huurplan</Link>. Hieruit werd meteen duidelijk dat er geen duidelijke rode draad was binnen het proces. Vanwege de vertraging bij de interviews ben ik gaan kijken naar mogelijke <Link className='linkLees' href={`/Post/portfolioproject/designtrends-dashboards`}>designtrends binnen dashboards</Link>, waarbij aannames zoals de 'mobile first' aanpak en interactieve data visualisatie werden bevestigd. Bovendien werd het belang van personalisatie volgens de trends benadrukt. Ook heb ik me verdiept in de <Link className='linkLees' href={`/Post/portfolioproject/10-heuristics-van-jakob-nielsen`}>10 heuristics van Jakob Nielsen</Link> om te onderzoeken hoe en waar ik ze binnen het project kan toepassen. Zo zal ik erop letten dat de status altijd goed zichtbaar is, foutpreventie bij taken wordt geïmplementeerd, en zoveel mogelijk overeenkomsten met de echte wereld worden gebruikt, vooral in de vorm van iconen.
          </p>
          <br></br>
          <p>
          Na de interviews ontdekten we dat één onderdeel nog wat meer aanpassingen nodig had dan de andere: het reclamebudget. Momenteel kan de installateur dit budget inzetten voor reclamemogelijkheden, maar het werd al snel duidelijk dat hier amper tot geen gebruik van werd gemaakt. Na een <Link className='linkLees' href={`/Post/portfolioproject/puntensysteem`}>brainstormsessie</Link> over mogelijke manieren om het budget meer aandacht te geven en interessanter te maken voor de installateur, kwam ik op het idee van een puntensysteem. Om te onderzoeken hoe dit geïmplementeerd kon worden, heb ik het <Link className='linkLees' href={`/Post/portfolioproject/yu-kai-chou-gamification-framework`}>Yu-Kai Chou Gamification Framework</Link> bestudeerd. Dit framework gaf inzicht in hoe het puntensysteem de gebruiker kon stimuleren. Door in te spelen op "Ontwikkeling & Prestatie", "Eigendom & Bezit" en eventueel op "Schaarste & Prestatie" binnen het framework, kan de installateur waarde hechten aan punten en zo meer betrokken raken bij Abel Installatie. Door deze punten te koppelen aan prijzen die relevant zijn voor de installateur, zoals thema's rond personeelswerving en binding, wordt het gebruik van de diensten van Abel Installatie gestimuleerd.
          </p>
          <br></br>
          <p>
          Vervolgens heb ik manieren onderzocht om acties en aanbiedingen meer onder de aandacht te brengen door <Link className='linkLees' href={`/Post/portfolioproject/beinvloedingsstrategieen-van-cialdini`}>de Zeven beïnvloedingsstrategieën van Cialdini</Link> te bestuderen en te kijken hoe deze binnen het nieuwe platform kunnen worden geïntegreerd. De leveranciers van Abel Installatie dragen bij aan de kortingen en bonussen die Abel aan haar installateurs biedt. Door de principes van Cialdini te gebruiken voor de promotie van deze acties, kan Abel Installatie een grotere meerwaarde bieden aan haar partners.
          </p>
          <br></br>
          <p>
          Tijdens de interviews hebben we ook gevraagd naar de bundelingsapp, een applicatie die verschillende tools die installateurs gebruiken samenbrengt in één enkele app voor efficiënter werken. Dit idee kwam voort uit een vraag van Abel Installatie over de mogelijke voordelen van zo'n oplossing. Ik heb een korte <Link className='linkLees' href={`/Post/portfolioproject/analyse-bundelingsapp`}>analyse</Link> van de bundelingsapp gemaakt, maar het werd al snel duidelijk dat deze niet geschikt zou zijn voor het nieuwe portaal.
          </p>
          <br></br>
          <p>
          Daarnaast heb ik samen met Abel de portal van Technische Unie bekeken. Ze hebben een vergelijkbaar systeem voor inkopen als Abel Installatie, en de account hiërarchie is erg goed geregeld. Paul, de directeur van Abel, heeft langere tijd bij de Technische Unie gewerkt en ziet deze portal ook als groot voorbeeld. Helaas heb ik geen toestemming gekregen om deze informatie in mijn proces te verwerken, omdat Abel geen lid is van de Technische Unie en dus eigenlijk geen toegang heeft tot deze portal.
          </p>
          </div>
        <div className="flex flex-col text-left mt-8">
          <h2>Define</h2>
          <p>
          Na de eerste paar interviews heb ik met de gevonden informatie, aangevuld met aannames, vier <Link className='linkLees' href={`/Post/portfolioproject/archetypes`}>archetypes</Link> opgezet van mogelijke gebruikers van de nieuwe portal. Deze archetypes kunnen me helpen bij het verbeteren van de gebruiksvriendelijkheid van de portal. De archetypes zijn vrij uiteenlopend, dus het zal belangrijk zijn dat de nieuwe portal voor een brede doelgroep bruikbaar is. Ondertussen heeft Stijlbreuk een eerste opzet gemaakt van de ontwerpen van de voorkant van de Abel Installatie website, waarbij de portal nauw moet samenwerken. Ik heb meegekeken naar deze eerste opzet en samen met mijn stagebegeleider en Abel <Link className='linkLees' href={`/Post/portfolioproject/feedback-voorbeelden-stijlbreuk`}>feedback & voorbeelden</Link> gegeven op de ontwerpen. De feedback richtte zich op de ervaring die de leden van Abel zullen hebben wanneer ze op de website komen, maar ook op hoe de mogelijke flow van website tot portal kan worden ingevuld en verbeterd.
          </p>
          <br></br>
          <p>
          Na de verschillende onderzoeken en bevindingen was het noodzakelijk om duidelijkheid te krijgen over de inhoud van de nieuwe portal. Hiervoor heb ik een <Link className='linkLees' href={`/Post/portfolioproject/moscow-analyse`}>MoSCoW-analyse</Link> opgezet. De hoofpagina’s van de nieuwe portal krijgen hier natuurlijk een hoofdrol, onderdelen zoals individuele personalisatie zijn minder belangrijk. Op basis van archetypes en de MoSCoW-analyse heb ik <Link className='linkLees' href={`/Post/portfolioproject/user-stories`}>user stories</Link> opgesteld om de doelen van de gebruiker vast te leggen en rekening mee kan houden tijdens de ontwerpfase. Deze user stories zijn opgedeeld in vier onderdelen: Portal, Huurplan, Meldingen & Taken, en Account. Met behulp van de user stories ben ik begonnen met het opzetten van <Link className='linkLees' href={`/Post/portfolioproject/schetsen-en-wireframes`}>wireframes</Link> en heb ik per pagina bekeken welke elementen moeten worden getoond.
          </p>
          <br></br>
          <p>
          Om mijn aannames te verifiëren, heb ik een <Link className='linkLees' href={`/Post/portfolioproject/cardsorting`}>cardsorting-oefening</Link> uitgevoerd met drie installateurs. Hieruit bleek dat gebruikers verwachten dat de portal niet alleen dient als een plek voor de verschillende diensten, maar ook gezien wordt als een plek waar de voorkeuren en andere accountgegevens aangepast kunnen worden.
          </p>
          </div>
        <div className="flex flex-col text-left mt-8">
          <h2>Develop</h2>
          <p>
          Op basis van deze bevindingen ben ik begonnen met de eerste iteratie van het <Link className='linkLees' href={`/Post/portfolioproject/low-fidelity-prototype`}>low-fidelity prototype</Link>. In dit prototype heb ik ook het aanvraagformulier voor het huurplan verder uitgewerkt. Ik heb onderzoek gedaan naar de <Link className='linkLees' href={`/Post/portfolioproject/dos-en-donts-formulieren`}>do’s en dont’s van formulieren</Link> en deze, samen met de 10 heuristics, toegepast om een overzichtelijk en gebruiksvriendelijk formulier te creëren dat ook kan worden ingezet voor andere diensten binnen de portal. Belangrijke bevinden waren het opsplitsen van het formulier in stappen en het belang van een status indicatie.
          </p>
          <br></br>
          <p>
          Met dit prototype heb ik de eerste feedback ontvangen van Abel Installatie en Stijlbreuk. Op basis van deze feedback en mijn bevindingen zal de portal het centrale punt worden voor ledengegevens en dienen als een hub die doorverwijst naar de verschillende tools die Abel aanbiedt. In plaats van alle tools zoals het KPI-dashboard en het inkoop systeem in de portal te integreren, zorgt dit voor veel flexibiliteit en uitbreidingsmogelijkheden.
          </p>
          <br></br>
          <p>
          Na een terugkomdag op school realiseerde ik me dat de scope te groot was geworden. Daarom heb ik een diagram gemaakt om de <Link className='linkLees' href={`/Post/portfolioproject/opzet-en-scope`}>opzet en scope</Link> weer helder in beeld te krijgen. Onderdelen zoals het puntensysteem en het inkoopgedeelte van de portal, die geleidelijk binnen de scope van mijn project waren gekomen, zijn er weer uitgehaald. De focus van het project ligt nu weer op het huurplan. Wel werk ik andere onderdelen van de applicatie uit die invloed hebben op de beleving en ervaring van de gebruiker, om de nieuwe portal beter te kunnen testen.
          </p>
          <br></br>
          <p>
          Vanuit dit diagram moest de MoSCoW aangepast worden om de focus weer meer te leggen op het Huurplan. Dit is verwerkt in de <Link className='linkLees' href={`/Post/portfolioproject/moscow-analyse-v2`}>MoSCoW-analyse V2</Link>. In deze variant zijn ook de bevindingen van het low-fidelity prototype verwerkt. Om nog meer inzicht te krijgen in het proces wat doorlopen moet worden om een huurplan aan te vragen door zowel de installateur als de medewerkers van Abel installatie. Heb als een <Link className='linkLees' href={`/Post/portfolioproject/fly-on-the-wall`}>Fly on the wall</Link> meegekeken bij Femke (medewerkster Abel installatie) tijdens een aanvraag proces. Niks van het systeem is momenteel geautomatiseerd en moet handmatig in het systeem worden ingevuld. Al het contact met de installateur gaat via de mail. Nog een belangrijk punt was als de installateur verkeerde informatie door communiceert of als de klant valse informatie communiceert en het contract is ondertekend heeft Abel geen poot om op te staan als er iets misgaat.
          </p>
          <br></br>
          <p>
          De installateurs worden ook gevraagd om maandelijks een Excel lijst in te vullen of ze bij alle contracten onderhoud hebben uitgevoerd. Dit is voor velen dubbel werk en wordt daarom vaak ook niet gedaan waardoor Abel installatie geen inzicht heeft in de status van de contracten. Ik heb contact opgenomen met een aantal installateurs die veel huurcontracten hebben lopen bij Abel installatie. Ik heb ze gevraagd hoe ze het proces momenteel aanpakken en voornamelijk hoe ze de <Link className='linkLees' href={`/Post/portfolioproject/huurplannen-beheren`}>huurplannen beheren</Link>. Al de installateurs die ik gesproken heb houdt alles bij in eigen systemen en zitten er dus ook niet op te wachten dat de portal deze taak over neemt. Ze snappen dat Abel meer inzicht nodig heeft in de contracten maar de huidige manier zorgt ervoor dat er enorm veel dubbel werk is waar ze geen tijd voor hebben.
          </p>
          </div>
        <div className="flex flex-col text-left mt-8">
          <h2>Deliver</h2>
          <p>
          Vanuit hier ben ik begonnen met de eerste variant van het <Link className='linkLees' href={`/Post/portfolioproject/high-fidelity-prototype`}>High fidelity prototype</Link>, hierbij heb ik rekening gehouden om een vergelijkbare stijl aan te houden als de website van stijlbreuk maar anders genoeg dat er een duidelijk verschil is tussen de portal en de website. Vanuit de eerste variant van het prototype heb ik een aantal <Link className='linkLees' href={`/Post/portfolioproject/a-b-testen`}>A/B testen</Link> uitgevoerd. De test vergeleek vormen van het tonen van data in kaart vorm of in een tabel, en gaf ook een keuze in stijling. Het vertonen van de huurplannen in de vorm van kaarten kreeg de voorkeur. In detail pagina’s werd de voorkeur gelegd op een simpelere indeling die er vergelijkbaar uit ziet als facturen of document. Na de bevindingen te hebben verwerkt in de nieuwe versie van het prototype is deze gedeeld met Paul en de andere werknemers van Abel Installatie. Hier is een overduidelijke positieve reactie van gekomen. De integratie van de verschillende onderdelen binnen de portal was duidelijke en overzichtelijk. De flow van het aanvragen van een huurplan was duidelijk en de toevoeging van de verschillende statussen zal overzicht geven aan zowel abel zelf als haar leden. De feedback die er werd gegeven ging over het uitdenken van hoe het beheer vanuit abel eruit zo komen te zien met de huurplannen en dat het switchen van de website naar de portal nog niet duidelijk was en genoeg was uitgewerkt. 
          </p>
          <br></br>
          <p>
          Tijdens deze feedbackloop heb ik een testplan opgesteld met de tool Maze, door de tijdsdruk en de drukbezette installateurs kwam deze tool goed van pas om het prototype op afstand te kunnen testen. In de <Link className='linkLees' href={`/Post/portfolioproject/user-testen`}>User testen</Link> wordt de gebruiker gevraagd vier taken uit te voeren de tool houdt bij waar er geklikt wordt en hoe lang ze over de taken doen. Nadat ze de taken hebben uitgevoerd kunnen ze een score geven op basis van hoe lastig de taak was om uit te voeren en wat de ervaring was. RESULTAAT.
          </p>
          <br></br>
          <p>
          Met het wachten op de resultaten ben ik de feedback vanuit Abel gaan verwerken in de laatste variant van het <Link className='linkLees' href={`/Post/portfolioproject/figma-high-fidelity-prototype`}>Figma High fidelity prototype</Link>. Ook heb ik de kennis van Cialdini toegepast in het opzetten van de <Link className='linkLees' href={`/Post/portfolioproject/actie-en-evenement-paginas`}>Actie en Evenement pagina’s</Link> dit zodat stijlbreuk een duidelijker beeld zou krijgen van de opzet die er vanuit Abel en Brix.team wordt verwacht. 
          </p>
          <br></br>
          <p>
          Als laatste heb ik al mijn bevindingen resultaten en uitwerkingen verwerkt in een aanbeveling deze staat in het <Link className='linkLees' href={`/Post/portfolioproject/overdrachtsdocument`}>overdrachtsdocument</Link>. Met dit document kan zowel Brix.team, Abel als Stijlbreuk inzien welke onderdelen nog openliggen en wat mijn advies is hoe deze ingevuld kunnen worden.  
          </p>
          <br></br>
          <p>
          De opdracht vanuit de opdrachtgever richt zich volledig op het designonderdeel en niet op de implementatie. Dit is ook zeker de richting die ik wil opgaan als front-end designer. Om mijn kennis en vaardigheden op het gebied van implementatie toch te behouden en verder te ontwikkelen, heb ik mijn portfolio in Next.js gebouwd met WordPress als headless CMS in de achtergrond. Met de GraphQL-plugin kan ik mijn custom post types uitlezen en filteren in de Next.js voorkant.
          </p>
        </div>
        <h1 className="mt-20">CONCLUSIE</h1>
        <div className="flex flex-col text-left mt-6">
          <p>
          Ik kijk met veel tevredenheid terug op mijn tijd bij Brix.team. De opdracht van Abel Installatie gaf mij de kans om mijn vaardigheden als front-end designer te ontwikkelen en te verfijnen. Gedurende het gehele project, van de initiële ontdekkingsfase tot de oplevering van het high-fidelity prototype, heb ik waardevolle inzichten opgedaan in zowel het ontwerpproces als het belang van gebruikersonderzoek. Ik ben meer dan tevreden over het eindproduct dat ik heb neergezet. Ondanks dat ik af en toe buiten mijn scope trad, ben ik ervan overtuigd dat dit mij geholpen heeft om een beter totaalbeeld van de nieuwe portal neer te zetten. Het feit dat ik na mijn stage het project mag voortzetten, is een mooie indicatie van hoe het ontvangen is bij de klant.
          </p>
          <br></br>
          <p>
          Als ik mijn persoonlijke ontwikkelingsdoelen bekijk, kan ik overal een vinkje zetten. Hoewel ze soms wat ambitieus waren, heb ik gedurende het project continu contact gehad met de betrokken partijen en stakeholders. Dankzij de tooling van Brix.team heb ik geleerd hoe ik beter met mijn planning om kan gaan en nauwkeuriger tijdsinschattingen kan maken voor projecten. Ook ben ik gedurende het hele project bezig geweest met het onderzoeken en toepassen van designtrends en principes, wat het project naar een hoger niveau heeft getild en mijn groei als front-end designer heeft bevorderd.
          </p>
          <br></br>
          <p>
          De inzichten die ik tijdens mijn stage heb gekregen door het frequent testen van verschillende prototypes zijn onmisbaar geweest voor zowel het project als mijn ontwikkeling als designer. Het bijwonen van thema dagen en het bezoeken van verschillende installateurs gaf me de mogelijkheid om me in te leven in de doelgroep en hun behoeften beter te begrijpen.
          </p>
          <br></br>
          <p>
          Hoewel mijn rol zich voornamelijk richtte op het ontwerp, vond ik het belangrijk om mijn technische vaardigheden te blijven ontwikkelen. Het bouwen van mijn portfolio in Next.js met WordPress als headless CMS was een uitstekende oefening om mijn kennis van front-end ontwikkeling te behouden en uit te breiden. Het gebruik van de GraphQL-plugin om custom post types uit te lezen en te filteren in de Next.js voorkant gaf me praktische ervaring met moderne webontwikkelingstechnieken. Deze inzichten hebben mijn begrip van de back-end van moderne websites vergroot, waardoor ik in het bedrijfsleven beter kan communiceren met partijen zoals Stijlbreuk.
          </p>
          <br></br>
          <p>Al met al heb ik tijdens mijn project enorm veel geleerd en mezelf verder ontwikkeld als ICT & Media designer met HBO-denk- en werkniveau. Vooral op het gebied van front-end design, designprincipes en communicatie. De ervaring en kennis die ik heb opgedaan tijdens dit proces hebben me geholpen te groeien als professional en hebben mijn identiteit als front-end designer verder bevestigd.</p>
        </div>
    

    </div>
  }