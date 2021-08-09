import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(logout());
		});
	};

	return (
		<Div>
			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
					alt=""
				/>
			</div>
			<div className="header__middle">
				<SearchIcon />
				<input
					type="text"
					placeholder="Search mail - Click avatar for logout functionality."
				/>
				<ArrowDropDownIcon className="header__inputCaret" />
			</div>
			<div className="header__right">
				<IconButton>
					<AppsIcon />
				</IconButton>

				<IconButton>
					<NotificationsIcon />
				</IconButton>

				<Avatar className="avatar" src={user?.photoUrl} onClick={signOut} />
			</div>
		</Div>
	);
}

export default Header;

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid whitesmoke;

	.header__left {
		display: flex;
		align-items: center;
	}

	.header__left > img {
		object-fit: contain;
		height: 80px;
		margin-left: 5px;
	}

	.header__middle {
		display: flex;
		align-items: center;
		flex: 0.7;
		background-color: whitesmoke;
		padding: 10px;
		border-radius: 5px;
	}

	.header__middle > .MuiSvgIcon-root {
		color: grey;
	}

	.header__middle > input {
		border: none;
		width: 100%;
		padding: 10px;
		outline-width: 0;
		font-size: medium;
		background-color: transparent;
	}

	.header__right {
		display: flex;
		padding-right: 20px;
	}

	.avatar {
		cursor: pointer;
	}
`;
