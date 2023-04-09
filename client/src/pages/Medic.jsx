import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setoptionBill, setpage } from "../reducer/appSlice";

const Medic = () => {

    const dispatch = useDispatch();
    const app = useSelector(state => state.app);
    const Option = [
        {
            name : "ตกจากที่สูง",
            price : 300
        },
        {
            name : "รถชน",
            price : 400
        },
    ]

    const handleSubmit = () => {
        console.log(app.optionBill)
    }

    return (
        <>
            <div className="Medic">
                <div className="Medic-Content">
                    <h2>
                        รายการบิล
                    </h2>
                    <select name="" id="" onChange={(e) => dispatch(setoptionBill(e.target.value))}>
                        <option value=''>โปรดเลือกรายการ</option>
                        {
                            ((!Option) ? <h1>load</h1> : Option.map((data, i) => {
                                return (
                                    <>
                                        <option value={data.name}>{data.name} - ${data.price}</option>
                                    </>
                                )
                            }))
                        }
                    </select>
                    <div className="flex">
                        <div className="action-btn" onClick={() => dispatch(setpage('GetStarted'))}>
                            ย้อนกลับ
                        </div>
                        <div className="action-btn sub" onClick={handleSubmit}>
                            ยืนยัน
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Medic;