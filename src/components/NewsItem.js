import React from "react";

class NewsItem extends React.Component {
    news = this.props.news
    render() {
        return (
            <div className="newsItem">
                <h3>{this.news.title}</h3>
                <p>{this.news.description}</p>
            </div>
        )
    }
}

export default NewsItem
