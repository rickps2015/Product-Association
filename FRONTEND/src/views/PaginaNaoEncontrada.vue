<template>
    <div class="error-container">
        <div class="row justify-content-center mb-4">
            <div class="col-auto">
                <img src="../assets/img/error.png" style="width: 200px;">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h2 class="error-message">Página Não Encontrada</h2>
                <p class="error-description">
                    Desculpe, a página que você está procurando não existe.</p>
                <router-link to="/" class="btn btn-primary">
                    Voltar para a página inicial
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.error-container {
    text-align: center;
    margin-top: 50px;
}

.error-message {
    font-size: 2rem;
    color: #6c757d;
    margin-top: 0.5rem;
}

.error-description {
    font-size: 1rem;
    color: #6c757d;
}

</style>