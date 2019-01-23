import React, { Component } from 'react';

import CheckingOrder from '../../../components/CheckingOrder';
import Button from '../../../components/Button';

import payments from '../../../assets/payments.svg';
import Link from '../../../components/Link';

import { translate } from 'react-i18next';

const CheckingOrderView = (props) => {

    const id = props.id;
    const { t } = props;
    document.body.style.overflow = 'auto';

    if (props.errorState) {
        document.body.style.overflow = 'hidden';
    }

    return (

        <CheckingOrder itemCost={props.itemCost} itemPic={props.itemPic}>

            <Button buttonText={t('pay')} onClick={props.stateChanger} classNames={'checking-order__redirect'} />

            <img src={payments} className="checking-order__payments" alt="payments" width="189" />

            <Link className={'checking-order__link'} textLogo={t('standards-of-representation')} link={'https://corp.qiwi.com/business/connect/logotype.action'} />

        </CheckingOrder>
    );
};

export default translate()(CheckingOrderView);