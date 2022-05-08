import classes from './../Blog.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { searchBarIsVisible } from '../../../redux/menu'
import { scrollToTheElement } from '../../../redux/articles'
import { useFormik } from 'formik'
import maginfier from './../../../img/maginfier.svg'
import { useEffect } from 'react'




const LocalSearch = (props) => {
  const {articleItems} = useSelector(state => state.articles) 
  const isVisible = useSelector(state => state.modal.isSearchBarVisible)
  const dispatch = useDispatch()
 
  const searchVisible = () => {
    dispatch(searchBarIsVisible())
  }

  const initialValues = {
    text: ''
  }

  const findPost =  () => {
    const findId = articleItems.filter(e => e.isFound === true)[0].id  
    const element = document.getElementById(findId)
    element.scrollIntoView()
    formik.values.text=''
    
  }
 

  useEffect(() => {
    articleItems.filter(e => e.isFound === true).length>0 && findPost()
  }, [articleItems])
  
 
      
  
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit:  (values) => {
      dispatch(scrollToTheElement(values.text))
    },
  });
 
      
    return (
        <div className={classes.navLocalSearch}>
           <div><button className={classes.navBtn} onClick={searchVisible}>Search</button></div>
           {isVisible && <form onSubmit={formik.handleSubmit} className={classes.navSearchForm}>
      
      <input
          className={classes.navSearchInput}
          id="searchInput"
          name="text"
          type="text"
          onChange={formik.handleChange}
          placeholder="Start your search"
          value={formik.values.text}
      />
      <button type="submit" className={classes.navGoButton}> <img src={maginfier}  /> </button>
  </form>} 
        </div>
    )
}

export default LocalSearch