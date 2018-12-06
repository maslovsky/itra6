import React, { Component } from 'react';
import './news-block.css';

class NewsBlock extends Component {
    render() {
        const {
            urlToImage,
            url,
            title,
            source,
            description,
            author
        } = this.props.data;

        return (
            <div className='news-container'>
                <div className="news">
                    <div className="preview">
                        <img src={urlToImage} alt="img"/>
                    </div>

                    <div className="news-content">
                        <div className="title-container">
                            <a className="title" href={url} target="_blank" rel="noopener noreferrer">{title}</a>

                            <div className="source">from: {source.name}</div>
                        </div>

                        <div className="description">{description}</div>

                        <div className="footer">
                            <a href={url} className="read-more" target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>

                            <div className="author">by <span className="author-name" title={author}>{author}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsBlock;