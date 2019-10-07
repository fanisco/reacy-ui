import React, { useState } from 'react';
import { Button } from './Button';

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            { count }
            <Button onClick={() => setCount(count + 1)}>Test</Button>
        </div>
    );
};

export default App;
