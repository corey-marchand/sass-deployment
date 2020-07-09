import Link from 'next/link'
import styles from './SnackItem.module.scss'

export default function SnackItem(props) {
    return (
        <div className={styles.div}>
            <li key={props.snack.id}>
                <Link href="/snacks/[id]" as={`/snacks/${props.snack.id}`}>
                    <a>
                        {props.snack.name}
                    </a>
                </Link>
            </li>
        </div>
    )
}