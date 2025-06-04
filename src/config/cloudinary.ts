// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: 'dtk5wa6em',
  apiKey: '241376772587925',
  uploadPreset: 'gadi_lohar_members_upload',
  folder: 'gadi-lohar/executive-committee'
};

// Upload image to Cloudinary
export const uploadImageToCloudinary = async (file: File): Promise<{
  url: string;
  publicId: string;
}> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);
  formData.append('folder', CLOUDINARY_CONFIG.folder);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return {
      url: data.secure_url,
      publicId: data.public_id,
    };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Delete image from Cloudinary
export const deleteImageFromCloudinary = async (publicId: string): Promise<boolean> => {
  try {
    // Note: For production, you should implement this on your backend
    // as it requires your API secret which shouldn't be exposed on the frontend
    console.log('Image deletion should be implemented on backend for security:', publicId);
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};

// Generate optimized image URL
export const getOptimizedImageUrl = (publicId: string, options: {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string;
} = {}): string => {
  const {
    width = 400,
    height = 400,
    crop = 'fill',
    quality = 'auto'
  } = options;

  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/w_${width},h_${height},c_${crop},q_${quality}/${publicId}`;
};
