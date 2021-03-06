// [difference value: [you are this to me if I am rational, you are this to me if I am irrational]]
const relationsByDiffAndRationality = [
	['identity', 'identity'],
	['quasiidentity', 'quasiidentity'], // 4
	['cooperation', 'kindred'], // 3
	['benefactor','beneficiary'], // 3, 4
	['kindred', 'cooperation'], // 2
	['beneficiary', 'benefactor'], // 2, 4
	['superego','superego'], // 2, 3
	['activity', 'activity'], // 2, 3, 4
	['contrary','contrary'], // 1
	['mirror', 'mirror'], // 1, 4
	['semidual', 'illusionary'], // 1, 3
	['supervisee', 'supervisor'], // 1, 3, 4
	['illusionary', 'semidual'], // 1, 2
	['supervisor', 'supervisee'], // 1, 2, 4
	['duality', 'duality'],	// 1, 2, 3
	['conflict','conflict']	// 1, 2, 3, 4
];

function getRelationForMe (dichotomyAbbrMe, dichotomyAbbrYou) {
	const diff
		= (dichotomyAbbrMe[0] === dichotomyAbbrYou[0] ? 0 : 8)
		+ (dichotomyAbbrMe[1] === dichotomyAbbrYou[1] ? 0 : 4)
		+ (dichotomyAbbrMe[2] === dichotomyAbbrYou[2] ? 0 : 2)
		+ (dichotomyAbbrMe[3] === dichotomyAbbrYou[3] ? 0 : 1);

	return relationsByDiffAndRationality[diff][dichotomyAbbrMe[3] == 'j' ? 1 : 0];
}

function getRelationForYou (dichotomyAbbrMe, dichotomyAbbrYou) {
	const diff
		= (dichotomyAbbrMe[0] === dichotomyAbbrYou[0] ? 0 : 8)
		+ (dichotomyAbbrMe[1] === dichotomyAbbrYou[1] ? 0 : 4)
		+ (dichotomyAbbrMe[2] === dichotomyAbbrYou[2] ? 0 : 2)
		+ (dichotomyAbbrMe[3] === dichotomyAbbrYou[3] ? 0 : 1);

	return relationsByDiffAndRationality[diff][dichotomyAbbrMe[3] == 'j' ? 0 : 1];
}

function getAllRelations () {
	const relations = {};

	for (var i = relationsByDiffAndRationality.length - 1; i >= 0; i--)	{
		relations[relationsByDiffAndRationality[i][0]] = true;
		relations[relationsByDiffAndRationality[i][1]] = true;
	}

	return Object.keys(relations);
}

module.exports = {
	getRelationForMe,
	getRelationForYou,
	getAllRelations
};
