<script lang="ts">
	import { addDoc, collection, onSnapshot } from 'firebase/firestore';
	import { onDestroy, onMount } from 'svelte';
	import { auth, store } from '../firebase';

	let content: string;

	const submit = async () => {
		if (auth.currentUser === null) return;
		await addDoc(collection(store, 'users', auth.currentUser.uid, 'journals'), {
			content,
			time: Date.now()
		});
	};

	interface Journal {
		content: string;
		time: Date;
	}

	let journals: Journal[] = [];
	let unsubscribe: () => void;

	onMount(async () => {
		if (auth.currentUser === null) return;
		unsubscribe = onSnapshot(
			collection(store, 'users', auth.currentUser.uid, 'journals'),
			(snapshot) => {
				journals = snapshot.docs.map((doc) => doc.data() as Journal);
			}
		);
	});

	onDestroy(async () => {
		unsubscribe?.();
	});
</script>

{#each journals as journal}
	<div>{journal.content}</div>
{/each}

<body class="container vh-100 bg-pink">
	<div class="mb-3">
		<div class="row">
			<label for="exampleFormControlTextarea1" class="form-label p-3"
				><p class="h5 text-center">Try to jotting down your feelings.</p>
			</label>
		</div>
		<section class="row">
			<div class="row">
				<div class="col-3" />
				<textarea
					bind:value={content}
					name="journal"
					cols="10"
					rows="5"
					class="form-control m-3 col-7"
					id="exampleFormControlTextarea1"
				/>
			</div>
			<div class="col-5" />
			<button
				on:click={submit}
				type="submit"
				class=" col-3 bg-primary text-white btn btn-primary btn-md">Submit</button
			>
		</section>
	</div>
</body>
