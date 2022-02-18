import { TreeModel, TreeActionType } from "../types/tree.type"

const initState:TreeModel = {
	Name: "tree",
	Age: 1,
	height: 100,
}

const reducer = (state = initState, action: TreeActionType) : TreeModel => {
	let newState = {...state};
	
	switch (action.type) {
		case "IRRIGATE" :
			newState.height = state.height + action.payload/100;
			return newState;

		case "FERTILIZE" :
			newState.height = state.height + action.payload/10;
			return newState;

		case "TRIM" :
			newState.height = state.height - action.payload;
			return newState;

		case "NEXTYEAR" :
			newState.Age = state.Age + 1;
			return newState;

		default :
			return state;
	}
};

export default reducer;