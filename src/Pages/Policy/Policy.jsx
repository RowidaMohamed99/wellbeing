import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const PrivacyPolicyPage = () => {
  const { lang: urlLang } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currentLang = urlLang || i18n.language.split('-')[0];

  const fetchPolicy = async (language) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://wellbeingproject.onrender.com/api/categories/privacyPolicy/${language}`
      );
      if (!response.ok) throw new Error(t('policyFetchError'));
      const text = await response.text();
      setHtmlContent(text);
    } catch (err) {
      console.error('Error fetching policy:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolicy(currentLang);
  }, [currentLang, t]);

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    navigate(`/privacy-policy/${newLang}`);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#19649E]"></div>
      </div>
    );
  }

  return (
    <div  dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{t('privacyPolicyTitle')} | {t('wellbeingDayTitle2')}</title>
        <meta name="description" content={t('privacyPolicy')} />
      </Helmet>

      

      {/* Main Content */}
      <main className="flex-grow container mx-autos py-6">
        {error ? (
          <div className="flex items-center justify-center h-full text-red-500">
            {error}
          </div>
        ) : (
          <div 
            className="policy-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
      </main>

    

      {/* Custom Styles */}
      <style>{`
        
        .policy-content h1 {
          color: #333;
          margin: 0 0 20px 0;
          padding: 0;
          font-size: 1.8rem;
        }
        .policy-content h2 {
          color: #19649E;
          margin: 20px 0 10px 0;
          font-size: 1.4rem;
        }
        .policy-content p {
          line-height: 1.6;
          margin: 10px 0;
        }
        .policy-content section {
          margin-bottom: 20px;
        }
        .policy-content hr {
          border: 0;
          height: 1px;
          background: #ccc;
          margin: 20px 0;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;