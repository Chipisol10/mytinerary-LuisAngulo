import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchItineraries } from '../store/action/actionItineraries';
import ItineraryCard from '../components/ItineraryCard';

const CitiesDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { itinerary, loading } = useSelector(state => state.reducerItineraries)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchItineraries(location.state._id))
  }, [])

  return (
    <div>
      <div className="p-8 h-screen bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-7xl font-bold text-blue-200 drop-shadow-lg mb-4 text-center max-w-screen-lg">
          City {location.state.name}
        </h1>
        <img
          src={location.state.photo}
          alt={`Image of ${location.state.name}`}
          className="w-full max-w-4xl h-96 md:h-[600px] object-cover mb-6 rounded-lg"
        />
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Back to Cities
        </button>
      </div>
      <div className="w-full flex justify-center items-center pb-16">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-5">
          {!loading && itinerary.length > 0
            ? itinerary.map(itiner => (
                <ItineraryCard key={itiner.id} itinerary={itiner} />
              ))
            : ""}
        </div>
      </div>

      {!loading && itinerary.length === 0 ? (
        <div className="w-full flex justify-center items-center pb-20">
          <div className="bg-blue-400 p-4 rounded-md w-[80%] max-w-screen-md">
            <p className="text-center text-2xl font-bold text-white">
              No itineraries available for this city.
            </p>
          </div>
        </div>
      ) : ""}
    </div>
  );
};

export default CitiesDetails;