import React from 'react';
import pricing from '../../assets/pricing.png';
import wine from '../../assets/wine.png';
import '../../styles/Pricing.css';

const Pricing = () => {
    return (
        <div id="pricing">
            <p className="sectionHeader" class='pricing'>Pricing</p>

            <div class='pricingContainer'>

                <img id="pricingImage" src={pricing}/>

                <div className="pricingBox">
                    <div id="skewBox">
                        <img id="wineImg" src={wine} />
                    </div>
                    <p id="pricingCost">
                        $9.<sup>99</sup>
                         <span id="priceMonth">/ month</span>
                    </p>
                    <p class="pricingText">Improve your wine experience</p>
                    <p class="pricingText">$0.33 A DAY</p>

                    <ul id="pricingList">
                        <li>Access to all features</li>
                        <li>Save time</li>
                        <li>Save time</li>
                    </ul>
                </div>
    


                <p className='pricingSlogan'>An investment in a better wine experience. </p>

            </div>

            {/* Illustration by <a href="https://icons8.com/illustrations/author/602b6fa7123f993a3afdba7b">
              Victoria Chepkasova</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
      </div>
    );
};

export default Pricing;