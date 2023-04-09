import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setpage } from "../reducer/appSlice";

const GetStarted = () => {

    const dispatch = useDispatch();
    const app = useSelector(state => state.app);

    const option = [
        {
            icon : <i class="fa-solid fa-suitcase-medical"></i>,
            name : 'เมนูหมอ',
            page : 'Medic'
        },
        {
            icon : <i class="fa-regular fa-file-invoice"></i>,
            name : 'ใส่บิล',
            page : 'Bill'
        },
    ]

    return (
        <>
            <div className="GetStarted">
                {
                    ((!option) ? <h1>Loading</h1> : option.map((data, i) => 
                    {
                        return (
                            <>
                                <div className="GetStarted-GG" onClick={() => dispatch(
                                    setpage(data.page)
                                )}>
                                    <div className="GetStarted-GG-icon">
                                        {data.icon}
                                    </div>
                                    <div className="GetStarted-GG-Content">
                                        {data.name}
                                    </div>
                                </div>
                            </>
                        )
                    }))
                }
            </div>
        </>
    )
}

export default GetStarted;