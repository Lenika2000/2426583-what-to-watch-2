import './add-review.css';
import {UserBlock} from '../../components/user-block/user-block';
import {Logo} from '../../components/logo/logo';
import React from 'react';
const RATING_VALUES = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export function AddReview(): JSX.Element {
  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src='../../../public/img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel'/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo/>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href='/' className='breadcrumbs__link'>The Grand Budapest Hotel</a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src='../../../public/img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster'/>
        </div>
      </div>

      <div className='add-review'>
        <form action='#' className='add-review__form'>
          <div className='rating'>
            <div className='rating__stars'>
              {
                RATING_VALUES.map((rating: number) => <><input className='rating__input' id='star-1' type='radio' name='rating' value={rating}/><label className='rating__label' htmlFor='star-1'>Rating {rating}</label></>)
              };
            </div>
          </div>

          <div className='add-review__text'>
            <textarea className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text'/>
            <div className='add-review__submit'>
              <button className='add-review__btn' type='submit'>Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}
