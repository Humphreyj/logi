import React,{useState} from 'react';

const PayoutCalculator = () => {
    
    return (
        <div>
            <h1 className="title">Payout Calc</h1>
            <form>
                <div className="form-element">
                    <label>Investment</label>
                    <input type="number"/>
                </div>
                <div className="form-element">
                    <label>Gross Payout</label>
                    <input type="number"/>
                </div>
                <div className="form-element">
                    <label>Crew Members</label>
                    <input type="number"/>
                </div>

                <button>Calculate</button>
            </form>
        </div>
    );
}

export default PayoutCalculator;
