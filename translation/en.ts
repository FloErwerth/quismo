import { CheckInSmokedReasons } from "@/config/checkin";
import type de from "@/translation/de";

type Translation<T> = T extends object
	? { [K in keyof T]: Translation<T[K]> }
	: string;

export default {
	common: {
		appName: "SmoQui",
		next: "Next",
		previous: "Previous",
		confirm: "Confirm",
		cancel: "Cancel",
		skip: "Skip",
		name: "Name",
		terms: "Terms of Service",
		or: "Or",
	},
	tabs: {
		home: "Home",
		settings: "Settings",
	},
	onboarding: {
		personalData: {
			title: "What is your name?",
		},
		goodHands: {
			title: "This is how I will help you, {{name}}",
			description1:
				"Daily check-ins to reflect on your feelings and motivations",
			description2: "Track what happens to your body",
			description3: "Challenges and goals to stay motivated",
		},
		yearsSmoking: {
			title: "How long have you been smoking?",
			label: "Years smoking",
		},
		price: {
			title: "How much does a pack of cigarettes cost?",
			amountLabel: "Amount",
			currencyLabel: "Currency",
			currencySheetTitle: "Choose currency",
			currencyPlaceholder: "Choose currency",
		},
		numberPerDay: {
			title: "How many cigarettes do you smoke per day?",
			label: "Number of cigarettes per day",
		},
		motivation: {
			title: "What is your motivation?",
			description:
				"Why do you want to quit smoking? Choose the motivation that best applies to you",
			selectedCount: "Please select a motivation",
		},
		concerns: {
			title: "Do you have concerns?",
			description:
				"Recognizing which fears and concerns affect you most is important to strengthen your motivation to stop smoking",
			hint: "Select up to three options that best apply to you",
			selectedCount: "I have no concerns",
			concernsText:
				"Your concerns will not be forgotten. QuiSmo offers you tools and distractions when your withdrawal symptoms or cravings become too strong.",
		},
		cigarettesPerBox: {
			title: "How many cigarettes are in a pack?",
		},
		motivationNextSteps: {
			title: "It's about your motivation!",
			description:
				"Studies show that motivation is the most important factor for quitting smoking.",
		},
		smokingBehaviourPreperation: {
			title: "The next steps",
			description:
				"Next, you will be asked questions about your previous smoking behavior. ",
			hint: "This is important so I can help you as best as possible. If you agree, let's get started.",
		},
		concernsResult: {
			title: "Thank you for your honest answers!",
			description:
				"You've made it and answered all the questions! You now have the option to subscribe to SmoQui",
			description2:
				"You're probably wondering why you should pay for SmoQui, and here are the reasons:",
			description3:
				"By paying, you make a financial commitment, which increases your chances of achieving your goal",
			description4:
				"The cost of the app is minimal compared to the money you will save on cigarettes over time",
			description5: "These subscriptions are available:",
			pricePerWeek: "{{price}} / week",
			pricePerYear: "{{price}} / year",
			bestOffer: "Best offer!",
			subscribeButton: "Subscribe to SmoQui",
			continueWithoutSubscriptionButton: "Continue without subscription",
		},
		savings: {
			title: "Good news!",
			description:
				"Not only will you live much healthier by not smoking. You will also save a lot of money!",
			monthlySavings: "In 30 days you will already save",
			nextButtonText: "That's good news!",
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
	checkIn: {
		done: "Complete check-in",
		introduction: {
			title: "Welcome to your first check-in!",
			description:
				"During a check-in, your current smoking status, feelings, and confidence are asked. This serves self-reflection and helps you quit smoking",
			description2:
				"You can access your check-ins in your calendar and view the evaluation.",
			description3: "If you are ready, start your first check-in now",
			startButton: "Start check-in",
		},
		smokeStatusResult: {
			yes: {
				motivation: {
					title: "Relapses are normal!",
					description:
						"Quitting smoking is very difficult, so relapses are to be expected.",
					description2:
						"The important thing is to learn from it! You can do this by reflecting on what led you to smoke again.",
					description3:
						"On the next page you have the option to select reasons for your relapse",
				},
				explainReason: {
					title: "Why did you choose {{reason}}?",
					placeholder: "Because I...",
					skipButtonText: "I don't want to explain this",
				},
				title: "Why did you smoke?",
				description:
					"Now think about why you might have had a relapse. Choose one of the following reasons that best applies:",
				chooseReason: "Enter a reason",
				adjustReason: "Adjust own reason",
				deleteReason: "Delete own reason",
				reasons: {
					[CheckInSmokedReasons.DETOXIFICATION]: "Detoxification",
					[CheckInSmokedReasons.EMOTIONAL_STRESS]: "Emotional stress",
					[CheckInSmokedReasons.HABITS]: "Habits",
					[CheckInSmokedReasons.SOCIAL_EVENTS]: "Social events",
					[CheckInSmokedReasons.TOO_SECURE]: "Overconfidence",
					[CheckInSmokedReasons.OTHER]: "Other reason",
					[CheckInSmokedReasons.DISTRACTION]: "Distraction",
					[CheckInSmokedReasons.SUPPORT]: "Support",
					[CheckInSmokedReasons.BREATHING_EXERCISES]: "Breathing exercises",
					[CheckInSmokedReasons.DRUGS]: "Medication",
				},
			},
			no: {
				title: "Great!",
				description:
					"You didn't smoke and that's fantastic! You're taking the right step and may be preventing further negative experiences from happening.",
			},
		},
		didNotSmoke: {
			congratulate: {
				title: "Congratulations!",
				description:
					"You didn't smoke and that's absolutely fantastic! You're making incredible progress on your journey to a smoke-free life.",
				motivation:
					"Every moment you resist the urge to smoke is a victory. You're building strength and resilience with each smoke-free day. Keep up this amazing work - you're doing great!",
			},
		},
		smokeStatus: {
			title: "Did you smoke?",
			sinceLastCheckInTitle: "Did you smoke since your last check-in?",
			yesTitle: "Yes",
			noTitle: "No",
			yesDescription: "Yes I smoked one or more cigarettes",
			noDescription: "No I did not smoke any cigarettes",
		},
		feelings: {
			title: "How are you feeling?",
			description:
				"Select the emoji that best describes how you're feeling right now:",
			STRESSED: "Stressed",
			HAPPY: "Happy",
			NEUTRAL: "Neutral",
			SAD: "Sad",
			ANGRY: "Angry",
			why: {
				title: "Why do you feel {{feeling}}?",
				placeholder: "Because I...",
				skipButtonText: "I don't want to explain this",
			},
		},
		confidence: {
			title: "How confident are you that you won't smoke today?",
			description:
				"Use the slider to tell SmoQui how confident you are that you won't smoke today:",
			label: "Confidence",
		},
		nextCheckIn: {
			smoked: {
				title: "Well done on completing your check-in!",
				description:
					"You've taken an important step by reflecting on your journey. Remember, every check-in is progress, even when things don't go as planned.",
				regressionPositive:
					"Relapses are a normal part of the quitting process. What matters most is that you're learning from each experience and continuing to move forward. Keep going - you've got this!",
			},
			notSmoked: {
				title: "Congratulations on completing your check-in!",
				description:
					"You've successfully completed your check-in and stayed smoke-free! That's an amazing achievement. Keep up the great work and remember that every smoke-free day is a victory worth celebrating.",
			},
		},
	},
	motivation: {
		categories: {
			health: "My health",
			finance: "Financial reasons",
			family: "My family",
			freedom: "My freedom",
			pregnancy: "A pregnancy",
			experiences: "Negative experiences",
			wellBeing: "My well-being",
		},
	},
	concerns: {
		categories: {
			weightGain: "Weight gain",
			strongCravings: "Strong addiction",
			moodChanges: "Mood swings",
			stress: "Stress",
			depression: "Depression",
			fomo: "Missing social experiences",
		},
		goodNews: {
			wellBeing:
				"Your well-being will improve significantly by quitting smoking, as the good feeling of taking control is priceless.",
			health:
				"Your health will improve very quickly after quitting smoking. Your body begins the healing process immediately.",
			finance:
				"Quitting smoking will save you real money with every cigarette you don't smoke.",
			freedom:
				"With the start of quitting smoking, your cravings will initially become stronger, but this craving will quickly decrease and you will feel free.",
			pregnancy:
				"Pregnancy is a very good reason to quit. Congratulations! You will help with your child's development.",
			experiences:
				"No matter what experiences you've had: you're taking the right step and may prevent further negative experiences from happening.",
			family:
				"You're showing your family how important they are to you by quitting smoking.",
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
		startButton: "I'm ready!",
		disclaimer:
			'By tapping "I\'m ready!", you agree to our <strong>Terms of Service</strong>',
		testLogin: {
			title: "Test Login",
			description: "This is the login sheet for testing the app",
			passwordPlaceholder: "Test Password",
			loginButton: "Login for Testing",
			invalidCredentials: "Invalid credentials",
		},
	},
} satisfies Translation<typeof de>;
