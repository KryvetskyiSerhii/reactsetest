import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import classes from './../Blog.module.css'


const ArticleItem = () => {
    const  idNumber  = useParams()
    
    const content = useSelector(state => state.articles.articleItems).filter(e=>e.link == idNumber.id)
    return (
        <div className={classes.blogMainPage}>
            <div className={classes.container}>
                <div className={classes.blogArticleItem}>
                    <h3>{content[0].title}</h3>
                    <p>{content[0].text}</p>
                    <img src={content[0].img}  />
                </div>
            </div>
        </div>
    )
}

export default ArticleItem