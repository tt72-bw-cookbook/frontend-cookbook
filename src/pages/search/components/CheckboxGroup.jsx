import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addCategory } from "../slice/searchSlice";

const CheckboxGroup = () => {
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
							<FilterDiv
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
							</FilterDiv>
						)
					})
				}
			</OptionsContainer>
		</>
	)
}

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

const FilterDiv = styled.div`
	position: relative;
	select{
		background-color: #da3c33;
		color: #F3F6FA;
		border: 2px solid #F3F6FA;
		border-style: ridge;
		height: 35px;
		width: 15vw;
		font-size: 2.2rem;
		font-family: 'Alegreya', serif;
	}
`;

export default CheckboxGroup;
