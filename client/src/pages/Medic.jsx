import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setoptionBill, setpage } from "../reducer/appSlice";

const Medic = () => {

    const menumedic = [
        {
            icon: <i class="fa-solid fa-notes-medical"></i>,
            name : 'ฟื้นฝูชีวิต',
            event : ''
        },
        {
            icon: <i class="fa-sharp fa-light fa-capsules"></i>,
            name : 'รักษาบาดแผลเล็กๆ',
            event : ''
        },
        {
            icon: <i class="fa-sharp fa-light fa-capsules"></i>,
            name : 'รักษาบาดแผลสาหัส',
            event : ''
        },
        {
            icon: <i class="fa-solid fa-notes-medical"></i>,
            name : 'ใส่ในเข้าไปในรถ',
            event : ''
        },
        {
            icon: <i class="fa-solid fa-notes-medical"></i>,
            name : 'ฟื้นฝูชีวิต',
            event : ''
        },
        {
            icon: <i class="fa-solid fa-notes-medical"></i>,
            name : 'ฟื้นฝูชีวิต',
            event : ''
        },
    ]
    
    return (
        <>
            <div className="Athens-Medic">
                <div className="Athens-Medic-Item">
                    sad
                </div>
                <div className="Athens-Medic-Item">
                    sad
                </div>
                <div className="Athens-Medic-Item">
                    sad
                </div>
                <div className="Athens-Medic-Item">
                    sad
                </div>
                <div className="Athens-Medic-Item">
                    sad
                </div>
            </div>
        </>
    )
}

export default Medic;