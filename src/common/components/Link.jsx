import StyledLink from "./Link.styles";

const Link = ({ children, secondary = false, ...props }) => {
	return (
		<StyledLink secondary={secondary} {...props}>
			{children}
		</StyledLink>
	)
}

export default Link;