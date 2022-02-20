<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		createUserWithEmailAndPassword,
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		signInWithRedirect
	} from 'firebase/auth';
	import googleLogo from '../../../static/googlelogo.png';
	import { auth } from '../../firebase';

	let email: string;
	let password: string;

	let failed = false;

	const onCreateAccount = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await goto('/');
		} catch (err) {
			failed = true;
			console.log(err);
		}
	};

	const onLogin = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			await goto('/');
		} catch (err) {
			failed = true;
			console.log(err);
		}
	};

	const onFederatedSignIn = async () => {
		const provider = new GoogleAuthProvider();
		await signInWithRedirect(auth, provider);
	};
</script>

<section style="background-color: #FFB6C1;">
	<section class="text-center text-white" style="padding: 2em;">
		<h1>Welcome to Balancr</h1>
	</section>
	<section class="vh-100 text-white" id="font">
		<div class="container-fluid h-custom">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
					<form>
						<div
							class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
						>
							<p class="lead fw-normal mb-0 me-3">Sign in with</p>
							<button
								type="button"
								class="btn btn-light btn-floating mx-1"
								on:click={onFederatedSignIn}
							>
								<img src={googleLogo} alt="Google" width="25px" />
							</button>
						</div>

						<div class="divider d-flex align-items-center my-4">
							<p class="text-centermx-3 mb-0">Or use email</p>
						</div>

						<!-- Email input -->
						<div class="form-outline mb-4">
							<input
								type="email"
								class="form-control form-control-lg"
								placeholder="Enter a valid email address"
								bind:value={email}
							/>
						</div>

						<!-- Password input -->
						<div class="form-outline mb-3">
							<input
								type="password"
								class="form-control form-control-lg"
								placeholder="Enter password"
								bind:value={password}
							/>
						</div>

						<div class="text-center text-lg-start mt-4 pt-2">
							<button
								type="button"
								class="btn btn-primary btn-lg"
								style="padding-left: 2.5rem; padding-right: 2.5rem;"
								on:click={onLogin}>Login</button
							>
							<button
								type="button"
								class="btn btn-primary btn-lg"
								style="padding-left: 2.5rem; padding-right: 2.5rem;"
								on:click={onCreateAccount}>Sign Up</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</section>
