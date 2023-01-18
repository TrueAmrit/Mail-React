import { useContext } from "react";
import { Deleted } from "../../../helper/deleted";
import { MyContext } from "../context/app-context";
import IconButton from "../icon-button/iconbutton";
import { MailDetailContainer } from "./style";

const MailDetail = () => {
  const context = useContext(MyContext);
  const deleteMail=()=>{
    const current = [...context.deleted, context.currentMail];
      context.setDeleted(current);
      const filterInbox= context.selectedCat.filter((c) => c.mID !== context.currentMail.mID)
      context.setInbox(filterInbox)
      const filterspam= context.selectedCat.filter((c) => c.mID !== context.currentMail.mID)
      context.setspam(filterspam)
      const filtersent= context.selectedCat.filter((c) => c.mID !== context.currentMail.mID)
      context.setsent(filtersent)
      
      
  }
  return <MailDetailContainer>
    {context.cardState ? (
        <div className="right-card">
          <div className="right-card-header">
            <div>{context.currentMail.subject}</div>
            <IconButton data={"delete"} handleClick={deleteMail} />
          </div>
          <div className="right-card-content">
            <div style={{color:"#3867d6"}}>
              <i>{context.currentMail.content}</i>
            </div>
            <hr />
          </div>
        </div>
      ) : (
        <>Select an item to read</>
      )}
  </MailDetailContainer>;
};
export default MailDetail;
