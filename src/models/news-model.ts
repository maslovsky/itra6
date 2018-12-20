import SourceModel from "./source-model";

export default interface NewsModel {
    urlToImage?: string,
    url?: string,
    title?: string,
    source?: SourceModel,
    description?: string,
    author?: string
}