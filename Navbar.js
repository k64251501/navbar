import React from 'react' 
class Navbar extends React.Component{
    render(){
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a href='#' className='navbar nav-brand'>react example</a>
            <div>
                <ul className='navbar-nav'>
                    <li className='nav-list'><a href='#' className='nav-link'>home</a></li>
                    <li className='nav-list'><a href='#' className='nav-link'>contact</a></li>
                    <li className='nav-list'><a href='#' className='nav-link'>about</a></li>    
                </ul>
                </div>
               </nav> 
    }
}
export default Navbar