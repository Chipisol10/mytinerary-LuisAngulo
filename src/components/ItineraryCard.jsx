import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ItineraryCard = ({ itinerary }) => {
  const [expandedItinerary, setExpandedItinerary] = useState(null);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = '/images/default-itinerary.jpg';
  };

  const formatPrice = (price) => {
    return new Array(price).fill(
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cash w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" viewBox="0 0 16 16">
        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
        <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
      </svg>
    );
  };

  const renderHashtags = () => {
    if (!Array.isArray(itinerary.hashtags)) return null;

    return itinerary.hashtags.map((tag, index) => (
      <span
        key={`${tag}-${index}`}
        className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
      >
        #{tag}
      </span>
    ));
  };

  return (
    <div className="bg-blue-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
      <div className="relative w-full">
        <img
          src={itinerary.photo}
          alt={itinerary.name || 'Itinerary image'}
          className="w-full h-32 object-cover rounded-md"
          onError={handleImageError}
        />
      </div>

      <h4 className="text-xl font-semibold mt-4 text-center line-clamp-1">
        {itinerary.name || 'Untitled Itinerary'}
      </h4>

      <div className="text-green-600 mt-2 flex items-center justify-center">
        <p className="text-gray-600 pe-2">Price:</p>
        {formatPrice(itinerary.price).map((p, index) => (
          <div key={index}>{p}</div>
        ))}
      </div>

      {typeof itinerary.likes === 'string' && (
        <span className="bg-yellow-200 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mt-2 text-center">
          Likes: {itinerary.likes}
        </span>
      )}

      <div className="flex flex-wrap w-full items-center justify-center gap-2 mt-2">
        {renderHashtags()}
      </div>

      <div className="flex flex-col w-full items-center pt-3 mt-2 border-t border-gray-200">
        <button
          onClick={() =>
            setExpandedItinerary(
              expandedItinerary === itinerary._id ? null : itinerary._id
            )
          }
          className="text-white hover:bg-blue-600 bg-blue-500 py-2 px-4 rounded-xl w-full md:w-auto flex items-center justify-center gap-2"
        >
          <span>{expandedItinerary === itinerary._id ? 'View less' : 'View more'}</span>
          {expandedItinerary === itinerary._id ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {expandedItinerary === itinerary._id && (
          <div className="px-4 pb-4 text-center">
            <p className="text-gray-700">Under construction</p>
            <p className="text-gray-800">Activities and comments coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryCard;

