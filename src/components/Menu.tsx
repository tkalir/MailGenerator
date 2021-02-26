import { connect } from "react-redux";
import { State, Block } from "../reducers";
import BlockMenuItem from './BlockMenuItem'
import {selectBlock} from "../actions"

  type StateProps = {
  blocks: Block[];
  activeBlockName: string;
};

type ActionProps = {
  selectBlock: (blockName: string) => void
}

type Props = StateProps & ActionProps

function mapStateToProps(state: State): StateProps {
  return { blocks: state.blocks, activeBlockName: state.activeBlockName };
}

const mapDispatchToProps = {
  selectBlock,
  };

function Menu(props: Props) {
  return (
    <div className='menu'>
      {props.blocks.map((block) => (
        <BlockMenuItem
          name={block.name}
          isActive={props.activeBlockName === block.name}
          onClick={() => props.selectBlock(block.name)}
        />
      ))}
      <button>+</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
