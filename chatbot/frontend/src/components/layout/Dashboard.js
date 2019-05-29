import React, { Fragment } from "react";
import AddUser from './AddUser';
import Home from './Home';

export default function Dashboard() {
    return(
        <Fragment>
            <AddUser />
            <Home />
        </Fragment>
    );
}