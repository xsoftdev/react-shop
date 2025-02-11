import Footer from "../../common/footer";
import Container from "../../common/container/container";

const ClientProduct = () => {
    return (
        <>
            <Container>
                <div className="grid">
                    <div className="product-img">
                        <img src="https://placehold.co/620x580" alt="" />
                    </div>
                    <div className="product-info">
                        <div className="product-info__name">
                            Samsung Electronics Samsung Galexy S21 5G
                        </div>
                        <div className="product-info__article">
                            <div className="product-info__article-id"><span>Артикул товару:</span> A264671</div>
                            <div className="product-info__aviable">
                                <img src="/icon/check.svg" alt="" />
                                <p>В наявності</p>
                            </div>
                        </div>
                        <div className="product-info__price">
                            <div className="new">
                                22,300₴
                            </div>
                            <div className="old">
                                39,300₴
                            </div>
                            <div className="promo">ЗНИЖКА -25%</div>
                        </div>
                        <div className="product-info__desc">
                            <p className="product-info__desc-title">
                                Опис
                            </p>
                            <span>
                                The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.
                            </span>
                        </div>
                        <div className="card-add-buttons">
                            <button className="add">
                                <p>Додати до кошику</p>
                                <img src="/icon/cart.svg" alt="" />
                            </button>
                            <button className="outlined">
                                <p>Купити в 1 клік</p>
                            </button>
                        </div>
                        <div className="share">
                            <div className="add-liked">
                                <img src="/icon/Heart.svg" alt="" />
                                <p>Додати в список бажань</p>
                            </div>
                            <div className="share-product">
                                <p>Поділитись продуктом</p>
                                <img src="/icon/Copy.svg" alt="" />
                            </div>
                        </div>
                    </div>


                    {/* Характеристики */}
                    <div className="params">
                        <div className="params-title">
                            Характеристики
                        </div>
                        <ul>
                            <li>
                                <p className="params-key">Key</p>
                                <p className="params-value">Value</p>
                            </li>
                            <li>
                                <p className="params-key">Key</p>
                                <p className="params-value">Value</p>
                            </li>
                            <li>
                                <p className="params-key">Key</p>
                                <p className="params-value">Value</p>
                            </li>
                        </ul>
                    </div>
                    <div className="unique">
                        <div className="unique-title">
                            Особиловості
                        </div>
                        <ul>
                            <li>

                                <img src="/icon/Medal.svg" alt="" />
                                <span>Гарантія 1 рік</span>

                            </li>
                            <li>

                                <img src="/icon/Truck.svg" alt="" />
                                <span>Безкоштовна та швидка доставка</span>

                            </li>
                            <li>

                                <img src="/icon/Handshake.svg" alt="" />
                                <span>Гарантія 100% грошового повернення</span>

                            </li>
                            <li>

                                <img src="/icon/Headphones.svg" alt="" />
                                <span>Підтримка 24/7</span>

                            </li>
                            <li>

                                <img src="/icon/CreditCard.svg" alt="" />
                                <span>Якісний товар</span>

                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
};

export default ClientProduct;
