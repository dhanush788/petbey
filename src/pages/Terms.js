import React from "react";
import EULAPage from "../components/EulaPage/EulaPage";

const TermsAndConditions = () => {
  const sectionStyle = "my-8"; // Adjust margin top and bottom between sections as needed
  const sectionContentStyle = "mb-2"; // Adjust margin bottom for section content as needed
  const headingStyle = "font-bold text-2xl"; // Heading styles

  return (
    <div className="px-6 md:px-36 py-16 ">
      <h1 className={`${headingStyle} mb-4`}>Terms and Conditions</h1>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Acceptance of Terms:</h2>
        <p className={sectionContentStyle}>
          By using the PetBey mobile application ("App"), you agree to be bound
          by these Terms and Conditions, our Privacy Policy, and all applicable
          laws and regulations. If you do not agree with any of these terms, you
          are prohibited from using or accessing this app.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Use License:</h2>
        <p className={sectionContentStyle}>
          Permission is granted to download a copy of the app on a mobile device
          solely for personal, non-commercial use. This is the grant of a
          license, not a transfer of title, and under this license, you may not:
        </p>
        <ul className={sectionContentStyle}>
          <li>Modify or copy the materials.</li>
          <li>
            Use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial).
          </li>
          <li>
            Attempt to decompile or reverse engineer any software contained on
            the app.
          </li>
          <li>
            Remove any copyright or other proprietary notations from the
            materials.
          </li>
        </ul>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>
          User Account and Security:
        </h2>
        <p className={sectionContentStyle}>
          Users are responsible for maintaining the confidentiality of their
          account and password information. PetBey reserves the right to refuse
          service, terminate accounts, remove or edit content in its sole
          discretion.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>
          User-Generated Content and Moderation:
        </h2>
        <p className={sectionContentStyle}>
          <span className={`${headingStyle} text-lg`}>Content Moderation:</span>{" "}
          Petbey takes measures to moderate user-generated content to prevent
          objectionable or abusive behavior.
        </p>

        <p className={sectionContentStyle}>
          <span className={`${headingStyle} text-lg`}>Terms of Use:</span> By
          using Petbey, users agree to abide by the terms of use and community
          guidelines. Users must understand that any objectionable content or
          abusive behavior will not be tolerated.
        </p>

        <p className={sectionContentStyle}>
          <span className={`${headingStyle} text-lg`}>Report Abuse:</span> Users
          are encouraged to report any objectionable content or abusive behavior
          encountered on Petbey. Reports will be reviewed promptly, and
          appropriate action will be taken.
        </p>

        <p className={sectionContentStyle}>
          <span className={`${headingStyle} text-lg`}>
            Zero Tolerance Policy:
          </span>{" "}
          Petbey has a zero-tolerance policy towards objectionable content and
          abusive users. Any violation of the terms of use will result in
          immediate account suspension or termination.
        </p>

        <p className={sectionContentStyle}>
          <span className={`${headingStyle} text-lg`}>User Content:</span> By
          posting or submitting any content on PetBey, Users grant PetBey a
          non-exclusive, royalty-free, perpetual, and irrevocable right to use,
          reproduce, modify, adapt, pupsh, translate, distribute, and display
          such content.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Limitations:</h2>
        <p className={sectionContentStyle}>
          In no event shall PetBey be liable for any damages arising out of the
          use or inability to use the app, even if PetBey has been notified
          orally or in writing of the possibility of such damage.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Modifications:</h2>
        <p className={sectionContentStyle}>
          PetBey may revise these terms of use at any time without notice. By
          using this app, you agree to be bound by the current version of these
          Terms and Conditions.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Governing Law:</h2>
        <p className={sectionContentStyle}>
          These terms and conditions are governed by and construed in accordance
          with the laws of India, and you irrevocably submit to the exclusive
          jurisdiction of the courts in that location.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Severability:</h2>
        <p className={sectionContentStyle}>
          If any provision of these terms is deemed unlawful, void, or for any
          reason unenforceable, then that provision shall be deemed severable
          from these terms and shall not affect the validity and enforceability
          of any remaining provisions.
        </p>
      </div>

      <div className={sectionStyle}>
        <h2 className={`${headingStyle} text-lg`}>Contact Us:</h2>
        <p className={sectionContentStyle}>
          If you have any questions about these Terms and Conditions, please
          contact us at <a href="mailto:contact@petbey.in">contact@petbey.in</a>
          .
        </p>
      </div>

      <EULAPage />
    </div>
  );
};

export default TermsAndConditions;
