import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen mt-20 bg-gray-100 flex flex-col  p-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <h2 className="text-2xl font-semibold mb-2">Use of the Website</h2>
      <p className="mb-4">
        The content of the pages of this website is for your general information
        and use only. It is subject to change without notice.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
      <p className="mb-4">
        This website contains material which is owned by or licensed to us. This
        material includes, but is not limited to, the design, layout, look,
        appearance, and graphics. Reproduction is prohibited other than in
        accordance with the copyright notice, which forms part of these terms
        and conditions.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        Your use of any information or materials on this website is entirely at
        your own risk, for which we shall not be liable. It shall be your own
        responsibility to ensure that any products, services, or information
        available through this website meet your specific requirements.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
      <p className="mb-4">
        Your use of this website and any dispute arising out of such use of the
        website is subject to the laws of [Your Country/State].
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms, please contact us at [Your
        Contact Information].
      </p>
    </div>
  );
};

export default TermsOfService;
