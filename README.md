# Resolvendo o Teste

## Problemática
Você irá construir de um cadastro cliente simples e associação de produtos oferecidos ao mesmo, A tela de cadastro de produtos deve conter os seguintes campos (nome, ativo(Sim ou Não)) e a de clientes(nome, documento, telefone, e-mail, ativo(Sim ou Não)) e outra tela para associar os produtos ao cliente com o nome do cliente e os produtos para associar. 
Nossa ideia é que possamos disponibilizar para a área comercial um cadastro de clientes e uma forma de associação dos produtos que esse cliente tem disponível para utilizar em nosso site serviços. Para que possamos controlar a visualização do que nosso cliente possa usar em nossa plataforma.
Após os cadastros gostaríamos de ver uma listagem com os produtos cadastros com opção para editar e inativar/ativar e listagem com todos os cliente com as opções de edição, inativar/ativar e associar produtos. 

## Compreensão do Problema
O primeiro passo para resolver o este teste foi compreender completamente os requisitos e os problemas apresentados. Analisei cuidadosamente cada aspecto do problema para garantir que entendia totalmente o que estava sendo solicitado. Não foi difícil, como eu já trabalho com este tipo de situação no meu dia a dia, entender a problemática foi um processo tranquilo, também pelo fato de ser uma situação simples de cadastros e associação.

## Análise e Planejamento
Após compreender os requisitos, fiz uma análise detalhada das possíveis abordagens para resolver o problema. O principal foi desenha o fluxo de telas e mapear todos os atributos para facilitar no início do desenvolvimento. Como tinha pouco tempo, não utilizei ferramentas de prototipagem como adobe XD ou Figma para elaboração do design, fiz no tradicional papel e caneta.

## Decisões Tomadas
Durante a fase de análise, tomei algumas decisões importantes em relação à arquitetura e à implementação da solução. A arquitetura foi feita em bloco por ser uma aplicação pequena. Tomei a decisão de utilizar Cypress como ferramenta de testes automatizados, outra situação foi desenvolver alguns componentes como tabela e notificação para demonstrar uso de componetização. Foi planejado também a utilização do Pinia para gerenciamento de estado, pois hoje em dia não faz muito sentido utilizar o Vuex devido suas limitações e suporte em relação ao Pinia.

## Organização do Código
Para manter o código organizado, legível e manutenível, adotei uma abordagem modular. Separei as diferentes partes da solução em módulos e métodos, cada um responsável por uma tarefa específica. Isso facilitou a compreensão do código e permitiu reutilizar componentes em diferentes partes da solução, seguindo os princípios de Clean Code. Para organização do CSS utilizado no projeto adotei a metodologia BEM (Block Element Modifier).

## Testes e Validação
Após implementar a solução, conduzi uma série de testes para verificar se ela funcionava conforme o esperado. Escrevi alguns casos de testes automatizados simples para demonstrar o uso da ferramenta Cypress e testar o fluxo de um usuário por meio da metodologia E2E. Como ferramenta para testar a responsividade do sistema utilizei a extensão Responsive View.

## Refatoração e Melhorias
Ao revisar o código, identifiquei oportunidades de refatoração e melhorias. Procurei por trechos de código redundantes, ineficientes ou difíceis de entender e os reescrevi para torná-los mais claros e eficientes, bem como deixar o código mais legível com a organização do mesmo.

## Conclusão
Resolver o teste exigiu um planejamento cuidadoso, tomada de decisões informadas e muita atenção aos detalhes. Ao seguir uma abordagem estruturada e organizada, consegui desenvolver uma solução eficiente para o problema apresentado, apesar de terem sido muitas horas de planejamento, desenvolvimento e testes, chegando a passar de 20 horas.

O sistema poderia ter uma tela de listagem para as associações realizadas, bem como um CRUD para tal, mas como isto não estava no escopo e o tempo era curto, resolvi não fazer estás páginas, sabendo também que não teria muito a agregar no quesito mostrar minhas habilidades com o framework Vue.js 3.

No geral foi um excelente desafio, simples e completo ao mesmo tempo, meus agradecimentos a Data Stone por proporcionar aos desenvolvedores testes de qualidade e que agregam.

---

# Instalação do Projeto

## Passo 1 - Instalar o Node.js e o npm

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Caso não tenha, será necessário baixar e instalar.

- **Baixe o Instalador:** Acesse o [site oficial do Node.js](https://nodejs.org/en) e baixe o instalador para o seu sistema operacional (Windows, macOS ou Linux).
- **Execute o Instalador:** Após o download, execute o arquivo de instalação. Isso abrirá o assistente de instalação.
- **Aceite os Termos de Uso:** No assistente de instalação, você provavelmente será solicitado a aceitar os termos de uso. Leia-os e, se estiver de acordo, prossiga.
- **Escolha o Diretório de Instalação (Opcional):** Em alguns sistemas operacionais, você pode ter a opção de escolher o diretório de instalação. Caso contrário, o Node.js será instalado no diretório padrão.
- **Instale o Node.js:** Clique no botão de instalação para iniciar o processo de instalação. Isso pode levar alguns minutos, dependendo da velocidade do seu sistema.
- **Verifique a Instalação:** Após a conclusão da instalação, você pode verificar se o Node.js foi instalado corretamente abrindo um terminal ou prompt de comando e digitando os seguintes comandos:

  ```bash
  node -v
  npm -v
  ```

## Passo 2 - Clonar o Repositório

Clone o repositório do projeto para o seu ambiente local.

```bash
  git clone <URL_DO_REPOSITÓRIO>
  ```

## Passo 3: Instalar Dependências
Navegue até o diretório do seu projeto e execute o seguinte comando para instalar todas as dependências listadas no arquivo package.json.

```bash
  cd nome_do_projeto_vue npm install
  ```

## Passo 4 - Executar o Servidor de Desenvolvimento

Depois de instalar as dependências, você pode iniciar o servidor de desenvolvimento para ver o seu projeto em ação.

```bash
  npm run dev
  ```

Este comando irá iniciar o servidor de desenvolvimento onde pode acessar o projeto.

## Passo 5 - Testar o Aplicativo
Abra o navegador e vá para o endereço URL fornecido pelo servidor de desenvolvimento. Você deve ver projeto em execução.

Este manual básico deve ajudá-lo a começar a executar este meu projeto localmente. 

## Passo 6 – Para Rodar o Teste
Com o projeto em execução, abra um terminal na pasta do projeto e digite o seguinte comando para iniciar os testes:

```bash
  npm run cypress
  ```





















