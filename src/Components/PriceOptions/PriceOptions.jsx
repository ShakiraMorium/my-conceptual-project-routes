import Prices from "../Prices/Prices";


const PriceOptions = ()=> {
    [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to cardio equipment",
              "Limited group classes",
              "Locker room access",
              "Fitness assessment",
              "Discounts on merchandise"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Full access to all gym facilities",
              "Unlimited group classes",
              "Personal training session (1/month)",
              "Nutritional counseling",
              "Towel service",
              "Sauna access"
            ]
          },
          {
            "id": 3,
            "name": "VIP Membership",
            "price": 99.99,
            "features": [
              "Priority access to all classes",
              "Unlimited personal training sessions",
              "Sauna and spa access",
              "Exclusive member events",
              "Complimentary smoothies",
              "Free guest passes (2/month)"
            ]
          }
        ]
      
      
    


    return (
        <div>
            {
                PriceOptions.map(option =><Prices
                key={option.id}
                option={option}
                ></Prices>)
            }
        </div>
    );
};

export default PriceOptions;