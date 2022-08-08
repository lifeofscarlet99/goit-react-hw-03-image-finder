import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ description, smallImage, largeImage, onClick }) => {
  return (
    <li className={css.item} onClick={() => onClick(largeImage, description)}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </li>
  );
};

ImageGalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
