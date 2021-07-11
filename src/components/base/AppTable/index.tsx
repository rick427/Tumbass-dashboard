import React from 'react';

import './app-table.scss';
import product1 from '../../../assets/product-1.png';
import product2 from '../../../assets/product-2.png';
//import product3 from '../../../assets/product-3.png';

const AppTable: React.FC = () => {
    return (
        <div className="app__table">
            <table>
                <thead>
                    <tr>
                        <th>Photos</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <figure className="app__table__image">
                                <img src={product1} alt="product-1"/>
                            </figure>
                        </td>
                        <td>
                            <h2>Legion</h2>
                            <p>#2807856940</p>
                        </td>
                        <td>Aug 12, 2020</td>
                        <td>Laptops</td>
                        <td>Lenovo</td>
                        <td className="badge">$500.00</td>
                        <td>
                            <h2>Available</h2>
                            <p>18k viewers</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <figure className="app__table__image">
                                <img src={product2} alt="product-2"/>
                            </figure>
                        </td>
                        <td>
                            <h2>Console</h2>
                            <p>#2807856940</p>
                        </td>
                        <td>Aug 15, 2020</td>
                        <td>Gaming</td>
                        <td>Sony</td>
                        <td className="badge">$850.00</td>
                        <td>
                            <h2>Available</h2>
                            <p>67k viewers</p>
                        </td>
                    </tr>
                    {/* <tr>
                        <td>
                            <figure className="app__table__image">
                                <img src={product3} alt="product-2"/>
                            </figure>
                        </td>
                        <td>
                            <h2>Iphone X</h2>
                            <p>#2807856940</p>
                        </td>
                        <td>Aug 18, 2020</td>
                        <td>Phones</td>
                        <td>Apple</td>
                        <td className="badge">$470.00</td>
                        <td>
                            <h2>Available</h2>
                            <p>10k viewers</p>
                        </td>
                    </tr> */}
                </tbody>
            </table>        
        </div>
    )
}

export default AppTable;
