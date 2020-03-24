import React from 'react';
import { Link } from "react-router-dom";
import AppRoutes from '../AppRoutes';

const _routes = AppRoutes.registeredRoutes();

export default function Sidebar() {
    return (
        <div>

            {/* {
                _routes.map((item, i) => {
                    const _routeItem = AppRoutes.getRoute(item);
                    const itemKey = `${item}_${i}`;
        
                    if (_routeItem.name) {
                        return (
                            <Link key={itemKey} to={_routeItem.path} style={{padding: 10}}>
                                {_routeItem.name}
                            </Link>
                        );
                    }
                })
            } */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {
                                _routes.map((item, i) => {
                                    const _routeItem = AppRoutes.getRoute(item);
                                    const itemKey = `${item}_${i}`;
                        
                                    if (_routeItem.name) {
                                        return (
                                            <li key={itemKey} className="nav-item active">
                                                <Link className="nav-link" to={_routeItem.path}>{_routeItem.name}</Link>
                                            </li>
                                        );
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}