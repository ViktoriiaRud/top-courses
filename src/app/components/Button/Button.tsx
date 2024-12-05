import classNames from 'classnames';
import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import cn from 'classnames';
import Arrow from './Arrow';


export const Button = ({variant, arrow = 'none', children, className, ...props}:ButtonProps):JSX.Element => {
    return <>
        <button
        className={cn(styles.button, classNames, {
            [styles.primary]: variant =='primary',
            [styles.ghost]: variant =='ghost',
        })}
        {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down] : arrow == 'down'
            })}>
                <Arrow/>
                </span>}
        </button>
    </>
}