import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
const WalletBalance = () => {
  const [balance, setBalance] = useState(0);
  const { data: session } = useSession();
 
  useEffect(() => {
    const fetchBalance = async () => {
      //console.log('ra',getCsrfToken());
      //console.log('get',getSession());
     // console.log('session',session.user.token);
      if (session?.user) {
      try {
        const response = await axios.get("https://admin.xpertbid.com/api/wallet", {
          headers: { Authorization: `Bearer ${session.user.token}`,'Cache-Control': 'no-store' },
        });
        //console.log('response',response.data.balance);
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching wallet balance", error);
      }}
    };

    fetchBalance();
  
  }, [session]);
  
  return balance;
};

export default WalletBalance;
