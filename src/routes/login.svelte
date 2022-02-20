<script lang="ts">
	import {
		createUserWithEmailAndPassword,
		GoogleAuthProvider,
		signInWithRedirect
	} from 'firebase/auth';
	import { auth } from '../firebase';

	let email: string;
	let password: string;

	let failed = false;

	const onEmailSubmit = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			failed = true;
			console.log(err);
		}
	};

	const onFederatedSignIn = (type: string) => async () => {
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
				<div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
				<p class="lead fw-normal mb-0 me-3">Sign in with</p>
				<button type="button" class="btn btn-light btn-floating mx-1">
					<img src="static\googlelogo.png" alt="Google" width="25px">
				</button>
				</div>
	
				<div class="divider d-flex align-items-center my-4">
				<p class="text-centermx-3 mb-0">Or use email</p>
				</div>
	
				<!-- Email input -->
				<div class="form-outline mb-4">
				<input type="email" class="form-control form-control-lg"
					placeholder="Enter a valid email address" />
				</div>
	
				<!-- Password input -->
				<div class="form-outline mb-3">
				<input type="password" class="form-control form-control-lg"
					placeholder="Enter password" />
				</div>
	
				<div class="text-center text-lg-start mt-4 pt-2">
					<button type="button" class="btn btn-primary btn-lg"
					style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
					<button type="button" class="btn btn-primary btn-lg"
					style="padding-left: 2.5rem; padding-right: 2.5rem;">Sign Up</button>
				</div>
			</div>
		</div>
	</section>
</section>
