import classes from './Blog.module.css'
import Nav from './nav/Nav'
import News from './news/News'
import { Route, Routes} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArticleItem from './news/ArticleItem';


const Blog = (props) => {
    const createLinks = useSelector(state => state.articles.articleItems)
    return (
        <div className={classes.blog}>
            
            <Nav store={props.store}/>
            <div className={classes.blogMainPage}>
                <Routes>
                    <Route path='' element={<News />} />
                    {createLinks.map(element => <Route 
                    path={element.link} element={<ArticleItem id={element.id} />} />)}
                </Routes>
                    
            </div>  
        </div>
    )
}


export default Blog