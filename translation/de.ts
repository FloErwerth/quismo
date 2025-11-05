export default {
	common: {
		next: "Weiter",
		previous: "Zurück",
		name: "Name",
		terms: "Nutzungsbedingungen",
		phases: {
			preperation: {
				naming: {
					short: "Phase 1",
					long: "Phase 1: Vorbereitung",
				},
			},
			smokeStop: {
				naming: {
					short: "Phase 2",
					long: "Phase 2: Rauchstopp",
				},
			},
			stabilization: {
				naming: {
					short: "Phase 3",
					long: "Phase 3: Stabilisierung",
				},
			},
		},
	},
	tabs: {
		home: "Home",
		settings: "Einstellungen",
	},
	landing: {
		headline: "Schritt für Schritt in ein rauchfreies Leben",
		expect: "Das kann QuiSmo für dich tun:",
		benefitLessStress: "Stressfreieres aufhören",
		benefitControl: "Kontrolle behalten",
		benefitHealth: "Gesundheit verbessern",
		benefitMoney: "Bares Geld sparen",
		disclaimer:
			'Wenn "Beginne deinen Weg" gedrückt wird, stimmst Du unseren <strong>Nutzungsbedingungen</strong> zu',
	},
	onboarding: {
		personalData: {
			title: "Wie möchtest Du genannt werden?",
			nameExplanation:
				"Wir verwenden diese Information, um die App persönlicher zu gestalten. Alle gesammelten Informationen werden nicht an Dritte weitergegeben.",
		},
		yearsSmoking: {
			title: "Wie lange rauchst Du schon?",
			label: "Jahre Rauchen",
			explanation: "Das hilft uns dabei die Stärke deiner Sucht einzuschätzen",
		},
		method: {
			title: "Das QuiSmo-System",
			intro1:
				"Bevor Du Informationen über dein Rauchverhalten eingibst möchten wir Dir erklären, wie das QuiSmo-System funktioniert",
			intro2: "",
			phase1: {
				p1: "In dieser Phase kannst Du deinen Fokus auf die Motivation für den Rauchstopp richten.",
				p2: "Dazu erhältst Du zum Beispiel Informationen über das Rauchen und festigst deine Motivation.",
				durationLabel: "Dauer",
				durationValue: "bis Du dich bereit fühlst",
			},
			phase2: {
				p1: "Die heiße und wichtigste Phase. Ab dann bist Du offiziell Nicht-Raucher!",
				p2: "Mache einen täglichen Check-In für dich, schaue Dir Prozesse in deinem Körper an und erhalte tägliche Tipps.",
				durationLabel: "Dauer",
				durationValue: "14 Tage",
			},
			phase3: {
				p1: "Die letzte Phase. Hier geht es um die Stabiliserung deiner neuen Gewohnheiten.",
				p2: "Du bekommst weiterhin Informationen über Prozesse in deinem Körper. Sammle deine Erfolge und komme so spielerisch zum Ziel.",
				durationLabel: "Dauer",
				durationValue: "3 Monate oder bis zu einem Rückfall",
			},
		},
		price: {
			title: "Wie viel Kostet eine Schachtel Zigaretten?",
			amountLabel: "Betrag",
			currencyLabel: "Währung",
			currencySheetTitle: "Währung wählen",
			currencyPlaceholder: "Währung wählen",
			hint: "Es reicht, wenn Du einen ungefähren Wert eingibst. Dieser Wert wird dafür verwendet, um Deine Ersparnisse zu berechnen.",
		},
		numberPerDay: {
			title: "Wie viele Zigaretten rauchst Du pro Tag?",
			label: "Anzahl Zigaretten pro Tag",
			subLabel: "Das hilft uns dabei die Stärke deiner Sucht einzuschätzen",
			severity: {
				unknown: "Unbekannt",
				low: "Geringe Sucht",
				mild: "Leichte Sucht",
				moderate: "Mittlere Sucht",
				strong: "Starke Sucht",
				veryStrong: "Sehr Starke Sucht",
			},
		},
		motivation: {
			title: "Was motiviert Dich am meisten, mit dem Rauchen aufzuhören?",
			description: "Wähle zwischen einer und vier Motivationen",
			selectedCount: "{{count}}/{{total}} ausgewählt",
		},
		startJourney: {
			title: "Bereit für dein rauchfreies Leben, {{name}}?",
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
	phases: {
		preperation: {
			questions: {
				confirm: "Auswahl bestätigen ({{count}})",
			},
			motivation: {
				categories: {
					health: "Gesundheit",
					finance: "Finanzen",
					family: "Familie",
					freedom: "Freiheit",
					pregnancy: "Schwangerschaft",
					kids: "Kinder",
					partner: "Partner",
					sex: "Sex",
					fitness: "Fitness",
					smell: "Geruch",
					taste: "Geschmack",
					disease: "Krankheit",
					experiences: "Erfahrungen",
				},
			},
		},
	},
	home: {
		greeting: {
			morning: "Guten Morgen",
			afternoon: "Guten Nachmittag",
			evening: "Guten Abend",
		},
		phasesCard: {
			preperation: {
				title: "Vorbereitung auf den Rauchstopp",
				questions: {
					title: "Deine Vorbereitungsaufgaben",
					motivation: {
						title: "Motivation",
						description: "Halte deine Motivationen fest",
					},
					analysis: {
						title: "Analyse",
						description: "Halte fest, warum du rauchen willst",
					},
					support: {
						title: "Unterstützung",
						description: "Lege deine Unterstützer fest",
					},
					alternative: {
						title: "Alternativen",
						description: "Lerne alternativen zum Rauchen kennen",
					},
				},
				doneSteps:
					"Du hast dich in {{steps}} von {{total}} Kategorien vorbereitet",
			},
		},
	},
} as const;
