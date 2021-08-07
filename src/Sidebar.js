import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
	return (
		<Div>
			<Button
				className="sidebar__compose"
				startIcon={<AddIcon fontSize="large" />}>
				Compose
			</Button>

			<SidebarOption
				Icon={InboxIcon}
				title="Inbox"
				number={54}
				selected={true}
			/>
			<SidebarOption Icon={StarIcon} title="Starred" number={54} />
			<SidebarOption Icon={InboxIcon} title="Snoozed" number={54} />
			<SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
			<SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
			<SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
			<SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
		</Div>
	);
}

export default Sidebar;

const Div = styled.div`
	.sidebar__compose {
		margin-top: 15px !important;
		margin-left: 10px !important;
		margin-bottom: 15px !important;
		text-transform: capitalize !important;
		color: gray;
		padding: 15px !important;
		border-radius: 30px !important;
		box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
	}
`;