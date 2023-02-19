import { useEffect, useState } from "react";
import { useContract } from "@thirdweb-dev/react";

interface Campaign {
  name: string;
  description: string;
  image: string;
  totalLikes: number;
  minLikes: number;
  status: number;
  payout: number;
  user: string;
  brand: string;
  activeTime: number;
}

const useUserCampaigns = (userAddress: string) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const contract = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!);

  useEffect(() => {
    const loadCampaigns = async () => {
      if (!contract) {
        return;
      }

      const campaignCount = await contract.getCampaignCount();
      const loadedCampaigns = [];

      for (let i = 0; i < campaignCount; i++) {
        const campaign = await contract.getCampaign(i);
        if (campaign.user.toLowerCase() === userAddress.toLowerCase()) {
          loadedCampaigns.push(campaign);
        }
      }

      setCampaigns(loadedCampaigns);
    };

    loadCampaigns();
  }, [contract, userAddress]);

  return campaigns;
};

export default useUserCampaigns;
