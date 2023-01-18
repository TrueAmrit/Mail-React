import Header from "../header/header";
import LeftMenu from "../menu/menu";
import MessageCat from "../message/messageCat";
import AppRoute from "../Routes/app-route";

const CustomLayout = (props) => {
  return (
    <div className="custom">
      <Header />
      <LeftMenu />
      {props.children}
    </div>
  );
};
export default CustomLayout;
