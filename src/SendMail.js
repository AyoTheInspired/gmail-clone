import React, { createRef } from "react";
import { Close } from "@material-ui/icons";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function SendMail() {
	const { register, handleSubmit, watch, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		console.log("heyy");
	};

	return (
		<Div>
			<div className="sendMail__header">
				<h3>New Message</h3>
				<Close classname="sendMail__close" />
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="to"
					placeholder="To"
					type="text"
					// ref={register("to", { required: true })}
				/>
				<input
					// ref={register("subject", { required: true })}
					name="subject"
					placeholder="Subject"
					type="text"
				/>
				<input
					ref={React.createRef(register("message", { required: true }))}
					name="message"
					placeholder="Your message here"
					className="sendMail__message"
					type="text"
				/>

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

	.sendmail__close {
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
`;
