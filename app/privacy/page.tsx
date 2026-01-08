export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Privacy Policy for Spazora
        </h1>

        {/* Last Updated Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <p className="text-gray-600">
            <span className="font-semibold">Last Updated:</span> January 8, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Spazora is an AI-powered interior design platform operated by JPK Signature Spaces ("we", "our", "us"). This Privacy Policy explains how we collect, use, store, and protect user information when you use our website.
          </p>

          <p>
            By accessing or using Spazora, you agree to the terms described in this Privacy Policy.
          </p>

          {/* Information We Collect */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            Information We Collect
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-black mb-2">1. Uploaded Images</h3>
              <p>
                Users can upload images of their rooms to generate AI-based interior designs. These uploaded images are collected and stored to provide the requested service.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-2">2. Generated Images</h3>
              <p>
                AI-generated interior design images created based on user input are also stored on our servers.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-2">3. Email Address</h3>
              <p>
                Spazora uses Google Authentication. The user's email address is collected and stored for authentication and account-related purposes.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-2">4. Future Data Collection</h3>
              <p className="mb-2">
                In future updates, we may collect additional information such as name and phone number.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Providing a name and phone number will be optional</li>
                <li>Providing an email address will be mandatory for login and service access</li>
                <li>Users will be notified if new data collection practices are introduced.</li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            How We Use Your Information
          </h2>

          <p>We use the collected information to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Authenticate users using Google login</li>
            <li>Process uploaded images and generate AI-based interior designs</li>
            <li>Store uploaded and generated images for user access</li>
            <li>Improve website functionality and user experience</li>
            <li>Maintain platform security and prevent misuse</li>
          </ul>

          {/* AI and Third-Party Services */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            AI and Third-Party Services
          </h2>

          <p>
            Spazora uses third-party AI services, including Gemini, to process images and generate interior design outputs. Uploaded images and descriptions may be securely shared with these services only for the purpose of generating results.
          </p>

          {/* Data Storage and Security */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            Data Storage and Security
          </h2>

          <ul className="list-disc list-inside space-y-1">
            <li>Uploaded images, generated images, and email addresses are stored securely</li>
            <li>Reasonable technical and organizational measures are used to protect user data</li>
            <li>No online system is completely secure, and absolute security cannot be guaranteed</li>
          </ul>

          {/* Data Sharing */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            Data Sharing
          </h2>

          <p>
            We do not sell, trade, or rent user data to third parties. Data may be shared only:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>With trusted third-party services required for platform functionality</li>
            <li>When required by law or legal authorities</li>
          </ul>

          {/* User Rights */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            User Rights
          </h2>

          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Access your stored data</li>
            <li>Request deletion of your images or account information</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p>
            To exercise these rights, please contact us.
          </p>

          {/* Global Users */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            Global Users
          </h2>

          <p>
            Spazora is available globally. By using the website, you consent to the collection and processing of your data in accordance with this Privacy Policy.
          </p>

          {/* Changes to This Privacy Policy */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy periodically. Any changes will be reflected on this page with a revised effective date.
          </p>

          {/* Contact Us */}
          <h2 className="text-2xl font-bold text-black mt-10 mb-4">
            Contact Us
          </h2>

          <p>
            For questions or concerns regarding this Privacy Policy:
          </p>
          <p className="font-semibold">
            Email: support@jpksignaturespaces.com
          </p>
        </div>
      </div>
    </div>
  );
}
