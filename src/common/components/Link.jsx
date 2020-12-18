// import React from 'react'

import StyledLink from "./Link.styles";

const Link = ({ children, secondary, ...props }) => {
	return (
		<StyledLink secondary={secondary} {...props}>
			{children}
		</StyledLink>
	)
}

export default Link;