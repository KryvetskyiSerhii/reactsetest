import { useSelector } from 'react-redux'
import classes from './../Blog.module.css'
import Article from './Article'
import { Link } from 'react-router-dom'
import React from 'react'
const News = () => {
    
    const articles = useSelector(state => state.articles.articleItems)
    return (
        <div className={classes.news}>
            <div className={classes.container}>
                <div className={classes.newsBlocks}>
                    {articles.map(element =><Link to={element.link} 
                    className={classes.newsArticleLink}>
                    <Article 
                    id={element.id} 
                    title={element.title} 
                    text={element.text}
                    img={element.img}
                    />
                    </Link> )}
                  </div>
            </div>
        </div>
    )
}

export default News