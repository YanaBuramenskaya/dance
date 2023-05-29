import React from 'react';
import NewsItem from "./NewsItem";

class News extends React.Component {
    render() {
        return (
            <div className='news'>
                {this.props.news.map((el) => (
                    <NewsItem key={el.id} news={el}/>
                ))}
            </div>
        )
    }
}

export default News
