import React from 'react';
import Card from './Card';



const CardList = ({robots}) => {
	
		return(
			<div className="row">
				{

robots.map((sa, ss) => {
			return (<Card 
				key = {robots[ss].id}
			 id = {robots[ss].id}
			  name={robots[ss].name} 
			  email ={robots[ss].email} />)
		})
				}
			</div>

			)
}

export default CardList;