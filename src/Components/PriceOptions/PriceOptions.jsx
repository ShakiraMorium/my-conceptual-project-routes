import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = ()=> {
  const priceOptions = 
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
        <div >
            <h2 className="text-4xl text-center p-4"> Best Selling Price</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                priceOptions.map(option=><PriceOption key={option.id}
                option={option}>
                </PriceOption>)

            }
            </div>
            
        </div>
    );
};

export default PriceOptions;