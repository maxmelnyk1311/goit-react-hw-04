import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
export default function SearchBar({onSearch}) {

    function handleSubmit(event) {
        event.preventDefault();
        const inputValue = event.target.elements.query.value.trim();
        if (inputValue === '') {
            return toast.error('Empty query! Write some word to find pictures');
        }
        onSearch(inputValue)
        event.target.reset();
    }
    return (
        <header className={css.header}> 
            <form onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button 
                    type="submit"
                    className={css.button}
                >
                        Search
                </button>
                <Toaster
                    position='top-right'
                />
            </form>
        </header>
    )
}