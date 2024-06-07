import React, { Component } from 'react';

export default class ShowFullItem extends Component {
  state = {
    reviews: [], // Состояние для хранения отзывов
    newReview: '', // Состояние для нового отзыва
  };

  componentDidMount() {
    // Load reviews from localStorage when the component mounts
    const savedReviews = localStorage.getItem(`reviews-${this.props.item.id}`);
    if (savedReviews) {
      this.setState({ reviews: JSON.parse(savedReviews) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Save reviews to localStorage whenever they are updated
    if (prevState.reviews !== this.state.reviews) {
      localStorage.setItem(`reviews-${this.props.item.id}`, JSON.stringify(this.state.reviews));
    }
  }

  handleClickOutside = (e) => {
    if (e.target.className === 'full-item') {
      this.props.onShowItem(this.props.item);
    }
  };

  handleReviewChange = (e) => {
    this.setState({ newReview: e.target.value });
  };

  handleAddReview = () => {
    if (this.state.newReview.trim()) {
      this.setState((prevState) => ({
        reviews: [...prevState.reviews, prevState.newReview],
        newReview: '',
      }));
    }
  };

  handleDeleteReview = (index) => {
    this.setState((prevState) => {
      const updatedReviews = [...prevState.reviews];
      updatedReviews.splice(index, 1);
      return { reviews: updatedReviews };
    });
  };

  render() {
    return (
      <div className='full-item' onClick={this.handleClickOutside}>
        <div className='full-item-d'>
          <img src={"./img/" + this.props.item.img} alt='' />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        
          <div className='reviews-section'>
            <h3>Отзывы</h3>
            <ul className='reviews-list'>
              {this.state.reviews.map((review, index) => (
                <li key={index}>
                  {review}
                  <button onClick={() => this.handleDeleteReview(index)}>Удалить</button>
                </li>
              ))}
            </ul>
            <div className='add-review'>
              <textarea
                value={this.state.newReview}
                onChange={this.handleReviewChange}
                placeholder='Напишите ваш отзыв'
              ></textarea>
              <li className='li-dob' onClick={this.handleAddReview}>Добавить отзыв</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
