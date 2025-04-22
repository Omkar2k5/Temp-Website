import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // This is a placeholder implementation
    // In a real application, you would want to:
    // 1. Call your backend API to get the actual visitor count
    // 2. Increment the count for new visitors
    // 3. Use cookies or local storage to prevent multiple counts from the same user
    const count = parseInt(localStorage.getItem('visitorCount') || '0');
    if (!localStorage.getItem('hasVisited')) {
      localStorage.setItem('visitorCount', (count + 1).toString());
      localStorage.setItem('hasVisited', 'true');
      setVisitorCount(count + 1);
    } else {
      setVisitorCount(count);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-md p-3 flex items-center space-x-2">
      <Users className="text-primary-700" size={20} />
      <div>
        <div className="text-sm font-medium text-gray-600">आपण आहात अभ्यागत क्र.</div>
        <div className="text-lg font-bold text-primary-700">{visitorCount.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default VisitorCounter; 