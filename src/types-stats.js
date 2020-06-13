const types = require('./types');

function outputStats () {
//	const typeCounts = {
//		'Balzac':		26 + 3,
//		'Yesenin':		18 + 3,
//		'Gabin':		17 + 3,
//		'Zhukov':		15 + 3,
//		'Don Quixote':	15 + 3,
//		'Huxley':		14 + 3,
//		'Dumas':		9 + 3,
//		'Jack London':	8 + 3,
//		'Dostoyevsky':	8 + 3,
//		'Hugo':			8 + 3,
//		'Napoleon':		6 + 3,
//		'Stierlitz':	6 + 3,
//		'Dreiser':		5 + 3,
//		'Robespierre':	5 + 3,
//		'Hamlet':		4 + 3,
//		'Maxim Gorky':	4 + 3
//	};

	// Copy-pasted from collect_types extension.
	const typeCountsGen = {"Balzaks":43,"Dimā":18,"Donkihots":29,"Dostojevskis":12,"Draizers":12,"Džeks":24,"Gabēns":28,"Hakslijs":22,"Hamlets":8,"Igo":12,"Jeseņins":26,"Maksims":8,"Napoleons":12,"Robespjērs":14,"Štirlics":13,"Žukovs":28};

	const typeCounts = {
		'Balzac': typeCountsGen['Balzaks'],
		'Yesenin': typeCountsGen['Jeseņins'],
		'Gabin': typeCountsGen['Gabēns'],
		'Zhukov': typeCountsGen['Žukovs'],
		'Don Quixote': typeCountsGen['Donkihots'],
		'Huxley': typeCountsGen['Hakslijs'],
		'Dumas': typeCountsGen['Dimā'],
		'Jack London': typeCountsGen['Džeks'],
		'Dostoyevsky': typeCountsGen['Dostojevskis'],
		'Hugo': typeCountsGen['Igo'],
		'Napoleon': typeCountsGen['Napoleons'],
		'Stierlitz': typeCountsGen['Štirlics'],
		'Dreiser': typeCountsGen['Draizers'],
		'Robespierre': typeCountsGen['Robespjērs'],
		'Hamlet': typeCountsGen['Hamlets'],
		'Maxim Gorky': typeCountsGen['Maksims']
	};

	const stats = {
		I: 0,
		E: 0,
		N: 0,
		S: 0,
		F: 0,
		T: 0,
		p: 0,
		j: 0,
		α: 0,
		β: 0,
		γ: 0,
		δ: 0,

		humanitarians: 0,
		pragmatists: 0,
		researchers: 0,
		socials: 0,

		businesslike: 0,
		coldblooded: 0,
		passionate: 0,
		sincere: 0,

		aristocrat: 0,
		democrat: 0,

		asking: 0,
		declaring: 0,

		positive: 0,
		negative: 0,

		subjective: 0,
		objective: 0,

		tactical: 0,
		strategic: 0,

		carefree: 0,
		farsighted: 0,

		judicious: 0,
		decisive: 0
	};

	Object.keys(types).forEach(type => {
		const count = typeCounts[types[type].epithet];

		stats[types[type].dichotomyAbbr[0]] += count;
		stats[types[type].dichotomyAbbr[1]] += count;
		stats[types[type].dichotomyAbbr[2]] += count;
		stats[types[type].dichotomyAbbr[3]] += count;

		stats[types[type].smallGroups.quadra] += count;
		stats[types[type].smallGroups.professionalClub] += count;
		stats[types[type].smallGroups.communicationStyle] += count;

		stats.aristocrat += types[type].dichotomies.aristocraticNotDemocratic ? count : 0;
		stats.democrat += types[type].dichotomies.aristocraticNotDemocratic ? 0 : count;

		stats.asking += types[type].dichotomies.askingNotDeclaring ? count : 0;
		stats.declaring += types[type].dichotomies.askingNotDeclaring ? 0 : count;

		stats.positive += types[type].dichotomies.positiveNotNegative ? count : 0;
		stats.negative += types[type].dichotomies.positiveNotNegative ? 0 : count;

		stats.subjective += types[type].dichotomies.subjectiveNotObjective ? count : 0;
		stats.objective += types[type].dichotomies.subjectiveNotObjective ? 0 : count;

		stats.tactical += types[type].dichotomies.tacticalNotStrategic ? count : 0;
		stats.strategic += types[type].dichotomies.tacticalNotStrategic ? 0 : count;

		stats.carefree += types[type].dichotomies.carefreeNotFarsighted ? count : 0;
		stats.farsighted += types[type].dichotomies.carefreeNotFarsighted ? 0 : count;

		stats.judicious += types[type].dichotomies.judiciousNotDecisive ? count : 0;
		stats.decisive += types[type].dichotomies.judiciousNotDecisive ? 0 : count;
	});

	const totalCount = Object.keys(typeCounts).reduce((acc, type) => acc + typeCounts[type], 0);


	// console.log(stats);

	Object.keys(stats).forEach(prop => {
		stats[prop] = (stats[prop] * 100 / totalCount).toFixed(0);
	});

	// console.log(stats);

	console.log('Ekstravertie ' + stats.E + '% : ' + stats.I + '% Introvertie');
	console.log('Intuitīvie ' + stats.N + '% : ' + stats.S + '% Sensorie');
	console.log('Loģiskie ' + stats.T + '% : ' + stats.F + '% Ētiskie');
	console.log('Iracionālie ' + stats.p + '% : ' + stats.j + '% Racionālie');
	console.log();
	console.log('α – ' + stats.α + '%, β – ' + stats.β + '%, γ – ' + stats.γ + '%, δ – ' + stats.δ + '%');
	console.log();
	console.log('Profesionālie klubi:');
	console.log('- administratori – ' + stats.pragmatists + '%,');
	console.log('- sociāļi – ' + stats.socials + '%,');
	console.log('- pētnieki – ' + stats.researchers + '%,');
	console.log('- humanitārie – ' + stats.humanitarians + '%');
	console.log();
	console.log('Komunikācijas stils:');
	console.log('- lietišķa sadarbība – ' + stats.businesslike + '%,');
	console.log('- nodod attiecību signālus – ' + stats.sincere + '%,');
	console.log('- pauž emocijas – ' + stats.passionate + '%,');
	console.log('- nodod informāciju – ' + stats.coldblooded + '%');
	console.log();
	console.log('Apdomīgie ' + stats.judicious + '% : ' + stats.decisive + '% Izlēmīgie');
	console.log('Aristokrāti ' + stats.aristocrat + '% : ' + stats.democrat + '% Demokrāti');
	console.log('Bezrūpīgie ' + stats.carefree + '% : ' + stats.farsighted + '% Piesardzīgie');
	console.log('Dialogs (jautā) ' + stats.asking + '% : ' + stats.declaring + '% Monologs (apgalvo)');
	console.log('Pozitīvisti ' + stats.positive + '% : ' + stats.negative + '% Negatīvisti');
//	console.log('Subjektīvisti ' + stats.subjective + '% : ' + stats.objective + '% Objektīvisti');
	console.log('Taktiķi ' + stats.tactical + '% : ' + stats.strategic + '% Stratēģi');
	console.log();
	console.log('Kopā: ' + totalCount);
}

function outputEphitets () {
	const ephitets = [];

	Object.keys(types).forEach(type => {
		ephitets.push(types[type].epithet);
	});

	ephitets.sort();

	ephitets.forEach(ephitet => console.log("'" + ephitet + "': 0,"));
}

//outputEphitets();
outputStats();
