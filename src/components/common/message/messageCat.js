import { useContext, useState } from "react"
import { MyContext } from "../context/app-context"
import MailDetail from "./mail-detail"
import { CategoryStyle } from "./style"

const MessageCat=(props)=>{
    const context = useContext(MyContext)
    const [showModal, setShowModal] = useState(false);
    const showDetailCard = (mail) => {
        context.setCurrentMail(mail);
        context.setcardState(true);
      };
return(
    <CategoryStyle>
    <div className="category-wrapper">
    {context.selectedCat.length === 0 ? (
              <div className="no-mail">All set.<br/>Inbox is Empty</div>
            ) : (
              <>
                {props.cat.map((mail) => {
                  return (
                    <div
                      className="mail-box"
                      onClick={() => showDetailCard(mail)}
                    >
                      <div className="mail-d">{mail.subject}</div>
                      <div className="mail-d">{mail.content}</div>
                    </div>
                  );
                })}
              </>
            )}
    </div>
    <MailDetail/>
    </CategoryStyle>
)
}

export default MessageCat