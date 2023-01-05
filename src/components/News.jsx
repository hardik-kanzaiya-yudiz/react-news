import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    // articals = ;
    //when we create the constructor in class based so super() keywork is always writer
    //constructor is automatically call when we create the object of the class 
    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1
        };
    }

    //this function is called after the reder method is called 
    async componentDidMount() {
        // console.log(this.parseData);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f7881dbb419843beb3b83e66b1b77d22&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let newsData = await fetch(url);
        let parseData = await newsData.json();
        this.setState({ article: parseData.articles, totalResults: parseData.totalResults });
    }


    render() {
        const prevNews = async () => {
            let prevPage = this.state.page - 1;
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f7881dbb419843beb3b83e66b1b77d22&page=${prevPage}&pageSize=${this.props.pageSize}`;
            let newsData = await fetch(url);
            let parseData = await newsData.json();
            this.setState({
                article: parseData.articles,
                page: this.state.page - 1
            });
        }

        const nextNews = async () => {
            let totalPage = Math.ceil(this.state.totalResults / this.props.pageSize);
            let newPage = this.state.page + 1;
            if (newPage <= totalPage) {
                let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f7881dbb419843beb3b83e66b1b77d22&page=${newPage}&pageSize=${this.props.pageSize}`;
                let newsData = await fetch(url);
                let parseData = await newsData.json();
                this.setState({
                    article: parseData.articles,
                    page: this.state.page + 1
                });
            }
        }

        return (
            <>
                <div div className="container" >
                    <div className="row">
                        {
                            this.state.article.length > 0 && this.state.article.map((ele, index) => {
                                return <div className="col-md-4" key={index}>
                                    <Newsitem title={ele.title?.split(' ').slice(0, 8).join(' ')} description={ele.description?.split(' ').slice(0, 8).join(' ')} newsUrl={ele.url} imageUrl={ele.urlToImage} />
                                </div>
                            })
                        }
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <button disabled={this.state.page <= 1 ? "disabled" : ''} className='btn btn-dark' onClick={prevNews} > Prev </button>
                        <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize)) ? "disabled" : ""} className='btn btn-dark' style={{ float: "right" }} onClick={nextNews} > Next </button>
                    </div>
                </div>
            </>
        )
    }
}
