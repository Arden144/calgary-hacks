<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const res = await fetch('https://api.quotable.io/random');
		const { content, author } = await res.json();
		return {
			props: {
				content,
				author
			}
		};
	};
</script>

<script lang="ts">
	export let content: string;
	export let author: string;
</script>

<body class="bg-pink">
	<section class="py-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 mx-auto">
					<header class="text-center pb-5" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 mx-auto">
					<blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
						<div class="blockquote-custom-icon bg-primary shadow-sm">
							<i class="fa fa-quote-left text-white" />
							<p class="h2 text-white">B</p>
						</div>
						<p class="mb-0 mt-2 font-italic">
							{content}
						</p>
						<footer class="blockquote-footer pt-4 mt-4 border-top">
							{author}
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</section>
</body>
