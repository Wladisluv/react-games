import { forwardRef } from "react"
import { TypeInputProps } from "./field.types"
import styles from './Field.module.scss'


const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, style, Icon, className, ...rest }, ref) => {
  return (
    <div className={styles.field} style={style}>
        {Icon && (
            <div className={styles.icon}>
                <Icon />
            </div>
        )}
        <input ref={ref} {...rest}/>
        {error && <div className={styles.error}>{error.message}</div>}
    </div>
  )
}
)

Field.displayName = 'Field'

export default Field