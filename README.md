# Getting Started with Create React App

Start - Começaremos falando dos casos mais comuns sobre o Context API e o princípio do Context API que é servir como um Injetor de Dependencia para todo o APP e não ser um Gestor de Estados. ( Claro que iremos fazer a gestão dos estados mais pra frente rsrs).

-`App-0-router-context` O App inicial contém apenas um state para um botão que incrementa um counter, mas antes de atacar o counter com Context, iniciaremos falando do Context que provavelmente todo mundo já conhece: ReactRouter, aqui iremos utilizar o `App-0-router-context`, nele está instanciado o Provider e uma página de `Location` onde iremos mostrar o dado sendo recebido via Hook `useHistory`.

-`App-1-theme-context` Após isso, podemos atacar outro tipo de uso da ContextAPI bem comum, temificação. Aqui iremos utilizar o `App-1-theme-context` que instancia o `createTheme` e o `themeProvider` do `materia-ui` para demonstrar como podemos agregar valor não só relacionados a dados puros, mas também layout.

-`App-2-count-context` Já dado um contexto geral sobre Context e seus usos mais comuns, podemos começar a atacar o counter. Usando o `App-2-count-context`, criamos um context que apenas recebe o valor alterado pela raiz do projeto. Aqui já podemos pincelar as dificuldades e diferenças entre o Context API ser apenas uma ferramenta para injetar dependencias e não uma ferramenta de Gestão de Estados.

-`App-3-user-context`: Caso de uso mais real, com dados de usuário inseridos no "Login" e exibindo-os em diversas telas: `Inicio` e `Lista`, mas ainda sem gestão de estados.

-`App-4-user-context-controlled` Aqui podemos começar a explicar como gerencias estados internamente no contexto. Antes era apenas o App.tsx que gerenciava os estados, agora vamos usar o UserContextControlled e o hook useUser para buscar e gerenciar os estados do usuário.

-`App-5-user-context-combined` Aqui é a hora de complicar um pouco mais as coisas, podemos exaltar os multiplos contextos que temos instanciados no App.tsx e explicar as complicações de manter tantos ao mesmo tempo. Também iremos pela abordagem de unicar todos dados para exemplificar que quando um estado muda, todos componentes que estão com `subscribe` são afetados, mesmo os que não utilizam algum dados específico.
