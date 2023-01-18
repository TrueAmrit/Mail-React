import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Deleted } from "../../../helper/deleted";
import { Inbox } from "../../../helper/inbox";
import { Sent } from "../../../helper/sent";
import { Spam } from "../../../helper/spam";
import { MyContext } from "../context/app-context";
import IconButton from "../icon-button/iconbutton";
import SearchModal from "./searchmodal";
import { SidebarMenu } from "./style";

const LeftMenu = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const selectedCat = (cat,nav) => {
    navigate(nav)
    context.setSelectedCat(cat);
    context.setCurrentMail();
    context.setcardState(false);
  };
  const searchMail = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <SidebarMenu>
      <div className="sidebar-wrapper">
        <div className="search-input" style={{"display":"flex", "justifyContent":"center","cursor": "pointer"}} onClick={searchMail}><b>Search</b>
          <IconButton data={"search"}  />
        </div>
        <div className="subfolder" onClick={() => selectedCat(context.inbox,"/")}>
          Inbox
        </div>
        <div className="subfolder" onClick={() => selectedCat(context.spam,"/spam")}>
          Junk Mail
        </div>
        <div className="subfolder" onClick={() => selectedCat(context.sent,"/sent")}>
          Sent Items
        </div>
        <div className="subfolder" onClick={() => selectedCat(context.deleted,"/deleted")}>
          Deleted Items
        </div>
        {showModal ? <SearchModal closeModal={closeModal} /> : <></>}
      </div>
    </SidebarMenu>
  );
};

export default LeftMenu;
