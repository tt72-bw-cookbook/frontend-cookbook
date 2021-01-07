export const initialState = {

	recipeData: {
		elements: []
	},
	search: {
		queryCategory: "",
		querySearch: "",
		queryString: "",
		categories: {},
		sort: "",
	},
	static: {
		facets: {
			course: {
				_name: "Course",
				appetizer: {
					category: "course",
					id: "appetizer",
					name: "Appetizer",
				},
				breakfast: {
					category: "course",
					id: "breakfast",
					name: "Breakfast"
				},
				brunch: {
					category: "course",
					id: "brunch",
					name: "Brunch"
				},
				buffet: {
					category: "course",
					id: "buffet",
					name: "Buffet"
				},
				dessert: {
					category: "course",
					id: "dessert",
					name: "Dessert"
				},
				dinner: {
					category: "course",
					id: "dinner",
					name: "Dinner"
				},
				lunch: {
					category: "course",
					id: "lunch",
					name: "Lunch"
				},
				side: {
					category: "course",
					id: "side",
					name: "Side"
				},
				beverage: {
					category: "course",
					id: "beverage",
					name: "Beverage"
				},
			},
			cuisine: {
				_name: "Cuisine",
				italian: {
					category: "cuisine",
					id: "italian",
					name: "Italian"
				},
				mexican: {
					category: "cuisine",
					id: "mexican",
					name: "Mexican"
				},
				moroccan: {
					category: "cuisine",
					id: "moroccan",
					name: "Moroccan"
				},
				french: {
					category: "cuisine",
					id: "french",
					name: "French"
				},
				asian: {
					category: "cuisine",
					id: "asian",
					name: "Asian"
				},
				indian: {
					category: "cuisine",
					id: "indian",
					name: "Indian"
				},
				thai: {
					category: "cuisine",
					id: "thai",
					name: "Thai"
				},
				vietnamese: {
					category: "cuisine",
					id: "vietnamese",
					name: "Vietnamese"
				},
				american: {
					category: "cuisine",
					id: "american",
					name: "American"
				},
			},
			dietaryconcerns: {
				_name: "Dietary Concerns",
				healthy: {
					category: "dietaryconcerns",
					id: "healthy",
					name: "Healthy",
				},
				highFiber: {
					category: "dietaryconcerns",
					id: "high-fiber",
					name: "High Fiber",
				},
				kidFriendly: {
					category: "dietaryconcerns",
					id: "kidFriendly",
					name: "Kid Friendly"
				},
				kosher: {
					category: "dietaryconcerns",
					id: "kosher",
					name: "Kosher"
				},
				kosherForPassover: {
					category: "dietaryconcerns",
					id: "kosherForPassover",
					name: "Kosher for Passover"
				},
				lowCholesterol: {
					category: "dietaryconcerns",
					id: "lowCholesterol",
					name: "Low Cholesterol",
				},
				lowFat: {
					category: "dietaryconcerns",
					id: "lowFat",
					name: "Low Fat"
				},
				lowNoSugar: {
					category: "dietaryconcerns",
					id: "lowNoSugar",
					name: "Low/No Sugar"
				},
				lowSodium: {
					category: "dietaryconcerns",
					id: "lowSodium",
					name: "Low Sodium"
				},
				organic: {
					category: "dietaryconcerns",
					id: "organic",
					name: "Organic"
				},
				quickAndEasy: {
					category: "dietaryconcerns",
					id: "quickAndEasy",
					name: "Quick & Easy"
				},
				raw: {
					category: "dietaryconcerns",
					id: "raw",
					name: "Raw"
				},
				vegan: {
					category: "dietaryconcerns",
					id: "vegan",
					name: "Vegan"
				},
				vegetarian: {
					category: "dietaryconcerns",
					id: "vegetarian",
					name: "Vegetarian"
				},
				wheatGlutenFree: {
					category: "dietaryconcerns",
					id: "wheatGlutenFree",
					name: "Wheat/Gluten Free"
				},
			},
			technique: {
				_name: "Technique",
				barbecue: {
					category: "technique",
					id: "barbecue",
					name: "Barbecue"
				},
				bake: {
					category: "technique",
					id: "bake",
					name: "Bake"
				},
				roast: {
					category: "technique",
					id: "roast",
					name: "Roast"
				},
				braise: {
					category: "technique",
					id: "braise",
					name: "Braise"
				},
				saute: {
					category: "technique",
					id: "saute",
					name: "Sauté"
				},
				noCook: {
					category: "technique",
					id: "noCook",
					name: "No-Cook"
				},
				stirFry: {
					category: "technique",
					id: "stirFry",
					name: "Stir-Fry"
				},
				panFry: {
					category: "technique",
					id: "panFry",
					name: "Pan-Fry"
				},

			}
		}
	}
}