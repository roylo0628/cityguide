import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import NewsCard from '../NewsCard';

class News extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.news.map(item => {
            return <NewsCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default News;
