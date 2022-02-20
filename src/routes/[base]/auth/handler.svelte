<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getRedirectResult, GoogleAuthProvider } from 'firebase/auth';
	import { auth } from '../../../firebase';

	if ($page.params.base !== '__') {
		goto('/', { replaceState: true });
	}

	if (browser) {
		(async () => {
			const result = await getRedirectResult(auth);
			if (result) {
				GoogleAuthProvider.credentialFromResult(result);
				goto('/', { replaceState: true });
			}
		})();
	}
</script>

<h1>Redirecting...</h1>
