import { connect } from "react-redux";
import { State, Block } from "../reducers";
import { setBlockText } from "../actions";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type StateProps = { currentBlock: Block };

type ActionProps = {
  setBlockText: (blockName: string, text: string) => void;
};

type Props = StateProps & ActionProps;

function mapStateToProps(state: State): StateProps {
  const currentBlock = state.blocks.find(
    (block) => block.name === state.activeBlockName
  );
  if (!currentBlock) {
    throw new Error("no active block :((((");
  }
  return {
    currentBlock,
  };
}

const mapDispatchToProps = {
  setBlockText,
};

function Editor(props: Props) {
  return (
    <ReactQuill
      key={`quill-block-${props.currentBlock.name}`}
      value={props.currentBlock.text}
      onChange={(content) =>
        props.setBlockText(props.currentBlock.name, content)
      }
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
