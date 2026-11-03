# JOVI — Modo Estudante | FIAP Sprint 4

Evolução da landing page da Sprint 3 para **React com Next.js**, preservando a proposta de usar IA e processamento de imagens como apoio ao estudo. Inclui responsividade, componentização, props, hooks nativos e customizados, rotas públicas e uma rota **privada demonstrativa**, além de consumo de uma API mockada para mensagens de contato.

> **Importante:** a página apresenta um conceito/protótipo. Não implementa IA de captura real de câmera nem geração real de PDF. O login é **fake**, somente para demonstrar fluxo de rotas: **não oferece controle de acesso seguro**. A MockAPI, quando utilizada, também é pública. Use somente dados fictícios em testes.

## Tecnologias

- Next.js 16 (App Router) e React 19
- JavaScript e JSX
- CSS tradicional (sem Tailwind)
- `next/image` para imagens locais otimizadas
- Fetch API (`GET`, `POST`, `DELETE`) com MockAPI
- `useState`, `useEffect` e hooks customizados (`useMenu`, `useContactForm`, `useAuth`, `useMessages`)
- `sessionStorage` para sessão fictícia e `localStorage` apenas como **fallback demonstrativo sem API**

## Requisitos para executar

- Node.js 20.9+ (recomenda-se uma versão LTS atual)
- npm

## Instalação e execução

```bash
npm ci
cp .env.example .env.local
npm run dev
```

No **Windows PowerShell**, use `Copy-Item .env.example .env.local` em vez de `cp`.

Abra `http://localhost:3000`.

Para gerar e executar a versão de produção:

```bash
npm run build
npm run start
```

## Configuração da MockAPI

1. Crie um projeto em [mockapi.io](https://mockapi.io/).
2. Crie o recurso chamado **`messages`**, com campos:

   | Campo | Tipo sugerido | Exemplo |
   | --- | --- | --- |
   | `id` | ID automático da MockAPI | `1` |
   | `name` | string | `Pessoa Teste` |
   | `email` | string | `teste@example.com` |
   | `description` | string | `Quero saber mais sobre o Jovi.` |
   | `createdAt` | data ou string ISO | `2026-11-02T18:00:00.000Z` |

3. Em `.env.local`, defina a **URL base**, sem `/messages`:

   ```env
   NEXT_PUBLIC_MOCKAPI_URL=https://SEU_ID.mockapi.io/api/v1
   ```

4. Reinicie `npm run dev` depois de alterar `.env.local`.
5. Envie uma mensagem de teste pelo formulário e consulte-a no `/dashboard`.

**Sem URL configurada:** a aplicação continua funcional em **modo de demonstração local**, identificado na interface. As mensagens são armazenadas apenas no `localStorage` do mesmo navegador. Esse modo **não** é uma requisição à MockAPI e não substitui o requisito da entrega de consumo real de API. Para cumpri-lo, configure o recurso antes de entregar.

**Aviso de privacidade:** MockAPI e variáveis com prefixo `NEXT_PUBLIC_` são públicas no navegador. Não coloque tokens secretos na variável, não envie informações sensíveis e não interprete o login de teste como proteção real para mensagens.

## Rotas

| Rota | Acesso | Função |
| --- | --- | --- |
| `/` | Público | Landing page original migrada |
| `/login` | Público | Login de demonstração |
| `/dashboard` | Demonstrativamente privado | Lista e exclusão de mensagens (`GET` e `DELETE`) |

### Credenciais para teste

- **E-mail:** `equipe@jovi.com`
- **Senha:** `jovi123`

Essas credenciais estão intencionalmente expostas no código e na tela de login, pois **não há autenticação real**. A sessão é simulada no `sessionStorage` e o cliente redireciona visitantes sem a flag. Isso atende somente a uma demonstração acadêmica de navegação e **não protege dados nem impede acesso à API**.

## Componentes e hooks

- `src/app/components`: Navbar, Hero, SolutionSection, HowItWorks, AudienceSection, GallerySection, TeamSection, ContactSection e Footer. Cards de recursos, benefícios, passos e integrantes usam **props** para reutilizar o mesmo layout.
- `src/hooks/useMenu.js`: abrir e fechar a navegação mobile.
- `src/hooks/useContactForm.js`: campos, validação, estado de envio e feedback ao usuário.
- `src/hooks/useAuth.js`: sessão fictícia, login e logout.
- `src/hooks/useMessages.js`: listagem, carregamento, erro, atualização e exclusão.
- `src/lib/messages.js`: integração de dados com MockAPI ou demonstração local explicitamente identificada.
- `src/app/globals.css`: CSS original da Sprint 3 reorganizado em um único arquivo e ampliado para as páginas da Sprint 4.
- `public`: imagens originais da Sprint 3.

## Responsividade

As regras originais são preservadas, com ajustes de Desktop, Tablet (até 1050 px / 850 px) e Mobile (até 600 px). No mobile, a Navbar mostra um botão para abrir/fechar os links. Todos os links de navegação retornam a seções da landing page.

## Como testar

1. Abrir `/` em 1440, 768 e 390 px; conferir menu e conteúdo sem rolagem horizontal.
2. Abrir o menu mobile, tocar em um link e verificar que o menu fecha.
3. Tentar enviar formulário vazio, e-mail inválido e texto curto: conferir feedback.
4. Configurar a MockAPI e enviar uma mensagem de teste válida; conferir `POST /messages` no painel de rede do navegador.
5. Entrar com as credenciais demonstrativas e verificar a listagem da API via `GET /messages`.
6. Excluir uma mensagem de teste e verificar `DELETE /messages/:id`.
7. Abrir `/dashboard` numa aba anônima sem sessão: deve redirecionar para `/login` **no cliente**.
8. Sair e conferir o retorno à tela de login.

## Deploy na Vercel

1. Enviar a pasta do projeto para um repositório GitHub (não enviar `node_modules` nem `.env.local`).
2. Importar o repositório na [Vercel](https://vercel.com/) como projeto Next.js.
3. Nas variáveis de ambiente do projeto, cadastrar `NEXT_PUBLIC_MOCKAPI_URL` com a URL base da MockAPI.
4. Fazer o deploy e testar as rotas, as requisições e a responsividade.
5. Informar ao professor o **link real** do repositório Git e o **link real** do deploy Vercel. Esses links não são preenchidos aqui porque ainda não foram fornecidos/criados.

**Servidor back-end:** não há servidor próprio. A API é hospedada externamente na MockAPI. O Next.js roda com `npm run dev` no desenvolvimento ou `npm run build && npm run start` para produção.

## Uso de IA no projeto

Foi utilizado o ChatGPT como ferramenta de apoio para analisar os requisitos da Sprint 4 e o código da Sprint 3, apoiar a migração de HTML/CSS/JavaScript para componentes React/Next.js, estruturar hooks e fluxos de navegação demonstrativa, além de propor validações, documentação e integração com a MockAPI. O conteúdo gerado deve ser revisado, executado e testado pela equipe; a IA não substitui a validação técnica dos integrantes.

## Entrega

O ZIP deve incluir código-fonte, `README.md`, `INTEGRANTES.TXT`, `package.json`, `package-lock.json`, assets e `.env.example`. Excluir `node_modules`, `.next`, `.env.local` e quaisquer segredos. A página `INTEGRANTES.TXT` contém os cinco integrantes e respectivos RMs provenientes da Sprint 3.

**Pendente para publicação final:** configurar URL real da MockAPI, testar build e navegação em máquina com dependências instaladas, criar ou atualizar repositório Git e publicar na Vercel. Não afirmar que deploy ou integração externa foram concluídos antes desses testes.
