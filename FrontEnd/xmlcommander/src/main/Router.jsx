
import React from 'react'
import {Switch , Route , Redirect} from 'react-router'

import Home from "../Components/home/Home"
import SendForm from "../Class/FileSelector"
import CancelFrom from '../Class/CancelInvoice'

export default props => 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/users' component={SendForm} />
        <Route path='/cancelInvoice' component={CancelFrom} />
        <Redirect from="*" to="/" />
    </Switch>