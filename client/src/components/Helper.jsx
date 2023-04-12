import React from "react";
import { useSelector } from "react-redux";
const Help = () => {

    const app = useSelector(state => state.app);

    return (
        <>
            <div className={`Help ${((!app.toggleHelp || !app.Mainmenu) ? '' : 'active')}`}>
                <div className="Help-Item">
                    <div className="Help-Item-btn">
                        <span>
                            SHIFT
                        </span>
                        <span className="plus">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                        <span>
                            1
                        </span>
                    </div>
                    <div className="Help-Item-Name">
                        ฟื้นฝูชีวิต
                    </div>
                </div>
                
                <div className="Help-Item">
                    <div className="Help-Item-btn">
                        <span>
                            SHIFT
                        </span>
                        <span className="plus">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                        <span>
                            2
                        </span>
                    </div>
                    <div className="Help-Item-Name">
                        รักษาบาดแผลเล็กๆ
                    </div>
                </div>
                
                <div className="Help-Item">
                    <div className="Help-Item-btn">
                        <span>
                            SHIFT
                        </span>
                        <span className="plus">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                        <span>
                            3
                        </span>
                    </div>
                    <div className="Help-Item-Name">
                        รักษาบาดแผลสาหัส
                    </div>
                </div>
                
                <div className="Help-Item">
                    <div className="Help-Item-btn">
                        <span>
                            SHIFT
                        </span>
                        <span className="plus">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                        <span>
                            4
                        </span>
                    </div>
                    <div className="Help-Item-Name">
                        ฟื้นฝูชีวิต
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help;