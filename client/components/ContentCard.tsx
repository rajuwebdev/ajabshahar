import { Heart, Share2 } from "lucide-react";

interface ContentCardProps {
  image: string;
  video?: string;
  title: string;
  subtitle?: string;
  author: string;
  description: string;
  category: string;
  link: string;
}

export function ContentCard({
  image,
  video,
  title,
  subtitle,
  author,
  description,
  category,
  link,
}: ContentCardProps) {
  // If video is required but not available, don't render the card
  if (!video && category === "video-required") {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[420px] mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* Media - Video or Image */}
      <div className="relative h-48 overflow-hidden">
        {video ? (
          <video
            src={video}
            poster={image}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="card-heaing-font font-semibold text-rose-500 mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && <p className="text-sm text-gray-600 mb-2">{subtitle}</p>}

        {/* Author */}
        <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
          {author}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed mb-4 border-t border-rose-500 py-3">
          {description}
        </p>

        {/* Action Button */}
        <button className="ml-auto block text-rose-500   pb-0  text-sm font-medium hover:text-rose-600 transition-colors duration-200">
          EXPLORE {category.toUpperCase()}
        </button>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-t">
        <button className="flex items-center space-x-1 text-gray-500 hover:text-rose-500 transition-colors">
          <Heart size={16} />
        </button>
        <button className="flex items-center space-x-1 text-gray-500 hover:text-rose-500 transition-colors">
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
}
