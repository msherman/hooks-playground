import React from 'react';
import './App.css';
import {SearchWithState} from "./instanceVariableNotUpdating/components/SearchWithState";
import {SearchWithoutRef} from "./instanceVariableNotUpdating/components/SearchWithoutRef";
import {SearchWithObjectState} from "./instanceVariableNotUpdating/components/SearchWithObjectState";

function App() {
    return (
        <div className="App">
            <SearchWithoutRef/>
            <SearchWithState/>
            <SearchWithObjectState />
        </div>
    );
}

export default App;
