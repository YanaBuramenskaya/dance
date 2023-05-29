import React from 'react';
import NewsItem from "./NewsItem";

class News extends React.Component {
    render() {
        return (
            <div className='news'>
                {this.props.news.map((el) => (
                    <div>
                        <NewsItem key={el.id} news={el}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default News
