import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		db.collection("emails")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);
	return (
		<Div>
			<div className="emailList__settings">
				<div className="emaliList__settingsLeft">
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="emaliList__settingsRight">
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>

			<div className="emailList__sections">
				<Section Icon={InboxIcon} title="Primary" color="red" selected />
				<Section Icon={PeopleIcon} title="Social" color="#1A73eB" />
				<Section Icon={LocalOfferIcon} title="Promotions" color="green" />
			</div>

			<div className="emailList__list">
				{emails.map(({ id, data: { to, subject, message, timestamp } }) => (
					<EmailRow
						id={id}
						key={id}
						title={to}
						subject={subject}
						description={message}
						time={new Date(timestamp?.seconds * 1000).toUTCString()}
						// onClick={}
					/>
				))}
			</div>
		</Div>
	);
}

export default EmailList;

const Div = styled.div`
	flex: 1;
	overflow: scroll;

	.emailList__settings::-webkit-scrollbar {
		display: none;
	}

	.emailList {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.emailList__settings {
		position: sticky;
		top: 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid whitesmoke;
		background-color: white;
		z-index: 999;
		padding-right: 10px;
	}

	.emailList__sections {
		position: sticky;
		top: 0;
		display: flex;
		background-color: #fff;
		border-bottom: 1px solid whitesmoke;
		z-index: 999;
	}

	.emailList__list {
		padding-bottom: 20%;
	}
`;
