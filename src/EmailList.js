import React from "react";
import styled from "styled-components";
import { Checkbox, Button, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
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
				<EmailRow
					title="Twitch"
					subject="Hello World"
					description="This is a text"
					time="10pm"
				/>
				<EmailRow
					title="Twitch"
					subject="Hello World"
					description="This is a text"
					time="10pm"
				/>
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
`;
