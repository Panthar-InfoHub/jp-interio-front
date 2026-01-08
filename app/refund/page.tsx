import { AlertCircle, CheckCircle, XCircle, Clock, Mail } from 'lucide-react';

export default function RefundPolicyPage() {
  const effectiveDate = '08-01-2026';
  const contactEmail = 'kjenterprise26@gmail.com';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Refund Policy
          </h1>
          <p className="text-sm text-gray-500">
            Effective Date: {effectiveDate}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            This Refund Policy applies to{" "}
            <span className="font-semibold">Spazora</span>, an AI-powered interior
            design platform operated by{" "}
            <span className="font-semibold">JPK Signature Spaces</span>. By
            subscribing to our services, you agree to the terms outlined below.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Subscription Model */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscription Model
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Spazora operates on a <span className="font-semibold">subscription-based model</span>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Users can generate up to{" "}
                  <span className="font-semibold">10 interior design variants per room</span> free of
                  charge. To generate more than 10 variants, users must purchase a paid subscription.
                </span>
              </li>
            </ul>
          </section>

          {/* Refund Eligibility */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Refund Eligibility
            </h2>
            <p className="text-gray-700 mb-6">
              Refunds are not guaranteed and are considered only in specific situations.
            </p>

            {/* Eligible Cases */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  A refund may be issued only if:
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 ml-7">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    There is a technical failure, system error, or service outage on Spazora's platform
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    The paid service was not delivered as intended due to platform-side issues
                  </span>
                </li>
              </ul>
            </div>

            {/* Non-Eligible Cases */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Refunds are not applicable for:
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 ml-7">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Change of mind after subscription purchase</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Dissatisfaction with AI-generated results or design preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Partial usage of the subscription</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Failure to use the service after purchase</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Refund Request Timeframe */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-start gap-3 mb-4">
              <Clock className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">
                Refund Request Timeframe
              </h2>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded p-4 ml-9">
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>
                    All refund requests must be submitted within{" "}
                    <span className="font-semibold">7 days of the payment date</span>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Requests made after this period will not be considered.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Partial Refunds */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Partial Refunds
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Spazora <span className="font-semibold">does not offer partial refunds</span>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Once a subscription is activated, the full subscription fee applies regardless of usage.
                </span>
              </li>
            </ul>
          </section>

          {/* Refund Method */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Refund Method
            </h2>
            <p className="text-gray-700 mb-4">If a refund is approved:</p>
            <ul className="space-y-3 text-gray-700 ml-6">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  The refund method (original payment method, credits, or other) will be decided on a{" "}
                  <span className="font-semibold">case-by-case basis</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Refunds will be processed in accordance with{" "}
                  <span className="font-semibold">Cashfree's payment processing policies</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Processing time may vary depending on the payment provider and bank
                </span>
              </li>
            </ul>
          </section>

          {/* Payment Gateway */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Gateway
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  All payments on Spazora are processed securely through{" "}
                  <span className="font-semibold">Cashfree</span>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Spazora does not store sensitive payment information such as card or banking details.
                </span>
              </li>
            </ul>
          </section>

          {/* How to Request a Refund */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How to Request a Refund
            </h2>
            <p className="text-gray-700 mb-4">
              To request a refund, users must contact us with:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-6">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Registered email address</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Payment receipt or transaction ID</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Reason for the refund request</span>
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Refund Request Email:
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Refund Policy
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Spazora reserves the right to update or modify this Refund Policy at any time.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Changes will be effective immediately upon being published on the website.
                </span>
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm border border-blue-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For any refund-related questions or concerns, please contact:
            </p>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Email:</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
