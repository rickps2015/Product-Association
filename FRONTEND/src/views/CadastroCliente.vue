<template>
    <div class="container">
        <div class="card rounded-2">
            <div class="card-title bg-light rounded-2 px-3">
                <h3>Cadastro de Cliente</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="submitForm" ref="form">
                    <div class="row">
                        <div class="col mb-3">
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" id="nome" v-model="cliente.nome" class="form-control" required
                                placeholder="Insira o nome">
                            <div class="invalid-feedback">Por favor, insira o nome.</div>
                        </div>

                        <div class="col mb-3">
                            <label for="cpf" class="form-label">CPF</label>
                            <input type="text" id="cpf" v-model="cliente.cpf" class="form-control" required
                                maxlength="14" placeholder="Insira o CPF" minlength="14" @input="formatarCPF">
                            <div class="invalid-feedback" v-if="!validarCPF(cliente.cpf)">CPF inválido</div>
                            <div class="invalid-feedback">Por favor, insira o CPF.</div>
                        </div>

                        <div class="col mb-3">
                            <label for="telefone" class="form-label">Telefone</label>
                            <input type="text" id="telefone" v-model="cliente.telefone" class="form-control" required
                                placeholder="Insira o telefone" @input="formatarTelefone()">
                            <div class="invalid-feedback">Por favor, insira o telefone.</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" v-model="cliente.email" class="form-control" required
                                placeholder="Insira o email">
                            <div class="invalid-feedback">Por favor, insira um email válido.</div>
                        </div>

                        <div class="col mb-3">
                            <label for="status" class="form-label">Status</label>
                            <select id="status" v-model="cliente.status" class="form-select" required>
                                <option value="" disabled selected>Selecione...</option>
                                <option value="active">Ativo</option>
                                <option value="inactive">Inativo</option>
                            </select>
                            <div class="invalid-feedback">Por favor, selecione o status.</div>
                        </div>
                    </div>

                    <div class="row justify-content-end">
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CadastroCliente',
    data() {
        return {
            cliente: {
                nome: '',
                cpf: '',
                telefone: '',
                email: '',
                status: ''
            }
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.checkValidity() && this.validarCPF(this.cliente.cpf)) {
                console.log(this.cliente);
            } else {
                this.$refs.form.classList.add('was-validated');
            }
        },
        validarCPF(cpf) {
            var Soma = 0;
            var Resto;
            var strCPF = String(cpf).replace(/[^\d]/g, '');
            if (strCPF.length !== 11)
                return false;
            if ([
                '00000000000',
                '11111111111',
                '22222222222',
                '33333333333',
                '44444444444',
                '55555555555',
                '66666666666',
                '77777777777',
                '88888888888',
                '99999999999',
            ].indexOf(strCPF) !== -1)
                return false;
            for (let i = 1; i <= 9; i++)
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11))
                Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10)))
                return false;
            Soma = 0;
            for (let i = 1; i <= 10; i++)
                Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11))
                Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11)))
                return false;
            return true;
        },
        formatarCPF() {
            let cpf = this.cliente.cpf;
            cpf = cpf.replace(/[^\d]/g, ''); // Remover caracteres não numéricos
            if (cpf.length === 11) {
                let formatoCPF = cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11);
                this.cliente.cpf = formatoCPF;
            }
        },
        formatarTelefone() {
            let telefone = this.cliente.telefone;
            let numeroLimpo = telefone.replace(/\D/g, '');
            let formatoTelefone = '';
            if (numeroLimpo.length >= 1) {
                formatoTelefone = '(' + numeroLimpo.substring(0, 2);
            }
            if (numeroLimpo.length >= 3) {
                formatoTelefone += ') ' + numeroLimpo.substring(2, 7);
            }
            if (numeroLimpo.length >= 8) {
                formatoTelefone += '-' + numeroLimpo.substring(7, 11);
            }
            this.cliente.telefone = formatoTelefone;
        },
    }
};
</script>
