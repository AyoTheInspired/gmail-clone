import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title, number, selected }) {
	return (
		<Div className={` ${selected && "sidebarOption--active"}`}>
			<Icon />
			<h3> {title} &nbsp; </h3>
			<p> {number} </p>
		</Div>
	);
}

export default SidebarOption;

const Div = styled.div`
	display: flex;
	align-items: center;
	padding: 0 10px;
	height: 40px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	cursor: pointer;
	color: #818181;
	transition: var(--sht-trans);

	:hover,
	:hover > p,
	:hover > h3,
	&.sidebarOption--active,
	&.sidebarOption--active > p,
	&.sidebarOption--active > h3 {
		background-color: #fcecec;
		color: #c04b37;
		font-weight: 800 !important;
	}

	.MuiSvgIcon-root {
		padding: 5px;
	}

	h3 {
		flex: 1;
		margin-left: 10px;
		font-size: 14px;
		font-weight: 400;
	}

	p {
		display: none;
		font-weight: 300;
	}

	&.sidebarOption--active > p {
		display: inline !important;
	}

	:hover p {
		display: inline;
	}
`;
