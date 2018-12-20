import React, {Component} from 'react';

import NewsBlock from './news-block/news-block';
import NewsService from '../../services/news-service';

import chunkify from '../../helpers/chunk-helper';
import Loader from "../loader/loader";

import NewsModel from '../../models/news-model';

//Where to put ?
interface NewsProps {
    search: string;
}

interface NewsState {
    newsList: NewsModel[][]

}

export default class News extends Component<NewsProps, NewsState> {
    private columnCount = 3;

    constructor(props: NewsProps) {
        super(props);

        this.state  = {
            newsList: []
        };
    }

    public componentDidMount() : void {
        new NewsService().getNews(this.props.search).then(result => {
            this.setState({newsList: chunkify(result, this.columnCount)})
        });
    }

    public render() : JSX.Element {
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

    private renderColumn(columnData: NewsModel[], index: number) : JSX.Element {
        return (
            <div className='col-33' key={index}>
                {columnData.map(this.renderNewsBlock)}
            </div>
        )
    }

    renderNewsBlock(data: NewsModel, index: number) : JSX.Element {
        return (
            <NewsBlock data={data} key={index}/>
        );
    }
}