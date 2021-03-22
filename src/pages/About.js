import React, { Fragment } from 'react';
import Navigation from '../component/Navigation'
import Profile from '../img/44243149_2139095206100797_2424276564897169408_n.jpg'
import PropTypes from "prop-types";


export default class About extends React.Component {
	render() {
		return (
            <Fragment>
                <Navigation/>
				<div id="about" className="btn-style nav-item nav-lin">

                <div id="my-background" className="background">
					<div id="stars" />
					<div id="stars2" />
					<div id="stars3" />
				<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}  className="text-white">
					About
				</h1>

				<h2 className="text-light mt-5 col-12"> Jeune debrouillard, Je suis Barry Mamadou Saliou developpeur Web. Je suis passionné par la musique et le sport j'aime egalement la photographie </h2>

				<div className="row " style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={Profile}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 220 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn} className="text-white text-uppercase pb-5">
							Le code, la musique et le sport 
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SASS
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Photoshop
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
				</div>
			
                
                
                
            </Fragment>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
