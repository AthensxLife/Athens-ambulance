import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setoptionBill, setpage } from "../reducer/appSlice";
import cogoToast from 'cogo-toast';
import axios from "axios";

const Bill = () => {
    
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
        // console.log(app.optionBill)
        cogoToast.loading("Pending ...");
        let promise = new Promise(async (resolve, reject) => {
            const result = Option.filter((datas) => datas.name == app.optionBill);
            console.log(result[0].name)
            await axios.post(`http://${app.ResourceName}/CreateBill`,
            JSON.stringify({ title :  result[0].name, price : result[0].price})).then((cb) => {
                if (cb) {
                    resolve(cb)
                    console.log(cb)
                } else {
                    resolve(cb)
                    console.log(cb)
                }
            })
        });
         
        promise.then(value => {
            if (value) {
                cogoToast.success(`Success`);
                dispatch(setpage('GetStarted'))
            } else {
                cogoToast.Error(`Error`);
                dispatch(setpage('GetStarted'))
            }
        });
    }

    return (
        <>
            <div className="Athens-Bill">
                <div className="Athens-Bill-Content">
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

export default Bill;