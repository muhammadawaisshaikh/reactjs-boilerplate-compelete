import React from 'react';
import { Link } from "react-router-dom";
import AppRoutes from '../AppRoutes';

const _routes = AppRoutes.registeredRoutes();

export default function Sidebar() {
    return (
        <div>
            {
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
            }
        </div>
    );
}