import { Collapse } from 'antd';
import React from 'react';

const faqData = [
  {
    key: '1',
    question: 'What documents are required for a student visa application?',
    answer:
      'Typically, you need a valid passport, acceptance letter from the university, proof of financial support, recent photographs, and academic transcripts. Requirements may vary by country.',
  },
  {
    key: '2',
    question: 'How long does the visa processing take?',
    answer:
      'Visa processing times vary by country and season, but it usually takes between 2 to 8 weeks. It is recommended to apply as early as possible.',
  },
  {
    key: '3',
    question: 'Can I work while studying on a student visa?',
    answer:
      'Many countries allow international students to work part-time during their studies. Check the specific regulations of your destination country.',
  },
  {
    key: '4',
    question: 'What should I do if my visa application is rejected?',
    answer:
      'If your visa is rejected, review the reasons provided, address any issues, and consider reapplying. You may also consult with our visa advisors for guidance.',
  },
  {
    key: '5',
    question: 'Do I need to purchase health insurance for my visa?',
    answer:
      'Most countries require international students to have valid health insurance for the duration of their studies. Check the specific requirements for your destination.',
  },
  {
    key: '6',
    question: 'Can I bring my family with me on a student visa?',
    answer:
      'Some countries allow students to bring dependents, such as spouses or children, on a dependent visa. Requirements and eligibility vary by country.',
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0056B3] mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          <Collapse
            size="large"
            items={faqData.map(({ key, question, answer }) => ({
              key,
              label: (
                <h1 className="font-semibold text-xl">{question}</h1>
              ),
              children: <p>{answer}</p>,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
