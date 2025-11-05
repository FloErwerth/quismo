export type KnowledgeTypes = "health" | "appearance" | "family";

export type KnowledgeId = `${KnowledgeTypes}${string}`;

type Knowledge = {
	id: KnowledgeId;
	type: KnowledgeTypes;
	title: string;
	summary: string;
	details: string[];
	sources: { name: string; url: string }[];
};

type KnowledgeCategory = {
	title: string;
	summary: string;
	knowledge: Knowledge[];
};

export const knowledgeConfig: Record<KnowledgeTypes, KnowledgeCategory> = {
	health: {
		title: "Gesundheit",
		summary: "Die Auswirkungen des Rauchens auf deine Gesundheit",

		knowledge: [
			{
				id: "health1",
				type: "health",
				title: "Verengung von Blutgefäßen",
				summary:
					"Nikotin verengt Ihre Blutgefäße sofort – Ihr Herz muss härter arbeiten, Blutdruck und Puls steigen. Langfristig entstehen Gefäßschäden, die zu Herzinfarkt und Schlaganfall führen können.",
				details: [
					"Nikotin wirkt direkt auf Ihre Blutgefäße, indem es durch die Freisetzung von Botenstoffen (Katecholaminen) eine Verengung auslöst. Dadurch verringert sich der Blutfluss, während gleichzeitig Blutdruck und Herzfrequenz ansteigen. Die über 4.000 chemischen Stoffe im Tabakrauch schädigen zudem die Gefäßwände, führen zu Entzündungen und machen die Arterien steifer. Diese Dauerbelastung fördert über Jahre hinweg Arteriosklerose (Gefäßverkalkung) und erhöht das Risiko für gefährliche Blutgerinnsel.",
					"Die Folgen sind Durchblutungsstörungen im ganzen Körper, kalte Hände und Füße, eine unzureichende Sauerstoffversorgung des Herzens und ein deutlich erhöhtes Risiko für Herzinfarkt und Schlaganfall. Ein Drittel aller Herzinfarkte in Deutschland geht auf das Rauchen zurück. Die gute Nachricht: Schon kurze Zeit nach dem Rauchstopp beginnen sich Ihre Gefäße zu entspannen, der Blutdruck sinkt, die Blutzirkulation verbessert sich messbar und Ihr Herz kann wieder ruhiger arbeiten. Das Risiko für Herz-Kreislauf-Erkrankungen sinkt bereits nach wenigen rauchfreien Tagen deutlich.",
				],
				sources: [
					{
						name: "Vivantes – Herz und Rauchen",
						url: "https://www.vivantes.de/themen/koerperbereiche/herz-gefaesse/praevention/herz-und-rauchen",
					},
					{
						name: "VIVID – Rauchen und Thrombose",
						url: "https://www.vivid.at/thema/tabak/rauchen-und-gesundheit/rauchen-und-thrombose/",
					},
				],
			},
			{
				id: "health2",
				type: "health",
				title: "Deine Lunge ist geschädigt",
				summary:
					"Mit jedem Zug greift Tabakrauch deine Flimmerhärchen an, verursacht chronische Entzündungen und zerstört Lungenbläschen. 90 Prozent aller COPD-Fälle entstehen durch Rauchen.",
				details: [
					"Tabakrauch ist ein Gemisch aus über 5.300 Substanzen, darunter zahlreiche giftige und 90 krebserzeugende Stoffe. Mit jedem Zigarettenzug werden deine Flimmerhärchen – die natürliche Reinigungsfunktion der Lunge – angegriffen und verlieren ihre Beweglichkeit. Gleichzeitig steigert der Rauch die Schleimproduktion und verändert dessen Zusammensetzung, sodass dieser nicht mehr richtig abtransportiert werden kann. Es entsteht der typische Raucherhusten mit Auswurf. Freie Radikale aus dem Tabakrauch verursachen oxidativen Stress, locken Immunzellen an und lösen chronische Entzündungen aus. Diese führen zur Verdickung der Atemwege und bauen die Fasern ab, die die kleinen Atemwege offen halten. Beim Ausatmen fallen diese zusammen, und die Luft verbleibt in den Lungenbläschen.",
					"Über Jahre hinweg zerstören die von Immunzellen freigesetzten Botenstoffe die Wände der Lungenbläschen – deine Lungenkapazität verringert sich kontinuierlich. Bis zu 50 Prozent der lebenslangen Raucher entwickeln eine chronisch obstruktive Lungenerkrankung (COPD), bei der die Bronchien dauerhaft verengt und entzündet sind. Husten, Atemnot und vermehrte Schleimbildung sind die Folge. Raucher erkranken außerdem bis zu 27-mal häufiger an Lungenkrebs als Nichtraucher. Die gute Nachricht: Ein Rauchstopp ist die wirksamste Methode, eine COPD zu verhindern und deren Krankheitsverlauf zu verlangsamen. Bereits nach wenigen Wochen verbessern sich die Atemwegsfunktionen. Nach ein bis neun Monaten baut die Lunge überschüssigen Schleim ab, Hustenanfälle und Kurzatmigkeit gehen zurück. Die Flimmerhärchen erholen sich und arbeiten wieder besser. Das Lungenkrebsrisiko sinkt innerhalb von fünf bis zehn Jahren deutlich – je früher du aufhörst, desto stärker geht das Risiko zurück.",
				],
				sources: [
					{
						name: "DKFZ – Rauchen und Lungenerkrankungen (PDF)",
						url: "https://www.dkfz.de/fileadmin/user_upload/Krebspraevention/Download/pdf/FzR/FzR_2019_Rauchen-und-Lungenerkrankungen.pdf",
					},
					{
						name: "TheraKey – COPD und Rauchen: Was ein Rauchstopp bringt",
						url: "https://www.therakey.de/magazin/zusammenhang-von-rauchen-und-copd.html",
					},
					{
						name: "Nicorette – Raucherlunge und COPD",
						url: "https://www.nicorette.de/rauchen-folgen/raucherlunge",
					},
				],
			},
			{
				id: "health3",
				type: "health",
				title: "Dein Gehirn wird geschädigt",
				summary:
					"Rauchen verengt die Blutgefäße im Gehirn, fördert Entzündungen und oxidativen Stress. Das Risiko für Schlaganfall steigt um das Zwei- bis Dreifache, für Demenz um 47 Prozent und für Alzheimer um 56 Prozent.",
				details: [
					"Schadstoffe wie Kohlenmonoxid und Nikotin verengen die Blutgefäße im Gehirn, sodass Sauerstoff und Nährstoffe nicht mehr ausreichend zu den Nervenzellen gelangen. Nikotin verursacht oxidativen Stress, der eine chronische Entzündung und Schädigung der Gefäßwände auslöst – im Laufe der Jahre entsteht eine schwere Gefäßverkalkung (Arteriosklerose). Die Schadstoffe aktivieren zudem die Blutplättchen und erhöhen das Risiko für Blutgerinnsel, die ein Hirngefäß verstopfen können. Rauchen fördert außerdem systemische Entzündungen im gesamten Körper, auch im Gehirn, die als Risikofaktor für den Abbau von Nervenzellen gelten. Freie Radikale aus dem Zigarettenrauch greifen Zellbestandteile an und setzen die Nervenzellen unter oxidativen Stress.",
					"Langjähriges Rauchen kann das Volumen bestimmter Hirnregionen verringern, besonders in Bereichen für Gedächtnis, Lernen und Konzentration. Raucher haben ein zwei- bis dreifach erhöhtes Schlaganfallrisiko, das Hirnblutungsrisiko ist sogar vier- bis sechsfach erhöht. Nach Bluthochdruck ist Rauchen der zweitwichtigste Risikofaktor für Schlaganfälle und macht etwa 20 Prozent der Schlaganfalllast aus. Zudem entwickeln Raucher um 47 Prozent häufiger eine Demenz und um 56 Prozent häufiger Alzheimer. Die gute Nachricht: Ex-Raucher haben kein deutlich erhöhtes Demenzrisiko mehr. Nach einem Rauchstopp beginnen die Gefäße sich zu entspannen, die Durchblutung verbessert sich bereits nach Minuten messbar. Nach fünf Jahren sinkt das Schlaganfallrisiko auf das Niveau eines Nichtrauchers. Das Gehirn verfügt über bemerkenswerte Selbstheilungskräfte und kann geschädigte Strukturen durch Neuroplastizität teilweise neu organisieren.",
				],
				sources: [
					{
						name: "Hirnstiftung – Gehirn und Zigarette: Was beim Rauchen passiert",
						url: "https://hirnstiftung.org/gehirn-und-zigarette-was-beim-rauchen-passiert/",
					},
					{
						name: "Schlaganfall-Wissen – Schlaganfall und Rauchen",
						url: "https://schlaganfall-wissen.de/fragen/rauchen/",
					},
					{
						name: "Lungenärzte im Netz – Rauchen erhöht das Risiko für Demenz und Alzheimer",
						url: "https://www.lungenaerzte-im-netz.de/news-archiv/meldung/rauchen-erhoeht-das-risiko-fuer-demenz-und-alzheimer/",
					},
				],
			},
			{
				id: "health4",
				type: "health",
				title: "Risiko für Herzinfarkt",
				summary:
					"Rauchen verdoppelt bis verachtfacht Ihr Herzinfarktrisiko – besonders bei Menschen unter 50 Jahren. Schon eine Zigarette pro Tag ist gefährlich.",
				details: [
					"Wenn Sie rauchen, gelangen Nikotin und andere Schadstoffe in Ihren Blutkreislauf. Diese stimulieren die Ausschüttung von Stresshormonen wie Adrenalin, die Ihre Blutgefäße verengen und Ihren Blutdruck erhöhen. Gleichzeitig beschleunigt Ihr Herz seinen Schlag, um trotz verengter Gefäße genug Blut durch den Körper zu pumpen. Diese ständige Belastung schädigt Ihre Gefäßwände. Rauchen fördert außerdem die Bildung von Ablagerungen (Plaque) in den Arterien, die zu Arteriosklerose und weiterer Verengung der Herzkranzgefäße führen. Das Herz wird nicht mehr ausreichend mit Sauerstoff versorgt. Zusätzlich erhöht Rauchen die Gerinnungsfähigkeit des Blutes und fördert die Bildung von Blutgerinnseln, die ein Gefäß plötzlich verstopfen können.",
					"Bei Rauchern ist das Herzinfarktrisiko etwa doppelt so hoch wie bei Nichtrauchern – bei Menschen unter 50 Jahren steigt es sogar auf das 8-Fache. Diese dramatische Steigerung ist teilweise darauf zurückzuführen, dass Raucher bei einem Herzinfarkt durchschnittlich zehn Jahre jünger sind als Ex-Raucher oder Nichtraucher. Die gute Nachricht: Ein kompletter Rauchstopp senkt Ihr Herzinfarktrisiko bereits nach wenigen Jahren deutlich. Studien zeigen, dass sich das Risiko für gefährliche Herz-Kreislauf-Ereignisse innerhalb von fünf Jahren fast halbiert, wenn Sie aufhören zu rauchen. Schon wenige Tage nach dem Rauchstopp normalisiert sich Ihr Blutdruck, und die Durchblutung verbessert sich kontinuierlich.",
				],
				sources: [
					{
						name: "Schüchtermann-Klinik – Wie Rauchen das Herz-Kreislauf-System beeinflusst",
						url: "https://www.schuechtermann-klinik.de/wie-rauchen-das-herz-kreislauf-system-beeinflusst/",
					},
					{
						name: "Drugcom – Bis zu 8-fach erhöhtes Herzinfarktrisiko durch Rauchen",
						url: "https://www.drugcom.de/news/bis-zu-8-fach-erhoehtes-herzinfarktrisiko-durch-rauchen/",
					},
					{
						name: "NetDoktor – Herzerkrankung: Rauchstopp halbiert Infarktrisiko",
						url: "https://www.netdoktor.de/news/herzerkrankung-rauchstopp-halbiert-infarktrisiko/",
					},
				],
			},
			{
				id: "health5",
				type: "health",
				title: "Dein Immunsystem schwächelt",
				summary:
					"Rauchen schwächt Ihr Immunsystem stark ab – Raucher infizieren sich häufiger und erleiden schwerere Infektionen. Die Folgen wirken noch Jahre nach dem Rauchstopp.",
				details: [
					"Im Blut von Rauchern finden sich weniger Immunglobuline – Eiweißstoffe, die Ihr Körper zur Abwehr fremder Substanzen benötigt. Tabakrauch schädigt die Schleimhäute in Nase, Bronchien und Lunge, die das erste Bollwerk gegen Krankheitserreger bilden. Durch das Rauchen funktioniert die zelluläre Abwehr schlechter: Die Flimmerhärchen in Ihren Atemwegen, die normalerweise Keime wegfegen, werden gelähmt und können ihre Schutzfunktion nicht erfüllen. Gleichzeitig löst Rauchen starke Entzündungsprozesse aus, die das Immunsystem überfordern und schwächen. Dies hat zwei besonders problematische Folgen: Das angeborene Immunsystem reagiert überempfindlich auf Krankheitserreger, was zu verstärkten Entzündungen führt. Das erworbene Immunsystem hingegen, das Informationen über früher bekämpfte Krankheitserreger speichert, verliert seine Fähigkeit, schnell und gezielt zu reagieren.",
					"Raucher bekommen deshalb nicht nur häufiger Schnupfen und Grippe, sondern leiden auch unter schwereren Verläufen. Sie sind anfälliger für Lungenentzündungen und Blutvergiftungen als Nichtraucher. In der Corona-Pandemie zeigte sich, dass Rauchen ein erheblicher Risikofaktor für schwere Krankheitsverläufe ist. Neue Forschungen zeigen, dass Rauchen so starke Auswirkungen auf das Immunsystem hat wie Alter oder genetische Veranlagung. Die etwas gute Nachricht: Das angeborene Immunsystem erholt sich schnell nach einem Rauchstopp – bereits ein bis neun Monate danach verbessert sich die Immunabwehr messbar. Die schlecht Nachricht: Das erworbene Immunsystem bleibt auch zehn bis 15 Jahre nach dem Rauchstopp beeinträchtigt. Daher lohnt sich ein langfristiger Rauchverzicht enorm.",
				],
				sources: [
					{
						name: "DKV – Rauchen: Welche Auswirkungen auf den Körper",
						url: "https://www.dkv.com/gesundheit-themenwelt-besser-atmen-welche-auswirkungen-hat-das-rauchen-auf-den-koerper.html",
					},
					{
						name: "NetDoktor – Wie Rauchen das Immunsystem langfristig schädigt",
						url: "https://www.netdoktor.de/news/wie-rauchen-das-immunsystem-langfristig-schaedigt/",
					},
					{
						name: "Rauchfrei-Info – Rauchen schwächt das Immunsystem (gleich doppelt)",
						url: "https://www.rauchfrei-info.de/news/rauchen-schwaecht-das-immunsystem-gleich-doppelt/",
					},
				],
			},
			{
				id: "health6",
				type: "health",
				title: "Erhöhte Krebsgefahr",
				summary:
					"Tabakrauch enthält etwa 90 krebserregende Stoffe. Raucher haben ein 20- bis 25-fach erhöhtes Lungenkrebsrisiko – und erhöhtes Risiko für über ein Dutzend weiterer Krebsarten.",
				details: [
					"Tabakrauch ist ein Gemisch aus etwa 5.300 Substanzen, darunter ungefähr 90, die krebserzeugend sind oder unter Verdacht stehen, Krebs zu verursachen. Dazu gehören polyzyklische aromatische Kohlenwasserstoffe (PAK), aromatische Amine und tabakspezifische N-Nitrosamine. Diese Krebserreger können Ihre DNA, also das Erbgut Ihrer Körperzellen, beschädigen. Normalerweise verfügen Ihre Zellen über ausgeklügelte Reparaturmechanismen und Abwehrsysteme, die Krebsentstehung verhindern. Aber die Giftstoffe im Tabakrauch beschädigen genau diese Schutzmechanismen. Die DNA-Reparatur funktioniert schlechter, die Entgiftung verläuft mangelhaft, und geschädigte Zellen werden nicht mehr rechtzeitig erkannt und eliminiert. Dadurch können sich Krebszellen leichter entwickeln und vermehren.",
					"Raucher haben ein 20- bis 25-fach erhöhtes Lungenkrebsrisiko im Vergleich zu Nichtrauchern – in Europa gehen etwa 82 Prozent aller Lungenkrebsfälle auf das Rauchen zurück. Neben Lungenkrebs ist Rauchen mit vielen weiteren Krebsarten verbunden: Mund-, Rachen-, Kehlkopf-, Magen-, Darm-, Bauchspeicheldrüsen-, Leber-, Harnblasen-, Nieren-, Brust- und Gebärmutterkrebs sowie einzelne Formen der Leukämie. Lungen-, Mundhöhlen-, Kehlkopf- und Bronchienkrebs gehen sogar bis zu 90 Prozent auf das Rauchen zurück. Das Krebsrisiko hängt von der Menge, Dauer und dem Beginn des Rauchens ab. Je mehr und je länger Sie rauchen und je früher Sie angefangen haben, desto höher ist Ihr Risiko. Die gute Nachricht: Nach einem Rauchstopp regeneriert sich Ihr Körper und das Krebsrisiko sinkt langsam wieder – aber nur bei völligem Verzicht auf Zigaretten. Weniger zu rauchen hat deutlich weniger Effekt.",
				],
				sources: [
					{
						name: "VIVID – Rauchen und Krebs",
						url: "https://www.vivid.at/thema/tabak/rauchen-und-gesundheit/rauchen-und-krebs/",
					},
					{
						name: "Rauchfrei-Info – Krebserkrankungen",
						url: "https://www.rauchfrei-info.de/infozentrum/meine-gesundheit/krebserkrankungen/",
					},
					{
						name: "Cancer Code Europe IARC – Verursacht Tabak Krebs?",
						url: "https://cancer-code-europe.iarc.fr/index.php/de/12-moeglichkeiten/tabak/919-verursacht-der-konsum-von-tabak-krebs-wie-hoch-ist-der-anteil-der-durch-rauchen-verursachten-krebserkrankungen",
					},
				],
			},
			{
				id: "health7",
				type: "health",
				title: "Dein Körper reinigt sich von selbst",
				summary:
					"Nach einem Rauchstopp beginnt Ihr Körper sofort mit der Selbstheilung – bereits nach 20 Minuten sinkt Ihr Blutdruck, nach 12 Stunden normalisiert sich der Sauerstoffgehalt.",
				details: [
					"Der menschliche Körper verfügt über erstaunliche Selbstheilungskräfte. Bereits innerhalb von Minuten nach der letzten Zigarette setzen die Regenerationsprozesse ein. Nach 20 Minuten sinken Blutdruck und Herzfrequenz wieder auf normale Werte – Ihr Herz muss nicht mehr ständig auf Hochtouren laufen. Nach acht bis 12 Stunden sinkt der Kohlenmonoxid-Spiegel in Ihrem Blut auf Normalwerte, und der Sauerstoffgehalt steigt messbar an. Dies bedeutet, dass alle Ihre Organe wieder besser mit Sauerstoff versorgt werden und Ihre körperliche Leistungsfähigkeit beginnt zu steigen. Nach drei Tagen regenerieren sich die Nervenendigungen, Ihr Geruchs- und Geschmackssinn verbessern sich deutlich. Nach zwei bis drei Wochen normalisiert sich die Lungenfunktion messbar – Ihre Flimmerhärchen, die natürliche Reinigungs- und Transportmechanismen in der Lunge, beginnen wieder zu arbeiten.",
					"Nach ein bis neun Monaten baut Ihr Körper angesammelten Schleim ab, Hustenanfälle und Atemnot gehen deutlich zurück, und die Infektionsgefahr sinkt. Ein Jahr nach dem Rauchstopp ist die Reinigungsfunktion Ihrer Lunge vollständig wiederhergestellt. Nach 15 Jahren sind die meisten messbaren Schäden rückgängig gemacht – Ex-Raucher sind gesundheitlich nicht mehr schlechter dran als Menschen, die nie geraucht haben. Dies zeigt: Egal wie lange Sie geraucht haben – Ihr Körper hat die bemerkenswerte Fähigkeit, sich selbst zu heilen, sobald Sie ihm die Chance geben.",
				],
				sources: [
					{
						name: "NetDoktor – Aufhören zu Rauchen: Was passiert im Körper?",
						url: "https://www.netdoktor.de/rauchen/aufhoeren/was-passiert-im-koerper/",
					},
					{
						name: "Altstadtapotheke Hagen – Mit dem Rauchen aufhören: Das passiert im Körper",
						url: "https://www.altstadtapotheke-hagen.de/mit-dem-rauchen-aufhoeren-das-passiert-im-koerper-nach-einem-tag-monat-jahr-und-jahrzehnt/",
					},
					{
						name: "Asklepios – Detox: Was im Körper passiert, wenn wir verzichten",
						url: "https://www.asklepios.com/konzern/gesundheitsmagazin/gesund-leben/praevention/detox",
					},
				],
			},
			{
				id: "health8",
				type: "health",
				title: "Rauchen raubt dir Energie",
				summary:
					"Rauchen führt zu chronischer Müdigkeit und reduzierter körperlicher Leistungsfähigkeit. Der Sauerstoffmangel in Ihrem Blut zehrt ständig an Ihren Ressourcen.",
				details: [
					"Wenn Sie rauchen, gelangt Kohlenmonoxid in Ihr Blut – ein giftiges Gas, das die Sauerstofftransportfähigkeit Ihres Blutes stark beeinträchtigt. Das bedeutet: Ihre roten Blutkörperchen können weniger Sauerstoff transportieren, weshalb Ihre Organe, Muskeln und Ihr Gehirn chronisch unterversorgt sind. Gleichzeitig belastet Nikotin Ihr Herz-Kreislauf-System ständig – Ihr Herz muss schneller schlagen und Ihre Blutgefäße sind ständig verengt. Diese Dauerbelastung ermüdet Ihren Körper kontinuierlich. Raucher berichten häufig von Müdigkeit, fehlender Energie und reduzierter körperlicher Leistungsfähigkeit, obwohl Nikotin kurzfristig als Stimulans wirkt. Dieser vermeintliche Energieschub ist trügerisch: Raucher nutzen eigentlich nur ihre Reserven auf, um den Schaden durch die Zigarette auszugleichen. Auf lange Sicht führt das zur Erschöpfung.",
					"Ein Rauchstopp schenkt Ihnen die Energie zurück. Bereits nach 12 Stunden verbessert sich der Sauerstoffgehalt in Ihrem Blut dramatisch – alle Ihre Organe werden wieder besser versorgt. Nach wenigen Wochen bemerken Sie, dass körperliche Anstrengung im Alltag und beim Sport leichter fällt. Nach ein bis drei Monaten ist der Effekt bereits deutlich spürbar: Sie fühlen sich fitter, ausdauernder und weniger erschöpft. Viele Ex-Raucher berichten, dass sie sich mehr Energie für ihre Hobbys, Familie und Karriere haben. Das Leben fühlt sich plötzlich leichter und lebenswerter an – ein großer Gewinn für Ihre Lebensqualität.",
				],
				sources: [
					{
						name: "NetDoktor – Aufhören zu Rauchen: Was passiert im Körper?",
						url: "https://www.netdoktor.de/rauchen/aufhoeren/was-passiert-im-koerper/",
					},
					{
						name: "Altstadtapotheke Hagen – Mit dem Rauchen aufhören: Das passiert im Körper",
						url: "https://www.altstadtapotheke-hagen.de/mit-dem-rauchen-aufhoeren-das-passiert-im-koerper-nach-einem-tag-monat-jahr-und-jahrzehnt/",
					},
				],
			},
			{
				id: "health9",
				type: "health",
				title: "Jeder Rauchstopp verlängert dein Leben",
				summary:
					"Es ist nie zu spät, mit dem Rauchen aufzuhören – selbst mit 65+ Jahren können Sie noch Jahre gewinnen. Wer vor 40 Jahren aufhört, lebt fast so lange wie ein Nichtraucher.",
				details: [
					"Die Forschung zeigt eindeutig: Ein Rauchstopp ist die wirksamste Massnahme zur Verlängerung Ihres Lebens. Raucher verlieren im Durchschnitt etwa 9 bis 10 Lebensjahre – Frauen durchschnittlich 7,3 Jahre, Männer sogar 9,4 Jahre, wenn sie mehr als 10 Zigaretten täglich rauchen. Selbst wer weniger als 10 Zigaretten pro Tag raucht, verliert etwa 5 Jahre. Doch die gute Nachricht: Diese Rechnung ist nicht in Stein gemeisselt. Wer mit dem Rauchen aufhört, kann diese verlorene Zeit zurückgewinnen. Menschen, die vor ihrem 40. Geburtstag aufhören, leben etwa gleich lange wie jemand, der nie geraucht hat. Die Hälfte dieser Lebensverlängerung wird bereits innerhalb von nur drei Jahren nach dem Rauchstopp erreicht.",
					"Wer es mit 45 Jahren schafft, aufzuhören, gewinnt etwa 5,5 Jahre Lebenszeit. Mit 55 Jahren sind es noch 3,5 Jahre, und selbst wer mit 65 aufhört, kann noch durchschnittlich 1,7 Jahre zurückgewinnen – etwa ein Viertel dieser Personen gewinnt mindestens ein Jahr. Sogar 75-Jährige, die aufhören zu rauchen, verlängern ihr Leben statistisch noch um 0,7 Jahre. Die Lebenserwartung verbessert sich so schnell, weil die Risiken für Herzinfarkt und Schlaganfall bereits nach wenigen Jahren drastisch sinken. Nach 15 Jahren ist Ihr Herzinfarkt-Risiko genauso hoch wie bei jemandem, der nie geraucht hat. Das Krebsrisiko sinkt zwar langsamer, beginnt aber unmittelbar nach dem letzten Zug zu fallen. Ein Rauchstopp lohnt sich daher in jedem Alter – Sie gewinnen nicht nur Lebensjahre, sondern auch Lebensqualität.",
				],
				sources: [
					{
						name: "NetDoktor – Für den Rauchstopp ist man nie zu alt",
						url: "https://www.netdoktor.de/news/fuer-den-rauchstopp-ist-man-nie-zu-alt/",
					},
					{
						name: "GEO – Ein Rauchstopp erhöht die Lebenserwartung deutlich",
						url: "https://www.geo.de/wissen/gesundheit/ein-rauchstopp-erhoeht-die-lebenserwartung-deutlich-34453880.html",
					},
					{
						name: "UniverSimed – Neue Studie: Früher Rauchstopp verhindert fast alle Folgeschäden",
						url: "https://www.universimed.com/ch/article/allgemeine-innere-medizin/neue-studie-frueher-rauchstopp-folgeschaeden-373143",
					},
				],
			},
			{
				id: "health10",
				type: "health",
				title: "Rauchen kann zum Raucherbein führen",
				summary:
					"Raucher haben ein stark erhöhtes Risiko für eine periphere arterielle Verschlusskrankheit (pAVK) – die sogenannte Schaufensterkrankheit. Im Extremfall droht eine Amputation.",
				details: [
					'Das Raucherbein, medizinisch "periphere arterielle Verschlusskrankheit" (pAVK), ist eine schwerwiegende Folge des Rauchens. Sie entsteht durch Arteriosklerose – die Verkalkung und Verengung der Arterien, die Ihre Beine mit Blut versorgen. Rauchen ist der wichtigste Risikofaktor für diese Erkrankung und verursacht etwa 90 Prozent aller pAVK-Fälle in den Beinen. Die schädlichen Substanzen im Tabakrauch fördern Entzündungen und oxidativen Stress in den Gefäßwänden, beschleunigen die Bildung von Fettplaques und verengen die Arterien. Gleichzeitig reduziert Kohlenmonoxid die Sauerstofftransportfähigkeit des Blutes zusätzlich. Je enger die Arterien werden, desto weniger Blut fließt zu Ihren Beinen – die Gewebe werden unterversorgt.',
					'Im frühen Stadium bemerken viele Patienten lange Zeit keine Symptome. Später folgt die sogenannte "Schaufensterkrankheit": Beim Gehen entstehen Schmerzen oder Krämpfe in den Beinen, die so intensiv werden, dass Patienten häufig Pausen einlegen müssen – ähnlich wie jemand, der vor Schaufenstern stehen bleibt. Mit fortschreitender Krankheit können die Schmerzen auch in Ruhe auftreten. Im schlimmsten Fall, wenn die Arterien stark genug verengt oder verschlossen sind, können Gewebe absterben (Nekrose), was zu Geschwüren und letztlich zur Amputation führt. Zusätzlich haben Patienten mit pAVK ein drastisch erhöhtes Risiko für Herzinfarkt und Schlaganfall. Ein sofortiger und kompletter Rauchstopp ist die einzige wirksame Vorbeugung und kann die Progression der Erkrankung bremsen. Auch bei bestehender pAVK ist ein Rauchstopp essentiell – nur wer komplett mit dem Rauchen aufhört, kann die Verschlimmerung seiner Erkrankung verhindern.',
				],
				sources: [
					{
						name: "American Endovascular – Der Zusammenhang zwischen Rauchen und peripherer Arterienerkrankung",
						url: "https://americanendovascular.com/de/blog/link-between-smoking-and-peripheral-artery-disease/",
					},
					{
						name: "Sprechzimmer – Raucherbein (pAVK, Schaufensterkrankheit)",
						url: "https://www.sprechzimmer.ch/Krankheitsbilder/Raucherbein_Claudicatio_intermittens.html",
					},
					{
						name: "NetDoktor – Raucherbein: Symptome & Behandlung",
						url: "https://www.netdoktor.de/krankheiten/raucherbein/",
					},
				],
			},
		],
	},
	appearance: {
		title: "Aussehen",
		summary: "Die Auswirkungen des Rauchens auf deine Äußeres",
		knowledge: [
			{
				id: "appearance1",
				type: "appearance",
				title: "Vorzeitige Hautalterung und Faltenbildung",
				summary:
					"Raucher haben durchschnittlich 10 Jahre ältere Haut als Nichtraucher. Nikotin blockiert die Kollagenproduktion und fördert den Abbau von Elastinfasern.",
				details: [
					"Die vorzeitige Hautalterung ist eine der sichtbarsten Folgen des Rauchens. Sie entsteht durch zwei parallel laufende Prozesse. Der erste Prozess betrifft die Kollagen- und Elastinfasern – die Strukturproteine, die für Straffheit und Elastizität Ihrer Haut verantwortlich sind. Nikotin aktiviert spezielle Rezeptoren in den Fibroblasten (Kollagen-produzierende Zellen), die Veränderungen in der extrazellulären Matrix auslösen. Gleichzeitig wird durch freie Radikale im Tabakrauch die Enzym Matrix-Metalloprotease aktiviert, die gezielt Kollagen und Elastin abbaut. Der zweite Prozess wird durch die verminderte Durchblutung verursacht: Nikotin verengt die Blutgefäße dauerhaft, sodass weniger Nährstoffe und Sauerstoff zur Haut gelangen. Dies führt zu einem Feuchtigkeitsdefizit in der Oberhaut – die Haut trocknet aus und wirkt schlaff.",
					"Die typischen Raucherfalten entstehen auch durch die wiederholte Mimik beim Zigarettenrauchen: Die Lippen werden ständig gespitzt und zusammengepresst, was zu charakteristischen vertikalen Falten rund um den Mund führt. Raucher werden durchschnittlich 10 Jahre älter eingeschätzt als sie tatsächlich sind. Ein Rauchstopp stoppt diesen Prozess sofort. Bereits nach wenigen Wochen bemerken Ex-Raucher, dass ihre Haut wieder mehr Feuchtigkeit einlagert, der Teint heller wird und die Hautstruktur sich regeneriert. Nach wenigen Monaten ist die Verbesserung deutlich sichtbar – die Haut wirkt wieder lebendiger und straffer. Neue Falten bilden sich nicht mehr, und mit entsprechender Hautpflege können sogar bestehende Falten teilweise sichtbar reduziert werden.",
				],
				sources: [
					{
						name: "Universimed – Zigarettenrauch aus dermatologischer Sicht",
						url: "https://www.universimed.com/ch/article/dermatologie/zigarettenrauch-dermatologischer-sicht-154506",
					},
					{
						name: "Dr. Leenarts – Was bedeutet Rauchen für die Haut",
						url: "https://www.drleenarts.de/was-bedeutet-rauchen-fuer-die-haut/",
					},
					{
						name: "NichtraucherHelden – Rauchen und Hautalterung",
						url: "https://www.nichtraucherhelden.de/magazine/schrumpelige-haut-in-jungen-jahren-rauchen-beschleunigt-hautalterung-29",
					},
				],
			},
			{
				id: "appearance2",
				type: "appearance",
				title: "Graue und ungleichmäßige Hautfarbe",
				summary:
					"Raucher haben eine charakteristische fahle, gräuliche Hautfarbe mit schlechtem Teint. Ursache ist die Verengung der Blutgefäße und der Sauerstoffmangel.",
				details: [
					'Das sogenannte "Rauchergesicht" ist eine unmittelbare Folge der Gefäßverengung. Nikotin und Kohlenmonoxid aus dem Tabakrauch reduzieren die Blutversorgung der Haut drastisch – bereits eine einzelne Zigarette kann den Blutfluss in der Haut für über eine Stunde beeinträchtigen. Diese chronische Mangelversorgung führt dazu, dass Hautzellen nicht ausreichend mit frischem, sauerstoffreichem Blut versorgt werden. Das Ergebnis ist ein fahler, grauer oder gelblich-wirkender Teint statt der normalen rosigen Gesichtsfarbe. Die Haut wirkt leblos, müde und insgesamt weniger vital. Zusätzlich lagert Raucher-Haut weniger Wasser ein als Nichtraucher-Haut – die Folge ist eine trockenere, düstere Hautoberfläche. Auch dunkle Augenschatten sind typisch, da auch die feinen Blutgefäße unter den Augen verengt sind.',
					"Ein Rauchstopp führt bereits in den ersten Tagen zu sichtbaren Verbesserungen. Nach etwa 12 Stunden beginnt sich der Sauerstoffgehalt im Blut zu normalisieren, wodurch die Durchblutung sukzessive verbessert wird. Nach wenigen Wochen wird der Teint deutlich rosiger und frischer – die Haut strahlt wieder. Die Hautoberfläche wird durch die verbesserte Nährstoffversorgung wieder besser mit Feuchtigkeit versorgt und wirkt insgesamt lebendiger. Ein klarer, gesunder Hautton kehrt zurück, und viele Ex-Raucher sind überrascht, wie schnell und deutlich dieser Effekt sichtbar wird. Es ist einer der schnellsten und befriedigendsten Effekte eines Rauchstopps.",
				],
				sources: [
					{
						name: "Dr. Leenarts – Was bedeutet Rauchen für die Haut",
						url: "https://www.drleenarts.de/was-bedeutet-rauchen-fuer-die-haut/",
					},
					{
						name: "Alkmene – Die Haut nach Rauchstopp",
						url: "https://alkmene.de/ratgeber/haut-nach-rauchstopp/",
					},
				],
			},
			{
				id: "appearance3",
				type: "appearance",
				title: "Haut verliert Spannkraft – erschlaffte Konturen",
				summary:
					"Rauchen zerstört Elastinfasern und reduziert die Kollagenproduktion. Die Haut wird schlaff, Konturen verschwimmen und der Gesichtszug wirkt verändert.",
				details: [
					"Die Spannkraft der Haut hängt davon ab, dass genug Elastin und Kollagen in der Dermis (Lederhaut) vorhanden sind. Diese Faserproteine funktionieren wie ein elastisches Netzwerk, das die Haut straff und formbar hält. Rauchen greift dieses System auf zwei Ebenen an: Erstens wird die Kollagenproduktion durch Nikotin gehemmt – die neuen Fasern werden nicht schnell genug nachgebildet. Zweitens wird der Abbau dieser Fasern durch freie Radikale und Matrix-Metalloproteasen beschleunigt. Gleichzeitig ist die Haut weniger mit Feuchtigkeit versorgt, da die Durchblutung mangelhaft ist. Diese Kombination führt zu einer schlaffen, hängenden Haut, vor allem an Wangen, Hals und Kieferlinie. Die Gesichtskonturen verschwimmen, die Haut hängt gewissermaßen.",
					"Nach einem Rauchstopp beginnt die Haut, sich selbst zu regenerieren. Bereits nach wenigen Wochen normalisiert sich die Kollagenproduktion, und der Fettstoffwechsel der Haut verbessert sich. Nach ein bis drei Monaten sehen Ex-Raucher deutlich straffere Gesichtskonturen. Besonders der Halsbereich und die Kieferlinie wirken wieder definierterer. Nach mehreren Monaten wird dieser Effekt noch deutlicher: Die Haut lagert wieder mehr Wasser ein, was zu einer sichtbaren Aufpolsterung führt. Mit zunehmendem Alter können sich diese Verbesserungen stabilisieren, und die Haut wirkt insgesamt vitaler und jünger.",
				],
				sources: [
					{
						name: "Universimed – Zigarettenrauch aus dermatologischer Sicht",
						url: "https://www.universimed.com/ch/article/dermatologie/zigarettenrauch-dermatologischer-sicht-154506",
					},
					{
						name: "CuraLoe – Der versteckte Schaden: Rauchen und Kollagen/Elastin",
						url: "https://www.curaloe.de/de/blogs/vorteile-von-aloe-vera/der-schaden-den-das-rauchen-fur-kollagen-und-elastin-hat",
					},
					{
						name: "Haut.de – Gesichtshaut altert durch Rauchen",
						url: "https://www.haut.de/gesichtshaut-altert-durch-rauchen/",
					},
				],
			},
			{
				id: "appearance4",
				type: "appearance",
				title: "Verfärbte Zähne, Nägel und Lippen",
				summary:
					"Nikotin und Teer lagern sich auf Zähnen, Nägeln und Lippen ab. Diese Verfärbungen können nur durch professionelle Zahnreinigung entfernt werden.",
				details: [
					"Zahnverfärbungen sind eines der sichtbarsten Zeichen des Rauchens. Nikotin und Teer aus dem Tabakrauch lagern sich als hartnäckige Beläge auf den Zahnoberflächen ab und führen zu gelben bis braunen Flecken. Diese Verfärbungen können durch normales Zähneputzen nicht entfernt werden, da sie tief in die Zahnoberfläche eindringen. Mit der Zeit verhärten sich diese Ablagerungen zu Zahnstein, was das Problem noch verschlimmert. Nicht nur die Zähne färben sich: Auch die Fingernägel von Rauchern zeigen typischerweise gelblich-braune Verfärbungen, besonders an den Fingerspitzen, mit denen die Zigarette gehalten wird. Auch die Lippen und die Zunge können sich verfärben – durch die Melanineinlagerung in den Schleimhäuten aufgrund des chronischen Nikotinreizes entstehen bräunlich-schwarze Flecken auf den Lippen und der Gingiva (dem Zahnfleisch).",
					"Ein Rauchstopp verhindert neue Verfärbungen sofort. Bestehende Verfärbungen benötigen professionelle Hilfe: Eine professionelle Zahnreinigung oder ein professionelles Zahnbleaching kann die vorhandenen Verfärbungen entfernen. Nach einem Rauchstopp werden neue Verfärbungen nicht mehr entstehen. Die Verfärbungen an Nägeln verschwinden langsam, wenn die betroffenen Nägel nachwachsen – ein Prozess, der mehrere Monate dauert. Nach etwa 6-12 Monaten zeigen sich wieder gesunde, hell gefärbte Nägel. Besonders die kosmetische Verbesserung der Zähne ist für viele Ex-Raucher ein motivierender Grund weiterzumachen, mit dem Rauchen aufgehört zu haben.",
				],
				sources: [
					{
						name: "Zahnheilkunde Bodensee – Einfluss von Rauchen",
						url: "https://www.zahnheilkunde-bodensee.de/ratgeber/detail/der-einfluss-von-rauchen-und-tabakkonsum-auf-die-mundgesundheit/",
					},
					{
						name: "Nicorette – Raucherzähne: Rauchen und Mundgesundheit",
						url: "https://www.nicorette.de/rauchen-folgen/raucherzaehne",
					},
					{
						name: "About-Dents – Rauchen und Zahngesundheit",
						url: "https://about-dents.de/rauchen-und-zahngesundheit-mehr-als-nur-gelbe-zaehne/",
					},
				],
			},
			{
				id: "appearance5",
				type: "appearance",
				title: "Schlechtere Wundheilung und Hautschäden",
				summary:
					"Raucher heilen Wunden deutlich langsamer ab. Kohlenmonoxid führt zu Sauerstoffmangel in den Geweben, was die Geweberegeneration behindert.",
				details: [
					"Eine gute Wundheilung erfordert eine optimale Durchblutung und Sauerstoffversorgung der Wunde. Die Haut muss schnell neue Blutgefäße aufbauen, Kollagen produzieren und Deckgewebe bilden. Raucher haben massive Probleme damit, weil Kohlenmonoxid aus dem Tabakrauch die Fähigkeit des Blutes, Sauerstoff zu transportieren, stark beeinträchtigt. Die Gewebe um die Wunde sind chronisch unterversorgt. Gleichzeitig vermindert Nikotin die Durchblutung zusätzlich durch die Verengung der Blutgefäße. Das Immunsystem eines Rauchers ist zudem geschwächt, was die Infektabwehr beeinträchtigt. Zusätzlich greifen die polyzyklischen aromatischen Kohlenwasserstoffe (PAK) aus dem Tabakrauch die Regenerationsfähigkeit der Zellen direkt an. Die Folge: Wunden heilen bei Raucher bis zu 50 Prozent langsamer ab als bei Nichtrauchern. Dies ist besonders nach Operationen, Verletzungen oder chirurgischen Eingriffen problematisch – die Infektionsrate ist erhöht, und Komplikationen treten häufiger auf. Zahnärzte und Chirurgen raten daher Rauchern, mindestens eine Woche vor und nach einer Operation auf das Rauchen zu verzichten.",
					"Nach einem Rauchstopp verbessert sich die Wundheilung deutlich. Bereits nach 12 Stunden normalisiert sich der Sauerstoffgehalt im Blut, und die Wunden erhalten wieder bessere Nährstoffversorgung. Nach wenigen Tagen ist der Unterschied spürbar – die Wunden heilen schneller ab und werden weniger infiziert. Nach etwa vier bis sechs Wochen ist die Wundheilungsfähigkeit von Ex-Rauchern genauso gut wie die von Nichtrauchern. Dies ist ein großer Vorteil bei geplanten Operationen: Wer vor einem Eingriff aufhört zu rauchen, hat signifikant bessere Heilungsergebnisse.",
				],
				sources: [
					{
						name: "DKFZ – Rauchen und Hautschäden",
						url: "https://www.dkfz.de/fileadmin/user_upload/Krebspraevention/Download/pdf/FzR/FzR_2008_Rauchen-und-Hautschaeden.pdf",
					},
					{
						name: "Vichy – Hautalterung rückgängig machen",
						url: "https://www.vichy.de/expertentipps/anti-aging/hautalterung-rueckgaengig-machen",
					},
					{
						name: "Universimed – Zigarettenrauch aus dermatologischer Sicht",
						url: "https://www.universimed.com/ch/article/dermatologie/zigarettenrauch-dermatologischer-sicht-154506",
					},
				],
			},
			{
				id: "appearance6",
				type: "appearance",
				title: "Haarausfall und dünneres Haar",
				summary:
					"85 Prozent der Raucher zeigen Anzeichen von Haarausfall – doppelt so viele wie Nichtraucher. Rauchen verdoppelt das Risiko für männliche Glatzenbildung.",
				details: [
					"Rauchen verursacht Haarausfall durch drei Hauptmechanismen. Erstens führt Nikotin durch die Verengung der Blutgefäße zu einer verminderten Durchblutung der Kopfhaut. Die Haarfollikel erhalten weniger Sauerstoff und Nährstoffe und werden geschwächt. Zweitens erzeugt das Rauchen massive Mengen freier Radikale, die den Haarfollikelzellen oxidativen Stress zufügen und deren DNA beschädigen. Dies führt zu vorzeitiger Zellalterung und kann den Haarfollikel zum Absterben bringen. Drittens beeinflusst Nikotin den Hormonhaushalt: Bei Männern kann es die Umwandlung von Testosteron in DHT (Dihydrotestosteron) fördern, was den erblich bedingten Haarausfall dramatisch beschleunigt. Bei Frauen führt Rauchen zu einem relativen Östrogenmangel, der zu diffusem Haarausfall führt. Studien zeigen: 85 Prozent der Raucher im Alter von 20-35 Jahren zeigen Anzeichen von Haarausfall, bei Nichtrauchern sind es nur 40 Prozent. Bei Männern, die mehr als 20 Zigaretten pro Tag rauchen, ist das Risiko für mittelschweren bis schweren Haarausfall 2,34-fach erhöht.",
					"Nach einem Rauchstopp kann sich das Haarwachstum wieder normalisieren. Die verbesserte Durchblutung der Kopfhaut führt dazu, dass die Haarfollikel wieder besser versorgt werden. Nach wenigen Wochen bemerken Ex-Raucher, dass der Haarausfall nachlässt. Nach zwei bis drei Monaten stabilisiert sich der Haarwuchs. Die neuen Haare sind kräftiger und dicker, da die Nährstoffversorgung wieder optimal ist. Bei männlichem Haarausfall kann ein Rauchstopp verhindern, dass die Glatzenbildung weiter fortschreitet – ist das Muster aber bereits weit fortgeschritten, kann nur ein Rauchstopp die weitere Verschlimmerung verhindern. Der psychologische Effekt ist oft enorm: Viele Raucher bemerken bereits nach wenigen Monaten, dass ihre Haare wieder kräftiger und glänzender werden.",
				],
				sources: [
					{
						name: "AS Clinic – Haarausfall durch Rauchen",
						url: "https://asclinic.de/haarausfall-durch-rauchen/",
					},
					{
						name: "Cosmedica – Kann Haarausfall durch Rauchen verursacht werden?",
						url: "https://cosmedica.com/de/haarausfall-durch-rauchen/",
					},
					{
						name: "Hairsystems Heydecke – Wie Rauchen kreisrunden Haarausfall fördert",
						url: "https://blog.hairsystems-heydecke.de/der-einfluss-von-rauchen-auf-kreisrunden-haarausfall/",
					},
				],
			},
		],
	},

	family: {
		title: "Familie",
		summary: "Ihre Familie leidet unter Ihrem Rauch",
		knowledge: [
			{
				id: "family1",
				type: "family",
				title: "Deine Kinder werden Passivraucher",
				summary:
					"Ein Kind in einem verrauchten Raum atmet pro Stunde so viele Schadstoffe ein, als würde es selbst eine Zigarette rauchen. 7% aller Kinder unter 6 Jahren sind zu Hause Passivrauch ausgesetzt.",
				details: [
					"Wenn Sie in Gegenwart Ihrer Kinder rauchen, zwingen Sie sie involuntär, mit Ihnen Zigaretten zu rauchen. Der Körper eines Kindes befindet sich noch in der Entwicklung – alle Organe, besonders die Lunge, können durch die Giftstoffe des Tabakrauchs schnell schwer geschädigt werden. Kinder atmen schneller als Erwachsene, ihr Körpergewicht ist geringer, und ihr körpereigenes Entgiftungssystem ist noch nicht vollständig ausgebildet. Dies bedeutet: Ein Kind in einem verrauchten Raum atmet pro Stunde so viele Schadstoffe ein, als würde es selbst eine ganze Zigarette rauchen. Diese intensive Belastung hat langfristige Folgen. Die Schadstoffe setzen sich nicht nur in der Luft ab – sie lagern sich auch in Tapeten, Teppichen, Vorhängen und Möbeln ein und werden ständig wieder aufgewirbelt, selbst wenn Sie intensiv lüften. Im Auto ist die Konzentration der Schadstoffe besonders hoch, da dort der Raum klein ist und die Luft schnell gesättigt wird.",
					"Kinder aus Raucherhaushalten werden deutlich häufiger krank: Sie leiden öfter an Mittelohrentzündungen, Bronchitis, Lungenentzündung, Asthma und allergischen Erkrankungen. Zusätzlich haben sie ein zwei- bis vierfach erhöhtes Risiko für plötzlichen Kindstod (SIDS). Besonders erschreckend: Das Risiko für Krebs ist bei Kindern von Rauchern erhöht – unabhängig davon, ob die Kinder später selbst rauchen oder nicht. Kinder von rauchenden Eltern haben ein dreifach erhöhtes Risiko für Nasenkrebs. Ein Rauchstopp schützt Ihre Kinder sofort vor diesen Gefahren und gibt ihnen eine rauchfreie Kindheit, in der sie gesünder aufwachsen können.",
				],
				sources: [
					{
						name: "Apotheken Umschau – Passivrauchen schadet Babys, Kindern",
						url: "https://www.apotheken-umschau.de/familie/kindergesundheit/so-gefaehrlich-ist-passivrauchen-fuer-kinder-792111.html",
					},
					{
						name: "Kindergesundheit-Info – Passivrauchen ein hohes Risiko",
						url: "https://www.kindergesundheit-info.de/themen/risiken-vorbeugen/passivrauchen/risiko-passivrauchen/",
					},
					{
						name: "NetDoktor – Lüften reicht nicht: So schadet Passivrauch",
						url: "https://www.netdoktor.de/news/lueften-reicht-nicht-so-schadet-passivrauch-dem-kind/",
					},
				],
			},
			{
				id: "family2",
				type: "family",
				title:
					"Rauchen in der Schwangerschaft schädigt das Ungeborene dauerhaft",
				summary:
					"Rauchen in der Schwangerschaft verdoppelt das Fehlgeburtsrisiko, erhöht das Totgeburtsrisiko um 37% und das Risiko für Wachstumsstörungen um 127%.",
				details: [
					"Jede Zigarette, die Sie während der Schwangerschaft rauchen, schadet Ihrem Baby direkt. Das Ungeborene ist über die Nabelschnur direkt mit Ihrem Blutkreislauf verbunden – und die Nabelschnur filtert nicht zwischen guten und schlechten Stoffen. Das bedeutet: Nikotin, Kohlenmonoxid und über 5.000 weitere Giftstoffe gelangen direkt zu Ihrem Baby und beeinträchtigen dessen Entwicklung. Nikotin verengt die Blutgefäße und reduziert die Durchblutung der Plazenta, wodurch das Ungeborene weniger Sauerstoff und Nährstoffe erhält. Kohlenmonoxid reduziert zusätzlich die Fähigkeit des Blutes, Sauerstoff zu transportieren. Diese Kombination führt zu einer chronischen Unterversorgung des Fetus, die sein Wachstum beeinträchtigt.",
					"Eine kanadische Studie, die 9,1 Millionen Geburten analysierte, zeigte alarmierende Ergebnisse: Bei Raucherinnen war das Frühgeburtsrisiko um 39% erhöht, das Totgeburtsrisiko um 37% höher, und das Risiko für Wachstumsstörungen sogar um 127% erhöht. Babys von rauchenden Müttern werden durchschnittlich 200 Gramm leichter geboren – bei starken Raucherinnen können es bis zu 500 Gramm sein. Die Folgen für das Baby sind langfristig: Erhöhtes Risiko für plötzlichen Kindstod (7-fach bei starken Raucherinnen), Entwicklungsstörungen, Verhaltensauffälligkeiten, geistige Beeinträchtigungen und ein fast doppelt so hohes Risiko für ADHS. Einige Neugeborene zeigen sogar Entzugserscheinungen. Auch später im Leben leiden diese Kinder häufiger an Übergewicht, Diabetes und anderen Stoffwechselerkrankungen. Die gute Nachricht: Ein Rauchstopp in der Schwangerschaft ist nie zu spät – selbst wenn Sie erst im dritten Trimester aufhören, verbessert sich die Sauerstoffzufuhr zum Baby sofort.",
				],
				sources: [
					{
						name: "NichtraucherHelden – Rauchen in der Schwangerschaft: Folgen für das Baby",
						url: "https://www.nichtraucherhelden.de/magazine/rauchen-in-der-schwangerschaft-schadet-das-meinem-kind-9",
					},
					{
						name: "Frauenärzte im Netz – Rauchen in der Schwangerschaft und seine Folgen",
						url: "https://www.frauenaerzte-im-netz.de/aktuelles/meldung/rauchen-in-der-schwangerschaft-und-seine-folgen/",
					},
					{
						name: "Apotheken Umschau – Rauchen in der Schwangerschaft",
						url: "https://www.apotheken-umschau.de/familie/kindergesundheit/so-gefaehrlich-ist-passivrauchen-fuer-kinder-792111.html",
					},
				],
			},
			{
				id: "family3",
				type: "family",
				title:
					"Passivrauchen in der Schwangerschaft erhöht das Fehlgeburtsrisiko dramatisch",
				summary:
					"Frauen, die während der Schwangerschaft Passivrauch ausgesetzt sind, haben ein 44% höheres Risiko für Fehlgeburten und Totgeburten.",
				details: [
					'Nicht nur das aktive Rauchen in der Schwangerschaft ist gefährlich – auch der Passivrauch, dem Sie ausgesetzt sind, schadet Ihrem ungeborenen Kind erheblich. Eine große US-amerikanische Studie analysierte Daten von über 80.000 Frauen und kam zu erschreckenden Ergebnissen: Frauen, die nie selbst geraucht haben, aber während ihrer Schwangerschaft mindestens zehn Jahre lang Passivrauch ausgesetzt waren, hatten ein um 55% erhöhtes Risiko für Totgeburten und ein um 17% erhöhtes Risiko für Fehlgeburten. Das Risiko für eine Eileiterschwangerschaft war sogar um 61% erhöht. Wenn der werdende Vater raucht, bedeutet dies für die schwangere Partnerin chronische Passivrauchbelastung. Der Rauch und die Schadstoffe lagern sich in Möbeln, Vorhängen, Kleidung und auch im Auto ab – das nennt sich "Third Hand Smoke". Selbst intensives Lüften reicht nicht aus, um diese Schadstoffe zu entfernen.',
					"Die gute Nachricht: Forschungen zeigen, dass Rauchverbote in öffentlichen Räumen messbar die Frühgeburtenrate senken. Eine belgische Studie konnte nachweisen, dass pro tausend Geburten etwa sechs Frühgeburten durch Rauchverbote verhindert werden. Dies zeigt, wie wirksam die Reduktion von Passivrauch ist. Der beste Schutz für Ihr Baby: Weder Sie noch der werdende Vater sollten während und nach der Schwangerschaft rauchen. Ein gemeinsamer Rauchstopp als Paar schützt Ihre Beziehung und vor allem Ihr Baby. Idealerweise sollten Sie beide bereits beim Planen einer Schwangerschaft mit dem Rauchen aufhören – so kann sich Ihr Körper vor dem Eintritt der Schwangerschaft bereits regenerieren.",
				],
				sources: [
					{
						name: "Apotheke Adhoc – Passivrauchen erhöht Fehlgeburtsrisiko signifikant",
						url: "https://www.apotheke-adhoc.de/nachrichten/detail/pharmazie/passivrauchen-erhoeht-fehlgeburtsrisiko-signifikant/",
					},
					{
						name: "Kindergesundheit-Info – Passivrauchen ein hohes Risiko",
						url: "https://www.kindergesundheit-info.de/themen/risiken-vorbeugen/passivrauchen/risiko-passivrauchen/",
					},
					{
						name: "Apotheken Umschau – Passivrauchen bei Schwangerschaft",
						url: "https://www.apotheken-umschau.de/familie/kindergesundheit/so-gefaehrlich-ist-passivrauchen-fuer-kinder-792111.html",
					},
				],
			},
			{
				id: "family4",
				type: "family",
				title: "Rauchen reduziert Ihre Fruchtbarkeit und die Ihres Partners",
				summary:
					"Rauchende Frauen haben weniger Eizellen, rauchende Männer zeigen Spermien-DNA-Schäden. Das Risiko für Unfruchtbarkeit ist deutlich erhöht.",
				details: [
					"Wenn Sie mit dem Gedanken spielen, eine Familie zu gründen, sollten Sie und Ihr Partner wissen: Rauchen ist ein großer Fruchtbarkeitskiller. Bei Frauen, die rauchen, wird die Anzahl der Eizellen (die ovarielle Reserve) deutlich schneller aufgebraucht. Nikotin und andere Giftstoffe beschleunigen den natürlichen Verlust von Eizellen und beschädigen die DNA bestehender Eizellen. Dies führt zu genetischen Anomalien und macht es schwerer, schwanger zu werden. Raucherinnen haben ein höheres Risiko für hormonelle Störungen, die den Eisprung beeinträchtigen. Auch die Gebärmutter wird durch reduzierte Blutversorgung beeinträchtigt – dies erschwert die Einnistung des Embryos und erhöht das Fehlgeburtsrisiko. Rauchende Frauen, die sich einer Fertilitätsbehandlung unterziehen, sprechen schlechter auf die Behandlung an.",
					"Bei Männern ist die Situation nicht besser: Rauchende Männer zeigen eine verringerte Spermienanzahl und verminderte Spermienbegelung. Noch besorgniserregender ist, dass die DNA der Spermien bei Rauchern massiven Schäden aufweist – ein Faktor, der nicht nur die Befruchtung erschwert, sondern auch zu Missbildungen beim Embryo führen kann. Die Proteinzusammensetzung der Spermien deutet darauf hin, dass Zigarettenrauch Entzündungsreaktionen im männlichen Fortpflanzungstrakt auslöst. Paare mit Kinderwunsch – besonders auch Männer, die Vater werden wollen – sollten daher nicht nur den Rauchstopp anstreben, sondern dies als gemeinsames Familienprojekt betrachten. Nach einem Rauchstopp verbessert sich die Spermienqualität innerhalb von 2-3 Monaten messbar, und die Eizellqualität bei Frauen normalisiert sich langsam wieder.",
				],
				sources: [
					{
						name: "Lungenärzte im Netz – Bei Kinderwunsch unbedingt mit dem Rauchen aufhören",
						url: "https://www.lungenaerzte-im-netz.de/ratgeber-archiv/meldung/bei-kinderwunsch-unbedingt-mit-dem-rauchen-aufhoeren/",
					},
					{
						name: "Männergesundheit – Rauchen & Fruchtbarkeit beim Mann",
						url: "https://www.maennergesundheit.info/maennergesundheit/fruchtbarkeit/rauchen.html",
					},
					{
						name: "IVF Turkey – Wie wirkt sich Rauchen auf die Fruchtbarkeit aus",
						url: "https://ivfturkey.com/de/how-does-smoking-impact-fertility-for-both-men-and-women/",
					},
				],
			},
			{
				id: "family5",
				type: "family",
				title: "Rauchen während des Stillens vergiftet Ihre Muttermilch",
				summary:
					"Nikotin und Giftstoffe gelangen in die Muttermilch und schädigen das stillende Baby. Das Stillrisiko ist erhöht, und Babys zeigen Unruhe und Koliken.",
				details: [
					"Wenn Sie glauben, dass der Rauchstopp nach der Geburt optional ist, sollten Sie wissen: Wenn Sie während des Stillens rauchen, gelangen Nikotin und andere Giftstoffe direkt in Ihre Muttermilch und damit in den Körper Ihres Babys. Das Nikotin passiert die Blut-Hirn-Schranke und beeinträchtigt die Neurentwicklung Ihres Babys. Studien zeigen, dass stillen von rauchenden Müttern für Babys problematisch ist: Sie bekommen häufiger Magenbeschwerden, Koliken, Durchfall und Schlafstörungen. Das Nikotin kann auch die Milchproduktion beeinträchtigen – rauchende Mütter produzieren oft weniger Muttermilch und das Stillen wird verkürzt, weil Babys aufgrund der giftigen Substanzen unruhig werden.",
					"Der Schadstoffgehalt in der Muttermilch von Raucherinnen ist messbar erhöht. Es wurden krebserregende Substanzen nachgewiesen, und das Baby nimmt diese regelmäßig mit jeder Mahlzeit auf. Besonders besorgniserregend ist, dass diese frühe Nikotinexposition das Suchtrisiko des Kindes erhöht – Kinder von Rauchern werden später mit größerer Wahrscheinlichkeit selbst Raucher. Ein sofortiger Rauchstopp nach der Geburt ist daher essentiell. Wenn Sie trotz Rauchstopp-Bemühungen noch nicht aufgehört haben: Rauchen Sie zumindest nicht unmittelbar vor oder während des Stillens. Idealerweise rauchen Sie mindestens 2-3 Stunden vor dem Stillen, damit der Nikotinspiegel in Ihrer Muttermilch sinkt. Das Beste für Ihr Baby: Vollständige Rauchentwöhnung.",
				],
				sources: [
					{
						name: "Apotheken Umschau – Passivrauchen schadet Babys, Kindern",
						url: "https://www.apotheken-umschau.de/familie/kindergesundheit/so-gefaehrlich-ist-passivrauchen-fuer-kinder-792111.html",
					},
					{
						name: "NichtraucherHelden – Rauchen in der Schwangerschaft",
						url: "https://www.nichtraucherhelden.de/magazine/rauchen-in-der-schwangerschaft-schadet-das-meinem-kind-9",
					},
				],
			},
			{
				id: "family6",
				type: "family",
				title: "Raucher-Eltern vererben Lungenschäden an ihre Kinder",
				summary:
					"Väter, die als Jugendliche Passivrauch ausgesetzt waren, vererben beeinträchtigte Lungenfunktion an ihre Söhne – über Generationen hinweg.",
				details: [
					"Eine erschreckende Studie der Universität Melbourne untersuchte über 46 Jahre lang Vater-Kind-Paare und kam zu einem überraschenden Ergebnis: Väter, die als Jugendliche regelmäßigem Passivrauch ausgesetzt waren (weil ihre Eltern rauchten), zeigten als Erwachsene bereits Beeinträchtigungen der Lungenfunktion. Noch besorgniserregender: Diese Lungenfunktionsstörungen wurden an ihre Söhne vererbt – die Enkel von Rauchern haben also ein erhöhtes Risiko für schlechtere Lungenentwicklung, obwohl sie selbst nie aktiv Rauch ausgesetzt waren. Dies zeigt, dass die Auswirkungen des Rauchens nicht nur den unmittelbaren Raucher betreffen, sondern über Generationen weitergegeben werden können. Es ist ein epigenetisches Phänomen – die DNA wird zwar nicht verändert, aber ihre Expression (wie Gene abgelesen werden) wird beeinflusst.",
					"Zusätzlich zeigt die Forschung, dass Kinder von rauchenden Eltern ein erhöhtes Krebsrisiko haben – unabhängig davon, ob sie selbst rauchen oder nicht. Insbesondere haben sie ein dreifach erhöhtes Risiko für Nasenkrebs. Dies bedeutet: Wenn Sie rauchen, schädigen Sie nicht nur Ihre eigenen Kinder, sondern potentiell auch Ihre Enkel. Ein Rauchstopp ist daher nicht nur eine persönliche Entscheidung – es ist eine Entscheidung für die Gesundheit aller künftigen Generationen Ihrer Familie. Der beste Schutz ist ein kompletter und dauerhafter Rauchstopp.",
				],
				sources: [
					{
						name: "Apotheken Umschau – Passivrauchen schadet Babys, Kindern",
						url: "https://www.apotheken-umschau.de/familie/kindergesundheit/so-gefaehrlich-ist-passivrauchen-fuer-kinder-792111.html",
					},
					{
						name: "Kindergesundheit-Info – Passivrauchen ein hohes Risiko",
						url: "https://www.kindergesundheit-info.de/themen/risiken-vorbeugen/passivrauchen/risiko-passivrauchen/",
					},
				],
			},
			{
				id: "family7",
				type: "family",
				title:
					"Rauchende Eltern erhöhen das Risiko, dass ihre Kinder später selbst rauchen",
				summary:
					"Kinder von Rauchern werden mit 2-3x höherer Wahrscheinlichkeit selbst Raucher. Rauchen ist das schlechteste Vorbild.",
				details: [
					'Wenn Sie rauchen, geben Sie Ihren Kindern mehr als nur Passivrauch – Sie geben ihnen eine Vorlage. Kinder lernen ihr Verhalten von ihren Eltern. Wenn Sie rauchen, signalisieren Sie Ihren Kindern, dass Rauchen normal und akzeptabel ist. Studien zeigen, dass Kinder von Rauchern mit 2- bis 3-fach höherer Wahrscheinlichkeit selbst Raucher werden als Kinder von Nichtrauchern. Dies ist ein lebenslanger Effekt: Als Erwachsene haben sie häufiger zum Glimmstängel, und wenn sie selbst Kinder bekommen, setzen sie wieder den Kreislauf fort. Zusätzlich werden Kinder, die im Mutterleib Nikotin ausgesetzt waren, mehr zum Rauchen neigen – es gibt eine subtile biologische Komponente zusätzlich zu dem sozialen Vorbild. Rauchende Eltern zeigen ihren Kindern also indirekt: "Es ist okay, Deine Gesundheit zu gefährden." Dies hat psychologische Auswirkungen auf die Resilienz und Selbstschutz-Instinkte der Kinder.',
					'Ein Rauchstopp ist das beste Vorbild, das Sie Ihren Kindern geben können. Sie zeigen ihnen: "Ich kümmere mich um meine Gesundheit" und "Meine Familie ist mir wichtiger als diese Sucht." Kinder von Ex-Rauchern, die erfolgreich aufgehört haben, lernen auch, dass Veränderung möglich ist und dass es nie zu spät ist, bessere Entscheidungen zu treffen. Dies prägt ihre Einstellung zur Gesundheit für das ganze Leben. Ein Rauchstopp ist also nicht nur ein medizinischer Akt – es ist ein tiefgreifendes pädagogisches Statement, das Ihre Beziehung zu Ihren Kindern grundlegend verbessert und ihre Zukunft schützt.',
				],
				sources: [
					{
						name: "NichtraucherHelden – Rauchen in der Schwangerschaft",
						url: "https://www.nichtraucherhelden.de/magazine/rauchen-in-der-schwangerschaft-schadet-das-meinem-kind-9",
					},
					{
						name: "Apotheken Umschau – Passivrauchen schadet Babys, Kindern",
						url: "https://www.apotheken-umschau.de/familie/kindergesundheit/so-gefaehrlich-ist-passivrauchen-fuer-kinder-792111.html",
					},
				],
			},
		],
	},
	psychology: {
		title: "Psychologie",
		summary: "Rauchen beeinflusst deine Psyche",
		knowledge: [
			{
				id: "psychology1",
				type: "psychology",
				title: "Nikotin und Belohnung",
				summary:
					"Nikotin kann entspannen und kurzzeitig aktivieren, führt aber oft schnell zu einer langfristigen Abhängigkeit.",
				details: [
					"Beim Rauchen werden im Gehirn Dopamin, Serotonin und Adrenalin ausgeschüttet. Viele Menschen berichten daher von einem angenehmen Gefühl, Entspannung oder erhöhter Wachheit und Konzentration nach einer Zigarette. Besonders anfangs wird das Rauchverhalten durch diese positiven Empfindungen und das Gefühl von Wohlbefinden verstärkt.",
					"Mit der Zeit gewöhnt sich das Gehirn an das Nikotin und braucht immer wieder Nachschub, um den Zustand von Entspannung oder Konzentration zu erhalten. Die psychische und körperliche Abhängigkeit entsteht meist schnell – Raucherinnen und Raucher bemerken, dass sie ohne Zigarette einfach nicht mehr 'normal' funktionieren. Ein Rauchstopp kann einige Entzugserscheinungen auslösen, aber langfristig profitieren Ex-Raucher von mehr Energie, besserer Stimmung und weniger Stress[97][229].",
				],
				sources: [
					{
						name: "AOK – Nikotin und seine Wirkung auf Gehirn und Körper",
						url: "https://www.aok.de/pk/magazin/koerper-psyche/sucht/nikotin-und-seine-wirkung-auf-gehirn-und-koerper/",
					},
					{
						name: "Stiftung Gesundheitswissen – Rauchen: Wann spricht man von Abhängigkeit?",
						url: "https://www.stiftung-gesundheitswissen.de/rauchen/allgemeines",
					},
				],
			},
			{
				id: "psychology2",
				type: "psychology",
				title: "Psychische Gesundheit",
				summary:
					"Viele Studien zeigen: Mit dem Rauchstopp bessert sich die Stimmung, Ängste und Depressionen nehmen ab.",
				details: [
					"Entgegen der Befürchtungen sorgt der Rauchstopp oft für eine bessere psychische Gesundheit – sogar bei Menschen mit bestehenden Depressionen oder Angstzuständen. Forschungen und Cochrane-Analysen zeigen: Nach sechs Wochen Rauchstopp sinken Stresslevel und depressive Symptome meist leicht bis mäßig, die Lebensqualität steigt. Auch die Angst vor Einsamkeit nach dem Rauchstopp ist unbegründet – Raucher erleben häufig sogar ein verbessertes Sozialleben und ausgeglichene Stimmung.",
					"Der Gewinn ist nicht nur körperlich, sondern auch seelisch spürbar. Menschen, die mit dem Rauchen aufhören, berichten von einer allgemein positiveren Sicht auf das Leben, mehr innerer Ruhe und größerer Belastbarkeit gegenüber Stress. Die psychische Stabilität nach dem Rauchstopp ist wissenschaftlich gut belegt[228][227][225].",
				],
				sources: [
					{
						name: "Spektrum – Tabak und Psyche: Nichtrauchen macht glücklich",
						url: "https://www.spektrum.de/news/tabak-und-psyche-nichtrauchen-macht-gluecklich/1845544",
					},
					{
						name: "MDR Wissen – Überblicksstudie Rauchen: Glücklich sind die, die aufhören",
						url: "https://www.mdr.de/wissen/glueck-rauchen-zigaretten-zusammenhang-100.html",
					},
					{
						name: "Strike-Journal – Psychologische Aspekte des Rauchens",
						url: "https://strike-journal.de/psychologischen-aspekte/",
					},
				],
			},
			{
				id: "psychology3",
				type: "psychology",
				title: "Gruppenzwang",
				summary:
					"Rauchen kann Zugehörigkeitsgefühl stärken, aber auch durch Gruppenzwang entstehen – besonders bei Jugendlichen.",
				details: [
					"Gerade für Jugendliche und junge Erwachsene spielt Gruppenzwang eine große Rolle beim Rauchanfang. Das Gefühl, zu einer Gruppe zu gehören, 'cool' oder erwachsen zu sein, kann das Rauchverhalten verstärken. Positive Gefühle der Zugehörigkeit spielen oft am Anfang des Rauchens eine psychologisch motivierende Rolle.",
					"Langfristig hilft eine bewusst getroffene Entscheidung gegen Gruppenzwang und für die eigene Gesundheit, Selbstbewusstsein und Eigenständigkeit zu stärken. Ein Rauchstopp wird oft auch als persönlicher Entwicklungsschritt und als Beweis für die Überwindung sozialer Hürden empfunden. Das stärkt Selbstvertrauen und die Beziehung zu anderen[224][216].",
				],
				sources: [
					{
						name: "Psychologische Strategien in der Behandlung der Tabakabhängigkeit (PDF)",
						url: "https://rauchfrei.at/wp-content/uploads/psychologische-strategien-in-der-behandlung-der-tabakabhaengigkeit.pdf",
					},
					{
						name: "Pneumologie Schlesinger – Peergroups und Rauchverhalten",
						url: "https://www.pneumologie-schlesinger.de/der-einfluss-der-peergroup-auf-das-rauchverhalten-von-jugendlichen",
					},
				],
			},
			{
				id: "psychology4",
				type: "psychology",
				title: "Familie & Freunde",
				summary:
					"Rauchen und Rauchstopp beeinflussen familiäre Beziehungen – aber Unterstützung erleichtert das Aufhören.",
				details: [
					"Rauchen kann in Beziehungen zu Konflikten führen, etwa durch Passivrauch, Sorgen um die Gesundheit und finanzielle Belastung. Positiv wirken sich hingegen offene Gespräche und gegenseitige Unterstützung bei einem Rauchstopp aus.",
					"Familie und Freunde können eine wichtige Hilfe sein: Gemeinsames Aufhören stärkt die Bindung, schafft neue Rituale und hilft gegen Rückfälle. Studien zeigen, dass soziale Unterstützung meist den entscheidenden Unterschied beim erfolgreichen Rauchstopp macht. Offenheit, Mitgefühl und Zusammenhalt sind dafür wichtige Schutzfaktoren – für ein rauchfreieres und verbundenes Miteinander.",
				],
				sources: [
					{
						name: "NichtraucherHelden Podcast – Rolle der Psyche beim Rauchstopp",
						url: "https://www.nichtraucherhelden.de/podcast/folge-19-welche-rolle-spielt-die-psyche-beim-rauchstopp-20",
					},
					{
						name: "MDR Wissen – Überblicksstudie Rauchen: Glücklich sind die, die aufhören",
						url: "https://www.mdr.de/wissen/glueck-rauchen-zigaretten-zusammenhang-100.html",
					},
				],
			},
		],
	},
};
