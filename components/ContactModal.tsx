import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:careers.christian@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div className="text-white p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full bg-[#333] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-[#E50914] transition"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full bg-[#333] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-[#E50914] transition"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full bg-[#333] border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-[#E50914] transition"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#E50914] text-white font-bold py-3 rounded hover:bg-[#b2070f] transition flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactModal;
