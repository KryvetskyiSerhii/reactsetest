import logo from './../../../img/logo.png'
import { Link } from 'react-router-dom'
import classes from './../Blog.module.css'
import LocalSearch from './LocalSearch'
import { useSelector } from 'react-redux'


const Nav = (props) => {
 const menu = useSelector(state => state.modal.menuItems)
 const articles = useSelector(state => state.articles.articleItems)

    return (
        <div className={classes.nav}>
           <Link to='/' className={classes.navLogo}>
               <img src={logo} /></Link> 
            
            <ul className={classes.navMenuList}>
                    <li className={classes.navMenuItem}><LocalSearch articles={articles}/></li>
                    {menu.map(el => <li className={classes.navMenuItem}>
                        <Link to={el.link2} className={classes.navMenuLink} id={el.id} key={el.id}><button type="button" className={classes.navBtn}>{el.name}</button></Link>
                    </li>)}
            </ul>
        </div>
    )
}

export default Nav