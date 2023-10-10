import React from 'react'


export default function NavContent() {

    const navStyle = {
        textAlign: 'center !important',
        display: 'block',
        paddingTop: ' 32px !important',
        paddingBottom: ' 32px !important'
    };
  return (
<div className='navContainer' style = {{textAlign: 'center !important', display: 'block', paddingTop: '32px !important', paddingBottom: '32px !important'}}>
        <div style = {{fontWeight: 'bolder', fontSize: '36px'}}>
            MY BLOG
        </div>
        <div>
            Welcome to the blog of <span style={{backgroundColor: 'white', filter: 'invert(100%)'}}>unknown</span>
        </div>
    </div>
  )
}
