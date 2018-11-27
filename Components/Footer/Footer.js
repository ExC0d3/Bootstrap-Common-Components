import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className="footer fixed-bottom">
				<div className="container-fluid h-100">
					<div className="row h-100">
						<div className="col-sm-12 col-lg-2 h-100 bottomMargin">
							<div className="d-flex flex-row justify-content-md-start align-items-md-center h-100">
								<h6 className="copyRightText">
									© 2018, Alive{" "}
								</h6>
							</div>
						</div>
						<div className="col-sm-12 col-lg-8 bottomMargin">
							<div className="d-flex flex-row justify-content-lg-end align-items-md-center h-100">
								<h6 className="footerLink">Contact</h6>
								<h6 className="footerLink">Terms of using</h6>	
							</div>
						</div>
						<div className="col-sm-12 col-lg-2 bottomMargin">
							<div className="d-flex flex-row justify-content-lg-around align-items-md-center h-100">
								<i className="fab fa-twitter footerSocialIcons twitterIcon"/>
								<i className="fab fa-facebook-f footerSocialIcons" />
								<i className="fab fa-youtube footerSocialIcons"></i>
								<i className="fab fa-instagram footerSocialIcons" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
