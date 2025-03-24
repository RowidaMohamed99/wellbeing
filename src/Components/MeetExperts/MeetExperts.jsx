import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import avatar from '../../assets/images/person.jpg';

export default function MeetExperts({ showOnlyFirstFour }) {
  const { t } = useTranslation(); // Initialize translation hook
  const [experts, setExperts] = useState([]); // State to store fetched experts
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the API
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await fetch('https://wellbeingproject.onrender.com/api/specialist/getAll');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setExperts(data.data); // Set the fetched data to state
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchExperts();
  }, []);

  if (loading) {
    return <p className="text-center text-[#19649E]">{t('loadingExperts')}</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{t('errorLoadingExperts', { error })}</p>;
  }

  // Limit experts to the first 4 if showOnlyFirstFour is true
  const displayedExperts = showOnlyFirstFour ? experts.slice(0, 4) : experts;

  return (
    <div className="meetExperts">
      <div className="container mx-auto max-w-screen-lg p-4 mt-5">
        {/* Header */}
        <header>
          <h1 className="font-bold text-[36px] sm:text-[40px] leading-[100%] tracking-[0%] text-center text-[#19649E]">
            {t('meetExpertsTitle')}
          </h1>
          <p className="font-bold p-4 text-[18px] sm:text-[25px] leading-[100%] tracking-[0%] text-center text-[#616161]">
            {t('meetExpertsSubtitle')}
          </p>
        </header>

        {/* Experts Cards */}
        <div className="experts pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 gap-4 sm:gap-6 px-2">
            {displayedExperts.map((expert) => (
              <div key={expert._id} className="card">
                {/* Expert Image */}
                <img
                  src={expert.imageUrl || avatar} // Fallback image if imageUrl is missing
                  alt={expert.firstName}
                  className="w-full h-64 rounded-[20px] object-cover"
                />
                {/* Expert Info */}
                <div className="cardInfo gap-[6px] mt-4 px-2">
                  <h2 className="font-bold text-[16px] mb-2 sm:text-[20px] leading-[100%] tracking-[0%] text-center text-[#19649E]">
                    Dr. {expert.firstName} {expert.lastName}
                  </h2>
                  <p className="font-medium text-[12px] sm:text-[16px] leading-[100%] tracking-[0%] text-[#616161] text-center">
                    {expert.work}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* "See More" Button */}
          {showOnlyFirstFour && (
            <div className="flex justify-center mt-8">
              <Link
                to="/team"
                className="bg-[#19649E] text-white px-6 py-2 rounded hover:bg-[#4e738f] transition duration-300"
              >
                {t('seeMoreExperts')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}