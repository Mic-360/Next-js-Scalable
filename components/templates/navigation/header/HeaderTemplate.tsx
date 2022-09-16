import Link from "next/link";
import styles from "./Header.module.css";

export interface HeaderTemplateProps extends React.ComponentPropsWithoutRef<'header'> { }

const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className={styles.tag}>Home</a>
        </Link>
        <Link href="/">
          <a className={styles.tag}>Store</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <button className="px-3 py-1 rounded-sm bg-blue-600 hover:bg-blue-200">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HeaderTemplate;
