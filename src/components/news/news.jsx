import React, {Component} from 'react';

import NewsBlock from './news-block/news-block';
import NewsService from '../../services/news-service';

import chunkify from '../../helpers/chunk-helper';
import Loader from "../loader/loader";

class News extends Component {
    constructor(props) {
        super(props);

        this.state  = {
            newsList: []
        };

        this.columnCount = 3;
    }

    componentDidMount() {
        new NewsService().getNews(this.props.search).then(result => {
            this.setState({newsList: chunkify(result.articles, this.columnCount)})
        });
    }

    render() {
        return (
            <div className="news-list">
                {
                    this.state.newsList.length
                        ? this.state.newsList.map((x, i) => this.renderColumn(x, i))
                        : <Loader />
                }
            </div>
        );
    }

    renderColumn(columnData, index) {
        return (
            <div className='col-33' key={index}>
                {columnData.map(this.renderNewsBlock)}
            </div>
        )
    }

    renderNewsBlock(data, index) {
        return (
            <NewsBlock data={data} key={index}/>
        );
    }
}

export default News;