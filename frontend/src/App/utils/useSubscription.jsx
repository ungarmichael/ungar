import { useState, useEffect, useContext} from "react";
import axios from "axios";

const useSubscription = () => {
  const [subscriptionValues, setSubscriptionValues] = useState({
    email: "",
  });
  const [subStatus, setSubStatus] = useState(null);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const [errors, setErrors] = useState({});

  const handleSubscriptionChange = (e) => {
    const { name, value } = e.target;
    setSubscriptionValues({
      ...subscriptionValues,
      [name]: value,
    });
  };

  const handleSubscriptionSubmit = (e) => {
    // params.append("email", "mixlunga@mix.com");
    e.preventDefault();

    const params = new URLSearchParams()
    params.append("email", subscriptionValues.email);

    axios
      .post("https://api.ungarmichael.com/subscribe",params, config)
      .then((response) => {
        setSubStatus("success");
      })
      .catch((error) => {
        setSubStatus("error");
      });
  };

  return {handleSubscriptionChange, handleSubscriptionSubmit, subscriptionValues, subStatus, setSubStatus};
};
export default useSubscription;
