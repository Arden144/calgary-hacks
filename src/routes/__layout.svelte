<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		getRedirectResult,
		GoogleAuthProvider,
		onAuthStateChanged,
		signOut
	} from 'firebase/auth';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import '../app.scss';
	import { auth } from '../firebase';

	onMount(async () => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				goto('/login', { replaceState: true });
			}
		});

		const result = await getRedirectResult(auth);
		if (!result) return;

		GoogleAuthProvider.credentialFromResult(result);
	});

	const onSignOut = async () => {
		await signOut(auth);
	};

	let navbar = false;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-primary" style="background-color: #225AEA;">
	<div class="container-fluid">
		<!-- <a href="#" class="navbar-brand">s
					<img src="images/logo.svg" height="28" alt="Brandlogo">
				</a> -->
		<div class="navbar-nav">
			<a href="/" class="container-fluid text-decoration-none ">
				<h1 class="h1 bg-primary text-white title">Balancr</h1>
			</a>
		</div>
		<button type="button" class="navbar-toggler" on:click={() => (navbar = !navbar)}>
			<span class="navbar-toggler-icon" />
		</button>
		{#if navbar}
			<div transition:slide class="navbar-collapse">
				<div class="container">
					<div class="row">
						<div class="col-4 navbar-nav ms-auto">
							<a href="/" class="nav-item nav-link text-white">Overview</a>
						</div>
						<div class="col-4 navbar-nav ms-auto">
							<a href="/quotes" class="nav-item nav-link text-white">Quotes</a>
						</div>
						<!-- <div class="col-3 navbar-nav ms-auto">
							<a href="#" class="nav-item nav-link text-white">Tasks</a>
						</div> -->
						<div class="col-4 navbar-nav ms-auto">
							<a href="#" class="nav-item nav-link text-white" on:click={onSignOut}>Sign Out</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<!-- <div class="d-flex flex-column flex-shrink-0 p-3 bg-pink" style="width: 280px;">
	<ul class="nav nav-pills flex-column mb-auto">
		<li class="nav-item">
			<a href="#" class="nav-link active" aria-current="page">
				<svg class="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
				Overview
			</a>
		</li>
		<li>
			<a href="/calendar" class="nav-link link-dark">
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
</div> -->

<slot />
