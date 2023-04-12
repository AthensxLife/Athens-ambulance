import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setoptionBill, setpage } from "../reducer/appSlice";
import cogoToast from "cogo-toast";
import axios from "axios";

const Medic = () => {

    const dispatch = useDispatch();
    const app = useSelector(state => state.app);

    const menumedic = [
        {
            icon: <i class="fa-solid fa-notes-medical"></i>,
            name : 'ฟื้นฝูชีวิต',
            event : 'revive'
        },
        {
            icon: <i class="fa-sharp fa-light fa-capsules"></i>,
            name : 'รักษาบาดแผลเล็กๆ',
            event : 'small'
        },
        {
            icon: <i class="fa-sharp fa-light fa-capsules"></i>,
            name : 'รักษาบาดแผลสาหัส',
            event : 'big'
        },
        {
            icon: <i class="fa-solid fa-car"></i>,
            name : 'ใส่ในเข้าไปในรถ',
            event : 'put_in_vehicle'
        },
        {
            icon: <i class="fa-solid fa-id-card-clip"></i>,
            name : 'ตรวจบัตรประชาชน',
            event : 'check_idcard'
        },
        {
            icon: <i class="fa-sharp fa-solid fa-child"></i>,
            name : 'แย่งศพ',
            event : 'thief'
        },
    ]
    
    const handleEventName = (e) => {
        cogoToast.loading("Pending ...");
        let promise = new Promise(async (resolve, reject) => {
            await axios.post(`http://${app.ResourceName}/${e}`,
            JSON.stringify({})).then((cb) => {
                if (cb) {
                    resolve(cb)
                } else {
                    resolve(cb)
                }
            })
        });
         
        promise.then(value => {
            if (value) {
                cogoToast.success(`การกระทำ สำเร็จ`);
                dispatch(setpage('GetStarted'))
            } else {
                cogoToast.Error(`การกระทำ ไม่สำเร็จ`);
                dispatch(setpage('GetStarted'))
            }
        });
    }

    return (
        <>
            <div className="Previous" onClick={() => dispatch(setpage('GetStarted'))}>
                <i class="fa-solid fa-angles-left"></i>
            </div>
            <div className="Athens-Medic">
                {
                    ((!menumedic) ? <h1>Loading..</h1> : menumedic.map((data, i) => {
                        return (
                            <>
                                <div className="Athens-Medic-Item" onClick={() => handleEventName(data.event)}>
                                    <div className="Athens-Medic-Item-Icon">
                                        {data.icon}
                                    </div>
                                    <div className="Athens-Medic-Item-name">
                                        {data.name}
                                    </div>
                                </div>
                            </>
                        )
                    }))
                }
                <div className="Tips">
                    กด <span>L</span> เพื่อเปิด / ปิด คำแนะนำ
                </div>
            </div>
        </>
    )
}

export default Medic;