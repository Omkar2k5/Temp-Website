import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadImageToCloudinary, getOptimizedImageUrl } from '../config/cloudinary';

interface ImageUploadProps {
  currentImageUrl?: string;
  currentPublicId?: string;
  onImageUpload: (imageUrl: string, publicId: string) => void;
  onImageRemove: () => void;
  label?: string;
  className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  currentImageUrl,
  currentPublicId,
  onImageUpload,
  onImageRemove,
  label = 'फोटो अपलोड करा',
  className = ''
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('कृपया फक्त इमेज फाइल निवडा');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('फाइल साइज ५ MB पेक्षा कमी असावी');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const result = await uploadImageToCloudinary(file);
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      onImageUpload(result.url, result.publicId);
      
      setTimeout(() => {
        setIsUploading(false);
        setUploadProgress(0);
      }, 500);
      
    } catch (error) {
      console.error('Upload error:', error);
      alert('फोटो अपलोड करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.');
      setIsUploading(false);
      setUploadProgress(0);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = () => {
    onImageRemove();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      
      {currentImageUrl ? (
        <div className="relative">
          <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-200">
            <img
              src={currentPublicId ? getOptimizedImageUrl(currentPublicId, { width: 128, height: 128 }) : currentImageUrl}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            title="फोटो हटवा"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
          <ImageIcon className="h-8 w-8 text-gray-400" />
        </div>
      )}

      <div className="space-y-2">
        <button
          type="button"
          onClick={handleUploadClick}
          disabled={isUploading}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Upload className="h-4 w-4" />
          <span>{isUploading ? 'अपलोड करत आहे...' : currentImageUrl ? 'नवीन फोटो अपलोड करा' : 'फोटो अपलोड करा'}</span>
        </button>

        {isUploading && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <p className="text-xs text-gray-500">
          JPG, PNG, GIF फॉर्मॅट. कमाल ५ MB साइज.
        </p>
      </div>
    </div>
  );
};

export default ImageUpload;
