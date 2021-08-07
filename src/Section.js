import React from "react";
import styled from "styled-components";

function Section({ Icon, title, selected, color }) {
	return (
		<Div
			className={`section ${selected && "section--selected"}`}
			style={{
				borderBottom: `1px solid ${color}`,
				color: `${selected && color}`,
			}}>
			<Icon />
			<h4> {title} </h4>
		</Div>
	);
}

export default Section;

const Div = styled.div`
	display: flex;
	align-items: center;
	padding: 15px;
	min-width: 200px;
	cursor: pointer;
	color: grey;
	border-width: 0 !important;
	transition: var(--sht-trans);

	&:hover {
		background-color: whitesmoke;
		border-width: 3px !important;
	}

	h4 {
		font-size: 14px;
		margin-left: 15px;
	}

	&.section--selected {
		background-color: whitesmoke;
		border-width: 3px !important;
	}
`;
