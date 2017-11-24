import React, { Component } from 'react';
import 'url-search-params-polyfill';

import Header from '../components/Header';
import Menu from '../components/Menu';

import MobilePayment from '../demos/MobilePayment';
import QiwiWalletPayment from '../demos/QiwiWalletPayment';

import './App.scss';

/*
Пример ссылки: http://localhost:5005/?method=mobilePayment&status=success#mobilePayment
*/

export default class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            lang: 'ru',
            order: ['qiwiWalletPayment', 'mobilePayment'],
            demos: {
                mobilePayment: {
                    id: 'mobilePayment',
                    name: 'Оплата с МК',
                    view: 'checkingOrder',
                    acceptedViews: ['success'],
                    doc: 'https://developer.qiwi.com/ru/pull-mobile-payments/',
                    git: 'https://github.com/QIWI-API/pull-payments-demo'
                },
                qiwiWalletPayment: {
                    id: 'qiwiWalletPayment',
                    name: 'Оплата с QIWI Кошелька',
                    view: 'checkingOrder',
                    acceptedViews: ['success', 'error'],
                    doc: 'https://developer.qiwi.com/ru/pull-payments/index.html',
                    git: 'https://github.com/QIWI-API/pull-payments-demo'
                }
            }
        };
    }

    componentDidMount() {

        let demos = this.state.demos;

        const search = new URLSearchParams(window.location.search);

        const method = search.get('method');

        const status = search.get('status');

        if(demos[method]) {

            let demo = demos[method];

            if(demo.acceptedViews.includes(status)){

                demos[method].view = status;

                this.setState({
                    demos
                })
            }
        }
    }

    changeLang = (lang) => {
        this.setState({
            lang
        });
    }

    changeHash = (demo) => {

        const hash = `#${demo}`;

        if(history.pushState) {
            history.pushState(null, null, hash);
        }
        else {
            window.location.hash = hash;
        }
    }

    demoStateChanger = (demo) => {

        const demos = this.state.demos;

        return (nextView) => {

            this.changeHash(demo);

            demos[demo].view = nextView;

            this.setState({
                demos
            });
        }

    }

    render() {

        const { mobilePayment, qiwiWalletPayment } = this.state.demos;

        const demosMap = {
            mobilePayment: (index) => <MobilePayment state={mobilePayment} stateChanger={this.demoStateChanger('mobilePayment')} key={index}/>,
            qiwiWalletPayment: (index) => <QiwiWalletPayment state={qiwiWalletPayment} stateChanger={this.demoStateChanger('qiwiWalletPayment')} key={index}/>
        };


        return (<div>
            <Header lang={this.state.lang} changeLang={this.changeLang}/>
            <main className="main">
                <Menu order={this.state.order} info={this.state.demos}/>
                <div className="layout">
                    {this.state.order.map((demo,index)=>{
                        return demosMap[demo](index);
                    })}
                </div>
            </main>
        </div>)
    }
}