type StatHighlightProps = {
  value: string;
  label: string;
};

const StatHighlight = ({ value, label }: StatHighlightProps) => (
  <div className="stat-highlight">
    <strong>{value}</strong>
    <span>{label}</span>
  </div>
);

export default StatHighlight;

