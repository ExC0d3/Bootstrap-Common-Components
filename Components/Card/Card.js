import React, { Component } from "react";
import * as addMultipleClass from "classnames";
import css from "./Card.module.css";

class Card extends Component {
	render() {
		return (
			<div className={`card ${css.courseCard}`}>
				<img
					className={`card-img-top ${
						css.courseCardImg
					}`}
					src="https://preview.ibb.co/kFb63V/data-Science.jpg"
					alt="Card image cap"
				/>
				<div className={`card-body ${css.courseCardBody}`}>
					<h5 className={`card-title ${css.title}`}>
						Data Science and Analytics
					</h5>
					<h6 className={`${css.author}`}>Simin Gu</h6>
					<h6 className={`${css.divider}`} />
					<h6 className={`${css.duration}`}>4h 30min</h6>

					<div className={`${css.rating}`}>
						<span className={`fa fa-star ${css.checked}`} />
						<span className={`fa fa-star ${css.checked}`} />
						<span className={`fa fa-star ${css.checked}`} />
						<span className={`far fa-star ${css.unchecked}`} />
						<span className={`far fa-star ${css.unchecked}`} />
						<h6 className={css.reviewCount}>(20)</h6>
					</div>

					<h6 className={css.price}>$16.66</h6>

					<a href="#" className={`btn btn-sm btn-primary ${css.enroll}`}>
						Enroll
					</a>
				</div>
			</div>
		);
	}
}

export default Card;
