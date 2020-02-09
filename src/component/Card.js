import React from 'react';

const Card = ({name, email, id}) => {
	return(

		<div className="col-md-4 text-center">
			<div className= "card bg-light my-3">
			<img src={`https://robohash.org/${id}.png?200*200`} className="mb-2" alt="d" />
			<h6 className="mb-0"> {name} </h6>
			<p> {email} </p>
			</div>
		</div>
		);
}

export default Card;