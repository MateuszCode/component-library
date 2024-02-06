import React from "react"
import classnames from "classnames"
import { IoWarning } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";


export default function Banner({children, color, state, className, title, expandable, ...rest}) {
    let colorClass
    let icon
    let textColorClass

    if (state === "success") {
        colorClass = "banner-green"
        textColorClass = "banner-text-green"
        icon = <IoCheckmarkCircle className="banner-icon icon-green" />

    }
    if (state === "warning") {
        colorClass = "banner-yellow"
        textColorClass = "banner-text-yellow"
        icon = <IoWarning className="banner-icon icon-yellow" />

    }
    if (state === "neutral") {
        colorClass = "banner-blue"
        textColorClass = "banner-text-blue"
        icon = <IoInformationCircle className="banner-icon icon-blue" />

    }
    if (state === "danger") {
        colorClass = "banner-red"
        textColorClass = "banner-text-red"
        icon = <IoCloseCircle className="banner-icon icon-red" />

    }

    const allClasses = classnames(colorClass, "banner", className,)


    const [open, setOpen] = React.useState(false)

    function handleClick() {
        setOpen(oldValue => !oldValue)
    }

    let textElement 

    if (expandable && children) {
        textElement = open ? <p className={`${textColorClass} banner-text`}>{children}</p> : null
    } else if (children) {
        textElement = <p className={`${textColorClass} banner-text`}>{children}</p>
    } else {
        textElement = null
    }

    return (
        <div className={allClasses} {...rest}
        style={{cursor: children && expandable ? `pointer` : `auto`}}
        onClick={children && expandable ? handleClick : () => {}}>
            <div>
            {icon}

            </div>
            <div>
                <h3>{title}</h3>
                {textElement}
            </div>
        </div>
    )
}