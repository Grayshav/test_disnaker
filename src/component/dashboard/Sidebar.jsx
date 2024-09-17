import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <a href='/' className='nav-link'><h3>Pengaduan Layanan</h3></a>
                </div>
                <ul className="list-unstyled components">
                    <p>2024</p>
                  <Link to='/pengadu'><li><a href="">Data Pengadu</a></li></Link>
               <Link to='/pengaduan' className='Link'><li><a href="">Data Tiket Pengaduan </a></li></Link> 
                </ul>
            </nav>
       
        </>
    )
}

export default Sidebar;