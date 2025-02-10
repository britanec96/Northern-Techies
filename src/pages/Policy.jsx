import { useEffect } from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Northern Techies";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 md:pt-36 sm:pt-32 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/30 p-8">
        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400 mb-6"
        >
          Privacy Policy
        </motion.h1>

        {/* Дата обновления */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mb-8"
        >
          Last updated: February 2025
        </motion.p>

        {/* Основной контент */}
        <section className="space-y-8">
          {[
            {
              title: "1. Introduction",
              content:
                "Welcome to Northern Techies. We respect your privacy and are committed to protecting your personal data.",
            },
            {
              title: "2. Data We Collect",
              content: (
                <ul className="list-disc list-inside text-gray-300">
                  <li>Personal Information (Name, Email, Contact details)</li>
                  <li>Technical Data (IP address, browser type, location data)</li>
                  <li>Usage Data (Page visits, interactions with services)</li>
                </ul>
              ),
            },
            {
              title: "3. How We Use Your Data",
              content:
                "We use your data to provide and improve our services, ensure security, and communicate updates.",
            },
            {
              title: "4. Cookies and Tracking",
              content:
                "We use cookies and similar tracking technologies to enhance your browsing experience. You can manage cookie preferences in your browser settings.",
            },
            {
              title: "5. Data Storage and Protection",
              content:
                "We implement security measures to protect your data from unauthorized access, alteration, and disclosure.",
            },
            {
              title: "6. Third-Party Services",
              content:
                "We may use trusted third-party services for analytics, hosting, and communication. Your data is never sold.",
            },
            {
              title: "7. Your Rights",
              content:
                "You have the right to access, update, or delete your data. Contact us for any privacy-related requests.",
            },
            {
              title: "8. Updates to This Policy",
              content:
                "We may update this Privacy Policy from time to time. We will notify users of any significant changes.",
            },
            {
              title: "9. Contact Us",
              content: (
                <>
                  If you have any questions regarding this Privacy Policy, please contact us at{" "}
                  <span className="text-sky-400 hover:text-sky-300 transition-colors">
                    support@northerntechies.com
                  </span>
                  .
                </>
              ),
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-700/20 p-6 rounded-xl border border-gray-600/20"
            >
              <h2 className="text-2xl font-semibold text-sky-400 mb-3">{section.title}</h2>
              <div className="text-gray-300">{section.content}</div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;