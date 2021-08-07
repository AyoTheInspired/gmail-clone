import React from "react";
import styled from "styled-components";
import { Checkbox, Button, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

function EmailRow({ title, subject, description, time, id }) {
	return (
		<Div>
			<div className="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarBorderOutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon />
				</IconButton>
			</div>
			<h3 className="emailRow__title">{title}</h3>
			<div className="emailRow__message">
				<h4> {subject} </h4>
				<span className="emailRow__description">{description}</span>
			</div>

			<div className="emailRow__description">{time}</div>
		</Div>
	);
}

export default EmailRow;

const Div = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	border-bottom: 1px solid whitesmoke;
`;
