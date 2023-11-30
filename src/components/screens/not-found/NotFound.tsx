import { Button } from "@mui/material"
import styles from './NotFound.module.scss'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
        <div>
          <h1>404 🤔</h1>
          <h2>Page Not Found</h2>
        </div>
          <div>
          <Link to='/'><Button className={styles['not-found__button']} variant="contained">Main Page</Button></Link>
          </div>
    </div>
  )
}

export default NotFound