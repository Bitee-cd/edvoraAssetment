
import React from 'react'

function Header({user}) {




    return (
        <div className="header flex justify-between bg-[#111] text-white p-4">     
            <h1 className="text-4xl font-bold">Edvora</h1>
            {
                user &&
                <>
                 <div className="profile flex justify-center">
                    <h4>{user.name}</h4>
                <div className="imageBox mx-3">
                    <img className="rounded-full h-7 w-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjX3SOTIfrK1Kt1czaejkmTg6i93_WjzivjdnJPNLO2dttISoDQ3KrFEzrOhCTelV00mY&usqp=CAU" alt="" />
                </div>
            </div>
                </>
            }
        </div>
    )
}

export default Header