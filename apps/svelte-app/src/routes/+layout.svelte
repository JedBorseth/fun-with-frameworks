<script>
	import Header from './Header.svelte';
	import './styles.css';
	const date = new Date().getFullYear();
</script>

<div class="app">
	<Header />

	<main class="min-h-screen">
		<slot />
	</main>

	<footer class="bg-neutral-50 py-10 flex justify-center text-sm">
		<p>Copyright &copy; Jed Borseth {date}</p>
	</footer>
</div>
