import React, { useState } from 'react';

function CoinToss() {
    const [result, setResult] = useState('');

    const tossCoin = () => {
        const tossResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
        setResult(tossResult);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <h1>Coin Toss App</h1>
            <button onClick={tossCoin} style={{ padding: '10px 20px', fontSize: '20px' }}>
                Toss Coin
            </button>
            <h2 style={{ marginTop: '20px' }}>{result}</h2>
        </div>
    );
}

export default CoinToss;
