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
        <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">
          City {location.state.name}
        </h1>
        <img
          src={location.state.photo}
          alt={`Image of ${location.state.name}`}
          className="w-full max-w-3xl h-96 object-cover mb-6  rounded-lg  md:w-[800px] md:h-[500px]"
        />
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Back to Cities
        </button>
      </div>
      <div className='w-full flex justify-center items-center pb-16'>
        <div className='w-[80%] grid grid-cols-1 md:grid-cols-3 gap-5'> 
        {!loading && itinerary.length > 0 ? itinerary.map(itiner=><ItineraryCard itinerary={itiner}></ItineraryCard>) : "" }
        </div>
      
      </div>

      
      {!loading && itinerary.length ==0 ? <p className='text-center text-2xl font-bold text-white pb-11'>No itineraries available for this city.</p>:""}
    </div>

  );
};

export default CitiesDetails;
