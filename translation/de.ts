import { CheckInSmokedReasons } from "@/config/checkin";

export default {
	common: {
		appName: "SmoQui",
		next: "Weiter",
		previous: "Zurück",
		confirm: "Bestätigen",
		cancel: "Abbrechen",
		skip: "Überspringen",
		name: "Name",
		terms: "Nutzungsbedingungen",
		or: "Oder",
	},
	tabs: {
		home: "Home",
		settings: "Einstellungen",
	},
	onboarding: {
		personalData: {
			title: "Wie möchtest Du genannt werden?",
		},
		goodHands: {
			title: "So werde ich Dir helfen, {{name}}",
			description1:
				"Tägliche Check-Ins zum Reflektieren deiner Gefühle und Motivationen",
			description2: "Verfolgung was mit deinem Körper passiert",
			description3: "Herausforderungen und Ziele, um motiviert zu bleiben",
		},
		yearsSmoking: {
			title: "Wie lange rauchst Du schon?",
			label: "Jahre Rauchen",
		},
		price: {
			title: "Wie viel Kostet eine Schachtel Zigaretten?",
			amountLabel: "Betrag",
			currencyLabel: "Währung",
			currencySheetTitle: "Währung wählen",
			currencyPlaceholder: "Auswählen",
		},
		numberPerDay: {
			title: "Wie viele Zigaretten rauchst Du pro Tag?",
			label: "Anzahl Zigaretten pro Tag",
		},
		motivation: {
			title: "Was ist dein Motivator?",
			description:
				"Warum möchtest Du mit dem Rauchen aufhören? Wähle die Motivation aus, welche am besten auf dich zutrifft",
			selectedCount: "Bitte wähle eine Motivation",
		},
		concerns: {
			title: "Hast Du Bedenken?",
			description:
				"Zu erkennen welche Ängste und Befürchtungen dich am stärksten beeinflussen ist wichtig, um deine Motivation zum Stoppen des Rauchens zu festigen",
			hint: "Wähle bis zu drei Optionen aus, die am besten auf dich zutreffen",
			selectedCount: "Ich habe keine Bedenken",
			concernsText:
				"Auch deine Bedenken werden nicht vergessen. QuiSmo bietet Dir Werkzeuge und Ablenkungen, wenn deine Entzugserscheinungen oder Verlangen zu groß werden.",
		},
		cigarettesPerBox: {
			title: "Wie viele Zigaretten sind in einer Schachtel?",
		},
		motivationNextSteps: {
			title: "Es geht um deine Motivation!",
			description:
				"Studien zeigen, dass die Motivation für das Aufhören des Rauchens am wichtigsten ist.",
		},
		smokingBehaviourPreperation: {
			title: "Die nächsten Schritte",
			description:
				"Als nächstes werden Dir Fragen zum bisherigen Rauchverhalten gestellt. ",
			hint: "Das ist wichtig, damit ich Dir bestmöglich helfen kann. Wenn Du einverstanden bist, dann lass uns anfangen.",
		},
		concernsResult: {
			title: "Danke für deine ehrlichen Antworten!",
			description:
				"Du hast es geschafft und alle Fragen beantwortet! Du hast nun die Möglichkeit ein Abo für SmoQui abzuschließen",
			description2:
				"Du fragst Dich bestimmt, warum Du für SmoQui bezahlen solltest und hier sind die Gründe:",
			description3:
				"Mit der Bezahlung gehst Du eine finanzielle Verpflichtung ein, was deine Chancen auf die Erreichung deines Ziels erhöht",
			description4:
				"Die Kosten für die App minimal im Vergleich zu dem Geld, das Du im Lauf der Zeit an Zigratten sparen wirst",
			description5: "Diese Abos stehen zur Auswahl:",
			pricePerWeek: "{{price}} / Woche",
			pricePerYear: "{{price}} / Jahr",
			bestOffer: "Bestes Angebot!",
			subscribeButton: "SmoQui abonnieren",
			continueWithoutSubscriptionButton: "Ohne Abo fortfahren",
		},
		savings: {
			title: "Gute Nachrichten!",
			description:
				"Nicht nur, dass Du durch das Nicht-Rauchen sehr viel gesünder leben wirst. Du sparst außerdem sehr viel Geld!",
			monthlySavings: "In 30 Tagen sparst Du dir bereits",
			nextButtonText: "Das sind gute Nachrichten!",
		},
		startJourney: {
			title: "Schau Dir deine Ersparnissse an, {{name}}?",
			intro: "Das sind deine Angaben:",
			dailySavedLabel: "Jeden Tag gespartes Geld:",
			sixYearsSavedLabel: "Gepartes Geld in 6 Jahren:",
			reasonToQuitLabel:
				"Daher: Rauchen aufhören ist nicht nur sehr gesund, sondern rechnet sich auch finanziell sehr schnell",
			startJourneyLabel:
				"Wenn Du bereit bist, dann starte jetzt Deinen Weg in ein rauchfreies Leben",
			startJourneyButton: "Ich möchte mit dem Rauchen aufhören",
		},
	},
	checkIn: {
		done: "Check-In abschließen",
		introduction: {
			title: "Willkommen zu deinem ersten Check-In!",
			description:
				"Bei einem Check-In wird dein aktueller Rauchstatus, deine Gefühlslage und deine Zuversicht abgefragt. Dies dient der Selbstreflextion und Hilft Dir beim Rauchstopp",
			description2:
				"Deine Check-Ins kannst Du in deinem Kalender aufrufen und die Auswertung ansehen.",
			description3:
				"Wenn Du bereit bist, dann starte jetzt Deinen ersten Check-In",
			startButton: "Check-In starten",
		},
		smokeStatusResult: {
			yes: {
				motivation: {
					title: "Rückfälle sind normal!",
					description:
						"Das Aufhören mit dem Rauchen ist sehr schwierig, daher sind mit Rückfällen zu rechnen.",
					description2:
						"Wichtig ist nur daraus zu lernen! Das kannst Du tun, indem Du darüber reflektierst, was dazu geführt hat, dass Du wieder rauchst.",
					description3:
						"Auf der nächsten Seite hast Du die Möglichkeit Gründe für deinen Rückfall auszuwählen",
				},
				explainReason: {
					title: "Warum hast Du {{reason}} gewählt?",
					placeholder: "Weil ich...",
					skipButtonText: "Das möchte ich nicht erklären",
				},
				title: "Warum hast Du geraucht?",
				description:
					"Überlege nun warum Du einen Rückfall gehabt haben könntest. Wähle dazu einen der folgenden Gründe aus, der am besten zutrifft:",

				chooseReason: "Trage einen Grund ein",
				adjustReason: "Eigenen Grund anpassen",
				deleteReason: "Eigenen Grund löschen",
				reasons: {
					[CheckInSmokedReasons.DETOXIFICATION]: "Entzug",
					[CheckInSmokedReasons.EMOTIONAL_STRESS]: "Emotionale Belastung",
					[CheckInSmokedReasons.HABITS]: "Gewohnheiten",
					[CheckInSmokedReasons.SOCIAL_EVENTS]: "Soziale Ereignisse",
					[CheckInSmokedReasons.TOO_SECURE]: "Überschätzung",
					[CheckInSmokedReasons.OTHER]: "Anderer Grund",
					[CheckInSmokedReasons.DISTRACTION]: "Ablenkung",
					[CheckInSmokedReasons.SUPPORT]: "Unterstützung",
					[CheckInSmokedReasons.BREATHING_EXERCISES]: "Atemübungen",
					[CheckInSmokedReasons.DRUGS]: "Medikamente",
				},
			},
			no: {
				title: "Super!",
				description:
					"Du hast nicht geraucht und das ist fantastisch! Du machst den richtigen Schritt und verhinderst damit womöglich, dass weitere negative Erfahrungen passieren.",
			},
		},
		didNotSmoke: {
			congratulate: {
				title: "Herzlichen Glückwunsch!",
				description:
					"Du hast nicht geraucht und das ist absolut fantastisch! Du machst unglaubliche Fortschritte auf deinem Weg zu einem rauchfreien Leben.",
				motivation:
					"Jeder Moment, in dem Du dem Verlangen zu rauchen widerstehst, ist ein Sieg. Du baust mit jedem rauchfreien Tag Stärke und Widerstandsfähigkeit auf. Mach weiter so - Du machst das großartig!",
			},
		},
		smokeStatus: {
			title: "Hast Du geraucht?",
			sinceLastCheckInTitle: "Hast Du seit deinem letzten Check-In geraucht?",
			yesTitle: "Ja",
			noTitle: "Nein",
			yesDescription: "Ja ich habe eine oder mehrere Zigaretten geraucht",
			noDescription: "Nein ich habe keine Zigaretten geraucht",
		},
		feelings: {
			title: "Wie fühlst Du dich nun?",
			description:
				"Wähle das Emoji aus, das am besten beschreibt, wie Du dich gerade fühlst:",
			STRESSED: "Gestresst",
			HAPPY: "Glücklich",
			NEUTRAL: "Neutral",
			SAD: "Unglücklich",
			ANGRY: "Wütend",
			why: {
				title: "Warum fühlst Du dich {{feeling}}?",
				placeholder: "Weil ich...",
				skipButtonText: "Das möchte ich nicht erklären",
			},
		},
		confidence: {
			title: "Wie zuversichtlich bist Du nun?",
			description:
				"Nutze den Slider, um SmoQui zu sagen, wie zuversichtlich Du bist, dass Du bis zum nächsten Check-In nicht rauchst",
			label: "Zuversichtlichkeit",
		},
		nextCheckIn: {
			smoked: {
				title: "Gut gemacht, dass Du deinen Check-In abgeschlossen hast!",
				description:
					"Du hast einen wichtigen Schritt gemacht, indem Du über deine Reise reflektiert hast. Denke daran, dass jeder Check-In Fortschritt bedeutet, auch wenn die Dinge nicht wie geplant laufen.",
				regressionPositive:
					"Rückfälle sind ein normaler Teil des Aufhörprozesses. Das Wichtigste ist, dass Du aus jeder Erfahrung lernst und weiter vorankommst. Mach weiter - Du schaffst das!",
			},
			notSmoked: {
				title: "Herzlichen Glückwunsch zum Abschluss deines Check-Ins!",
				description:
					"Du hast deinen Check-In erfolgreich abgeschlossen und bist rauchfrei geblieben! Das ist eine großartige Leistung. Mach weiter so und denke daran, dass jeder rauchfreie Tag ein Sieg ist, den es zu feiern gilt.",
			},
		},
	},
	motivation: {
		categories: {
			health: "Meine Gesundheit",
			finance: "Finanzielle Gründe",
			family: "Mein Familie",
			freedom: "Mein Freiheit",
			pregnancy: "Eine Schwangerschaft",
			experiences: "Negative Erfahrungen",
			wellBeing: "Mein Wohlbefinden",
		},
	},
	concerns: {
		categories: {
			weightGain: "Gewichtszunahme",
			strongCravings: "Starke Sucht",
			moodChanges: "Stimmungsschwankungen",
			stress: "Stress",
			depression: "Depression",
			fomo: "Verpasste soziale Erlebnisse",
		},
		goodNews: {
			wellBeing:
				"Das Wohlbefinden wird sich durch den Rauchstopp deutlich verbessern, denn alleine das gute Gefühl die Kontrolle zu übernehmen ist unbezahlbar.",
			health:
				"Deine Gesundheit wird sich mit dem Rauchstopp sehr schnell verbessern. Dein Körper beginnt sofort mit dem Heilungsprozess.",
			finance:
				"Das Aufhören mit dem Rauchen wird dir mit jeder eingesparten Zigarette bares Geld einsparen. ",
			freedom:
				"Mit dem Start des Rauchstopps wird zwar dein Verlangen erst einmal stärker werden, jedoch wird dieses Verlangen schnell abnehmen und Du wirst dich dann Frei fühlen.",
			pregnancy:
				"Eine Schwangerschaft ist ein sehr schöner Grund um aufzuhören. Glückwunsch! Du wirst damit bei der Entwicklung deines Kindes helfen.",
			experiences:
				"Egal welche Erfahrungen Du gemacht hast: Du machst den richtigen Schritt und verhinderst damit womöglich, dass weitere negative Erfahrungen passieren.",
			family:
				"Du zeigst deiner Familie mit dem Rauchstopp wie wichtig sie für dich sind.",
		},
	},
	home: {
		greeting: {
			morning: "Guten Morgen",
			afternoon: "Guten Nachmittag",
			evening: "Guten Abend",
		},
	},
	welcome: {
		title: "Hi, ich bin SmoQui!",
		subtitle1: "Ich bin hier, um dir zu helfen, rauchfrei zu werden.",
		subtitle2: "Lass uns gemeinsam anfangen.",
		subtitle3: "Ich werde dich bei deinen nächsten Schritten unterstützen.",
		startButton: "Ich bin bereit!",
		disclaimer:
			'Wenn "Ich bin bereit!" gedrückt wird, stimmst Du unseren <strong>Nutzungsbedingungen</strong> zu',
		testLogin: {
			title: "Test-Anmeldung",
			description: "Dies ist das Anmeldeformular zum Testen der App",
			passwordPlaceholder: "Test-Passwort",
			loginButton: "Zum Testen anmelden",
			invalidCredentials: "Ungültige Anmeldedaten",
		},
	},
} as const;
