import React, { Component } from 'react';
import SingleReview from './SingleReview/SingleReview';

const dummyData = [{
  avatar: 'N',
  username: 'Jinhong',
  imgSrc: 'https://images.unsplash.com/photo-1556807457-9c4f0a528934?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  tags: ['# White', '# Fashion'],
  review: 'I bought this shoe with size 37 from SSense. The size goes a little bit smaller than normal. I really like this shoe! It is very comfortable and you can wear it all the time.'
}];

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: dummyData
    };
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.map(review => (
          <SingleReview review={review} />
        ))}
      </div>
    );
  }
}

export default Reviews;
