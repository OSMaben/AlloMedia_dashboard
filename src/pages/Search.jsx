import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '../commeptes/Spinner';

const RestaurantSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('name');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    const API_BASE_URL = 'http://localhost:8080';

    const handleCategorySelect = (category) => {
        setSearchCategory(category);
        setDropdownOpen(false);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === '') {
            setSearchResults([]);
        }
    };

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

            console.log('API Response:', response.data);

            setSearchResults(response.data.results || []);
            setTotalPages(response.data.pagination?.pages || 0);
            
            // Si aucun résultat n'est trouvé
            if (!response.data.results || response.data.results.length === 0) {
                console.log('No results found');
            }

        } catch (err) {
            console.error('Search error:', err);
            setError(err.response?.data?.error || 'Une erreur est survenue lors de la recherche.');
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        if (searchTerm.trim()) {
            handleSearch(new Event('submit'));
        }
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, searchCategory]);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <form className="mb-6" onSubmit={handleSearch}>
                <div className="flex items-center gap-2">
                    {/* Dropdown Button */}
                    <div className="relative">
                        <button
                            type="button"
                            className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {searchCategory.charAt(0).toUpperCase() + searchCategory.slice(1)}
                            <span className="ml-2">▼</span>
                        </button>

                        {dropdownOpen && (
                            <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                                <div className="py-1">
                                    {['name', 'cuisine', 'location'].map((category) => (
                                        <button
                                            key={category}
                                            type="button"
                                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => handleCategorySelect(category)}
                                        >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search Input */}
                    <div className="flex-1">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder={`Search by ${searchCategory}...`}
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                    >
                        {loading ? <Spinner size="sm" /> : 'Search'}
                    </button>
                </div>
            </form>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            {/* Debug Info - À retirer en production */}
            {/* <div className="mb-4 p-2 bg-gray-100 rounded text-sm">
                <p>Search Term: {searchTerm}</p>
                <p>Category: {searchCategory}</p>
                <p>Results Count: {searchResults.length}</p>
            </div> */}

            {/* Results */}
            <div className="space-y-4">
                {searchResults.map((restaurant) => (
                    <div 
                        key={restaurant._id}
                        className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4">
                            {restaurant.logo && (
                                <img 
                                    src={restaurant.logo} 
                                    alt={restaurant.restoname}
                                    className="w-16 h-16 object-cover rounded-full"
                                />
                            )}
                            <div>
                                <h3 className="text-lg font-semibold">{restaurant.restoname}</h3>
                                <p className="text-gray-600">{restaurant.type}</p>
                                <p className="text-sm text-gray-500">{restaurant.address}</p>
                                {restaurant.bio && (
                                    <p className="mt-2 text-sm text-gray-600">{restaurant.bio}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* {
                searchResults.length === 0 && !loading && searchTerm && (
                    <p className="text-center text-gray-500">No restaurants found</p>
                )} */}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${
                                currentPage === page
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RestaurantSearch;