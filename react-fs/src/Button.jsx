// Components and pages should begin with a capital letter
import React from "react";


// It is important that the components are as abstract as possible
// No state, no business rules

// Props is what we pass to react components
function Button(props) {

    const { name, onClick } = props;

    return (
        <button onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;