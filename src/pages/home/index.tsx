import React from 'react';

import './home.scss';
import logo from '../../assets/logo-2.svg';
import product1 from '../../assets/product-1.png';
import product2 from '../../assets/product-2.png';
import product3 from '../../assets/product-3.png';

import Metrics from '../../components/ui/Metrics';
import Graph from '../../components/ui/Graph';
import Layout from '../../components/layout/Layout';
import AppTable from '../../components/base/AppTable';
import {metrics} from '../../constants/home.constants';

const HomePage: React.FC = () => {
    return (
        <Layout>
            <div className="home">
                <div className="overview">
                    <div className="overview__search">
                        <i className="bi-search"/>
                        <input placeholder="Search for product"/>
                    </div>

                    <div className="">
                        <h1 className="overview__title">Overview</h1>

                        <div className="overview__grid">
                            <Metrics metric={metrics}/>
                        </div>
                    </div>
                    
                    <div className="overview__graph">
                        <Graph/>
                    </div>

                    <div className="overview__table">
                        <h1 className="overview__table__heading">popular products</h1>
                        <AppTable/>
                    </div>
                </div>


                <article className="summary">
                    <div className="summary__icons">
                        <figure className="summary__icons__icon">
                            <i className="bi-bell-fill"/>
                        </figure>

                        <figure className="summary__icons__icon">
                            <i className="bi-pen-fill"/>
                        </figure>
                    </div>

                    <figure className="summary__logo">
                        <img src={logo} alt="logo"/>
                    </figure>

                    <h1 className="summary__heading u-center-text">
                        Kirigaya Kazuto
                    </h1>

                    <ul className="summary__info">
                        <li className="summary__info__item">
                            <figure className="summary__info__item__icon">
                                <i className="bi-basket3-fill"/>
                            </figure>

                            <div className="summary__info__item__content">
                                <h3>218</h3>
                                <p>Products</p>
                            </div>
                        </li>

                        <div className="divider"/>

                        <li className="summary__info__item">
                            <figure className="summary__info__item__icon">
                                <i className="bi-people-fill"/>
                            </figure>

                            <div className="summary__info__item__content">
                                <h3>2,580</h3>
                                <p>Followers</p>
                            </div>
                        </li>
                    </ul>

                    <h1 className="summary__title">
                        Reputation
                    </h1>

                    <div className="summary__progress">
                        <figure className="summary__progress__icon">
                            <i className="bi-bookmark-star-fill"/>
                        </figure>

                        <div className="summary__progress__wrapper">
                            <div className="info">
                                <h4>Star seller</h4>
                                <p>85%</p>
                            </div>

                            <div className="bar"/>
                        </div>
                    </div>

                    <div className="summary__orders">
                        <div className="summary__orders__header">
                            <h1>
                                Recent Orders
                            </h1>
                            <h2>
                                See All
                            </h2>
                        </div>

                        <div className="summary__orders__card">
                            <div className="summary__orders__card__row">
                                <div className="summary__orders__card__product">
                                    <figure>
                                        <img src={product1} alt="product-1"/>
                                    </figure>
                                    <div>
                                        <h2>Legion</h2>
                                        <p>2 Minutes Ago</p>
                                    </div>
                                </div>
                                <h3>+$80.00</h3>
                            </div>
                            <div className="summary__orders__card__row">
                                <div className="summary__orders__card__product">
                                    <figure>
                                        <img src={product2} alt="product-1"/>
                                    </figure>
                                    <div>
                                        <h2>Console</h2>
                                        <p>2 Minutes Ago</p>
                                    </div>
                                </div>
                                <h3>+$80.00</h3>
                            </div>
                            <div className="summary__orders__card__row">
                                <div className="summary__orders__card__product">
                                    <figure>
                                        <img src={product3} alt="product-1"/>
                                    </figure>
                                    <div>
                                        <h2>Iphone X</h2>
                                        <p>2 Minutes Ago</p>
                                    </div>
                                </div>
                                <h3>+$80.00</h3>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export default HomePage;
