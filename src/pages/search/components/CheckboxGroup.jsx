import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";

const useActiveFilters = () => {


	const [active, setActive] = useState([]);
	const setActiveFilters = (name) => {
		setActive(active.includes(name) ? active.filter(x => x !== name) : [...active, name]);
	}

	return [active, setActiveFilters];
}

const CheckboxGroup = props => {
	const search = useSelector(state => state.search);
	const [activeFilters, setActiveFilters] = useActiveFilters();
	const [filter, setFilter] = useState("");

	const handleOptionClick = (name) => {
		if (filter === name) {
			setFilter("");
		} else {
			setFilter(name);
		}
	}

	const handleMouseIn = (name) => {
		if (filter !== name) {
			setFilter(name);
		}
	}
	const handleMouseOut = (name) => {
		if (filter === name) {
			setFilter("");
		}
	}
	const handleCheck = (evt) => {
		const { name } = evt.target;
		setActiveFilters(name);
	}

	return (
		<>
			<OptionsContainer>
				{
					Object.entries(search.facets).map(([k, v]) => {
						return (
							<div
								key={k}
								className="filter-group"
								onClick={() => handleOptionClick(k)}
							// onMouseEnter={() => handleMouseIn(k)}
							// onMouseLeave={() => handleMouseOut(k)}
							>
								<h3>{v["_name"] ? v["_name"] : k}</h3>
								{
									v
										?
										<SCheckContainer
											shown={filter === k}
										// onMouseLeave={() => handleMouseOut(k)}
										>
											{
												Object.entries(v).map(([k2, v2]) => {
													if (k2 !== "_name") {
														return (
															<CheckPair>
																<input
																	type="checkbox"
																	checked={activeFilters.includes(k2)}
																	onChange={handleCheck}
																	key={k2}
																	name={k2}
																	id={k2}
																/>
																<label htmlFor={k2}>{v2.name ?? k2}</label>
															</CheckPair>
														)
													} else {
														return null;
													}
												})
											}
										</SCheckContainer>
										: null
								}


							</div>
						)
					})
				}
			</OptionsContainer>
		</>
	)
}

const CheckPair = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	border: 2px solid black;
	padding: 1rem;
	font-family: Raleway;
	font-size: 1.8rem;
	font-weight: 700;
	input, label {
		font-size: 2rem;
		font-family: Raleway;
	}
`;

const SCheckContainer = styled.div`
	${props => {
		if (props.shown) {
			return css`
				display: flex;
				opacity: 1;
		`;
		} else {
			return css`
				display: none;
				max-height: 0;
				opacity: 0;
			`;
		}
	}};
	display: block;
	font-family: Raleway;
	font-size: 1.8rem;
	font-weight: 700;
	transition: max-height 0s, opacity 0.25s ease-in;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: flex-start;
	overflow: hidden;
	position: absolute;
	background-color: #FFF;
	color: black;
	z-index: 99999;


`;

const OptionsContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	height: 60px;
	cursor: pointer;
	.filter-group {
		display: block;
		width: 20rem;
		border: 2px solid black;
		padding: 1rem;
		text-align: center;
		font-family: Raleway;
		text-align: center;
		font-size: 1.8rem;
		font-weight: 700;
	}
`;

export default CheckboxGroup;