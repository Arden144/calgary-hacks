<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { auth } from '../firebase';

	if (browser) {
		if (auth.currentUser === null) {
			goto('/login', { replaceState: true });
		}
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-primary" style="background-color: #225AEA;">
	<div class="container-fluid">
		<!-- <a href="#" class="navbar-brand">s
					<img src="images/logo.svg" height="28" alt="Brandlogo">
				</a> -->
		<div class="navbar-nav">
			<a href="#" class="container-fluid text-decoration-none ">
				<h1 class="h1 bg-primary text-white title">Balancr</h1>
			</a>
		</div>
		<button
			type="button"
			class="navbar-toggler"
			data-bs-toggle="collapse"
			data-bs-target="#navbarCollapse"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarCollapse">
			<div class="navbar-nav ms-auto">
				<a href="#" class="nav-item nav-link text-white">Sign Out</a>
			</div>
		</div>
	</div>
</nav>

<div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
	<ul class="nav nav-pills flex-column mb-auto">
		<li class="nav-item">
			<a href="#" class="nav-link active" aria-current="page">
				<svg class="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
				Overview
			</a>
		</li>
		<li>
			<a href="#" class="nav-link link-dark">
				<svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2" /></svg>
				Calendar
			</a>
		</li>
		<li>
			<a href="#" class="nav-link link-dark">
				<svg class="bi me-2" width="16" height="16"><use xlink:href="#table" /></svg>
				Tasks
			</a>
		</li>
		<li>
			<a href="#" class="nav-link link-dark">
				<svg class="bi me-2" width="16" height="16"><use xlink:href="#grid" /></svg>
				Quotes
			</a>
		</li>
		<li>
			<a href="#" class="nav-link link-dark">
				<svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle" /></svg>
				Get Help
			</a>
		</li>
	</ul>
</div>
