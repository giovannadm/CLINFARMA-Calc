import { Layout as AntdLayout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGlassCheers, faHome, faKey, faMessage, faMoneyBill, faRightFromBracket, faTasks, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./navbar";

import LogoRS from '../../assets/img/logo.png';
import LogoUFSCPA from '../../assets/img/logoUFSCPA.png';

const { Sider, Content } = AntdLayout;

const items = [
    {
        key: 'HOME',
        label: 'Home',
        icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
        key: 'MY_REPUBLIC',
        label: 'Minha república',
        icon: <FontAwesomeIcon icon={faKey} />,
        children: [
            {
                key: 'REPUBLIC_FINANCE',
                label: 'Financeiro',
                icon: <FontAwesomeIcon icon={faMoneyBill} />,
            },
            {
                key: 'REPUBLIC_TASKS',
                label: 'Tarefas',
                icon: <FontAwesomeIcon icon={faTasks} />,
            },
            {
                key: 'REPUBLIC_MEMBERS',
                label: 'Colegas',
                icon: <FontAwesomeIcon icon={faUsers} />,
            }
        ]
    },
    {
        key: 'EVENTS',
        label: 'Rolês',
        icon: <FontAwesomeIcon icon={faGlassCheers} />
    },
    {
        key: 'MESSAGES',
        label: 'Mensagens',
        icon: <FontAwesomeIcon icon={faMessage} />
    },
    {
        key: 'STUDIES',
        label: 'Estudos',
        icon: <FontAwesomeIcon icon={faBook} />
    },
    {
        key: 'PROFILE',
        label: 'Perfil',
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        key: 'LOGOUT',
        label: 'Logout',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />
    },
]

export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const onCollapse = () => {
        setCollapsed(!collapsed);
    }

    const onSelect = ({ key }) => {
        switch (key) {
        case 'HOME':
            navigate('/');
            break;
        case 'REPUBLIC_MEMBERS':
            navigate('/');
            break;
        case 'REPUBLIC_FINANCE':
            navigate('/');
            break;
        case 'REPUBLIC_TASKS':
            navigate('/');
            break;
        case 'SEARCH':
            navigate('/');
            break;
        case 'EVENTS':
            navigate('/');
            break;
        case 'MESSAGES':
            navigate('/');
            break;
        case 'STUDIES':
            navigate('/');
            break;
        case 'PROFILE':
            navigate('/');
            break;
        case 'LOGOUT':
            navigate('/');
            break;
        }
    }

    return (
        <div className="relative h-screen">
            <Navbar />
            <div className="min-h-[calc(100%)] h-auto flex flex-col bg-gray-200 pt-24">
                <Outlet />
                <footer className="mt-auto h-20 bg-white flex">
                    <div
                        className="w-full h-auto bg-center bg-no-repeat bg-contain"
                        style={{
                            backgroundImage: `url(${LogoRS})`,
                        }}
                    />
                    <div
                        className="w-full h-auto bg-center bg-no-repeat bg-contain my-2"
                        style={{
                            backgroundImage: `url(${LogoUFSCPA})`,
                        }}
                    />
                </footer>
            </div>
        </div>
    )

}
