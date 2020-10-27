import React from 'react';
import './App.css';
import {SearchWithState} from "./instanceVariableNotUpdating/components/SearchWithState";
import {SearchWithoutRef} from "./instanceVariableNotUpdating/components/SearchWithoutRef";

function App() {
    return (
        <div className="App">
            <SearchWithoutRef/>
            <SearchWithState/>
        </div>
    );
}

export default App;
