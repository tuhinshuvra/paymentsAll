import React from 'react';
import FeatureTopics from './FeatureSingleTopics/FeatureSingleTopics';

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
                <FeatureTopics
                    Icon={AddMoney}
                    Topics={"Add Money"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={MoneyRecharge}
                    Topics={"Mobile Resharge"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={TravelCard}
                    Topics={"Travel Card"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={QuickPay}
                    Topics={"Quick Pay"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={BillPay}
                    Topics={"Bill Pay"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={BankTransfer}
                    Topics={"Bank Transfer"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={AddMoney}
                    Topics={"Add Money"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={MobileBank}
                    Topics={"Mobile Banking"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={Ticket}
                    Topics={"Ticketing"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={AddMoney}
                    Topics={"Donation"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={GovtFees}
                    Topics={"Govt Fees"}
                ></FeatureTopics>

                <FeatureTopics
                    Icon={Ticket}
                    Topics={"Ticketing"}
                ></FeatureTopics>

            </div>
        </div>
    );
};

export default HomeFeatureSection;