import React from 'react';

const PrivacyPolicy = () => {
  const sectionStyle = 'my-8'; 
  const sectionContentStyle = 'mb-2'; 
  const headingStyle = 'font-bold text-2xl'; 

  return (
    <div className="px-6 md:px-36 py-16">
      <h1 className={`${headingStyle} mb-4`}>Privacy Policy for PetBey</h1>

      <p className="text-sm text-gray-600">
        This Privacy Policy governs the manner in which PetBey collects, uses, maintains, and discloses information collected from users ("User" or "You") of the PetBey mobile application.
      </p>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Personal Identification Information:</h2>
        <p className={sectionContentStyle}>
          PetBey may collect personal identification information from Users in various ways, including but not limited to when Users register on the app, place an order, fill out a form, and in connection with other activities, services, features, or resources made available on our app. Users may be asked for, as appropriate, name, email address, phone number, and other relevant details.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Non-Personal Identification Information:</h2>
        <p className={sectionContentStyle}>
          PetBey may collect non-personal identification information about Users whenever they interact with our app. Non-personal identification information may include the device name, model, operating system, and other technical details.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>How We Use Collected Information:</h2>
        <ul className={sectionContentStyle}>
          <li>To improve customer service</li>
          <li>To personalize user experience</li>
          <li>To improve our app</li>
          <li>To send periodic emails or notifications</li>
          <li>To process transactions</li>
          <li>To run promotions, surveys, or other app features</li>
        </ul>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>How We Protect Your Information:</h2>
        <p className={sectionContentStyle}>
          PetBey adopts appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our app.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Sharing Your Personal Information:</h2>
        <p className={sectionContentStyle}>
          PetBey does not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Changes to This Privacy Policy:</h2>
        <p className={sectionContentStyle}>
          PetBey has the discretion to update this Privacy Policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Your Acceptance of These Terms:</h2>
        <p className={sectionContentStyle}>
          By using this app, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our app. Your continued use of the app following the posting of changes to this policy will be deemed your acceptance of those changes.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Contact Us:</h2>
        <p className={sectionContentStyle}>
          If you have any questions about this Privacy Policy, the practices of this app, or your dealings with this app, please contact us at <a href="mailto:contact@petbey.in">contact@petbey.in</a>.
        </p>
        <p className={sectionContentStyle}>
          This Privacy Policy was last updated on 10 December 2023.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
