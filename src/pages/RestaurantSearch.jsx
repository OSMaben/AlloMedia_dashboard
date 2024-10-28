import { useState } from 'react';
import axios from 'axios';
import { Spinner } from '../commeptes/Spinner';
import { useNavigate } from 'react-router-dom';

const RestaurantSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('name');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const API_BASE_URL = 'http://localhost:8080';
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/client/search`, {
                params: {
                    category: searchCategory,
                    searchTerm: searchTerm,
                    page: currentPage,
                    limit: 10
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setSearchResults(response.data.results || []);
            setTotalPages(response.data.pagination?.pages || 0);

        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred during search.');
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleRestaurantClick = (id) => {
        navigate(`/restaurant/${id}`);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <form className="mb-6" onSubmit={handleSearch}>
                <div className="flex items-center gap-2">
                    <select
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}
                        className="px-4 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-orange-300"
                    >
                        <option value="name">Name</option>
                        <option value="cuisine">Cuisine</option>
                        <option value="location">Location</option>
                    </select>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-300"
                        placeholder={`Search by ${searchCategory}`}
                    />

                    <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300">
                        {loading ? <Spinner size="sm" /> : 'Search'}
                    </button>
                </div>
            </form>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((restaurant) => (
                    <div 
                        key={restaurant._id} 
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow duration-300"
                        onClick={() => handleRestaurantClick(restaurant._id)}
                    >
                        <img 
                            className="rounded-t-lg w-full h-48 object-cover" 
                            src="/api/placeholder/400/300" 
                            alt={restaurant.restoname} 
                        />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {restaurant.restoname}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                                {restaurant.type}
                            </p>
                            <p className="mb-4 font-normal text-gray-600">
                                {restaurant.address}
                            </p>
                            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-300">
                                View Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button 
                            key={i} 
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 rounded ${
                                currentPage === i + 1 
                                    ? 'bg-orange-600 text-white' 
                                    : 'bg-white text-orange-600 border border-orange-600 hover:bg-orange-50'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}

            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default RestaurantSearch;