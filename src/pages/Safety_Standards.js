import React from "react";
import { styles } from "../style";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const SafetyStandards = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center max-w-[900px] mx-auto p-5 font-sans pt-24">
        <section>
          <h1 className="text-4xl text-gray-800 mb-5 mt-8  font-bold text-center" >
            Safety Standards and Child Safety Policy - PetBey
          </h1>
        </section>

        <section>
          <h2 className="text-2xl text-gray-700 mt-8 font-medium">
            We are committed to creating a safe and welcoming environment for
            all users, including minors.
          </h2>
          <p className="text-base leading-relaxed text-gray-600">
            We have implemented robust safety standards to prevent child sexual
            abuse and exploitation (CSAE) and to ensure the well-being of our
            community.
          </p>
        </section>

        <section>
          <h3 className="text-2xl text-gray-600 mt-5">
            Safety Standards Against Child Sexual Abuse and Exploitation (CSAE)
          </h3>
          <ul className="list-disc ml-5">
            <li className="mb-2.5">
              <strong>Age Verification and Restrictions:</strong>
              <p className="text-base leading-relaxed text-gray-600">
                PetBey requires users to be at least 13 years old to create an
                account. Users under 18 must have parental consent to use the
                app. We employ age-verification measures to ensure compliance
                with our age restrictions.
              </p>
            </li>
            <li>
              <strong>Zero Tolerance for Harmful Content:</strong>
              <p>
                PetBey strictly prohibits any content or behavior that exploits
                or endangers minors. This includes but is not limited to
                explicit content, grooming, or inappropriate communication. All
                user-generated content is moderated using advanced AI tools and
                human moderators to detect and remove harmful material.
              </p>
            </li>
            <li>
              <strong>Reporting and Blocking Features:</strong>
              <p>
                Users can report suspicious or inappropriate behavior through
                our in-app reporting system. Reports are reviewed promptly, and
                appropriate action is taken. Users can block and report other
                users to prevent further contact.
              </p>
            </li>
            <li>
              <strong>Education and Awareness:</strong>
              <p>
                PetBey provides resources and educational materials to help
                users recognize and report CSAE-related activities. We
                collaborate with organizations dedicated to child safety to stay
                updated on best practices.
              </p>
            </li>
            <li>
              <strong>Data Privacy and Security:</strong>
              <p>
                PetBey adheres to strict data privacy policies to protect the
                personal information of all users, especially minors. We do not
                share user data with third parties without explicit consent.
              </p>
            </li>
            <li>
              <strong>Parental Controls:</strong>
              <p>
                Parents and guardians can request access to their child's
                account activity or request account deletion by contacting our
                support team.
              </p>
            </li>
          </ul>
        </section>

        <section className=" w-full max-w-[900px] mx-auto">
          <h1 className="text-2xl text-gray-600 mt-5">Contact Information</h1>
          <p className="text-base leading-relaxed text-gray-600">
            If you have any concerns about child safety or wish to report an
            incident, please contact us immediately:
          </p>
          <ul className="list-disc  ml-5">
            <li className="mb-2.5">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:connect@petbey.in"
                className="text-blue-600 hover:underline"
              >
                connect@petbey.in
              </a>
            </li>
            <li className="mb-2.5">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919142333733"
                className="text-blue-600 hover:underline"
              >
                +91 9142333733
              </a>
            </li>
            <li className="mb-2.5">
              <strong>In-App Support:</strong> Visit the "Help & Support"
              section in the app to submit a report or request assistance.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SafetyStandards;
