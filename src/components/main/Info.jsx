import classes from './Main.module.css'
import idea from './../../img/idea.jpg'

const Info = () => {
    return (
        <div className={classes.info} >
            <div className={classes.container}>
                <div className={classes.infoBlocks}>
                    <div className={classes.infoBlockContent}>
                        <h1 className={classes.infoBlockTitle}>We will give you the exact result you need</h1>
                        <p className={classes.infoBlockText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, odit</p>
                        <button className={classes.infoBlockButton} type="button">Learn more</button>
                    </div>
                    <div className={classes.infoBlockImg}>
                        <img src={idea}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info