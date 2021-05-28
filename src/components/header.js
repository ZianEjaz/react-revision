import React from 'react';
import '../style.css';

 const Header = ()=>{
        return (
            <header>
                <h1>HEADER</h1>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/users'>Users</a></li>
                        <li><a href='/jsontoproduct'>Json data to product block</a></li>
                    </ul>
                </nav>
                

            </header>
        )
    }


export default Header