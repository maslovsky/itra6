import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigator from "../navigator/navigator";
import News from '../news/news';

import topics from '../../enums/topics';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigator />

                    <div className="main-content">
                        <Route path="/itra6" exact render={() => <News search={topics.whatIsUp} />} />
                        <Route path="/bee" exact render={() => <News search={topics.bee} />} />
                        <Route path="/ufo" exact render={() => <News search={topics.ufo} />} />
                        <Route path="/js" exact render={() => <News search={topics.js} />} />
                        <Route path="/health" exact render={() => <News search={topics.health} />} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;