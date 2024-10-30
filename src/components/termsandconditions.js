import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    alert("Thank you for accepting the Terms and Conditions.");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Terms and Conditions</h1>
      
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to our application. By accessing or using this application, you agree to be bound by these Terms and Conditions (the “Terms”). Please read them carefully as they govern your access to and use of the application, including any content, features, and services offered through the application. If you do not agree to these Terms, you must not use the application. Your continued use of the application signifies your acceptance of any updates or changes to these Terms.
        </p>
      </section>

      <section>
        <h2>2. Definitions</h2>
        <p>
          For the purposes of these Terms:
        </p>
        <ul>
          <li><strong>“We,” “us,” and “our”:</strong> refers to the creators, operators, and maintainers of this application, including all subsidiaries, affiliates, agents, and representatives.</li>
          <li><strong>“You”:</strong> refers to the individual or entity that accesses or uses the application, including your employees, agents, and representatives.</li>
          <li><strong>“Services”:</strong> refers to all functionalities, features, content, and services available through the application, including any updates or modifications.</li>
          <li><strong>“Content”:</strong> encompasses all text, graphics, logos, images, videos, audio clips, and other materials uploaded, downloaded, or otherwise made available through the application.</li>
        </ul>
      </section>

      <section>
        <h2>3. Use of Services</h2>
        <p>
          Our services are intended solely for users who are at least 18 years old. By using our services, you represent that you are at least 18 years old. If you are under 18 years of age, you may only use our services under the supervision of a parent or legal guardian who agrees to be bound by these Terms on your behalf. 
        </p>
        <p>
          You may not use our services for any illegal or unauthorized purpose. This includes, but is not limited to, using the application to engage in fraudulent activities, violate laws or regulations, or infringe on the rights of any third party. You agree to comply with all applicable laws and regulations, including local, state, national, and international laws, regarding your use of the services.
        </p>
        <p>
          You are responsible for ensuring that your access to the services complies with all applicable laws and regulations. You must not misuse our services, and you are fully responsible for any activity that occurs under your account. This includes, but is not limited to, any content you post, share, or transmit through our services. 
        </p>
      </section>

      <section>
        <h2>4. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately of any unauthorized use of your account or password, or any other breach of security. You should take all reasonable measures to protect your account and keep your login credentials secure.
        </p>
        <p>
          You must not share your account with others. You are solely responsible for all activities conducted through your account, including any content, comments, or messages sent from your account. We are not liable for any loss or damage arising from your failure to comply with these requirements or from any unauthorized use of your account.
        </p>
        <p>
          You agree to provide accurate, current, and complete information during the registration process and to keep your account information updated. If you provide any information that is untrue, inaccurate, not current, or incomplete, or if we have reasonable grounds to suspect that such information is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the services.
        </p>
      </section>

      <section>
        <h2>5. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. It details the types of information we collect, how we use it, and your rights regarding that information. We may collect personal information such as your name, email address, and phone number when you register for an account, contact us, or use certain features of our application.
        </p>
        <p>
          By using our services, you consent to the collection and use of your information in accordance with our Privacy Policy. We may update our Privacy Policy from time to time, and we encourage you to review it periodically for any changes. Any updates will be effective immediately upon posting on this application, and your continued use of our services will signify your acceptance of those changes.
        </p>
      </section>

      <section>
        <h2>6. Intellectual Property</h2>
        <p>
          All content on this application, including text, graphics, logos, icons, images, software, and any other materials, is the property of the company or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without prior written permission from us or the appropriate content owner.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable license to access and use the application for personal, non-commercial purposes. This license does not grant you any rights to use our trademarks, logos, or any proprietary information without our explicit permission. Any unauthorized use of our content or services may result in legal action.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable. In no case shall we, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
        </p>
        <p>
          This includes, but is not limited to, damages for loss of profits, data, use, goodwill, or other intangible losses resulting from: 
          <ul>
            <li>(1) Your access to or use of, or inability to access or use, the service;</li>
            <li>(2) Any conduct or content of any third party on the service;</li>
            <li>(3) Any content obtained from the service;</li>
            <li>(4) Unauthorized access, use, or alteration of your transmissions or content.</li>
          </ul>
        </p>
        <p>
          To the extent permitted by law, our liability is limited to the maximum extent allowable. We shall not be liable for any loss or damage arising from your reliance on the information provided in the application or for any actions taken based on such information.
        </p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>
          These Terms and Conditions and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the jurisdiction of our operation, without regard to its conflict of law provisions. You agree that any dispute arising out of or relating to these Terms will be brought exclusively in the courts of that jurisdiction, and you consent to the jurisdiction of such courts.
        </p>
        <p>
          If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.
        </p>
      </section>

      <section>
        <h2>9. Amendments</h2>
        <p>
          We reserve the right to amend or update these Terms and Conditions at any time. We will provide notice of any material changes by posting the new Terms on this application and updating the "last updated" date at the top of these Terms. It is your responsibility to review this page periodically for updates.
        </p>
        <p>
          Your continued use of the application after any changes constitutes your acceptance of the revised Terms. If you do not agree with the changes, you must stop using the application immediately. It is advisable to periodically review these Terms to stay informed of any changes.
        </p>
      </section>

      <section>
        <h2>10. Entire Agreement</h2>
        <p>
          These Terms and Conditions, along with our Privacy Policy, constitute the entire agreement between you and us regarding your use of the application and supersede any prior agreements, understandings, or representations. This includes any prior versions of the Terms, oral or written agreements, or any policies that may have been communicated to you.
        </p>
        <p>
          No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision, and any failure by us to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
        </p>
      </section>

      <section>
        <h2>11. Contact Information</h2>
        <p>
          For any questions regarding these Terms and Conditions or our Privacy Policy, please contact us at <a href="mailto:support@ourcompany.com">support@ourcompany.com</a>. We welcome your feedback, inquiries, and suggestions, and we will respond to you in a timely manner.
        </p>
        <p>
          If you have any concerns or complaints regarding our services, please do not hesitate to reach out. We are committed to resolving any issues you may encounter and improving our services based on your feedback.
        </p>
      </section>

      <div style={{ marginTop: '20px' }}>
        <input
          type="checkbox"
          id="accept"
          checked={accepted}
          onChange={handleAccept}
          disabled={accepted}
        />
        <label htmlFor="accept">
          I have read and accept the Terms and Conditions
        </label>
      </div>
    </div>
  );
};

export default TermsAndConditions;
