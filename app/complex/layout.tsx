
import React from 'react'

function layout({children , parallRoute } : {children: React.ReactNode , parallRoute: React.ReactNode}) {   
  return (
    <>
    
    
    <div>{children}</div>
    <div>
        {parallRoute}
    </div>
    </>


  )
}

export default layout