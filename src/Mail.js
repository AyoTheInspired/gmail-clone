import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Checkbox, Button, IconButton } from "@material-ui/core";
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
			the mail component
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
`;
