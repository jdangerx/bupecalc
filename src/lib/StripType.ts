class StripType {
	drugType: string;
	fullStripDose: number;
	shape: [number, number];
	formSingle: string;
	formPlural: string;

	constructor(drugType: string, fullStripDose: number, shape: [number, number], formSingle: string = "strip", formPlural: string = "strips") {
		this.drugType = drugType;
		this.fullStripDose = fullStripDose;
		this.shape = shape;
		this.formSingle = formSingle;
		this.formPlural = formPlural;
	}
}

export const STRIP_TYPES: { [id: string]: StripType } = {
	'suboxone 2mg': new StripType('suboxone', 2, [2, 4]),
	'suboxone 4mg': new StripType('suboxone', 4, [2, 4]),
	'suboxone 8mg': new StripType('suboxone', 8, [2, 4]),
	'subutex 2mg': new StripType('subutex', 2, [1, 2], "pill", "pills")
};

export { StripType };
