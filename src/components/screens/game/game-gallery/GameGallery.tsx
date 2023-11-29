import { Grid } from "@mui/material"
import styles from './GameGallery.module.scss'


const GameGallery = () => {
  return (
    <div>
        <Grid className={styles.gallery} container spacing={1}>
              <Grid item xs={12}>
                <img src="https://images.greenmangaming.com/bbd2316440504045b61415bf9da78c4c/faac1dba6c7b48be8f82856c887991b7.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img src="https://images.greenmangaming.com/bbd2316440504045b61415bf9da78c4c/faac1dba6c7b48be8f82856c887991b7.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img src="https://images.greenmangaming.com/bbd2316440504045b61415bf9da78c4c/faac1dba6c7b48be8f82856c887991b7.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img src="https://images.greenmangaming.com/bbd2316440504045b61415bf9da78c4c/faac1dba6c7b48be8f82856c887991b7.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img src="https://images.greenmangaming.com/bbd2316440504045b61415bf9da78c4c/faac1dba6c7b48be8f82856c887991b7.jpg" alt="" />
              </Grid>
            </Grid>
    </div>
  )
}

export default GameGallery