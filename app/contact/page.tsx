import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const lastUpdated = '08-01-2026 19:10:58';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-sm text-gray-500">
            Last updated on {lastUpdated}
          </p>
        </div>

        {/* Intro Text */}
        <p className="text-lg text-gray-700 text-center mb-12">
          You may contact us using the information below:
        </p>

        {/* Contact Information Cards */}
        <div className="space-y-8">
          {/* Company Details */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Company Information
            </h2>
            <p className="text-gray-700 font-medium mb-2">
              Merchant Legal entity name:
            </p>
            <p className="text-gray-600 mb-6">JPK SIGNATURE SPACES LLP</p>
          </div>

          {/* Address Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Addresses
                </h2>
              </div>
            </div>

            <div className="space-y-6 ml-9">
              <div>
                <p className="text-gray-700 font-medium mb-2">
                  Registered Address:
                </p>
                <p className="text-gray-600 leading-relaxed">
                  AARAJI NO 1035, MAUZA LEHARGIRD KRISHNA VIHAR COLONY<br />
                  NANDANPURA SHIVPURI ROAD CENTRAL WAREHOUSING CORPORATION WAREHOUSE,<br />
                  JHANSI, UTTAR PRADESH, PIN: 284003
                </p>
              </div>

              <div>
                <p className="text-gray-700 font-medium mb-2">
                  Operational Address:
                </p>
                <p className="text-gray-600 leading-relaxed">
                  AARAJI NO 1035, MAUZA LEHARGIRD KRISHNA VIHAR COLONY<br />
                  NANDANPURA SHIVPURI ROAD CENTRAL WAREHOUSING CORPORATION WAREHOUSE,<br />
                  JHANSI, UTTAR PRADESH, PIN: 284003
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Telephone
                </h2>
              </div>
              <a
                href="tel:7348489700"
                className="text-blue-600 hover:text-blue-700 font-medium text-lg"
              >
                7348489700
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Email
                </h2>
              </div>
              <a
                href="mailto:kjenterprise26@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium text-lg"
              >
                kjenterprise26@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
