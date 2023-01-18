import { IconButtonStyle } from "./style";

const IconButton = (props) => {
  const { data, handleClick } = props;
  return (
    <IconButtonStyle>
      <span onClick={handleClick} class="material-symbols-outlined">
        {data}
      </span>
    </IconButtonStyle>
  );
};
export default IconButton;


