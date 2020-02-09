import React from 'react';

const CardSearch = ({searchchange}) => {
	return(
		<div>
			<input type = "text" className="form-control" onChange={searchchange} />
		</div>

		)

}
export default CardSearch;