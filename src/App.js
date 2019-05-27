import React from "react";
import "./index.css";
import Header from './components/header';
import Feed from './components/feed';

function App() {
    return (
        <div className="App">
            <Header />
            <Feed />
        </div>
    )
}

export default App;