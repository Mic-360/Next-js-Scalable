import styles from './Base.module.css';

export interface BaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
