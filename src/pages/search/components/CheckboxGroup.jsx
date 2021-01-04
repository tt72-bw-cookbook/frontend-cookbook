import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

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

	const handleCheck = (evt) => {
		const { name, checked } = evt.target;
		setActiveFilters(name);
	}

	return (
		<>
			<OptionsContainer>
				{
					Object.entries(search.facets).map(([k, v]) => {
						return <div key={k} onClick={() => handleOptionClick(k)}>{v["_name"] ? v["_name"] : k}</div>
					})
				}
			</OptionsContainer>

			{
				Object.entries(search.facets).map(([k, v]) => {
					if (v) {
						return (
							<SCheckContainer shown={filter === k}>
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
						)
					}
					return null;
				})
			}
		</>
	)
}

const CheckPair = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	input, label {
		font-size: 2rem;
		font-family: Raleway;
	}
`;

const SCheckContainer = styled.div`
	display: ${({ shown }) => shown ? "flex" : "none"};
	flex-flow: column nowrap;
	width: 50rem;
	justify-content: center;
	align-items: flex-start;

`;

const OptionsContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	height: 60px;
	cursor: pointer;
	div {
		display: block;
		width: 20rem;
		/* margin: 2rem; */
		/* border-radius: 50px; */
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