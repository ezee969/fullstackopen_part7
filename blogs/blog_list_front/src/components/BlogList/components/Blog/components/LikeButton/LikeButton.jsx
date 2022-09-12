import React from 'react';
import Like from 'utils/images/like.png';
import EmptyLike from 'utils/images/empty_like.png';

export default function LikeButton({ handleLikeButton, liked }) {
  return (
    <img
      onClick={() => handleLikeButton()}
      className="h-auto transition-all cursor-pointer like-button w-7 hover:scale-105"
      src={liked ? Like : EmptyLike}
      alt="like-button"
    />
  );
}
