import Service from './service';

import NewsModel from '../models/news-model';
import NewsServiceModel from "../models/news-service-model";

class NewsService extends Service<NewsServiceModel> {
    private apiKey: string = 'ef5c0bce2c974283a49de1f45bccf59c';

    getNews(search: string) : Promise<NewsModel[]> {
        return this.getJson('https://newsapi.org/v2/everything', {q: search, apiKey: this.apiKey})
            .then(x => x.articles);
    }
}

export default NewsService;