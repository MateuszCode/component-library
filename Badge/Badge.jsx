import React from "react"
import classnames from "classnames"

export default function Badge({children, color, shape, className, ...rest}) {
    
    let shapeClass = shape ? `badge-${shape}` : ""
    let colorClass = color ? `badge-${color}` : `badge-gray`
    const allClasses = classnames(shapeClass, colorClass, "badge", className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}