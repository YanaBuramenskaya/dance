import React from "react";

class NewsItem extends React.Component {
    news = this.props.news

    render() {
        return (<div>
            <ul className="newsItem">
                <li><h3>{this.news.title}</h3></li>
                <li><p>{this.news.description}</p></li>
                <li><img src={this.news.image} alt='blog image'/></li>
            </ul>
        </div>)
    }
}

export default NewsItem
