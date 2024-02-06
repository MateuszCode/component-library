import React from "react"
import classnames from "classnames"
import { CiImport } from "react-icons/ci";

export default function Card({children, title, className, icon, iconColor, iconClass, onIconClick, ...rest}) {
    const iconClasses = `card-icon 
                         card-icon-${iconColor ? iconColor : "blue"} 
                         ${iconClass}
                         ${onIconClick ? "card-icon-hover-state" : ""}`

    const allClasses = classnames("card", className)
    
    return (
        <div className={allClasses} {...rest}>
            <div 
            className={iconClasses}
            onClick={onIconClick ? onIconClick : () => {}}>
                {icon ? icon : <CiImport />}
            </div>

            <div>
                <h2>
                    {title}
                </h2>
                <p className="card-text">
                    {children}
                </p>
            </div>
        </div>
    )
}