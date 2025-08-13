import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — comparison-deserving",
  description: "Privacy practices for the comparison-deserving gallery website.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extralight tracking-tight text-black">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-8 text-gray-800">
          <section>
            <p className="leading-relaxed">
              This Privacy Policy describes how comparison-deserving ("we", "us", or "our") collects, uses,
              and shares information when you visit our website and interact with our gallery, including when
              you submit inquiries about artworks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Information We Collect</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>
                Contact details you provide to us, such as your name and email address, when you submit an inquiry.
              </li>
              <li>
                Optional information you include in messages (e.g., questions, preferences, or context about a work).
              </li>
              <li>
                Basic usage information collected automatically, such as IP address, device/browser type, and pages visited.
              </li>
              <li>
                Cookies or similar technologies to maintain basic site functionality and performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">How We Use Information</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>To respond to your inquiries and provide information about artworks.</li>
              <li>To operate, maintain, and improve our website and services.</li>
              <li>To communicate with you about updates, exhibitions, or opportunities, where permitted.</li>
              <li>To protect our rights, prevent fraud, and comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Legal Bases</h2>
            <p className="mt-3 text-gray-700">
              Where applicable, we process your information based on our legitimate interests (e.g., operating a gallery
              and addressing inquiries), your consent (e.g., optional communications), and to fulfill legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Sharing of Information</h2>
            <p className="mt-3 text-gray-700">
              We do not sell your personal information. We may share limited information with service providers who assist
              in operating our website and communications, subject to appropriate safeguards. We may also share information
              where required by law or to protect the rights and safety of our visitors and partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Data Retention</h2>
            <p className="mt-3 text-gray-700">
              We retain personal information for as long as needed to respond to inquiries, provide requested information,
              and for legitimate business and legal purposes. We delete or anonymize data when it is no longer necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Your Choices</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>You can request access to, correction of, or deletion of your personal information.</li>
              <li>You may opt out of non-essential communications at any time.</li>
              <li>You can adjust your browser settings to manage cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">International Visitors</h2>
            <p className="mt-3 text-gray-700">
              If you visit our site from outside your home region, note that information may be processed in locations with
              different data protection laws. We take steps to protect your information consistent with applicable requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Security</h2>
            <p className="mt-3 text-gray-700">
              We use reasonable administrative, technical, and organizational safeguards designed to protect personal
              information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Children’s Privacy</h2>
            <p className="mt-3 text-gray-700">
              Our website is not directed to children under 13, and we do not knowingly collect personal information from them.
              If you believe a child has provided us personal information, please contact us and we will take appropriate steps.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Contact</h2>
            <p className="mt-3 text-gray-700">
              For privacy questions or requests, contact us at <a href="mailto:contact@comparison-deserving.com" className="underline">contact@comparison-deserving.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


