export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-l from-emerald-600 to-emerald-900">
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
