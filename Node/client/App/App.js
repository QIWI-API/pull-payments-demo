import React, { Component } from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';

import './App.scss';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            lang: {}
        };
    }

    render() {
        return (<div>
            <Header/>
            <main className="main">
                <Menu/>
                <div className="layout">
                    <h1>Demo</h1>
                </div>
            </main>
        </div>)
    }
}