import { Link } from 'react-router-dom';
import s from './index.module.scss';

const ProductCard = ({ index, image, name, price, id, tags, rating, reviews }) => {
    const stars = Array.from({ length: rating }, (_, i) => i + 1);

    const hasDiscount = tags && tags.includes('ЗНИЖКА');
    const isPopular = tags && tags.includes('ПОПУЛЯРНЕ');

    // Функция для сокращения текста
    const truncate = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <Link to={`/product/${id}`} className={s.productCard}>
            <img src={image} alt={name} />
            <div className={s.rating}>
                <div className={s.stars}>
                    {stars.map(star => (
                        <span key={star} className={s.star}>★</span>
                    ))}
                </div>
                <p className={s.reviews}>({reviews})</p>
            </div>
            <span className={s.name}>{truncate(name, 36)}</span> {/* Ограничение в 20 символов */}
            <p className={s.price}>{price}</p>
            {tags && tags.length > 0 && (
                <div className={s.tags}>
                    {tags.map((tag, index) => (
                        <span key={index} className={`${s.tag} ${tag.includes('ПОПУЛЯРНЕ') ? `${s.red}` : `${s.orange}`}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </Link>
    );
}

export default ProductCard;
