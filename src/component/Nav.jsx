import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// subscribing to the store by using useSelector hook 


// const style={padding:"10px"}
function Nav() {
  const data = useSelector((store) => store.cart.items)
  
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
                              <Link to='/'> <li>Home</li></Link>
                              <Link to= '/login'><li key={2}>Log in</li></Link> 
                               <Link to='/contact'><li key={3}>Contact Us</li></Link>
                              <Link to="/cart"><li key={1}>Cart {data.length} items</li></Link> 
                           </ul>
                   </aside>
          </section>
</>
  )
}

export default Nav
