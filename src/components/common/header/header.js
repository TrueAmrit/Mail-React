import { HeaderStyle } from "./style"

const Header=()=>{
    return(
        <HeaderStyle>
        <div className="header-wrapper">
            <div className="heading-container">Outlook Mail</div>
            <div className="unread-container">unread</div>
        </div>
        </HeaderStyle>
    )
}
export default Header