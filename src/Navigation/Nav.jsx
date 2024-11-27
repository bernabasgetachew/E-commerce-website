import './Nav.css';
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai';
function Navigation({query,handleInputChange}){
    return(
        <nav>
            <div className='nav-container'>
                <input type='text' className='search-container' value={query} onChange={handleInputChange} placeholder='search for shoes' />
            </div>
            <div className='profile-container'>
                <a href='#'>
                    <FiHeart className='nav-icons'/>
                </a>
                <a href='#'>
                    <AiOutlineShoppingCart className='nav-icons'/>
                </a>
                <a href='#'>
                    <AiOutlineUserAdd className='nav-icons'/>
                </a>
            </div>
        </nav>

    );
}
export default Navigation;