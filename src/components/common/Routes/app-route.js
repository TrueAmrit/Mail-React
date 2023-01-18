import { ConfigContext } from "antd/es/config-provider";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { MyContext } from "../context/app-context";
import CustomLayout from "../custom-layout/custom-layout";
import MessageCat from "../message/messageCat";

function AppRoute(){
    const context =useContext(MyContext)
    return (
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <CustomLayout>
                  <MessageCat cat={context.inbox}/>
                  </CustomLayout>
              }
            />
            <Route
              path="/spam"
              element={
                <CustomLayout>
                <MessageCat cat={context.spam}/>
                </CustomLayout>
              }
            />
            <Route
              path="/sent"
              element={
                <CustomLayout>
                <MessageCat cat={context.sent}/>
                </CustomLayout>
              }
            />
            <Route
              path="/deleted"
              element={
                <CustomLayout>
                <MessageCat cat={context.deleted}/>
                </CustomLayout>
              }
            />
           </Routes>
        </div>
      );
    }
export default AppRoute;