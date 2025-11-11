import type de from "@/translation/de";

type Translation<T> = T extends object
	? { [K in keyof T]: Translation<T[K]> }
	: string;

export default {
	common: {
		next: "Next",
		previous: "Previous",
		name: "Name",
		terms: "Terms of Service",
	},
	tabs: {
		home: "Home",
		settings: "Settings",
	},
	landing: {
		headline: "Step by step to a smoke-free life",
		expect: "What QuiSmo can do for you:",
		benefitLessStress: "Quit with less stress",
		benefitControl: "Stay in control",
		benefitHealth: "Improve your health",
		benefitMoney: "Save real money",
		disclaimer:
			'By tapping "Start your journey", you agree to our <strong>Terms of Service</strong>',
	},
	onboarding: {
		personalData: {
			title: "What is your name?",
			nameExplanation:
				"We use this information to make the app more personal. All collected information will not be passed on to third parties.",
		},
		method: {
			title: "The QuiSmo System",
			intro1:
				"Before you enter information about your smoking behavior, we would like to explain how the QuiSmo system works.",
			intro2: "",
			phase1: {
				title: "Phase 1: Preparation",
				p1: "In this phase, you can focus on your motivation to quit.",
				p2: "You will receive information about smoking and strengthen your motivation.",
				durationLabel: "Duration",
				durationValue: "3 days or until you are ready to start",
			},
			phase2: {
				title: "Phase 2: Quit",
				p1: "The hot and most important phase. From then on you are officially a non-smoker!",
				p2: "Do a daily check-in, look at processes in your body and receive daily tips.",
				durationLabel: "Duration",
				durationValue: "14 days",
			},
			phase3: {
				title: "Phase 3: Stabilization",
				p1: "The final phase. This is about stabilizing your new habits.",
				p2: "You continue to get information about processes in your body. Collect your successes and reach your goal playfully.",
				durationLabel: "Duration",
				durationValue: "3 months or until a relapse",
			},
		},
		price: {
			title: "How much does a pack of cigarettes cost?",
			amountLabel: "Amount",
			currencyLabel: "Currency",
			currencySheetTitle: "Choose currency",
			currencyPlaceholder: "Choose currency",
			hint: "It's enough to enter an approximate value. This value is used to calculate your savings.",
		},
		numberPerDay: {
			title: "How many cigarettes do you smoke per day?",
			label: "Number of cigarettes per day",
			subLabel: "This helps us assess the strength of your addiction",
			severity: {
				unknown: "Unknown",
				low: "Low addiction",
				mild: "Mild addiction",
				moderate: "Moderate addiction",
				strong: "Strong addiction",
				veryStrong: "Very strong addiction",
			},
		},
		startJourney: {
			title: "Good news!",
			intro:
				"Your decision to quit smoking will save you a lot of money. Take a look at our calculations:",
			dailySavedLabel: "Money saved per day:",
			sixYearsSavedLabel: "Money saved in 6 years:",
			reasonToQuitLabel:
				"Therefore: Quitting smoking is not only very healthy, but also financially very quickly.",
			startJourneyLabel:
				"If you are ready, start your journey to a smoke-free life now",
			startJourneyButton: "I want to quit smoking",
		},
	},
	home: {
		greeting: {
			morning: "Good morning",
			afternoon: "Good afternoon",
			evening: "Good evening",
		},
	},
	welcome: {
		title: "Well done!",
		subtitle1:
			"You have downloaded QuiSmo and taken the most important step towards your smoke-free life",
		subtitle2:
			"By downloading and opening the app, you have taken an active step towards quitting smoking",
		subtitle3: "QuiSmo will support you in your next steps",
		description:
			"In the next steps, you will be asked about your current smoking habits and learn more about how QuiSmo supports you",
		testLogin: {
			title: "Test Login",
			description: "This is the login sheet for testing the app",
			passwordPlaceholder: "Test Password",
			loginButton: "Login for Testing",
			invalidCredentials: "Invalid credentials",
		},
	},
} satisfies Translation<typeof de>;
