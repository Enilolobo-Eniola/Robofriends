import React from 'react';

const Card = ({id, name,email,clickk}) =>
{	
	return(
		<div className="bg-light-green grow dib pa3 br3 ma2 bw2 shadow-5 tc" onClick={()=>clickk(id,name,email)} >
			<img src={`https://robohash.org/${id}?size=70x70`} alt='Robot'/>
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;