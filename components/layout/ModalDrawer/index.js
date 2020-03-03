import React, { Component } from 'react';
import './style.css';


class index extends Component {
    render() {
        return (
            <div>
                <div className="styledrawer">
                    <ul>
                        <li className="active children">
                            <a href="#"><span>Khách hàng cá nhân</span></a>
                            <hr></hr>
                            <ul>
                                <li><a href="#">01_demo_block</a></li>
                                <hr></hr>
                                <li><a href="#">01_demo_category</a></li>
                                <hr></hr>
                                <li className="children">
                                    <a href="#">02_CN-San-pham-noi-bat</a>
                                    <hr></hr>
                                        <ul>
                                            <li><a href="#">05_CN-SFNB-1</a></li>
                                            <hr></hr>
                                            <li><a href="#">06_CN-SFNB-2</a></li>
                                            <hr></hr>
                                        </ul>				
                                </li>
                                <li><a href="#">03_CN-Tai-khoan</a></li>
                                    <hr></hr>
                                <li><a href="#">04_CN-Ngan-hang-so</a></li>
                                <hr></hr>
                                <li><a href="#">06_abouts</a></li>
                                <hr></hr>
                                <li><a href="#">04_CN-Ngan-hang-so</a></li>
                                <hr></hr>
                                <li><a href="#">07_lanh_dao</a></li>
                                <hr></hr>
                                <li><a href="#">08_Blog</a></li>
                                <hr></hr>
                            </ul>		
                        </li>
                        <li className="children">
                            <a href="#"><span>Khách hàng doanh nghiệp</span></a>
                            <hr></hr>
                            <ul>
                                <li><a href="#">Doanh nghiệp vừa và nhỏ</a></li>
                                <hr></hr>
                                <li><a href="#">Doanh nghiệp lớn</a></li>
                                <hr></hr>
                                <li><a href="#">13_Login</a></li>
                                <hr></hr>
                                <li><a href="#">14_Nhà đầu tư</a></li>
                                <hr></hr>
                            </ul>		
                        </li>
                        <li><a href="#"><span>Cá nhân cao cấp</span></a></li>
                        <hr></hr>
                        <li><a href="#"><span>MB kết nối</span></a></li>
                        <hr></hr>
                    </ul>
                </div>
            </div>
        );
    }
}

export default index;