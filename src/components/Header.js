import React from 'react';
import{Link} from 'react-router-dom';

export default function Header(props){
    const{usename}=props;

    return(
        <header>
            <h1>SchoolWeiBo</h1>
            <div className="use-menu">
                <h2>Welcome {usename}</h2>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/account/profile/captainCode">Profile</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}