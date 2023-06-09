import PropTypes from 'prop-types';

const VerticalText = ({ header, paragraph, ...props }) => {
  return (
    <article {...props}>
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </article>
  );
};

VerticalText.propTypes = {
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  props: PropTypes.any,
};

export default VerticalText;
