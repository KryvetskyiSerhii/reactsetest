import classes from './Main.module.css'
import menu from './../../img/menu.svg'
import { Link } from 'react-router-dom'
import close2 from './../../img/close2.svg'
import {useSelector, useDispatch} from 'react-redux'
import { toggleClass } from '../../redux/menu'



const Header = () => {
  
  const modal = useSelector(state=> state.modal.menuItems)
  const isVisible = useSelector(state => state.modal.isModalVisible)
  const dispatch = useDispatch()

  const changeClass = () => {
    dispatch(toggleClass())
  }
   
  return (
    <div className={classes.header}>
      <div className={classes.container}>
            <div className={classes.headerBlock}>
                    <Link to='/blog' className={classes.headerBlog}><div >Blog</div></Link>
                <div className={classes.headerIcon}>
                   <button type="button" className={classes.headerButton} onClick={changeClass} ><img src={menu} /></button> 
                </div>
            </div>      
      </div>  
      <div className={isVisible ? classes.active : classes.modal}>
            <nav className={classes.modalMenu}>
                <ul className={classes.modalList}>
                    {modal.map(el => <li className={classes.modalItem}>
                        <Link to={el.link} className={classes.modalLink} id={el.id} key={el.id}><div >{el.name}</div></Link>
                    </li>)}
                </ul>
            </nav>
            <div className={classes.modal__button}>
                <button className={classes.modalClose} type="button" onClick={changeClass}> <img src={close2} /> </button>
            </div>
        </div>
    </div>
    )
}

export default Header