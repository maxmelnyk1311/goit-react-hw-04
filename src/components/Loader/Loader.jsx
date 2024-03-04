import { FidgetSpinner } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.loaderWrp}>
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
            />
        </div>
    )
}