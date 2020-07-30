### NodeJS APIREST com TypeScript e SOLID
##### > [Rocketseat](https://github.com/Rocketseat) | Code/Drops #44 <
   
---
#### Conceitos SOLID

**[S]** ingle Responsibility Principle (Princípio da Responsabilidade Única)

- Cada classe possui somente uma responsabilidade por exemplo criar usuário, criará sem saber onde ou qual destino (banco, api, json, etc), mas claro com todas as regras e features necessárias, diferente do MVC onde o controller colocavamos diversos metodos na mesma classe.

  
**[O]** pen/Closed Principle (Princípio do Aberto/Fechado)

- Uma classe deve ser aberta para extensões mas não para modificações, não se deve sobreescrever a classe e sim extende-la e aproveitar o que ja se tem implementado.
  
**[L]** iskov Substitution Principle (Princípio da Substituição de Liskov)

- Criamos um interface de features para aplicação indenpendente se o repositorio fro banco relacional ou nao relacional, aqui e predefinido os metodos usando na aplicação, por examples um upload de imagem, criamos toda regras, independente do ue formos usar(s3, cdn, etc) o metodo implementado e o mesmo, de forma consisa e abstraida.
  
**[I]** nterface Segregation Principle (Princípio da Segregação de Interfaces)

- Criação de interfaces menores, não criar uma interface muito robusta, mas sim segregar em diversas interfaces para melhor compartilhamento de features.
  
**[D]** ependency Inversion Principle (Princípio da Inversão de Dependências)

- A classes não devem depende de implementações e sim de interfaces, formas não funcionais de mostrar a tipagem de uma classe ou objeto. no exemplo de upload de imagem, não precisa saber o destino e sim as especificações e metodos basicos independente do resultado, o padrão e todo feito aqui nesssa interface, assim caso seja substituido o destino, a metodologia continuara a mesma basicamente.

    ---
##### Highlights 

>A camada logica e a infra são estruturada de forma "isoladas" e não engessadas onde a aplicação que relizar um store de um usuário possui toda regrar e execução mas não sabe se será um um banco relacional, nao relacional numa outra API, etc.
  

> Packagebyfeature - Estrutura por funcionallidade
  
> UUID Entidade - Utilizado UUID para entidade, nessa feature, optamos por não utilizar autoincremente no banco e sim controlamos na aplicação, pois caso seja trocado de banco ou versao de banco que tenha alguma particularidade, nao temos problemas, por exemplo uma versao do postgres que precisa de uma extesao de para uso de UUID.
  
---
### Estrutura e anotações (pasta SRC)

- Entities - Entidade e suas propriedade, entende-se como um model, um observavel do banco.

- Repositories - Interface com metódos e propriedades tipadas conforme a entidade criada.

- Providers - interface similar a repositóries porem de lib de aplicabilidade externa por exemplo envio de email.

- UseCases - Aqui abstraimos cadas funcionalidade da aplicação, estruturando por pastas

	- CreateUser

		- CreateUserController: Aplicabilidade dos metodos, através das rotas capta os dados da requisição e com a instacia da classe, procede o fluxo de implementação.

		- CreateUserDTO: Interface de transporte de dados e tipagem do controller ao usecase;

		- CreateUserUseCase: Somente possui o metodo "execute", conforme conceito [S], e o "execute" aplica a execução da função atraves da entidade ao repositorio assim de fato executando create por exemplo.