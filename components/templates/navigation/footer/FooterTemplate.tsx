import Link from "next/link";
import styles from "./Footer.module.css";

export interface FooterTemplateProps extends React.ComponentPropsWithoutRef<'footer'> { }

const HeaderTemplate: React.FC<FooterTemplateProps> = ({ className, ...headerProps }) => {
  return (
    <footer
      {...headerProps}
      className={`w-full p-5 bg-slate-400 text-slate-700 ${className}`}
    >
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="space-y-5">
          <Link href="/">
            <a className={styles.tag}>Advertising</a>
          </Link>
          <Link href="/">
            <a className={styles.tag}>Business</a>
          </Link>
          <Link href="/">
            <a className={styles.tag}>How Search works</a>
          </Link>
        </div>
        <div className="space-y-5">
          <Link href="/">
            <a className={styles.tag}>Privacy</a>
          </Link>
          <Link href="/">
            <a className={styles.tag}>Terms</a>
          </Link>
          <Link href="/">
            <a className={styles.tag}>Settings</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default HeaderTemplate;
