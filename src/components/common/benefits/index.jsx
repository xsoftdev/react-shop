import Container from "../container/container";
import benefits from "./data";
import s from './index.module.scss'

const Benefits = () => {
    return (
        <>
            <Container>
                <section className={s.benefits}>
                    <div className={s.benefits_container}>
                        {benefits.map(benefit => (
                            <div key={benefit.id} className={s.benefit}>
                                <div
                                    className={s.icon}
                                    dangerouslySetInnerHTML={{ __html: benefit.icon }}
                                />
                                <div className={s.benefit_info}>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Benefits;