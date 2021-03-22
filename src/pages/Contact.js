import React, { Fragment } from 'react';
import Navigation from '../component/Navigation.js'
import Social from '../component/Social'
import PropTypes from "prop-types";




export default class Contact extends React.Component {
	render() {
		return (
            <Fragment>
                <Navigation/>
                
                <div id="my-background" className="background">
					<div id="stars" />
					<div id="stars2" />
					<div id="stars3" />

			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft} className="text-white">
					Contact
				</h1>
				<form
					className={this.props.shake}
					action="https://formspree.io/example@email.com"
					method="POST">
					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Write your message..."
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<button
								type="submit"
								className="btn btn-danger mb-2 hidden">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
            </div>
            <Social/>
            </Fragment>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
