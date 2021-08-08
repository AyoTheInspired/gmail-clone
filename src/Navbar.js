import Menu from "@material-ui/icons/Menu";
import React, { useState } from "react";
import styled from "styled-components";

function Navbar() {
	const [showNav, setShowNav] = useState(false);

	return (
		<Div>
			<nav className="nav__wrapper">
				<div className="nav__left">
					<img src="/logo192.png" width="40" alt="" />
				</div>
				<div className={`nav__mid ${showNav ? "openNav" : ""}`}>
					<ul>
						<li className="nav__item" onClick={() => setShowNav(!showNav)}>
							Home
						</li>
						<li className="nav__item" onClick={() => setShowNav(!showNav)}>
							About
						</li>
						<li className="nav__item" onClick={() => setShowNav(!showNav)}>
							Gallery
						</li>
						<li className="nav__item" onClick={() => setShowNav(!showNav)}>
							News
						</li>
						<li className="nav__item" onClick={() => setShowNav(!showNav)}>
							Contact
						</li>
					</ul>
				</div>
				<div className="nav__right">
					<Menu className="hamburger" onClick={() => setShowNav(!showNav)} />
				</div>
			</nav>
		</Div>
	);
}

export default Navbar;

const Div = styled.div`
	background: red;
	/* width: 100vw !important; */
	/* padding: 5px; */
	margin-right: 0;

	.nav__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav__mid {
		flex: 1;
	}

	ul {
		display: flex;
		justify-content: space-around;
	}

	.nav__item {
		list-style: none;
		cursor: pointer;
	}

	.hamburger {
		font-size: 30px !important;
		display: none;
	}

	@media (max-width: 768px) {
		.hamburger {
			display: inline-block;
		}

		.nav__wrapper {
			position: relative;
		}

		.nav__mid {
			position: absolute;
			background: green;
			transform: translateX(-100%);
			/* opacity: 0; */
			right: 0px;
			display: flex;
			justify-content: flex-end;
			width: 100%;
			height: 100vh;
			top: 40px;
			transition: var(--sht-trans);
		}

		.nav__mid.openNav {
			transform: translateX(0);
		}

		ul {
			flex-direction: column;
			align-items: center;
			height: 80%;
		}

		.nav__item {
			padding: 10px;
			font-size: 25px;
		}
	}
`;
