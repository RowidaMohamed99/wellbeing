import React, { useState } from 'react';
import backgroundImage from '../../assets/images/faq.png';
import topImage from '../../assets/images/doctor.png';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open question
  const questions = [
    "How to book a session?",
    "Why do you need to talk to a specialist online?",
    "How many sessions do you need for treatment?",
    "How your information is handled?",
    "What can I expect from the consultation?",
    "What to do if one of the parties is late for the session?"
  ];

  const answers = [
    "Download the Day Wellbeing app, create your own account, then go to the Health page and select the disorder. Go to the Disorder Types page, then to the Specialists page to select the appropriate specialist. Then, book a session. After that, communicate privately with the specialist on the Appointments page via chat, voice call, or video.",
    "One in eight people worldwide suffers from a mental or behavioral disorder, yet only a small percentage seek help or treatment. Teleconsultation offers you the ability to: schedule appointments with a specialist to fit your daily schedule, easily communicate with the specialist from the comfort of your home, and provide complete privacy.",
    "The number of treatment sessions varies depending on the condition and diagnosis, but in general, a patient requires an average of 5-10 sessions. Several factors contribute to faster improvement, such as: the client's desire and will to improve, adherence to the therapist's instructions, performing the required exercises, and regularly attending sessions and treatment sequences.",
    "All your information is treated with the utmost confidentiality and privacy, whether it's information sent on social media, registration information, or information you share with the therapist during, before, and after sessions. There are three instances in which confidentiality is breached and the relevant authorities are notified: In the event of a genuine intent to commit suicide, in the event of a genuine threat to the life of another person, particularly children and the elderly who are dependent on the therapist.",
    "A professional and effective relationship between the psychologist and you. We may find it difficult to look beyond ourselves and our own limitations in life, but counseling provides us with ways to improve our daily lives from an unbiased, professional perspective, without any judgment.",
    "Sessions end 15 minutes after one party is absent. If the client is late, you can contact the specialist. If the specialist is late within the time limit, they will also be able to contact you once they are available, or you can cancel the session and receive a refund."
  ];

  const handleToggle = (index) => {
    // Close the currently open question or open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative">
      {/* Top Image */}
      <div className="relative z-10 mb-8 mt-8">
        <img src={topImage} alt="Top Image" className="w-full h-auto object-cover" />
      </div>

      {/* Background Image */}
      <div 
        className="relative z-0 bg-black/60"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Transparent Layer */}
        <div className="bg-black/60 w-full h-full absolute inset-0"></div>

        {/* FAQ Content */}
        <div className="relative z-10 py-8 px-4">
          <div className="text-white p-8 rounded-lg">
            <h2 className="text-3xl text-center mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                <div key={index} className="bg-transparent text-white rounded-lg overflow-hidden border border-white/30">
                  <button
                    className="w-full text-left px-4 py-3 text-lg font-medium hover:bg-white/10 flex justify-between items-center"
                    onClick={() => handleToggle(index)}
                  >
                    {question}
                    <span>{openIndex === index ? '-' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-white/10 text-white">{answers[index]}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;