import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faAngleLeft, faAngleDown,faCartPlus, faList } from '@fortawesome/free-solid-svg-icons';

export const SidebarData =  [

            {
                title: '管理',
                icon: <FontAwesomeIcon icon={faTasks}/>,
                iconClosed: <FontAwesomeIcon icon={faAngleLeft}/>,
                iconOpened: <FontAwesomeIcon icon={faAngleDown}/>,
                key: 1,
                id: '20',
        
                subNav: [                                   
                    {
                        title: '追加',
                        path: '/manage/add',
                        icon: <FontAwesomeIcon icon={faCartPlus}/>,
                        id: '23',
        
                    },
                    {
                        title: 'リスト',
                        path: '/manage/list',
                        icon: <FontAwesomeIcon icon={faList}/>,
                        id: '24',
        
                    }
        
                ]
            }
]