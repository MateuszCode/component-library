import React from "react"
import classnames from "classnames"
import { createPortal } from 'react-dom';
import { IoWarningOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Popup({children, className, title, state, position, ...rest}) {
    let colorClass
    let icon
    let textColorClass

    if (state === "success") {
        colorClass = "popup-green"
        textColorClass = "popup-text-green"
        icon = <IoCheckmarkCircleOutline className="popup-icon popup-icon-green" />

    }
    if (state === "warning") {
        colorClass = "popup-yellow"
        textColorClass = "popup-text-yellow"
        icon = <IoWarningOutline className="popup-icon popup-icon-yellow" />

    }
    if (state === "neutral") {
        colorClass = "popup-blue"
        textColorClass = "popup-text-blue"
        icon = <IoInformationCircleOutline className="popup-icon popup-icon-blue" />

    }
    if (state === "danger") {
        colorClass = "popup-red"
        textColorClass = "popup-text-red"
        icon = <IoCloseCircleOutline className="popup-icon popup-icon-red" />

    }

    const allClasses = classnames(colorClass, "popup", className, `popup-position-${position}`)

    return (
        <div>
        {createPortal(<div className={allClasses} {...rest}>
            <div>
            {icon}
            </div>
            <div>
                <h3>{title}</h3>
                <p className={`${textColorClass} popup-text`}>{children}</p>
            </div>
        </div>,
        document.body)}
        </div>)
    
}