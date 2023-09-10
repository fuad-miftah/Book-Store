import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/favoriteBooksSlice';

const FavoriteBooks = () => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector((state) => state.favoriteBooks.books);

  const sampleBooks = [
    { id: 1, title: 'Book 1', image: 'book1.jpg', price: '$10.99' },
    { id: 2, title: 'Book 2', image: 'book2.jpg', price: '$12.99' },
    { id: 3, title: 'Book 3', image: 'book3.jpg', price: '$9.99' },
    // Add more sample books as needed
  ];

  const isBookInFavorites = (book) => {
    return favoriteBooks.some((favBook) => favBook.id === book.id);
  };

  const toggleFavorite = (book) => {
    if (isBookInFavorites(book)) {
      dispatch(removeFromFavorites(book));
      console.log("The Book is removed successfully");
    } else {
      // dispatch(addToFavorites(book));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-4">Favorite Books</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleBooks.map((book) => (
          <li key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">Price: {book.price}</p>
              <button
                onClick={() => toggleFavorite(book)}
                className=" bg-green-500 hover:bg-opacity-75 text-white font-semibold py-2 px-4 rounded-full"
              >   Remove from Favorites

              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteBooks;
