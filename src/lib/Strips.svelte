<script lang="ts">
	import Strip from '$lib/Strip.svelte';

	export let strips: { shape: [number, number]; stripProportion: number }[];
	export let freq: number;
	export let drug: string;

	function labelDose(totalDoses: number, index: number) {
		const freqLabels = {
			1: ['daily'],
			2: ['morning', 'evening'],
			3: ['morning', 'afternoon', 'evening'],
			4: ['early morning', 'late morning', 'afternoon', 'evening']
		};
		if (!freqLabels.hasOwnProperty(totalDoses)) {
			return `dose ${index + 1}`;
		}

		const labels = freqLabels[totalDoses];
		if (index >= 0 && index < totalDoses) {
			return labels[index];
		}
	}
</script>

<div class="strips">
	{#if freq !== null && freq >= 0}
		{#each Array(freq) as _, i}
			<table class="daily-dose">
				<tr>
					<td class="dose-label">
						{labelDose(freq, i)}
					</td>
					<td class="strip-viz-container">
						{#each strips as strip}
							<Strip bind:shape={strip.shape} bind:stripProportion={strip.stripProportion} {drug} />
						{/each}
					</td>
				</tr>
			</table>
			{#if i < freq - 1}<hr />{/if}
		{/each}
	{/if}
</div>

<style>
	div.strips {
		display: flex;
		flex-direction: column;
	}

	td.dose-label {
		width: 4em;
	}

	td.strip-viz-container {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5em;
	}

	hr {
		border: 0;
		border-top: 1px dashed rgba(0, 0, 0, 0.5);
		width: 100%;
	}
</style>
