import React, { Component } from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';

import MobilePayment from '../demos/MobilePayment';
import QiwiWalletPayment from '../demos/QiwiWalletPayment';

import './App.scss';

/*
 ссылка вида #[метод оплаты]/[номер оплаты]/[success/fail]
 */

export default class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            lang: 'ru',
            order: ['mobilePayment', 'qiwiWalletPayment'],
            demos: {
                mobilePayment: {
                    id: 'mobilePayment',
                    name: 'Оплата с баланса мобильного',
                    view: 'paymentByMobile',
                    doc: 'https://developer.qiwi.com',
                    git: 'https://github.com'
                },
                qiwiWalletPayment: {
                    id: 'qiwiWalletPayment',
                    name: 'Выставление счета на сайте партнера',
                    view: 'checkingOrder',
                    doc: 'https://developer.qiwi.com',
                    git: 'https://github.com'
                }
            }
        };
    }

    demoStateChanger = (demo) => {

        const demos = this.state.demos;

        return (nextView) => {

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
            <Header lang={this.state.lang}/>
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