import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import {
	ArrowBack,
	Delete,
	Error,
	Email,
	MoveToInbox,
	WatchLater,
	CheckCircle,
	LabelImportant,
	MoreVert,
	UnfoldMore,
	Print,
	ExitToApp,
} from "@material-ui/icons";

function Mail() {
	const history = useHistory();

	return (
		<Div>
			<div className="mail__tools">
				<div className="mail__toolsLeft">
					<IconButton onClick={() => history.push("/")}>
						<ArrowBack />
					</IconButton>

					<IconButton>
						<MoveToInbox />
					</IconButton>

					<IconButton>
						<Error />
					</IconButton>

					<IconButton>
						<Delete />
					</IconButton>

					<IconButton>
						<Email />
					</IconButton>

					<IconButton>
						<WatchLater />
					</IconButton>

					<IconButton>
						<CheckCircle />
					</IconButton>

					<IconButton>
						<LabelImportant />
					</IconButton>

					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className="mail__toolsRight">
					<IconButton>
						<UnfoldMore />
					</IconButton>

					<IconButton>
						<Print />
					</IconButton>

					<IconButton>
						<ExitToApp />
					</IconButton>
				</div>
			</div>
			<div className="mail__body">
				<div className="mail__bodyHeader">
					<h2>Subject</h2>
					<LabelImportant className="mail__important" />

					<p>Title</p>
					<p className="mail__time">10pm</p>
				</div>

				<div className="mail__message">
					<p>This is a mail message</p>
				</div>
			</div>
		</Div>
	);
}

export default Mail;

const Div = styled.div`
	flex: 1;
	background-color: whitesmoke;

	.mail__tools {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
	}

	.mail__toolsLeft {
		display: flex;
	}

	.mail__body {
		display: flex;
		flex-direction: column;
		margin: 30px;
		background-color: #fff;
		padding: 20px;
		height: 100vh;
		box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
	}

	.mail__bodyHeader {
		display: flex;
		align-items: center;
		border-bottom: 1px solid whitesmoke;
		position: relative;
	}

	.mail__important {
		color: #e8ab02 !important;
	}

	.mail__bodyHeader > h2 {
		font-weight: 500;
		margin-right: 20px;
	}

	.mail__message > p {
		padding: 10px;
		margin-right: 20px;
		overflow-wrap: break-word;
	}

	.mail__bodyHeader > p {
		margin-left: 20px;
	}

	.mail__time {
		position: absolute;
		top: 24px;
		right: 0;
		font-size: 12px;
		color: gray;
	}
`;
