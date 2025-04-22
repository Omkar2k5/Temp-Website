import React from 'react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
  link?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  summary,
  imageUrl,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
      )}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-2">{date}</div>
        <h3 className="text-lg font-semibold text-primary-700 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{summary}</p>
        {link && (
          <a
            href={link}
            className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            अधिक वाचा
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;