
type Props = {
    name: string;
    isActive: boolean;
    onClick: () => void;
  };
  
  function BlockMenuItem(props: Props) {
    return <button className='menu__block-button' disabled={props.isActive} onClick={props.onClick}>{props.name} </button>;
  }
  

  export default BlockMenuItem