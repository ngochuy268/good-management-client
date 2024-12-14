import styles from './css/Layout.module.scss';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../components/sidebar/SidebarData';
import Header from '../../components/header/Header';
import ContentAdmin from '../../routes/AdminRoute';
import { TreeView } from '@mui/lab';
import ArrowDropdownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TreeItem from '@mui/lab/TreeItem';
import { useState, useEffect } from 'react';
import {
    getUserData,
    handleAvatarUpdate,
    toggleSidebar,
    closeSidebarOnSmallScreen,
} from '../../controllers/LayoutController';

function LayoutAdmin() {
    const [userData, setUserData] = useState({ name: '', avatar: null });
    const [avatarUpdateTime, setAvatarUpdateTime] = useState(Date.now());
    const [openSideBarMenu, setOpenSideBarMenu] = useState(true);

    useEffect(() => {
        const cleanup = handleAvatarUpdate(setAvatarUpdateTime);
        return cleanup;
    }, []);

    useEffect(() => {
        getUserData(setUserData, setAvatarUpdateTime);
    }, [avatarUpdateTime]);

    return (
        <div className={styles.container}>
            <div
                className={`${styles.gridColumn2} ${
                    openSideBarMenu ? styles.sidebarOpen : styles.sidebarClosed
                }`}
            >
                {/* User Info */}
                <div className="pageHeadWrapper">
                    <div className={styles.userAdmin}>
                        <div style={{ width: '80px' }} align="center">
                            <img
                                src={userData.avatar}
                                alt="user-logo"
                                style={{ width: '50px', borderRadius: '50%' }}
                            />
                        </div>
                        <div className={styles.pageNameWrapper}>
                            <Link to="/personal" className={styles.pageNameUser}>
                                {userData.name}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ArrowDropdownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    className={styles.treeViewComponent}
                    sx={{
                        flexGrow: 1,
                        maxWidth: 400,
                        overflowY: 'auto',
                        textAlign: 'left',
                        padding: '30px 20px',
                        color: 'white',
                    }}
                >
                    <TreeItem
                        nodeId="1"
                        label={
                            <Link to="/overview" className={styles.pageMenuItems}>
                                <div className={styles.pageMenuItemsName}>
                                    <p>概要</p>
                                </div>
                            </Link>
                        }
                    />
                    {SidebarData.map((item, index) => (
                        <TreeItem
                            key={index}
                            nodeId={item.id}
                            label={
                                <div className={styles.pageMenuItems}>
                                    {item.icon}
                                    <p>{item.title}</p>
                                </div>
                            }
                        >
                            {item.subNav.map((subItem, subIndex) => (
                                <TreeItem
                                    key={subIndex}
                                    nodeId={subItem.id}
                                    label={
                                        <Link to={subItem.path} className={styles.pageMenuItems}>
                                            <div className={styles.pageMenuItemsName}>
                                                {subItem.icon}
                                                <p>{subItem.title}</p>
                                            </div>
                                        </Link>
                                    }
                                />
                            ))}
                        </TreeItem>
                    ))}
                </TreeView>
            </div>

            {openSideBarMenu && (
                <div
                    className={styles.overlay}
                    onClick={() => closeSidebarOnSmallScreen(setOpenSideBarMenu)}
                />
            )}

            {/* Main Content */}
            <div className={styles.gridColumn10}>
                <Header handleOpenSideBarMenu={() => toggleSidebar(openSideBarMenu, setOpenSideBarMenu)} />
                <ContentAdmin />
            </div>
        </div>
    );
}

export default LayoutAdmin;
