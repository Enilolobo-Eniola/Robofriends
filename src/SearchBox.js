import React from 'react';

const SearchBox = ({searchChange}) =>
{
	return(
		<div className= "pa2" stylr={{marginTop:'-30px'}}>
			<input className= "pa3 ba b--green bg-lightest-blue w-30 tc"
			type="search" 
			placeholder='search robots' 
			onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;