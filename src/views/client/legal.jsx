import Container from "../../components/common/container/container";

const LegalPages = () => {
    return (
        <>
            <Container>
                <div className="legal-container">
                    {/* Public Offer Page */}
                    <div className="public-offer">
                        <h1 className="public-offer-header">Публічна оферта</h1>

                        <div className="public-offer-section">
                            <h2 className="public-offer-title">1. Загальні положення</h2>
                            <p>Цей документ є офіційною пропозицією (публічною офертою) "КабельЕлектроТехніка" щодо укладення договору на продаж товарів та надання послуг.</p>
                            <hr className="public-offer-divider" />
                            <p>Прийняття умов цієї оферти клієнтом (акцепт) вважається моментом оформлення замовлення через будь-який доступний канал: наш веб-сайт, телефон або Telegram.</p>
                        </div>

                        <div className="public-offer-section">
                            <h2 className="public-offer-title">2. Реєстрація та доступ</h2>
                            <p>Для оформлення замовлення рекомендується реєстрація в нашій системі. Зареєстровані клієнти отримують доступ до можливості створення списку обраних категорій та спеціальних пропозицій для постійних клієнтів.</p>
                            <hr className="public-offer-divider" />
                            <p>Постійні клієнти можуть користуватися додатковими знижками та персоналізованими умовами співпраці.</p>
                        </div>

                        <div className="public-offer-footer">
                            <p>© 2025 КабельЕлектроТехніка. Всі права захищені.</p>
                        </div>
                    </div>

                    {/* Client Agreement Page */}
                    <div className="client-agreement">
                        <h1 className="client-agreement-header">Клієнтське угода</h1>

                        <div className="client-agreement-section">
                            <h2 className="client-agreement-title">1. Предмет угоди</h2>
                            <p>Ця угода регулює взаємовідносини між клієнтом та "КабельЕлектроТехніка" щодо замовлення, доставки та післяпродажного обслуговування товарів.</p>
                            <hr className="client-agreement-divider" />
                            <p>Клієнт має право оформлювати замовлення через телефон, Telegram або особистий кабінет на нашому веб-сайті.</p>
                        </div>

                        <div className="client-agreement-section">
                            <h2 className="client-agreement-title">2. Конфіденційність</h2>
                            <p>Ми гарантуємо, що всі дані клієнтів будуть використовуватися виключно для виконання замовлень і не будуть передані третім особам без згоди клієнта. Зареєстровані користувачі можуть переглядати свою історію замовлень і статуси поточних запитів у особистому кабінеті.</p>
                            <hr className="client-agreement-divider" />
                            <p>У випадку використання Telegram для оформлення замовлення, персональні дані клієнта захищені відповідно до нашої політики конфіденційності.</p>
                        </div>

                        <div className="client-agreement-section">
                            <h2 className="client-agreement-title">3. Постійні клієнти</h2>
                            <p>Постійні клієнти отримують доступ до програми лояльності, яка включає знижки на обрані категорії товарів, пріоритетну обробку замовлень та персональні пропозиції.</p>
                            <hr className="client-agreement-divider" />
                            <p>Клієнти можуть зберігати улюблені категорії товарів у спеціальному розділі для швидкого доступу.</p>
                        </div>

                        <div className="client-agreement-footer">
                            <p>© 2025 КабельЕлектроТехніка. Всі права захищені.</p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Styles */}
            <style jsx>{`
                .legal-container {
                    max-width: 900px;
                    margin: 40px auto;
                    padding: 20px;
                    background: #f9f9fb;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }

                .public-offer, .client-agreement {
                    margin-bottom: 40px;
                    padding: 20px;
                    border: 1px solid #e0e0e5;
                    border-radius: 10px;
                    background: #ffffff;
                }

                .public-offer-header, .client-agreement-header {
                    font-size: 2.4em;
                    text-align: center;
                    color: #34495e;
                    margin-bottom: 20px;
                }

                .public-offer-title, .client-agreement-title {
                    font-size: 1.8em;
                    color: #2c3e50;
                    margin-bottom: 10px;
                }
                @media (max-width: 1200px) {
                    font-size: 0.4em;
                }

                .public-offer-divider, .client-agreement-divider {
                    border: none;
                    height: 2px;
                    background: linear-gradient(to right, #3498db, #9b59b6);
                    margin: 20px 0;
                }

                .public-offer-footer, .client-agreement-footer {
                    text-align: center;
                    font-size: 0.9em;
                    color: #7f8c8d;
                    margin-top: 20px;
                }
                @media (max-width: 768px) {
                    .legal-container {
                        padding: 15px;
                    }
                    .public-offer-header, .client-agreement-header {
                        font-size: 1.6em;
                    }
                    .public-offer-title, .client-agreement-title {
                        font-size: 1.2em;
                    }
                    .public-offer-section p, client-agreement-section p {
                        font-size: 1em;
                    }
                }

                @media (max-width: 480px) {
                    .legal-container {
                        padding: 10px;
                    }
                }
            `}</style>
        </>
    );
};

export default LegalPages;
