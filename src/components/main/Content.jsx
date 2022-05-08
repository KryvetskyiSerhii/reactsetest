import classes from './Main.module.css'
import globe from './../../img/globe.png'
import { useRef, useEffect, useState } from 'react'


const Content = () => {
        
    return (
        <div className={classes.content}>
            <div className={classes.container}>
                <div className={classes.contentBlocks}>
                    <div className={classes.contentBlock}>
                        <h3 className={classes.contentBlockTitle}>Some title</h3>
                        <p className={classes.contentBlockText}>Some text</p>
                        <div className={classes.contentBlockImg}>
                            <img src={globe}  />
                        </div>
                    </div>
                    <div className={classes.contentBlock}>
                        <h3 className={classes.contentBlockTitle}>Some title</h3>
                        <p className={classes.contentBlockText}>Some text</p>
                        <div className={classes.contentBlockImg}>
                            <img src={globe}  />
                        </div>
                    </div>
                    <div className={classes.contentBlock}>
                        <h3 className={classes.contentBlockTitle}>Some title</h3>
                        <p className={classes.contentBlockText}>Some text</p>
                        <div className={classes.contentBlockImg}>
                            <img src={globe}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content