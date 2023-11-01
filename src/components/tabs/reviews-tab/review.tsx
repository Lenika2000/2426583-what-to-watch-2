import {UserReview} from '../../../models/models';
import {format} from 'date-fns';

type ReviewProps = {
  review: UserReview;
}
export function Review({review}: ReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={format(review.date, 'MMMM d, yyyy-MM-dd')}>{format(review.date, 'MMMM d, yyyy-MM-dd')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
