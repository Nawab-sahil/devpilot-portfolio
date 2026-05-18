import type { Metadata } from 'next';
import { socialLinks } from '@/data/content';
import { Code2, Link2, Mail, MapPin, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact | DevPilot Portfolio',
  description: 'Get in touch with Sahil for collaborations, freelance work, and opportunities.',
};

const iconMap: Record<string, LucideIcon> = {
  Github: Code2,
  Linkedin: Link2,
  Twitter: X,
  Mail: Mail,
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you. 
            Feel free to reach out using the form below or through my social channels.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-400 text-sm">Email</span>
                </div>
                <a
                  href="mailto:your.email@example.com"
                  className="text-white text-lg font-semibold hover:text-cyan-400 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>

              {/* Location */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-400 text-sm">Location</span>
                </div>
                <p className="text-white text-lg font-semibold">India</p>
              </div>

              {/* Response Time */}
              <div className="mb-8 p-6 rounded-lg border border-gray-800 bg-gray-900/50">
                <h3 className="text-white font-semibold mb-2">Response Time</h3>
                <p className="text-gray-400 text-sm">
                  I typically respond to inquiries within 24-48 hours.
                </p>
              </div>

              {/* Social Links */}
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = iconMap[link.icon] ?? Link2;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border border-gray-700 bg-gray-900/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-200"
                      aria-label={link.label}
                      title={link.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>

                <ContactForm />
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
                  <h3 className="text-white font-semibold mb-2">Collaboration</h3>
                  <p className="text-gray-400 text-sm">
                    I'm always interested in collaborating on exciting projects and exploring new opportunities.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
                  <h3 className="text-white font-semibold mb-2">Feedback</h3>
                  <p className="text-gray-400 text-sm">
                    Have feedback or suggestions? I'd love to hear your thoughts on my work and portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
