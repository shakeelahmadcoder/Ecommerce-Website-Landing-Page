import { Star, StarHalf } from "lucide-react";

export default function RatingStars({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-400">
      {Array(fullStars).fill(0).map((_, i) => (
        <Star size={18} key={`full-${i}`} fill="currentColor" />
      ))}

      {hasHalfStar && <StarHalf size={18} fill="currentColor" />}

      {Array(emptyStars).fill(0).map((_, i) => (
        <Star size={18} key={`empty-${i}`} className="text-gray-300" />
      ))}
    </div>
  );
}
