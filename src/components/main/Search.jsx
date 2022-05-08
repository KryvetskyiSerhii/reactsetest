import classes from './Main.module.css'
import logo from './../../img/logo.png'
import maginfier from './../../img/maginfier.svg'
import {useFormik} from 'formik'


const Search = () => {
     
    const initialValues = {}
    const addNewNote = () => {}
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (value) => {
          await addNewNote(value);
        }
      });

    return (
        <div className={classes.container}>
            <div className={classes.search__logo}>
                <img src={logo}  />
            </div>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
      
                <input
                    className={classes.searchInput}
                    id="searchInput"
                    name="searchInput"
                    type="text"
                    onChange={formik.handleChange}
                    placeholder="Start your search"
                />
                <button type="submit" className={classes.searchButton}> <img src={maginfier}  /> </button>
            </form>
        </div>
    )
}


export default Search