import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { addCategory, addFilter, removeFilter } from "../slice/searchSlice";

const CheckboxGroup = props => {
	const search = useSelector(state => state.search);
	const { facets } = search.static;
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
					// for each [key, value] pair in `search.facets`, return the following
					Object.entries(facets).map(([categoryKey, categoryValue]) => {
						return (
							<div
								// for example: categoryKey=course, categoryValue={object_corresponding_to_category_key}
								key={`${categoryKey},${categoryValue}`}
								onClick={() => handleOptionClick(categoryKey)}
							>
								<select name={categoryKey} onChange={handleSelect}>

									<option defaultValue value={""}>{categoryValue["_name"] ?? categoryKey}</option>
									{
										// if categoryValue is truthy, continue
										categoryValue &&
										// map each [key, value] pair in categoryValue
										Object.entries(categoryValue)
											.map(([optionKey, optionValue]) => {
												// for each [key, value] pair in categoryValue, return an (<option />) element if key is not "_name", else return null (i.e., do not render anything)
												return (optionKey !== "_name")
													? <option key={optionKey} value={optionKey}>{optionValue.name ?? optionKey}</option>
													: null;
											})
									}
								</select>
							</div>
						)
					})
				}

				{
					/**
					 * ? note on the following block of code
					 * this code will only be implemented if the updated backend is implemented. otherwise, use the code above
					 * remove `false &&` on the line **following** the next if you'd like to render the following code. (i.e. if this line is 70 remove line 72)
					 */
					// false &&
					// Object.entries(facets).map(([categoryKey, categoryValue]) => {
					// 	return (
					// 		<div
					// 			key={`${categoryKey},${categoryValue}`}
					// 			className="filter-group"
					// 			onClick={() => handleOptionClick(categoryKey)}
					// 		>
					// 			<h3>{categoryValue["_name"] ?? categoryKey}</h3>
					// 			{
					// 				categoryValue
					// 					? <SCheckContainer shown={filter === categoryKey}>
					// 						{
					// 							Object.entries(categoryValue).map(([optionKey, optionValue]) => {
					// 								if (optionKey !== "_name") {
					// 									return (
					// 										<CheckPair key={`${categoryKey},${optionKey}`}>
					// 											<label htmlFor={optionKey}>
					// 												<input
					// 													type="checkbox"
					// 													checked={search.activeFacets.some(e => e.id === optionKey)}
					// 													onChange={handleCheck}
					// 													key={optionKey}
					// 													name={`${categoryKey},${optionKey}`}
					// 													id={optionKey}
					// 												/>
					// 												{optionValue.name ?? optionKey}
					// 											</label>
					// 										</CheckPair>
					// 									)
					// 								} else {
					// 									return null;
					// 								}
					// 							})
					// 						}
					// 					</SCheckContainer>
					// 					: null
					// 			}
					// 		</div>
					// 	)
					// })
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