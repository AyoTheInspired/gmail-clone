import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Header() {
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
				<input type="text" placeholder="Search mail" />
				<ArrowDropDownIcon className="header__inputCaret" />
			</div>
			<div className="header__rightt"></div>
			THE HEADER
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
	}
`;
