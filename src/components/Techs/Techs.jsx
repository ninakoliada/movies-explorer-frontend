import "./Techs.css";

export const Techs = () => {
    return (
        <section className="techs">
            <h2 className="techs__heading">Технологии</h2>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__container">
                <p className="techs__techs-item">HTML</p>
                <p className="techs__techs-item">CSS</p>
                <p className="techs__techs-item">JS</p>
                <p className="techs__techs-item">React</p>
                <p className="techs__techs-item">Git</p>
                <p className="techs__techs-item">Express.js</p>
                <p className="techs__techs-item">mongoDB</p>
            </div>
        </section>
    )
}