import { useState } from 'react';
import styles from './Search.module.css';

export interface SearchTemplateProps {
  sampleTextProp: string;
}

const SearchTemplate: React.FC<SearchTemplateProps> = ({ sampleTextProp }) => {
  const [SearchText, setSearchText] = useState<string>('');

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert(SearchText);
      }}
    >
      <input
        type="text"
        className={styles.input}
        placeholder={sampleTextProp}
        value={SearchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex flex-row space-x-3">
        <button type="submit" className={styles.button}>
          Google Search
        </button>
        <button type="submit" className={styles.button}>
          I&apos;m Feeling lucky
        </button>
      </div>
    </form>
  );
};

export default SearchTemplate;
