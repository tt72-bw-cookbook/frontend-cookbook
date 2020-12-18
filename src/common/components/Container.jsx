// import React from 'react'
import styled from 'styled-components'

/**
 * Prop Options: full, fullVertical, small
 * <Container full fullVertical small></Container>
 */
const Container = styled.div`
	box-sizing: border-box;
	background-color: transparent;
	max-width: 100vw;
	width: 100%;
	margin: 0 auto;
    padding-left: ${props => {
		if (props.full) return 0
		return 'calc((100vw - 960px) / 2)'
	}};

    padding-right: ${props => {
		if (props.full) return 0
		return 'calc((100vw - 960px) / 2)'
	}};

    padding-top: ${props => {
		if (props.fullVertical) return 0
		if (props.small) return '15px'
		return '25px'
	}};

    padding-bottom: ${props => {
		if (props.fullVertical) return 0
		if (props.small) return '15px'
		return '25px'
	}};
`

export default Container
