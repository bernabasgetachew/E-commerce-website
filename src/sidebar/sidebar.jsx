import './sidebar.css';
import Category from './categories/category';
import Color from './color/color';
import Price from './price/price';
import { FaCartArrowDown } from "react-icons/fa";

function Sidebar({handleChange}){
    
    return(
        <>
        <section className='sidebar'>
            <div className='logo'>
                <h1><FaCartArrowDown /></h1>
            </div>
            <Category handleChange={handleChange} />
            <Color handleChange={handleChange} />
            <Price handleChange={handleChange} />
        </section>

        </>
    );
}
export default Sidebar;