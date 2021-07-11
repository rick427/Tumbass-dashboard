export interface IMetric{
    metric: {
        id: number,
        icon: string,
        percent: string,
        title: string,
        amount: number,
        color: string,
        status: string,
    }[]
};

export const metrics: IMetric["metric"] = [
    {
        id: 1,
        percent: '+24%',
        title: 'total sales',
        amount: 27340,
        icon: 'bi-basket3-fill',
        color: 'orange',
        status: 'success',
    },
    {
        id: 2,
        percent: '-32%',
        title: 'total expenses',
        amount: 11125,
        icon: 'bi-pie-chart-fill',
        color: 'purple',
        status: 'danger',
    },
    {
        id: 3,
        percent: '+48%',
        title: 'total visitors',
        amount: 18260,
        icon: 'bi-people-fill',
        color: 'success',
        status: 'success',
    },
    {
        id: 4,
        percent: '-12%',
        title: 'total orders',
        amount: 11340,
        icon: 'bi-cart-dash-fill',
        color: 'danger',
        status: 'danger',
    },
]