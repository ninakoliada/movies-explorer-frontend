import "./AboutProject.css";

export const AboutProject = () => {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__heading">О проекте</h2>

            <div className="about-project__info">
                <div className="about-project__container">
                    <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>

                <div className="about-project__container">
                    <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>

                <div className="timetable">
                    <div className="timetable__first-step">
                        <div className="timetable__plate">1 неделя</div>
                        <div className="timetable__label">Back-end</div>
                    </div>
                    <div className="timetable__second-step">
                        <div className="timetable__plate">4 недели</div>
                        <div className="timetable__label">Front-end</div>
                    </div>
                </div>
        </section>
    )
}