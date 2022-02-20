<script>
	import Quote from 'inspirational-quotes';
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
							{Quote.getRandomQuote()}
						</p>
						<footer class="blockquote-footer pt-4 mt-4 border-top">
							{Quote.getRandomQuote().from}
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</section>
</body>
