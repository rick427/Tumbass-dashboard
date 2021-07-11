import React from 'react';

import './metrics.scss';
import { IMetric as IProps } from '../../../constants/home.constants';

const Metrics: React.FC<IProps> = ({metric}) => {

    const renderMetric = (): JSX.Element[] => {
        return metric.map(el => (
            <div key={el.id} className="overview__grid__card">        
                <div className="overview__grid__card__icons">
                   <i className={`${el.icon} ${el.color}`}/>
                   <span className={el.status}>{el.percent}</span>
               </div>
               <h1>${el.amount.toLocaleString()}</h1>
               <p>{el.title}</p>
            </div>
        ))
    };

    return <>{renderMetric()}</>
}

export default Metrics;
