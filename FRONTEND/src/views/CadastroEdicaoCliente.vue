<template>
    <div class="container">
        <div class="card rounded-2">
            <div class="card-title bg-light rounded-2 px-3">
                <h3>{{ title }}</h3>
            </div>
            <div class="card-body">
                <form ref="form">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                            <label for="nome" class="form-label mb-0">Nome</label>
                            <input type="text" id="nome" v-model="cliente.nome" class="form-control" required
                                placeholder="Insira o nome">
                            <div class="invalid-feedback">Por favor, insira o nome.</div>
                        </div>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                            <label for="email" class="form-label mb-0">Email</label>
                            <input type="email" id="email" v-model="cliente.email" class="form-control" required
                                placeholder="Insira o email">
                            <div class="invalid-feedback">Por favor, insira um email válido.</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-2">
                            <label for="cpf" class="form-label mb-0">CPF</label>
                            <input type="text" id="cpf" v-model="cliente.cpf" class="form-control" required
                                maxlength="14" placeholder="Insira o CPF" minlength="14" @input="formatarCPF"
                                :class="{ 'is-invalid': formValidated && !validarCPF(cliente.cpf) }">
                            <div class="invalid-feedback">CPF inválido</div>
                        </div>

                        <div class="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-2">
                            <label for="telefone" class="form-label mb-0">Telefone</label>
                            <input type="text" id="telefone" v-model="cliente.telefone" class="form-control" required
                                placeholder="Insira o telefone" @input="formatarTelefone"
                                :class="{ 'is-invalid': formValidated && !validarTelefone(cliente.telefone) }">
                            <div class="invalid-feedback">Telefone inválido</div>
                        </div>

                        <div class="col mb-2">
                            <label for="status" class="form-label mb-0">Status</label>
                            <select id="status" v-model="cliente.status" class="form-select" required>
                                <option value="" disabled selected>Selecione...</option>
                                <option :value="true">Ativo</option>
                                <option :value="false">Inativo</option>
                            </select>
                            <div class="invalid-feedback">Por favor, selecione o status.</div>
                        </div>
                    </div>

                    <div class="row justify-content-end">
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useNotificationsStore } from '@/stores/notifications';

export default {
    name: 'CadastroCliente',
    data() {
        return {
            title: 'Cadastro de cliente',
            mensagem: 'Cadastro realizado com sucesso!',
            cliente: {
                nome: '',
                cpf: '',
                telefone: '',
                email: '',
                status: ''
            },
            formValidated: false
        };
    },
    beforeRouteEnter(to, from, next) {
        // Verificar se há um ID de cliente na rota
        if (to.params.idCliente) {

            const title = 'Edição de Cliente';
            const mensagem = 'Edição realizada com sucesso!';

            const cliente = {
                nome: 'Cliente 01',
                cpf: '123.456.789-09',
                telefone: '(92) 99257-4730',
                email: 'ricardosilvaparente@gmail.com',
                status: true
            };

            next(vm => {
                // Atribuir os valores ao componente
                vm.title = title;
                vm.mensagem = mensagem;
                vm.cliente = cliente;
            });
        } else {
            const title = 'Cadastro de Cliente';
            const mensagem = 'Cadastro realizado com sucesso!';

            next(vm => {
                // Atribuir os valores ao componente
                vm.title = title;
                vm.mensagem = mensagem;
                vm.cliente = {
                    nome: '',
                    cpf: '',
                    telefone: '',
                    email: '',
                    status: '',
                };
            });
        }
    },
    methods: {
        submitForm() {
            const form = this.$refs.form;

            // Verificar se todos os campos obrigatórios estão preenchidos
            const inputs = form.querySelectorAll('input[required], select[required]');
            let camposPreenchidos = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    camposPreenchidos = false;
                    input.classList.add('is-invalid'); // Adicionar classe para destacar campos não preenchidos
                } else {
                    input.classList.remove('is-invalid'); // Remover classe de campos válidos
                }
            });

            // Se todos os campos obrigatórios estiverem preenchidos
            if (camposPreenchidos) {
                // Verificar a validade do CPF apenas se estiver preenchido
                if (this.cliente.cpf && !this.validarCPF(this.cliente.cpf)) {
                    // Se o CPF for inválido, adicionar classe de inválido ao campo
                    form.querySelector('#cpf').classList.add('is-invalid');
                }

                // Verificar a validade do telefone apenas se estiver preenchido
                if (this.cliente.telefone && !this.validarTelefone(this.cliente.telefone)) {
                    // Se o telefone for inválido, adicionar classe de inválido ao campo
                    form.querySelector('#telefone').classList.add('is-invalid');
                }

                // Se o formulário for válido
                if (form.checkValidity() && !form.querySelector('.is-invalid')) {
                    this.formValidated = true; // Marcar o formulário como validado

                    const notification = {
                        type: 'success',
                        title: this.title,
                        message: this.mensagem
                    };

                    // Gravando globalmente a notificação
                    useNotificationsStore().showNotification(notification);
                    this.$router.push({ name: 'listagem-cliente' });
                }
            }
        },
        validarCPF(cpf) {
            var Soma = 0;
            var Resto;
            var strCPF = String(cpf).replace(/[^\d]/g, '');

            if (strCPF.length !== 11) {
                return false;
            }

            // Verificar se é uma sequência de dígitos repetidos
            if (/^(\d)\1{10}$/.test(strCPF)) {
                return false;
            }

            // Calcular os dígitos verificadores
            for (let i = 1; i <= 9; i++) {
                Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            }
            Resto = (Soma * 10) % 11;
            if ((Resto === 10) || (Resto === 11)) {
                Resto = 0;
            }
            if (Resto !== parseInt(strCPF.substring(9, 10))) {
                return false;
            }

            Soma = 0;
            for (let i = 1; i <= 10; i++) {
                Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            }
            Resto = (Soma * 10) % 11;
            if ((Resto === 10) || (Resto === 11)) {
                Resto = 0;
            }
            if (Resto !== parseInt(strCPF.substring(10, 11))) {
                return false;
            }

            return true;
        },
        validarTelefone(telefone) {
            let numeroLimpo = telefone.replace(/\D/g, '');

            if (numeroLimpo.length !== 11) {
                return false;
            }

            let codigoArea = numeroLimpo.substring(0, 2);
            if (!['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99'].includes(codigoArea)) {
                return false;
            }

            if (['6', '7', '8', '9'].includes(codigoArea[1]) && numeroLimpo.charAt(2) !== '9') {
                return false;
            }

            return true;
        },
        formatarCPF() {
            let cpf = this.cliente.cpf;
            let formattedCPF = cpf.replace(/[^\d]/g, ''); // Remover caracteres não numéricos, ponto e hífen

            if (formattedCPF.length === 11) {
                let formatoCPF = formattedCPF.substring(0, 3) + '.' + formattedCPF.substring(3, 6) + '.' + formattedCPF.substring(6, 9) + '-' + formattedCPF.substring(9, 11);
                this.cliente.cpf = formatoCPF;
            } else {
                this.cliente.cpf = formattedCPF;
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
