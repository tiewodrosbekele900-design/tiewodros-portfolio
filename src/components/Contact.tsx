import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { socialLinks } from '../data/navigationData';  // ← Fix the path!
import { Send, Github as GithubIcon, Linkedin, Youtube, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);    

    try {
      const result = await emailjs.send(
        'service_0y8aoi9',      // Replace with your EmailJS Service ID
        'template_9my2o8e',     // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'Iejt010C42VoJe_6Q'       // Replace with your EmailJS Public Key
      );

      console.log('Email successfully sent!', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'GitHub':
      return <GithubIcon size={20} />;
    case 'Linkedin':
      return <Linkedin size={20} />;
    case 'Youtube':
      return <Youtube size={20} />;
    case 'Instagram':
      return <Instagram size={20} />;
    default:
      return null;
  }
};

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-center bg-cover blur-sm md:blur"
        style={{ backgroundImage: `url('/c.jpg')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="section-container relative z-10">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className={`text-2xl font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            } mb-6`}>Let's Discuss Your Project</h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            } mb-8`}>
              Whether you're interested in my IT expertise or artistic skills, I'd love to hear from you. Feel free to reach out using the form or any of my social channels.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                } flex items-center justify-center text-blue-400`}>
                  <Mail size={18} />
                </div>
                <div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Email</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>tiewodrosbekele900@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                } flex items-center justify-center text-teal-400`}>
                  <MapPin size={18} />
                </div>
                <div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Location</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                } flex items-center justify-center text-yellow-400`}>
                  <Phone size={18} />
                </div>
                <div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Phone</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>+251918428609</p>
                  <p className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>+251906551398</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a 
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300
                           ${
                             theme === 'dark'
                               ? 'bg-gray-800 hover:bg-gradient-to-r from-blue-600 to-teal-500 text-gray-400 hover:text-white'
                               : 'bg-gray-100 hover:bg-gradient-to-r from-blue-600 to-teal-500 text-gray-600 hover:text-white'
                           }`}
                  aria-label={link.platform}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } mb-2`}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } mb-2`}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  placeholder="tiewodrosbekele900@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } mb-2`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                } mb-2`}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  } resize-none`}
                  placeholder="Hello, I'm interested to discuss with you about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-md text-green-400 text-sm">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/20 border border-red-700 rounded-md text-red-400 text-sm">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;