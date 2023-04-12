import React, { useEffect } from "react";
import GetStarted from "./pages/GetStarted";
import { useDispatch, useSelector } from "react-redux";
import Medic from "./pages/Medic";
import Bill from "./pages/Bill";
import Help from "./components/Helper";
import { setMainmenu, setResourceName, settoggleHelp } from "./reducer/appSlice";
import axios from "axios";

const App = () => {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch()

    window.addEventListener('message', (e) => {
        if (e.data.Mainmenu) {
            dispatch(setMainmenu(true))
            dispatch(setResourceName(e.data.resourcename))
        } else {
            dispatch(setMainmenu(false))
        }
    });

    window.addEventListener("keydown", (e) => {
        switch (e.code) {
            case 'KeyL':
                dispatch(settoggleHelp(((app.toggleHelp == true) ? false : true)))

                // if (app.toggleHelp) {
                //     var audio = new Audio('https://cdn.discordapp.com/attachments/1042413869269778503/1095350421498908742/Test.m4a');
                //     audio.play();    
                // } else {
                //     var audio2 = new Audio('https://cdn.discordapp.com/attachments/1042413869269778503/1095350617154781294/2.m4a');
                //     audio2.play();
                // }
                break;
            case 'Escape' : 
                // var audio = new Audio('https://cdn.discordapp.com/attachments/1042413869269778503/1095350617154781294/2.m4a');
                // audio.play();
                axios.post(`http://${app.ResourceName}/Exit`, JSON.stringify({})).then(() => {
                    dispatch(setMainmenu(false))
                })
                break;
            default:
                break;
        }
    })
    return (
        <>
            <div className="app_init">
                <div className={`app_body ${((app.Mainmenu) ? 'active' : '')}`}>
                    <div className="Header">
                        {app.page}
                    </div>
                    {app.page == 'GetStarted' && <GetStarted />}
                    {app.page == 'Medic' && <Medic />}
                    {app.page == 'Bill' && <Bill />}
                </div>
                
                <Help />

                asd
            </div>
        </>
    )
}

export default App;