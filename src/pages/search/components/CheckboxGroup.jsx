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
						return <div key={k} onClick={() => handleOptionClick(k)}>{k}</div>
					})
				}
				<div onClick={() => handleOptionClick("one")}>Option 1</div>
				<div onClick={() => handleOptionClick("two")}>Option 2</div>
			</OptionsContainer>

			{
				Object.entries(search.facets).map(([k, v]) => {
					if (v) {
						return (
							<SCheckContainer shown={filter === k}>
								{
									Object.entries(v).map(([k2, v2]) => {
										return (
											<div>
												<input name={k2} id={k2} type="checkbox" key={k2} checked={activeFilters.includes(k2)} onChange={handleCheck} />
												<label htmlFor={k2}>{k2}</label>
											</div>
										)
									})
								}
							</SCheckContainer>
						)
					}
				})
			}

			<SCheckContainer shown={filter === "one"}>
				<input name="type-yoga" type="checkbox" filter="type" key="typeBox1" checked={activeFilters.includes("yoga")} onChange={handleCheck} />
				<label for="type-yoga">yoga</label>
			</SCheckContainer>
			<SCheckContainer shown={filter === "two"}>
				<input name="type-cardio" type="checkbox" key="typeBox4" checked={activeFilters.includes("cardio")} onChange={handleCheck} />
				<label for="type-cardio">cardio</label>
				<input name="type-stretch" type="checkbox" key="typeBox5" checked={activeFilters.includes("stretch")} onChange={handleCheck} />
				<label for="type-stretch">stretch</label>
			</SCheckContainer>

		</>
	)
}


const SCheckContainer = styled.div`
	display: ${({ shown }) => shown ? "flex" : "none"};
	flex-flow: column nowrap;
	width: 50rem;
	justify-content: center;
	align-items: center;
	input, label {
		font-size: 2rem;
		font-family: Raleway;
	}
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	height: 60px;
	div {
		display: block;
		width: 20rem;
		margin: 2rem;
		border-radius: 50px;
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