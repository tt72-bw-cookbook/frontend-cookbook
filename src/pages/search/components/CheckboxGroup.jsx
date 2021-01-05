import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { addFilter, removeFilter } from "../slice/searchSlice";

const useActiveFilters = () => {
	const [active, setActive] = useState([]);
	const setActiveFilters = (name) => {
		setActive(active.includes(name) ? active.filter(x => x !== name) : [...active, name]);
	}
	return [active, setActiveFilters];
}

const CheckboxGroup = props => {
	const search = useSelector(state => state.search);
	const dispatch = useDispatch();
	const [activeFilters, setActiveFilters] = useActiveFilters();
	const [filter, setFilter] = useState("");

	const handleOptionClick = (name) => {
		if (filter === name) {
			setFilter("");
		} else {
			setFilter(name);
		}
	}

	// const handleMouseIn = (name) => {
	// 	if (filter !== name) {
	// 		setFilter(name);
	// 	}
	// }
	// const handleMouseOut = (name) => {
	// 	if (filter === name) {
	// 		setFilter("");
	// 	}
	// }
	const handleCheck = (evt) => {
		const { name, value, checked } = evt.target;
		if (checked) {
			dispatch(addFilter(name))
		}

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
																<label htmlFor={k2}>
																	<input
																		type="checkbox"
																		checked={activeFilters.includes(k2)}
																		// value={search.facets[k][k2]}
																		onChange={handleCheck}
																		key={k2}
																		name={`${k},${k2}`}
																		id={k2}
																	/>
																	{v2.name ?? k2}
																</label>
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
	font-size: 1.8rem;
	font-weight: 700;
	input, label {
		font-size: 2rem;
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
	transition: max-height 0s, opacity 0.25s ease-in;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: stretch;
	overflow: hidden;
	position: absolute;
	background-color: #FFF;
	color: black;
	z-index: 9999;
	width: 100%;

`;

const OptionsContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	height: 60px;
	cursor: pointer;
	.filter-group {
		
		h3 {
			display: block;
			height: 100%;
			/* min-height: 60px; */
		}
		display: block;
		box-sizing: border-box;
		width: 20rem;
		background-color: var(--pDark);
		border: 1px solid black;		
		text-align: center;
		font-size: 1.8rem;
		font-weight: 700;
		height: 3rem;
		/* padding: auto 0; */
		padding: 5px 0;
		position: relative;
	}
`;

export default CheckboxGroup;