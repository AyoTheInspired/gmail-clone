import { Close } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (formData) => {
		console.log(formData);
		db.collection("emails").add({
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		dispatch(closeSendMessage());
	};

	return (
		<Div>
			<div className="sendMail__header">
				<h3>New Message</h3>
				<Close
					className="sendMail__close"
					onClick={() => dispatch(closeSendMessage())}
				/>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					// name="to"
					placeholder="To"
					type="email"
					{...register("to", { required: true })}
				/>
				{errors.to && <p className="sendMail__error">Reciever is required!</p>}

				<input
					{...register("subject", { required: true })}
					// name="subject"
					placeholder="Subject"
					type="text"
				/>
				{errors.subject && (
					<p className="sendMail__error">Subject is required!</p>
				)}

				<input
					{...register("message", { required: true })}
					// name="message"
					placeholder="Your message here"
					className="sendMail__message"
					type="text"
				/>
				{errors.message && (
					<p className="sendMail__error">Message is required!</p>
				)}

				<div className="sendMail__options">
					<Button
						variant="contained"
						color="primary"
						type="submit"
						className="sendMail__send">
						Send
					</Button>
				</div>
			</form>
		</Div>
	);
}

export default SendMail;

const Div = styled.div`
	position: absolute;
	bottom: 0;
	right: 50px;
	background-color: #404040;
	width: 40%;
	height: 45%;
	max-width: 500px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	display: flex;
	flex-direction: column;
	border: 1px soild whitesmoke;
	box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.24);

	.sendMail__header {
		padding: 13px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: gray;
	}

	.sendMail__header > h3 {
		color: whitesmoke;
		font-size: 13px;
	}

	.sendMail__send {
		background-color: #3079ed !important;
		text-transform: capitalize !important;
		margin: 15px !important;
	}

	.sendMail__close {
		cursor: pointer;
	}

	form {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	form > input {
		height: 30px;
		padding: 10px;
		border: none;
		border-bottom: 1px solid whitesmoke;
		outline: none;
	}

	.sendMail__message {
		flex: 1;
	}

	.sendMail__error {
		background-color: #fff;
		font-size: 12px;
		font-weight: bold;
		color: red;
		border: none;
		text-align: right;
		padding: 2px;
		transition: var(--sht-trans);
	}
`;
