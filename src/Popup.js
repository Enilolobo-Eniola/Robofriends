import React from "react";
import Popup from "reactjs-popup";
 
const PopUp = () => {
	return(
		<div>
		  <Popup trigger={<button>Click Me</button>} position="center center" lockScroll={false}>
		    <div>
		    	Popup content here !!<br /><hr /><p>ggg</p><p>ggg</p>
		    </div>
		  </Popup>
  		</div>
	);
}

export default PopUp;	