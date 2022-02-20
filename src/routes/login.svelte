<script lang="ts">
	import {
		createUserWithEmailAndPassword,
		getRedirectResult,
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

<section style="background-color: rgba(255, 182, 193, 0.2);">
	<a href="/" class="container-fluid text-decoration-none">
		<h1 class="text-black">Balancr</h1>
	</a>
	<div class="container py-5 h-100">
		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-xl-10">
				<div class="card rounded-3 text-black">
					<div class="row g-0">
						<div class="col-lg-6">
							<div class="card-body p-md-5 mx-md-4">
								<h4 class="mt-1 mb-5 pb-1">Sign into Account</h4>
							</div>
							<form>
								<p>or use email account</p>
								<div class="form-outline mb-4">
									<input
										type="email"
										id="form2Example11"
										class="form-control"
										placeholder="Phone number or email address"
									/>
									<label class="form-label" for="form2Example11">Email</label>
								</div>
								<div class="form-outline mb-4">
									<input type="password" id="form2Example22" class="form-control" />
									<label class="form-label" for="form2Example22">Password</label>
								</div>

								<div class="d-flex align-items-center justify-content-center pb-4">
									<p class="mb-0 me-2">Don't have an account?</p>
									<button type="button" class="btn btn-outline-danger">Sign Up</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
