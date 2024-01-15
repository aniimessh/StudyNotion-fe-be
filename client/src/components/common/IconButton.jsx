import React from 'react'

const IconButton = ({text, onclick, children, disable, outline=false, cutomClasses, type}) => {
  return (
    <button disabled={disable} onClick={onclick} type={type}>
        {
            children ? (
                <>
                <span>{text}</span>
                {children}
                </>
            ) : (
                <span>{text}</span>
            )
        }
    </button>
  )
}

export default IconButton