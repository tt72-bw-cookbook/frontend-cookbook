import React from 'react'
import styled, { css } from 'styled-components'

const animatedCss = css`
    opacity: 1;
    transform: translateY(0);
`

const primaryCss = css`
    background-color: var(--pDarker);
    color: var(--pText);
`

const StyledCard = styled.div`
    width: ${props => (props.big ? '450px' : '300px')};
    padding: 15px;
    opacity: 0;
    transform: translateY(50px);
    transition: 500ms all ease-in-out;
    margin: ${props => (props.noMargin ? 0 : '15px')};
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 1);
    border-radius: 5px;
    ${props => props.animated && animatedCss}
    ${props => props.primary && primaryCss}
`

class Card extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			animated: false,
		}
	}

	componentDidMount() {
		this.timerHandle = setTimeout(() => {
			this.setState(() => {
				return { animated: true }
			})
		}, this.props.delay)
	}

	componentWillUnmount() {
		if (this.timerHandle) {
			clearTimeout(this.timerHandle);
			this.timerHandle = 0;
		}
	}

	render() {
		const { delay = 0, noAnimation, primary, noMargin, big, ...props } = this.props
		return (
			<StyledCard
				animated={this.state.animated}
				delay={delay}
				primary={primary}
				noAnimation={noAnimation}
				big={big}
				noMargin={noMargin}
				{...props}
			/>
		)
	}
}

export default Card