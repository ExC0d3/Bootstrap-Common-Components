import React, { Component } from "react";
import css from "./Banner.module.css";
import * as addMultipleClass from "classnames";

class Banner extends Component {
	
	addImages(images) {
		return images.map((image, classes) => {
			return(
				<div className={`carousel-item active ${classes.carousel}`}>
					<img className={`${css.bannerImg} d-block w-100 ${classes.image}`} src="https://ir.avnet.com/system/files-encrypted/nasdaq_kms/inline-images/financials.jpg" />	      
				</div>
			)
		})
	}

	render() {
		return (
			<div className={`container-fluid ${css["bannerContainer"]} ${this.props.classes.container}`}
			>
				<div className={`jumbotron-fluid ${this.props.classes.jumbotron}`}>
					<div id="bannerCarousel" className={`carousel slide ${this.props.classes.carousel}`} data-ride="carousel">
					  <div className={`${css.bannerCarousel} carousel-inner`)}>
					    {addImages(this.props.image, this.props.classes)}
					  </div>
					</div>
					
				</div>
			</div>
		);
	}
}

export default Banner;
