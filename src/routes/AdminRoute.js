import { Route, Switch } from "react-router-dom";
import styles from '../pages/layouts/css/Content.module.scss';

import List from "../pages/Manage/List/List";
import Add from "../pages/Manage/Add/Add";

import Personal from "../pages/Personal/Personal";
import Overview from "../pages/Overview/Overview";

function ContentAdmin() {
    return (
        <div className={styles.content}>
            <Switch>
                <Route path='/personal' component={Personal} />
                <Route path='/overview' component={Overview} />

                {/* Quản lý kho Routes */}
                <Route path='/manage/list' component={List} />
                <Route path='/manage/add' component={Add} />

            </Switch>
        </div>
    );
}

export default ContentAdmin;