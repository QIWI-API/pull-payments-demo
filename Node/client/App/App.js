import React, {Component} from 'react';
import 'url-search-params-polyfill';
import cn from 'classnames';

import Header from '../components/Header';
import Menu from '../components/Menu';

import MobilePayment from '../demos/MobilePayment';
import QiwiWalletPayment from '../demos/QiwiWalletPayment';
import CheckOutRedirect from '../demos/CheckOutRedirect';

import i18n from '../localization';
import './App.scss';

import Languages from '../lang';

/*
Пример ссылки: http://localhost:5005/?method=mobilePayment&status=success#mobilePayment
*/

export default class App extends Component {

    changeLang = (lang) => {

        i18n.changeLanguage(lang);

        this.setState({
            lang
        });
    };

    changeLangAndURL = (lang) => {
        const localeURLMatches = window.location.href.match(/\/demo\/([^\/]+)\//);
        (localeURLMatches === null) ? window.open(`//${window.location.host}/demo/${lang}/`, "_self") : window.open(window.location.href.replace(`/${localeURLMatches[1]}/`, `/${lang}/`), "_self")
    };

    constructor(props) {
        super(props);
        const localeURLMatches = window.location.href.match(/\/demo\/([^\/]+)\//);
        let langOfURL;
        if(Array.isArray(localeURLMatches) && localeURLMatches[1] !== null){
            langOfURL = localeURLMatches[1];
        }
        this.state = {
            lang: langOfURL || this.changeLangAndURL(Languages.RU),
            isMenuOpen: false,
            order: ['checkOutRedirect', 'qiwiWalletPayment', 'mobilePayment'],
            demos: {
                mobilePayment: {
                    id: 'mobilePayment',
                    view: 'checkingOrder',
                    acceptedViews: ['success'],
                    doc: `https://developer.qiwi.com/${langOfURL}/pull-mobile-payments/`,
                    git:
                        'https://github.com/QIWI-API/pull-payments-demo/tree/master/Node/examples/pull-payments-white-label-example'
                },
                qiwiWalletPayment: {
                    id: 'qiwiWalletPayment',
                    view: 'checkingOrder',
                    acceptedViews: ['success', 'error'],
                    doc:
                        `https://developer.qiwi.com/${langOfURL}/pull-payments/index.html`,
                    git:
                        'https://github.com/QIWI-API/pull-payments-demo/tree/master/Node/examples/pull-payments-example'
                },
                checkOutRedirect: {
                    id: 'checkOutRedirect',
                    view: 'checkingOrder',
                    acceptedViews: ['success'],
                    doc: `https://developer.qiwi.com/${langOfURL}/bill-payments/`,
                    git:
                        'https://github.com/QIWI-API/pull-payments-demo/tree/master/Node/examples/bill-payments-redirect-example'
                }
            }
        };

    }

    componentDidMount() {
        let demos = this.state.demos;

        const search = new URLSearchParams(window.location.search);

        const method = search.get('method');

        const status = search.get('status');

        if (demos[method]) {
            let demo = demos[method];

            if (demo.acceptedViews.includes(status)) {
                demos[method].view = status;

                this.setState({
                    demos
                });
            }
        }
        this.changeLang(this.state.lang);
    }

    changeHash = (demo) => {
        const hash = `#${demo}`;

        window.location.hash = '';

        window.location.hash = hash;
    };

    toggleMenu = () => {
        let isMenuOpen = this.state.isMenuOpen;

        if (isMenuOpen) {
            isMenuOpen = false;
        } else {
            isMenuOpen = true;
        }

        this.setState({
            isMenuOpen
        });
    };

    demoStateChanger = (demo) => {
        const demos = this.state.demos;

        return (nextView) => {
            this.changeHash(demo);

            demos[demo].view = nextView;

            this.setState({
                demos
            });
        };
    };

    render() {

        const {
            mobilePayment,
            qiwiWalletPayment,
            checkOutRedirect
        } = this.state.demos;


        const isMenuOpen = this.state.isMenuOpen;

        const demosMap = {
            mobilePayment: (index) => (
                <MobilePayment
                    state={mobilePayment}
                    stateChanger={this.demoStateChanger('mobilePayment')}
                    key={index}
                />
            ),
            qiwiWalletPayment: (index) => (
                <QiwiWalletPayment
                    state={qiwiWalletPayment}
                    stateChanger={this.demoStateChanger('qiwiWalletPayment')}
                    key={index}
                />

            ),
            checkOutRedirect: (index) => (
                <CheckOutRedirect
                    state={checkOutRedirect}
                    stateChanger={this.demoStateChanger('checkOutRedirect')}
                    key={index}
                />
            )
        };

        const translated = cn({
            translated: isMenuOpen
        });
        return (

            <div className={translated}>
                <Header
                    lang={this.state.lang}
                    changeLang={this.changeLangAndURL}
                    toggleMenu={this.toggleMenu}
                    header_documentation={`//${window.location.host}/index-${this.state.lang}.html#products`}
                />

                <Menu
                    order={this.state.order}
                    info={this.state.demos}
                    toggleMenu={this.toggleMenu}
                />

                <main className="layout">
                    {this.state.order.map((demo, index) => {
                        return demosMap[demo](index);
                    })}
                </main>
            </div>

        );
    }
}
