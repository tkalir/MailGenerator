import { Action, setBlockTextType, selectBlockType } from "../actions";

export type State = {
  blocks: Block[];
  activeBlockName: string;
};

type Inputs = { name: string };

export type Block = { name: string; text: string };

let rootBlock: Block = {
  name: "root",
  text: "huh?",
};

const initialState: State = {
  blocks: [
    rootBlock,
    { name: "tamar", text: "I am Tamar" },
    { name: "boop", text: "I am also Tamar" },
  ],
  activeBlockName: rootBlock.name,
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case setBlockTextType: {
      const newState = JSON.parse(JSON.stringify(state));
      const blockIndex: number = newState.blocks.findIndex(
        (block: Block) => block.name === action.payload.blockName
      );
      if (blockIndex == -1) {
        throw new Error(`Couldn't find block named ${action.payload.blockName}`)
      }
      newState.blocks[blockIndex].text = action.payload.text;

      return newState;
    }
    case selectBlockType: {
            return {...state, activeBlockName: action.payload.blockName}
        }
    default: {
        return state;
      }    
}
}

export default reducer;
