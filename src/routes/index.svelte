<script lang="ts">
	var slider = document.getElementById('range');
	var output = document.getElementById('value');
	var outputVarNo = document.getElementById('outputVar');

	let update = () => (output.innerHTML = slider.value);

	slider.addEventListener('input', update);
	update();
</script>

<body>
	<blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
		<div class="container p-3">
			<h1 class="h3 text-center bg-pink p-3 rounded">How are you feeling today?</h1>
			<div class="content-center row">
				<div class="col-3">
					<p>Not great</p>
				</div>
				<div class=" col-6 slidecontainer p-1">
					<input type="range" min="1" max="100" value="50" class="slider" id="range" />
					Value: <span id="value" />
					Value: <span id="outputVar" />
				</div>
				<div class="col-3">
					<p>Very great</p>
				</div>
			</div>
			<div class=" col-6 text-center">
				<button class="bg-primary text-white btn btn-primary btn-md">Submit</button>
			</div>
		</div>
	</blockquote>
</body>

<style>
	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 15px;
		border-radius: 5px;
		background: #d3d3d3;
		outline: none;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #ffb6c1;
		cursor: pointer;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #ffb6c1;
		cursor: pointer;
	}
</style>
