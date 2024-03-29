<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="title">Seja bem-vindo ao teste de desenvolvimento</h1>
            </div>
        </div>
        <div class="row mt-3 justify-content-center border shadow rounded-3 p-2 fundo">
            <div class="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-3 align-self-center">
                <img src="@/assets/img/ricardo-parente.jpg" alt="Foto de Ricardo Silva Parente"
                    class="img-fluid rounded-circle mb-3 photo">
            </div>
            <div class="col-md-8">
                <h2 class="text-center subtitle">Apresentação</h2>
                <p><strong>Nome:</strong> Ricardo Silva Parente</p>
                <p><strong>Cargo:</strong> Desenvolvedor Frontend</p>
                <p class="custom-justified"><strong>Resumo Profissional:</strong> Sou um desenvolvedor front-end apaixonado e experiente, com
                    mais de cinco anos de atuação na área. Ao longo da minha carreira, desenvolvi alguns softwares em
                    Projetos de Desenvolvimento e Inovação (PD&I), atuando desde o levantamento de requisitos até a
                    entrega do software junto ao cliente.</p>
                <p class="custom-justified">Trabalhei em desenvolvimento de web sites e sistemas computacionais atuando no FrontEnd das aplicações,
                    implementação e desenvolvimento de técnicas computacionais para otimização de processos. Trabalhando
                    com as seguintes ferramentas e tecnologias: HTML, CSS, Bootstrap 5, Vue.js, Javascript, Node.js,
                    Java, Vuetify, Git, GitHub, Figma, Pré Processadores CSS (SCSS), SCRUM, Jest, Cypress. Participando
                    de todas as fases de desenvolvimento, indo desde o levantamento de requisitos junto ao cliente e
                    modelagem de layouts até a implementação, testes e entrega do sistema, utilizando a metodologia ágil
                    SCRUM. Os Projetos são relacionados a monitoramento em tempo real, processos produtivos, gestão e
                    área administrativa. Também sou pesquisador na área de otimização de processos, com alguns artigos e capítulos
                    de livros publicados em periódicos internacionais. Professor de cursos de curta duração em Power BI e exporadicamente participo de elaboração de propostas de projetos de inovação na área de engenharia junto ao desenvolviemnto de software.</p>
                <h3 class="text-center mt-5 subtitle">Formação Acadêmica</h3>
                <ul>
                    <li>Mestrado em Engenharia, Gestão de Processos, Sistema e Ambiental (EGPSA)</li>
                    <li>Bacharelado em Ciência da Computação</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeDefault'
}
</script>

<style scoped>
/* Estilos personalizados */
.title {
    color: #007bff;
}

.subtitle {
    color: #28a745;
}

.photo {
    border: 2px solid #17a2b8;
    padding: 5px;
}

.fundo {
    background-color: #dbeeffc9;
}

.custom-justified {
    text-align: justify;
}
</style>