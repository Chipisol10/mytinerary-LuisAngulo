import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from 'react-icons/fa';

const section = [
  {
    title: 'Advide',
    items: ['Destinations', 'Accommodation', 'Walk', 'Exercise', 'Transfer'],
  },
];

const items = [
  { name: 'Facebook', icon: FaFacebook, link: 'https://facebook.com/' },
  { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com/' },
  { name: 'Twitter', icon: FaTwitter, link: 'https://twitter.com/' },
  { name: 'Twitch', icon: FaTwitch, link: 'https://twitch.com/' },
  { name: 'Github', icon: FaGithub, link: 'https://github.com/' },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-600 pb-8">
        {section.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase">{section.title}</h6>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-400 hover:text-white cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="my-4">The latest updates, articles, and resources, sent to your inbox weekly.</p>
          <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded-md"
            />
            <button className="w-full sm:w-auto p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-gray-500">
        <p className="py-4">&copy; 2024 MyTinerary. All rights reserved.</p>
        <div className="flex space-x-6">
          {items.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="hover:text-white"
            >
              <item.icon className="text-2xl sm:text-3xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

