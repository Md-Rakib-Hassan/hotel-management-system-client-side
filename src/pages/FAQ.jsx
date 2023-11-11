import  { useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';

const FAQ = () => {
    const axios=useAxios();
    const [faqData,setFaqData]=useState([]);

    useEffect(()=>{
        axios.get('/faqs')
        .then(res=>setFaqData(res.data));
    },[axios]);
  

  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="container mx-auto w-3/4 p-4 mt-24">
      <h1 className="text-3xl font-semibold mt-10  mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-700 mb-12">
        Welcome to our FAQ section! Here, we&apos;ve compiled answers to some of the most commonly asked questions about our hotel and services. If you have a question that&apos;s not covered here, please don&apos;t hesitate to <a className="text-blue-600 underline" href="/contact-us">contact us</a>.
      </p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border border-gray-300 p-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${openQuestion === index ? 'bg-blue-100' : ''}`}
            onClick={() => setOpenQuestion(index === openQuestion ? null : index)}
          >
            <h2 className="text-lg font-semibold text-blue-600">{item.question}</h2>
            {openQuestion === index && (
              <p className="text-gray-700 mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

