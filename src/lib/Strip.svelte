<script lang="ts">
	import { STRIP_TYPES } from '$lib/StripType';
	export let shape: [number, number];
	export let stripProportion: number;
	export let drug: string;

	const g = 10;
	let rows: boolean[][] = [];
	$: {
		let nRows = shape[0];
		let nCols = shape[1];
		let numTiles = Math.ceil(stripProportion * nCols * nRows);

		rows = [];

		for (let i = 0; i < nRows; i++) {
			let row: boolean[] = [];
			for (let j = 0; j < nCols; j++) {
				row.push(j * nRows + i < numTiles);
			}
			row = row;
			rows.push(row);
		}
		rows = rows;
	}

	$: rgba = `rgba(${STRIP_TYPES[drug].rgba.join(',')})`;
</script>

<div class="svg-container">
	<svg viewBox="-1 -1 {shape[1] * g + 2} {shape[0] * g + 2}">
		{#each rows as row, i}
			{#each row as cell, j}
				<rect
					x={j * g}
					y={i * g}
					width={g}
					height={g}
					class={cell ? 'used' : 'unused'}
					style={cell ? `fill:${rgba}` : ''}
				/>
				{#if j > 0}
					<line class="sep" x1={j * g} y1={i * g} x2={j * g} y2={(i + 1) * g} />
				{/if}
			{/each}
			{#if i > 0}
				<line class="sep" x1="0" y1={i * g} x2={shape[1] * g} y2={i * g} />
			{/if}
		{/each}
		<rect class="full-strip" x="0" y="0" width={shape[1] * g} height={shape[0] * g} />
	</svg>
</div>

<style>
	rect.unused {
		fill: white;
	}

	rect.full-strip {
		fill: rgba(0, 0, 0, 0);
		stroke: black;
		stroke-width: 0.5px;
	}

	line.sep {
		stroke: rgba(0, 0, 0, 0.5);
		stroke-width: 0.5px;
		stroke-dasharray: 1, 1;
	}

	svg {
		height: 100%;
	}

	div.svg-container {
		height: 2.5em;
	}
</style>
