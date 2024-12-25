import styles from './Resume.module.css'
import photo from '@/app/me.svg'
import Image from 'next/image'

const Resume = () => (
    <div className={styles.cvContainer}>
        <section className={styles.header}>
            <Image
                src={photo}
                alt={''}
                width={150}
                height={150}
                className={styles.photo}
            />
            <div className={styles.headerInfo}>
                <h1>{'Александр Апакаев'}</h1>
                <p>{'Мужчина, 19 лет, родился 29 января 2005'}</p>
                <p>
                    {'+7(960) 0961966'}<span>{' — предпочитаемый способ связи'}</span>
                </p>
                <a href="mailto:alexander.apakaev@ispring.com">{'alexander.apakaev@ispring.com'}</a>
                <p>{'Проживает: Йошкар-Ола'}</p>
                <p>{'Гражданство: Россия, есть разрешение на работу: Россия'}</p>
                <p>{'Готов к переезду, готов к командировкам'}</p>
            </div>
        </section>

        <section className={styles.section}>
            <h2>{'Желаемая должность и зарплата'}</h2>
            <p>{'Бэкенд разработчик — 120 000₽'}</p>
            <p>{'Специализации:'}</p>
            <ul>
                <li>{'Программист, разработчик'}</li>
                <li>{'Занятость: частичная занятость'}</li>
                <li>{'График работы: гибкий график, удаленная работа'}</li>
                <li>{'Желательное время в пути до работы: не более часа'}</li>
            </ul>
        </section>

        <section className={styles.section}>
            <h2>{'Опыт работы — 1 год 4 месяца'}</h2>
            <p>{'Сентябрь 2023 — настоящее время'}</p>
            <div className={styles.experience}>
                <h3>{'iSpring'}</h3>
                <p>{'Йошкар - Ола'}</p>
                <p>{'Информационные технологии, системная интеграция, интернет'}</p>
                <p>{'• Разработка программного обеспечения'}</p>
                <h4>{'Программист'}</h4>
                <p>{'Разработка архитектуры, написание frontend/backend части приложения. Применял MySQL, PHP ' +
                    '(Symfony, Doctrine), TypeScript, Redux, React, Redux Toolkit и RTK Query.'}</p>
            </div>
        </section>

        <section className={styles.section}>
            <h2>{'Образование'}</h2>
            <p>{'Неоконченное высшее — 2026'}</p>
            <p>{'Поволжский государственный технологический университет, Йошкар-Ола'}</p>
            <p>{'Факультет информатики и вычислительной техники, Программная инженерия'}</p>
            <p>{'Неоконченное высшее — 2026'}</p>
            <p>{'Русский университет метатехнологий, Йошкар-Ола'}</p>
            <p>{'Направление - Программная инженерия'}</p>
        </section>

        <section className={styles.section}>
            <h2>{'Навыки'}</h2>
            <p>{'Русский — Родной'}</p>
            <ul>
                <li>{'MySQL'}</li>
                <li>{'PHP'}</li>
                <li>{'Git'}</li>
                <li>{'SQL'}</li>
                <li>{'Symfony'}</li>
                <li>{'Docker'}</li>
                <li>{'REST API'}</li>
                <li>{'TypeScript'}</li>
                <li>{'React'}</li>
                <li>{'Redux'}</li>
                <li>{'Английский язык'}</li>
                <li>{'Работа в команде'}</li>
                <li>{'Тайм - менеджмент'}</li>
                <li>{'Постановка целей по HARD'}</li>
                <li>{'Постановка целей по SMART'}</li>
            </ul>
        </section>

        <section className={styles.section}>
            <h2>{'Дополнительная информация'}</h2>
            <p>{'Легко нахожу общий язык с коллегами. В сложных ситуациях сохраняю терпение и открытость.' +
                ' Всегда стараюсь глубоко вникнуть в тему. Открыт к изучению нового материала, технологий '}</p>
            <p>{'Прошёл курс Web разработки, научился создавать серверы на Go и верстать страницы (HTML, CSS, JS).'}</p>
            <p>{'Прошёл курс Frontend разработки, изучив TypeScript, React и Redux.'}</p>
            <p>{'Прошёл курс Backend-разработки - работа с СУБД MySQL, язык PHP'}</p>
            <p>{'Прошёл курс операционные системы и сети - работа с C++ под OS Windows, Linux'}</p>
        </section>

        <section>
            <h4>{'Резюме обновлено 25 декабря 2024 в 16:26'}</h4>
        </section>
    </div>
)

export {
    Resume,
}