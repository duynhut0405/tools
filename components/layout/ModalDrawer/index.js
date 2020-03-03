import React, { Component } from 'react';
import './style.css';


class index extends Component {
    render() {
        return (
            <div className="okdeno">
                    <div className="wrapul main">
                        <div className="inner">
                            <ul className="menu">
                                <li className="active children">
                                    <a href="#"><span>Khách hàng cá nhân</span></a>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">01_demo_block</a></li>
                                        <li><a href="#">01_demo_category</a></li>

                                        <li className="children">
                                            <a href="#">02_CN-San-pham-noi-bat</a>
                                            <ul>
                                                <li><a href="#">05_CN-SFNB-1</a></li>
                                                <li><a href="#">06_CN-SFNB-2</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="#">03_CN-Tai-khoan</a></li>
                                        <li><a href="#">04_CN-Ngan-hang-so</a></li>

                                    </ul>
                                </li>
                                <li className="children">
                                    <a href="#"><span>Khách hàng doanh nghiệp</span></a>
                                    <ul>
                                        <li><a href="#">Doanh nghiệp vừa và nhỏ</a></li>
                                        <li><a href="#">Doanh nghiệp lớn</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><span>Cá nhân cao cấp</span></a></li>
                                <li><a href="#"><span>Blog</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

export default index;