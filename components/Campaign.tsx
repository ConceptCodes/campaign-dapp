interface ICampaignProps {
  title: string;
  description: string;
  image: string;
  id: string;
  brandImageUrl: string;
  brand: string;
}

const Campaign = ({
  title,
  description,
  image,
  brand,
  brandImageUrl,
  id,
}: ICampaignProps) => {
  return (
    <div className="relative p-6 rounded-lg bg-white shadow-xl">
      <img src={image} alt="Blog Image" className="w-full rounded-t-lg" />
      <div className="pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">{title}</h2>
          <a href={`/campaign/${id}`} className="text-blue-500">
            View
          </a>
        </div>
        <div className="flex items-center pt-4">
          <img
            src={brandImageUrl}
            alt="Profile Image"
            className="w-12 h-12 rounded-full"
          />
          <span className="pl-2 text-gray-700">{brand}</span>
        </div>
        <p className="pt-4 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Campaign;
