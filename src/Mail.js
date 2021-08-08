import React from "react";
import styled from "styled-components";
import { Checkbox, Button, IconButton } from "@material-ui/core";
import { ArrowBack, Error, MoveToInbox } from "@material-ui/icons";

function Mail() {
	return (
		<Div>
			the mail component
			<div className="mail__tools">
				<div className="mail__toolsLeft">
					<IconButton>
						<ArrowBack />
					</IconButton>
					<IconButton>
						<MoveToInbox />
					</IconButton>
					<IconButton>
						<Error />
					</IconButton>
					<IconButton>
						<ArrowBack />
					</IconButton>
					<IconButton>
						<ArrowBack />
					</IconButton>
					<IconButton>
						<ArrowBack />
					</IconButton>
				</div>
				<div className="mail__toolsRight"></div>
			</div>
		</Div>
	);
}

export default Mail;

const Div = styled.div``;
