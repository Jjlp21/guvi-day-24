import React from 'react'
import {Link} from 'react-router-dom';

function SideBar() {
    return (
        <div style={{ position:'fixed'}}>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider my-0"/>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider"/>

                <li class="nav-item">
                    <Link to='/all-students'>
                    <a class="nav-link" href="#">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>All users</span></a>
                    </Link>
                </li>

                <li class="nav-item">
                   <Link to='/add-student'>
                   <a class="nav-link" href="#">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Add user</span></a>
                   </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr class="sidebar-divider"/>
            </ul>
            </div>
    )
}

export default SideBar; 
