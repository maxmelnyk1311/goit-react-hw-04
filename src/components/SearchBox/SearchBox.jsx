import css from './SearchBox.module.css';
export default function SearchBox({searchBarTxt, inputValue, handleChange}) {
    return (
        <div className={css.searchBoxWrap}>
            <p>{searchBarTxt}</p>
            <input 
                className={css.SearchBoxInput}
                type="text" 
                value={inputValue} 
                onChange={handleChange}
            />
        </div>
    )
}