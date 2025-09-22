import { Shield, Eye, Lock, FileText, AlertTriangle, Mail } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "September 16, 2025";

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              SEMOLIAGRI Private Limited is committed to protecting your privacy and personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            {/* Information Collection */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <Eye className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fill out our contact forms or request quotes</li>
                      <li>Subscribe to our newsletters or communications</li>
                      <li>Create an account or register for our services</li>
                      <li>Contact us for customer support</li>
                      <li>Participate in surveys or promotional activities</li>
                    </ul>
                    <p>
                      The types of information we may collect include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name, email address, and contact information</li>
                      <li>Company or farm name and address</li>
                      <li>Phone number and communication preferences</li>
                      <li>Agricultural interests and requirements</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our products and services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices, updates, and support messages</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                      <li>Communicate about products, services, and promotional offers</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Personalize and improve user experience</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <Lock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                      <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of company assets</li>
                      <li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
                    </ul>
                    <p>
                      All third-party service providers are contractually obligated to maintain the confidentiality and security of your personal information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal information against:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Unauthorized access, use, or disclosure</li>
                      <li>Accidental loss, destruction, or damage</li>
                      <li>Alteration or corruption of data</li>
                    </ul>
                    <p>
                      While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but we are committed to protecting your information using industry-standard practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="flex items-start space-x-4 mb-6">
                <AlertTriangle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights and Choices</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      You have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Access:</strong> Request copies of your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
                      <li><strong>Objection:</strong> Object to processing of your personal information</li>
                      <li><strong>Portability:</strong> Request transfer of your personal information</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-bold text-foreground">Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand user preferences. You can control cookie preferences through your browser settings.
                </p>
                <p>
                  Types of cookies we use:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <div className="space-y-4 text-muted-foreground">
                <h2 className="text-2xl font-bold text-foreground">Policy Updates</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
                <p>
                  Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-primary rounded-xl p-8 text-center">
              <Mail className="h-12 w-12 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">Contact Us</h2>
              <p className="text-primary-foreground/90 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-primary-foreground/90">
                <p><strong>SEMOLIAGRI Private Limited</strong></p>
                <p>Office N 404 NRK Bizz Park</p>
                <p>Indore, Madhya Pradesh, India, 452010</p>
                <p>Email: contact@semoliagri.com</p>
                <p>Phone: +91 9811035938</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;