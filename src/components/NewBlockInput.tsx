import { useState, createRef, useEffect } from "react";
import { connect } from "react-redux";
import { addBlock } from "../actions";
import { State } from "../reducers";

type Props = StateProps & ActionProps;

type StateProps = {
  existingBlockNames: string[];
};

type ActionProps = {
  addBlock: (blockName: string) => void;
};

const mapStateToProps = (state: State): StateProps => {
  return { existingBlockNames: state.blocks.map((block) => block.name) };
};

const mapDispatchToProps = {
  addBlock,
};

const isWhiteSpace = (str: string) => !str.match(/\S/);

function NewBlockInput(props: Props) {
  const [showInput, setShowInput] = useState(false);
  const [blockName, setBlockName] = useState("");

  const saveNewBlock = () => {
    props.addBlock(blockName);
    resetState();
  };

  const resetState = () => {
    setShowInput(false);
    setBlockName("");
  };

  const alreadyExists = props.existingBlockNames.includes(blockName);
  const isError = alreadyExists || isWhiteSpace(blockName);

  const errorMsg = alreadyExists ? "fucing aleardy exists" : "illegal name";

  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  return showInput ? (
    <>
      {isError ? errorMsg : "fine"}
      <input
        ref={inputRef}
        value={blockName}
        onChange={(e) => setBlockName(e.target.value)}
      />
      <button onClick={saveNewBlock} disabled={isError}>
        save
      </button>
      <button onClick={resetState}>cancel</button>
    </>
  ) : (
    <button onClick={() => setShowInput(true)}>+</button>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBlockInput);
