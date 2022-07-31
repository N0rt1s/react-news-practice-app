import React from 'react'
import { useEffect, useState } from 'react'
import NewsBox from './newsBox';
import axios from "axios";
import logo from '../../src/logo.png'
function NewsContainer(props) {
    let [news, setNews] = useState([]);
    let num = 1

    
    const getNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${num}&apiKey=d4fa94798eab42dd8283d764e7d48903`
        const response = await axios.get(url)

        setNews(response.data.articles);
        console.log("num=",num)

    };

    const addscroll = async (e) => {
        if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
            num++
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&page=${num}&apiKey=d4fa94798eab42dd8283d764e7d48903`
            const response = await axios.get(url)
            setNews((oldNews) => [...oldNews, ...response.data.articles])
        }
    }
    useEffect(() => {
       
        getNews()
        window.addEventListener("scroll", addscroll)
    }, [])

    return (

        <div className="container " style={{marginTop:"70px"}}>
                <h1 className="my-4" style={{textAlign:"center"}} >{props.heading}</h1>
            <div className='row'>
                {news.map((element) => {

                    return (
                        <div className='col md-3 my-1'>
                            <NewsBox key={element.name}
                                imageurl={!element.urlToImage ? logo : element.urlToImage}
                                imagetitle={element.title}
                                description={element.description.length>50?element.description.split(0,50):element.description}
                                newsurl={element.url}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewsContainer
