import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { addCategory, addFilter, removeFilter } from "../slice/searchSlice";

const CheckboxGroup = props => {
	const search = useSelector(state => state.search);
	const dispatch = useDispatch();
	const [filter, setFilter] = useState("");

	const handleOptionClick = (name) => {
		if (filter === name) {
			setFilter("");
		} else {
			setFilter(name);
		}
	}

	const handleCheck = (evt) => {
		const { name, checked } = evt.target;
		if (checked) {
			dispatch(addFilter(name))
		} else {
			dispatch(removeFilter(name))
		}
	}
	const handleSelect = (evt) => {
		const { name, value } = evt.target;
		console.log({ name, value })
		dispatch(addCategory({ category: name, option: value }))
	}

	return (
		<>
			<OptionsContainer>
				{
					Object.entries(search.facets).map(([categoryKey, categoryValue]) => {
						return (
							<div
								key={`${categoryKey},${categoryValue}`}
								onClick={() => handleOptionClick(categoryKey)}
							>
								<select name={categoryKey} onChange={handleSelect}>
									<option defaultValue value={""}>{categoryValue["_name"] ?? categoryKey}</option>
									{
										categoryValue &&
										Object.entries(categoryValue)
											.map(([optionKey, optionValue]) => {
												if (optionKey !== "_name") {
													return (
														<option key={optionKey} value={optionKey}>{optionValue.name ?? optionKey}</option>
													)
												} else {
													return null;
												}
											})

									}
								</select>


							</div>
						)
					})
				}

				{
					/**
					 * this will be used if the updated backend is implemented. otherwise, use above
					 */
					false &&
					Object.entries(search.facets).map(([categoryKey, categoryValue]) => {
						return (
							<div
								key={`${categoryKey},${categoryValue}`}
								className="filter-group"
								onClick={() => handleOptionClick(categoryKey)}
							>
								<h3>{categoryValue["_name"] ?? categoryKey}</h3>
								{
									categoryValue
										? <SCheckContainer shown={filter === categoryKey}>
											{
												Object.entries(categoryValue).map(([optionKey, optionValue]) => {
													if (optionKey !== "_name") {
														return (
															<CheckPair key={`${categoryKey},${optionKey}`}>
																<label htmlFor={optionKey}>
																	<input
																		type="checkbox"
																		checked={search.activeFacets.some(e => e.id === optionKey)}
																		onChange={handleCheck}
																		key={optionKey}
																		name={`${categoryKey},${optionKey}`}
																		id={optionKey}
																	/>
																	{optionValue.name ?? optionKey}
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