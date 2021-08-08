import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ title, subject, description, time, id }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const openMail = () => {
		dispatch(
			selectMail({
				title,
				subject,
				description,
				time,
				id,
			})
		);

		history.push("/mail");
	};

	return (
		<Div onClick={openMail}>
			<div className="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarBorderOutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon className="mail__important" />
				</IconButton>
			</div>
			<h3 className="emailRow__title">{title}</h3>
			<div className="emailRow__message">
				<h4>
					{subject}
					<span className="emailRow__description"> &#8212; {description} </span>
				</h4>
			</div>

			<p className="emailRow__time">{time}</p>
		</Div>
	);
}

export default EmailRow;

const Div = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	border-bottom: 1px solid whitesmoke;
	cursor: pointer;
	z-index: 999;
	transition: var(--sht-trans);

	&:hover {
		/* border-top: 0.2px solid whitesmoke; */
		box-shadow: 2px 4px 4px -2px rgba(0, 0, 0, 0.24);
	}

	.emailRow__options {
		display: flex;
	}

	.emailRow__message {
		display: flex;
		flex: 0.8;
		align-items: center;
		font-size: 13px;
	}

	.emailRow__message > h4 {
		width: 400px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: 5px;
		padding-right: 5px;
	}

	.emailRow__title {
		font-size: 13px;
		flex: 0.3;
	}

	.emailRow__time {
		padding-right: 15px;
		font-size: 9px;
		font-weight: bold;
	}

	.emailRow__description {
		font-weight: 400;
		color: gray;
	}

	.mail__important {
		color: #e8ab02 !important;
	}
`;
