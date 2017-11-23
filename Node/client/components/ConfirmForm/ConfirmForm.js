import React, { Component } from 'react';

import './ConfirmForm.scss';

import infoIcon from '../../assets/information.svg';

import Button from '../Button';


export default class ConfirmForm extends Component {
    render() {

        return (<div>
            <h2>Ждем подтверждения по СМС</h2>

            <div className="confirm-form">
                <img className="confirm-form__icon" src={infoIcon} alt="info" width="32" height="32"/>
                <ul className="confirm-form__instruction">
                    <li>Следуйте SMS-инструкциям вашего оператора сотовой связи.</li>
                    <li>Деньги будут списаны с баланса только после подтверждения.</li>
                    <li>Если по какой-то причине SMS не пришла, попробуйте еще раз.</li>
                </ul>
            </div>


            <Button buttonText={'Выслать SMS повторно'} onClick={this.props.stateChanger}/>
        </div>)
    }
}