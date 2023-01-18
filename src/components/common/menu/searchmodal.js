import { useContext, useEffect, useState } from 'react';
import { AllMail } from '../../../helper/all';
import { MyContext } from '../context/app-context';
import IconButton from '../icon-button/iconbutton';
import { ModalContainer } from './style';
const SearchModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const context =useContext(MyContext)
  
  const handleChange = (e) => {
    setSearchText(e.target.value);
    const filterMail = AllMail.filter(
      (mail) =>
        mail.subject.toLowerCase().includes(e.target.value.toLowerCase()) 
    );
    context.setAllMail(filterMail);
  };
  useEffect(()=>{
    context.setAllMail(AllMail)
  },[])
  const handleAdd = (mail) => {
    context.setSelectedCat();
    context.setCurrentMail(mail);
    props.closeModal()
    }
  return (
    <ModalContainer>
    <div className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-tittle">Search Mail</div>
          <IconButton data={"close"} handleClick={props.closeModal} />
        </div>
        <div className="content-modal">
          <div className="search-input">
            <input
              placeholder="search Mail..."
              type="text"
              class="input"
              value={searchText}
              onChange={handleChange}
            />
          </div>
          <div className="cities-container">
            {context.allMail.map((mail) => {
              return (
                <div className="city-container" onClick={() => handleAdd(mail)}>
                  <div>{mail.subject}</div>
                </div>
              );
            })}
            {context.allMail.length === 0 && <div>Data not found</div>}
          </div>
        </div>
      </div>
      <div
        className="close-clicked"
        onClick={(e) => {
          e.preventDefault();
          props.closeModal();
        }}
      ></div>
    </div>
    </ModalContainer>
  )
};
export default SearchModal;