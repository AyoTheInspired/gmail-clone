import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
	const dispatch = useDispatch();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then(({ user }) => {
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<Div>
			<div className="login__container">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvGZ_nUXWaXQY1Mog1HK-Zqo4dK--bCLLtXQ&usqp=CAU"
					alt="gmail"
				/>

				<Button variant="contained" color="primary" onClick={signIn}>
					Login
				</Button>
			</div>
		</Div>
	);
}

export default Login;

const Div = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: #f2f2f2;

	.login__container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.login__container > img {
		object-fit: contain;
		height: 200px;
		width: 25vw;
	}
`;
