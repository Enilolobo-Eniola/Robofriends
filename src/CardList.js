import React from 'react';
import Card from './Card';

const CardList = ({robots,clickk}) =>
{
	const CardComponent = robots.map((user) => 
	{
		return <Card key={user.id} id={user.id} name={user.name} email={user.email} clickk={clickk} />
	}
	)

	return(
		<div className="">
			{CardComponent}
		</div>
	);
}

export default CardList;