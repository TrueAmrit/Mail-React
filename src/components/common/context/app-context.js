import React, { useState } from "react";
import { AllMail } from "../../../helper/all";
import { Deleted } from "../../../helper/deleted";
import { Inbox } from "../../../helper/inbox";
import { Sent } from "../../../helper/sent";
import { Spam } from "../../../helper/spam";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [selectedCat, setSelectedCat] = useState(Inbox);
  const [allMail, setAllMail] = useState(AllMail);
  const [currentMail, setCurrentMail] = useState();
  const [cardState, setcardState] = useState(false);
  const [mode, setMode] = useState("light");
  const[deleted,setDeleted]=useState(Deleted)
  const[inbox,setInbox]=useState(Inbox)
  const[sent,setSent]=useState(Sent)
  const[spam,setSpam]=useState(Spam)

  const value = {
    selectedCat,
    setSelectedCat,
    currentMail,
    setCurrentMail,
    cardState,
    setcardState,
    mode,
    setMode,
    allMail, setAllMail,
    deleted,setDeleted,
    inbox,setInbox,
    sent,setSent,
    spam,setSpam
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
