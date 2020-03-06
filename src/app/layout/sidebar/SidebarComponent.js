import React from 'react';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div>
            <Link to="/login">login</Link>
            <br />
            <Link to="/homepage">homepage</Link>
        </div>
    );
}