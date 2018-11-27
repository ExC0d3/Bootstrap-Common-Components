import React, { Component } from "react";

class Pagination extends Component {

	pages(number){
		
		let page = [];
		for(let a = 1; a<=number; a++){
			page.push(
				<li key={a.toString()} className="page-item">
						<a className="page-link" href="#">
							{a}
						</a>
					</li>
			)
		}

		return(page);
	}

	render() {
		return (
			<nav aria-label="">
				<ul className="pagination justify-content-end">
					<li className="page-item disabled">
						<a className="page-link" href="#" tabIndex="-1">
							Previous
						</a>
					</li>
					{this.pages(this.props.number)}
					<li className="page-item">
						<a className="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Pagination;