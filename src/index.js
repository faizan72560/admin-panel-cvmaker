import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect, Router,BrowserRouter } from "react-router-dom";
import AuthLayout from "layouts/auth";
// import AdminLayout from "layouts/admin";
import AdminLayout from "./layouts/admin/index"
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import setupLocatorUI from "@locator/runtime";
import SignIn from "views/auth/signIn";



import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'rsuite/styles/index.less';
import secureLocalStorage from "react-secure-storage"
// import Get from "Get";



// if (process.env.NODE_ENV === "development") {
//     setupLocatorUI();
// }
// 
let  value= secureLocalStorage.getItem("83a570d5-e5cd-4af2-8f12-0a743d9cdb9b")
console.log(value)



ReactDOM.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <ThemeEditorProvider>
                {/* <HashRouter> */}
                <BrowserRouter>
                {/* <Router> */}
                    <Switch>
                        {/* <SignIn/> */}

                        <Route exact path={`/`} component={SignIn} />
                       
                        
                        {/* <Get/> */}
                       
                       
                        
                    {/* <Route path={`/signin`} component={AuthLayout} /> */}
                    {/* <Route path={`/sign-in`} component={SignIn} /> */}

                       {/* <Route path={`/auth`} component={AuthLayout} /> */}
                      {value&& <Route path={`/admin`} component={AdminLayout} />}
                        {/* <Route path={`/rtl`} component={RTLLayout} /> */}
                        {/* <Redirect from='/' to={true ? '/admin' : '/sign-in'} /> */}
                       

                    </Switch>
                    {/* </Router> */}
                {/* </HashRouter> */}
                </BrowserRouter>
            </ThemeEditorProvider>
        </React.StrictMode>
    </ChakraProvider>,
    document.getElementById("root")
);
