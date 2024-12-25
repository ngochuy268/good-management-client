
import { useEffect, useState } from 'react';
import styles from './Overview.module.scss';
import ApexChart from '../../pages/Overview/lineChart';
import { loadProducts } from '../../controllers/OverviewController';
<<<<<<< HEAD
import PacmanLoader from "react-spinners/PacmanLoader";

function Overview() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts(setProducts);
        setLoading(false);
    }, []);

    if(loading) return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            flexDirection: 'column'
        }}>
            <PacmanLoader
                color="#ff6f61"
                size={70}
                loading={loading}
            />
        </div>
      );

=======

function Overview() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts(setProducts);
    }, []);

>>>>>>> 96b5d83ff81be181acd324d80c5d6c156dfb0db8
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
<<<<<<< HEAD

// NODE_OPTIONS=--openssl-legacy-provider
// NODE_OPTIONS=--openssl-legacy-provider
=======
>>>>>>> 96b5d83ff81be181acd324d80c5d6c156dfb0db8
