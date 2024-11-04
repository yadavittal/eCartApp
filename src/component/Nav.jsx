import React from 'react'

// const style={padding:"10px"}
function Nav() {
    
  return (
    // fragments
    // <></> symbol where we can write multiple divs inside div.
<> 
          <section className='navBar'>
                   <aside className='logo'>
                          <img height="50px" width="60px" src="https://cdn.pixabay.com/photo/2021/02/17/13/47/bitcoin-6024248_640.jpg" alt="App Logo" />
                   </aside>
                   <aside className='navLst'>
                           <ul>
                               <li>Home</li>
                               <li>Log in</li>
                               <li>Contact Us</li>
                           </ul>
                   </aside>
          </section>
</>
  )
}

export default Nav
