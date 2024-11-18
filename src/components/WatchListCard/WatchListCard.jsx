import React from 'react';
import './WatchListCard.css';
import MovieControles from 'components/MovieControles/MovieControles';

const WatchListCard = ({ movie, type }) => {

  const defaultImage = 'https://m.media-amazon.com/images/M/MV5BMDYwNDViNGEtOWM0OC00YmMzLTliMWYtNWVjNWIyOGEyMjU4XkEyXkFqcGc@._V1_QL75_UX190_CR0,4,190,281_.jpg';

  // معالجة خطأ تحميل الصورة
  const handleError = (e) => {
    e.target.src = defaultImage;  // تعيين الصورة الافتراضية في حال حدوث خطأ
  };

  return (
    <div className='card-WatchListCard col-lg-2 col-md-3 col-sm-5  col-8 '>
      {/* التحقق إذا كانت الصورة موجودة في الـ API، وإذا لم تكن هناك صورة تعرض الصورة الافتراضية */}
      <img
        src={movie.Poster ? movie.Poster : defaultImage}
        alt={movie.Title || 'Movie Poster'}
        onError={handleError} // إضافة معالجة الخطأ
      />

      {/* MovieControles فوق الصورة مع مسافة 10% من الأسفل */}
      <div className='movie-controls'>
        <MovieControles movie={movie} type={type} />
      </div>
    </div>
  );
};

export default WatchListCard;
