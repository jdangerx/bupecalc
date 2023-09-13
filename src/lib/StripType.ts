class StripType {
	drugType: string;
	fullStripDose: number;
	shape: [number, number];
	formSingle: string;
	formPlural: string;
	rgba: [number, number, number, number];

	constructor(
		drugType: string,
		fullStripDose: number,
		shape: [number, number],
		rgba: [number, number, number, number] = [0, 0, 0, 0.5],
		formSingle: string = "strip",
		formPlural: string = "strips"
	) {
		this.drugType = drugType;
		this.fullStripDose = fullStripDose;
		this.shape = shape;
		this.formSingle = formSingle;
		this.formPlural = formPlural;
		this.rgba = rgba;
	}
}

const suboxoneRgb: [number, number, number] = [194, 122, 40];

export const STRIP_TYPES: { [id: string]: StripType } = {
	'suboxone 2mg': new StripType('suboxone', 2, [2, 4], [...suboxoneRgb, 0.4]),
	'suboxone 4mg': new StripType('suboxone', 4, [2, 4], [...suboxoneRgb, 0.6]),
	'suboxone 8mg': new StripType('suboxone', 8, [2, 4], [...suboxoneRgb, 0.8]),
	'subutex 2mg': new StripType('subutex', 2, [1, 2], [200, 200, 200, 1], "pill", "pills")
};

export { StripType };
