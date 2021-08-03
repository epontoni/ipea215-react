import './Staff.scss'

import React from 'react'
import member from '../../../data';

function StaffMember(props){
    return (
        <React.Fragment>
            <div class="staff__team__member fadeInUp" key={props.key}>
                <img src={props.img} alt="Adriana Carrara" class="staff__team__member__picture" />
                <h5 class="staff__team__member__name">{ props.name }</h5>
                <p class="staff__team__member__role">{ props.role }</p>
            </div>
        </React.Fragment>
    );
}

export const Staff = () => {

   /*const animar = document.querySelectorAll('.staff__team__member');

    const mostrarScroll = () => {
        let scrollTop = document.documentElement.scrollTop;

        for(var i=0; i<animar.length; i++){
            let alturaAnimado = animar[i].offsetTop;
            if(alturaAnimado - 500 < scrollTop){
                //animar[i].style.opacity = 1;
                animar[i].classList.add("fadeInUp");
            }
        }
    }

    window.addEventListener('scroll', mostrarScroll);*/

    let directivos = member.filter(m => m.directive);
    let docentes = member.filter(m=> !m.directive);

    return (
        <>
        <section class="staff">
        <div class="staff__team">
            <h4>Equipo directivo</h4>
            <div class="wrapper_team">
                { directivos.map(m=>{ return (<StaffMember key={m.id} name={m.name} role={m.role} img={m.img} />); })}
            </div>
        </div>
        <div class="staff__team">
            <h4>Equipo docente</h4>
            <div class="wrapper_team">
                { docentes.map(m=>{ return (<StaffMember key={m.id} name={m.name} role={m.role} img={m.img} />); })}
            </div>
        </div>
    </section>
        </>
    )
}




/*
<div class="staff__team__member">
    <img src="images/staff/jorge-l-abregú.jpg" alt="Jorge Abregu" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Lic. Jorge Abregu</h5>
    <p class="staff__team__member__role">Educación Tecnológica</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/noelia-lópez.png" alt="Noelia López" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Tec. Noelia López</h5>
    <p class="staff__team__member__role">Preceptora</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/jessica-lorena-fouillet.png" alt="Jessica Lorena Fouillet " class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Prof. Jessica Lorena Fouillet </h5>
    <p class="staff__team__member__role">Departamento de Lenguas</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/vanina-grisanti.png" alt="Vanina Grisanti" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Prof. Vanina Grisanti</h5>
    <p class="staff__team__member__role">Educación Artística</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/emanuel-pontoni.png" alt="Emanuel Pontoni" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Prof. Emanuel Pontoni</h5>
    <p class="staff__team__member__role">Matemáticas</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/guillermina-fries.png" alt="Guillermina Fries" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Prof. Guillermina Fries</h5>
    <p class="staff__team__member__role">Preceptora</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/marisa-analia-libaak.png" alt="Marisa Analia Libaak" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Prof. Marisa Analia Libaak</h5>
    <p class="staff__team__member__role">Educación Física</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/soledad-giraudo.png" alt="Soledad Giraudo" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Prof. Soledad Giraudo</h5>
    <p class="staff__team__member__role">Preceptora<br />Cs. Sociales</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/maria-belen-becerra.png" alt="María Belen Becerra" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Prof. M. Belén Becerra</h5>
    <p class="staff__team__member__role">Matemáticas</p>
</div>

<div class="staff__team__member">
    <img src="images/staff/marina-penalba.png" alt="Marina Penalba" class="staff__team__member__picture" />
    <h5 class="staff__team__member__name">Marina Penalba</h5>
    <p class="staff__team__member__role">Preceptora</p>
</div>
*/
