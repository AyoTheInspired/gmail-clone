import React from "react";
import styled from "styled-components";

function Section({ Icon, title, selected, color }) {
	return <Div className={`section ${selected && "section--selected"}`}></Div>;
}

export default Section;

const Div = styled.div``;
