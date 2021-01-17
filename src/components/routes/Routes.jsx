import React from 'react';
import {Route} from 'react-router-dom'

//components
import Splash from '../splash/Splash';
import PayoutCalculator from '../tools/PayoutCalculator';
import CitizenLookup from '../tools/CitizenLookup';
import MealPlanner from '../tools/MealPlanner';
import FPSloadouts from '../tools/FPSloadouts';

const Routes = () => {
    return (
        <>
        <Route exact path='/' component={Splash}/>
        <Route exact path='/payout-calc' component={PayoutCalculator}/>
        <Route exact path='/citizen-lookup' component={CitizenLookup}/>
        <Route exact path='/meal-planner' component={MealPlanner}/>
        <Route exact path='/fps-loadouts' component={FPSloadouts}/>
            
        </>
    );
}

export default Routes;
