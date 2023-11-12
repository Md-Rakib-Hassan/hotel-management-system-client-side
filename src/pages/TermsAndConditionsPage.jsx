import { Helmet } from 'react-helmet';

const TermsAndConditionsPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 mt-24">
      <Helmet>
                <meta charSet="utf-8" />
                <title>BookHotel | Terms And Conditions</title>

            </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p>
          Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website if
          you do not agree to take all of the terms and conditions stated on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these terms, we and/or our licensors own all the intellectual property rights
          and materials contained in this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul className="list-disc ml-8">
          <li>publishing any website material in any other media;</li>
          <li>selling, sublicensing, and/or otherwise commercializing any website material;</li>
          <li>publicly performing and/or showing any website material;</li>
          <li>using this website in any way that is or may be damaging to this website;</li>
        </ul>
      </section>

      {/* Add more sections based on your terms and conditions content */}

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at{' '}
          <a href="mailto:hotel@manager.com" className="text-blue-500 hover:underline">
          hotel@manager.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
