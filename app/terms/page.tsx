import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use — comparison-deserving",
  description: "Terms governing use of the comparison-deserving gallery website.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extralight tracking-tight text-black">Terms of Use</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-8 text-gray-800">
          <section>
            <p className="leading-relaxed">
              These Terms of Use ("Terms") govern your access to and use of the comparison-deserving website (the "Site").
              By accessing or using the Site, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Use of the Site</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
              <li>You must use the Site in compliance with applicable laws and these Terms.</li>
              <li>You may browse the gallery and submit inquiries about artworks for legitimate purposes.</li>
              <li>You may not engage in unauthorized scraping, data harvesting, or other misuse of the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Intellectual Property</h2>
            <p className="mt-3 text-gray-700">
              All content on the Site, including images of artworks, text, design elements, and trademarks, are owned by
              comparison-deserving or respective rights holders and are protected by intellectual property laws.
              You may not use, reproduce, or distribute content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Inquiries and Offers</h2>
            <p className="mt-3 text-gray-700">
              Submitting an inquiry does not constitute a binding offer or acceptance. Prices and availability are subject
              to change without notice. We reserve the right to refuse or decline any request at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Third-Party Links</h2>
            <p className="mt-3 text-gray-700">
              The Site may contain links to third-party websites for convenience. We are not responsible for the content,
              policies, or practices of third parties and you access them at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Disclaimer</h2>
            <p className="mt-3 text-gray-700">
              The Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied.
              To the fullest extent permitted by law, we disclaim all warranties and conditions regarding the Site and its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Limitation of Liability</h2>
            <p className="mt-3 text-gray-700">
              To the maximum extent permitted by law, comparison-deserving and its affiliates will not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Indemnity</h2>
            <p className="mt-3 text-gray-700">
              You agree to indemnify and hold harmless comparison-deserving and its affiliates from any claims, damages,
              liabilities, and expenses arising out of your use of the Site or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Changes to These Terms</h2>
            <p className="mt-3 text-gray-700">
              We may update these Terms from time to time. The updated version will be indicated by a revised date and will
              be effective as soon as it is accessible. Your continued use of the Site constitutes acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Governing Law</h2>
            <p className="mt-3 text-gray-700">
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which we operate,
              without regard to its conflicts of law rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-light text-black">Contact</h2>
            <p className="mt-3 text-gray-700">
              For questions about these Terms, contact us at <a href="mailto:contact@comparison-deserving.com" className="underline">contact@comparison-deserving.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


