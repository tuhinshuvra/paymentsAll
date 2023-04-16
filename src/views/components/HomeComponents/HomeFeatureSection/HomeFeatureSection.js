import React from 'react';
import FeatureTopics from './FeatureSingleTopics/FeatureSingleTopics';
import {
    MdInstallMobile, MdPermPhoneMsg, MdCreditCard, MdBolt, MdOutlineReceipt, MdAccountBalance,
    MdMobileFriendly, MdOutlineBookOnline, MdOutlineHowToVote, MdAssuredWorkload, MdWallet
} from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';

import AddMoney from '../../../../assets/icons/add_money.png'
import BankTransfer from '../../../../assets/icons/bank_transfer.png'
import BillPay from '../../../../assets/icons/bill_pay.png'
import GovtFees from '../../../../assets/icons/govt_Fees.png'
import MerchantPay from '../../../../assets/icons/merchant_pay.png'
import MobileBank from '../../../../assets/icons/mobile_bank.png'
import MoneyRecharge from '../../../../assets/icons/money_recharge.png'
import QuickPay from '../../../../assets/icons/quick_pay.png'
import SendMoney from '../../../../assets/icons/send_money.png'
import Ticket from '../../../../assets/icons/ticket.png'
import Vat from '../../../../assets/icons/vat.png'
import Salary from '../../../../assets/icons/bank_transfer.png'
import TravelCard from '../../../../assets/icons/vat.png'
import './HomeFeatureSection.css';

const HomeFeatureSection = () => {
    return (
        <div className='feature_bg text-center' id='featureSection'>
            <h2 className='featureHead animate_left'>All the Features to Support <br /> Your Payment Experience</h2>
            <p className='featureSubHead animate_right' > We bring together everything that you need to use <br /> for you to experiece of financial transaction</p>

            <div className='feature_items col-10 mx-auto animate_bottom'>
                <div className='featureTopicsArea'>
                    <MdInstallMobile className='featureIcon' />
                    <p className='featureTopics'>Add Monew</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdPermPhoneMsg className='featureIcon' />
                    <p className='featureTopics'>Mobile Recharge</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdCreditCard className='featureIcon' />
                    <p className='featureTopics'>Travel Card</p>
                </div>


                <div className='featureTopicsArea'>
                    <MdBolt className='featureIcon' />
                    <p className='featureTopics'>Quick Pay</p>
                </div>


                <div className='featureTopicsArea'>
                    <MdOutlineReceipt className='featureIcon' />
                    <p className='featureTopics'>Bill Pay</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdAccountBalance className='featureIcon' />
                    <p className='featureTopics'>Bank Transfer</p>
                </div>

                <div className='featureTopicsArea'>
                    <GiReceiveMoney className='featureIcon' />
                    <p className='featureTopics'>E Loan</p>
                </div>
                <div className='featureTopicsArea'>
                    <MdMobileFriendly className='featureIcon' />
                    <p className='featureTopics'>Mobile Banking</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdOutlineBookOnline className='featureIcon' />
                    <p className='featureTopics'>Ticketing</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdOutlineHowToVote className='featureIcon' />
                    <p className='featureTopics'>Donation</p>
                </div>


                <div className='featureTopicsArea'>
                    <MdAssuredWorkload className='featureIcon' />
                    <p className='featureTopics'>Govt Fees</p>
                </div>

                <div className='featureTopicsArea'>
                    <MdWallet className='featureIcon' />
                    <p className='featureTopics'>Salary Pay</p>
                </div>
            </div>
        </div>
    );
};

export default HomeFeatureSection;