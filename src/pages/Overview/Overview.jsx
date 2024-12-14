
import { useEffect, useState } from 'react';
import styles from './Overview.module.scss';
import ApexChart from '../../pages/Overview/lineChart';
import { loadProducts } from '../../controllers/OverviewController';

function Overview() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts(setProducts);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperTitle}>
                    <p>概要</p>
                </div>
                <div className={styles.lineChartWrapper}>
                    <div className={styles.lineChartExpa}>
                        <ApexChart products={products} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
