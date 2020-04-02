import React from "react";

const AboutUs = ({id}) => {
    return (
        <section id={id}>
            <div id={"aboutUsInfo"}>
                <div className={"title_container"}>
                    <h3>O nas</h3>
                </div>
                <p>Nori grape silver beet broccoli kombu beet<br/> greens fava
                    bean potato quandong celery.<br/> Bunya nuts black-eyed pea
                    prairie turnip leek<br/> lentil turnip greens parsnip.</p>
            </div>
            <div id={"imgPeople"}/>
        </section>
    )
};

export default AboutUs;