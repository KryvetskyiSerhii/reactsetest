import classes from './../Blog.module.css'



const Article = (props) => {
    return (
        <article className={classes.newsArticleBlock} id={props.id}>
            <h3 className={classes.newsTtile}>{props.title}</h3>
            <p className={classes.newsText}>{props.text}</p>
            <div className={classes.newsImage}><img src={props.img} /></div>
        </article>
    )
}

export default Article