import React, { Component } from "react";
// import Link from "../Link/Link"; -> can use this too
import { Link } from "../";
import css from "./Header.module.css";
import * as addMultipleClass from "classnames";

class Header extends Component {
	render() {
		return (
			<nav
				className={addMultipleClass.default(
					"navbar",
					"navbar-expand-lg",
					"navbar-dark",
					"fixed-top",
					"position-static",
					`${css["nav"]}`
				)}
			>
				<Link to="/">
					<img
						className={addMultipleClass.default(
							"img-responsive",
							`${css["logo"]}`
						)}
						src="/logos/logo1.svg"
						alt="ALIVE"
					/>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navigationElements"
					aria-controls="navigationElements"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					id="navigationElements"
					className={addMultipleClass.default(
						"float-lg-right float-xs-left navbar-collapse collapse"
					)}
				>
					<form
						id="searchBox"
						className={addMultipleClass.default(
							"form-inline my-2 my-lg-0",
							css.searchBoxForm
						)}
					>
						<div
							className={addMultipleClass.default(
								"form-group",
								`${css["navigationFormGroup"]}`
							)}
						>
							<div className="input-group">
								<input
									className={addMultipleClass.default(
										"form-control",
										`${css["searchBoxInput"]}`
									)}
									type="text"
									placeholder="What do you want to learn?"
									aria-label="What do you want to learn?"
									aria-describedby="headerSearchBox"
								/>
								<div
									className={addMultipleClass.default(
										"input-group-append",
										css.searchIconBox
									)}
									id="headerSearchBox"
								>
									<i
										className={addMultipleClass.default(
											"fas fa-search",
											css.searchIconSvg
										)}
									/>
								</div>
							</div>
						</div>
					</form>
					<ul className="navbar-nav ml-auto float-md-right">
						<li className="nav-item active mr-lg-4">
							<a className="nav-link" href="/">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active mr-lg-4">
							<a className="nav-link" href="/">
								Catalog{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li
							className={addMultipleClass.default(
								"nav-item active  mr-lg-4 pr-lg-4",
								`${css["verticalBorder"]}`
							)}
						>
							<a className="nav-link" href="/">
								Enterprise{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a
								style={{ color: "#4a90e2" }}
								className="nav-link"
								href="/"
							>
								Teach on Alive{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a
								className={addMultipleClass.default("nav-link")}
								href="/"
							>
								<i
									className={`fas fa-shopping-cart ${
										css.cartLogo
									}`}
								/>
								<span>(4)</span>
							</a>
						</li>
						<li className="nav-item active">
							<a
								className={addMultipleClass.default("nav-link")}
								href="/"
							>
								<i
									className={`${css.heartLogo} far fa-heart`}
								/>
								<span>(4)</span>
							</a>
						</li>

						<li className="nav-item dropdown">
							<a
								className={`nav-link dropdown-toggle ${
									css.username
								}`}
								href="http://example.com"
								id="profileDropdown"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Simin Gu
							</a>
							<div
								className={addMultipleClass.default(
									"dropdown-menu",
									`${css["headerDropdown"]}`
								)}
								aria-labelledby="profileDropdown"
							>
								<a className="dropdown-item" href="/profile">
									Profile
								</a>
								<a className="dropdown-item" href="/login">
									Login
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
