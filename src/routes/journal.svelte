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

<textarea bind:value={content} name="journal" cols="30" rows="10" />

<button on:click={submit} type="submit">Submit</button>
