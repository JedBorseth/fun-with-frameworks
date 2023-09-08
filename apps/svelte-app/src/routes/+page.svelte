<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { blur } from 'svelte/transition';

	let offset = 0;
	let oldFact: string[] = [];
	let fact = 'Click the button to get a random fact!';

	const getData = async () => {
		oldFact.unshift(fact);
		offset = 0;
		const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
		const data = await res.json();
		fact = data.text;
		console.log(oldFact);
	};
	const back = () => {
		fact = oldFact[offset];
		offset++;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="grid place-items-center">
	<picture>
		<source srcset={welcome} type="image/webp" />
		<img src={welcome_fallback} alt="Welcome" />
	</picture>

	<Counter />
	<div class="flex gap-2">
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-5"
			on:click={() => {
				getData();
			}}>Click me!</button
		>
		<button
			class="bg-red-300 text-white font-bold px-2 rounded"
			on:click={() => {
				back();
			}}>Back</button
		>
	</div>
	{#if offset > 0}
		<p class="text-center w-1/2" transition:blur={{ duration: 1000 }}>{fact}</p>
	{:else}
		<p class="text-center w-1/2">{fact}</p>
	{/if}
</section>
