import React from "react";
import GetStarted from "./pages/GetStarted";
import { useDispatch, useSelector } from "react-redux";
import Medic from "./pages/Medic";
import Bill from "./pages/Bill";

const App = () => {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch()

    return (
        <>
            <div className="app_init">
                <div className="app_body">
                    <div className="Header">
                        {app.page}
                    </div>
                    {app.page == 'GetStarted' && <GetStarted />}
                    {app.page == 'Medic' && <Medic />}
                    {app.page == 'Bill' && <Bill />}
                </div>
            </div>
        </>
    )
}

export default App;