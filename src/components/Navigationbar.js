import React from 'react';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../font/iconfont.js';

export default class Navigationbar extends React.Component { 
    constructor(props){
        super(props);
    }

    render(){
        let style={padding:"15px"};
        return(
            <div className='container' style={style}>
            

            <input type="text"  className="form-control" ref='input' placeholder="热点内容" >

            </input>

            <button className="search" >查找</button>
            
            <Button onClick={this.btnClick}>
            <svg className="icon-fenlei" aria-hidden="true">
            <use xlinkHref="#icon-fenlei"></use>
            </svg>
            </Button>

            <Link to='/'>
            <svg className="icon-faxian" aria-hidden="true">
            <use xlinkHref="#icon-faxian"></use>
            </svg>
            </Link>


            </div>
        )
    }
 }
