import React, { Component } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const dummyData = [{
  avatar: 'N',
  avatarImg: 'https://i.ibb.co/9pfQdZm/4ead84d8959d157771afa0c493bfdbd3.jpg',
  username: 'Jinghong',
  imgSrc: 'https://i.ibb.co/JCFMpm5/B88-CF8-D5-0922-42-F9-B654-389-FCD7-E03-CC.jpg',
  tags: ['# White', '# Fashion'],
  review: 'I bought this shoe with size 43 from SSense. The size goes a little bit smaller than normal. I really like this shoe! It is very comfortable and you can wear it all the time.'
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
