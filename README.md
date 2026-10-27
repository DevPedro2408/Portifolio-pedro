# Portfólio · Pedro Augusto Pinheiro Costa

Portfólio profissional de Desenvolvedor Front-End em formação, feito com **React + Vite** e **CSS puro** (sem Tailwind). Layout responsivo para celular, tablet, notebook e desktop.

## 1. Como criar o projeto

O projeto já está pronto: basta abrir esta pasta no VS Code (`Arquivo > Abrir Pasta`).

Você precisa do **Node.js 20.19 ou superior** (ou 22.12+). Confira com `node -v`. Baixe em https://nodejs.org (versão LTS).

> Curiosidade: um projeto React + Vite vazio nasce com `npm create vite@latest meu-projeto -- --template react`. Aqui esse passo já foi feito e a estrutura foi organizada para você.

## 2. Instalar as dependências

No terminal do VS Code (`Ctrl + '`), dentro da pasta do projeto:

```bash
npm install
```

## 3. Executar

```bash
npm run dev
```

Abra o endereço mostrado (normalmente http://localhost:5173). Ao salvar um arquivo, a página atualiza sozinha.

Outros comandos:

| Comando | O que faz |
| --- | --- |
| `npm run build` | Gera a versão final na pasta `dist` |
| `npm run preview` | Abre localmente a versão final, para testar antes de publicar |

## 4. Onde alterar nome, e-mail, GitHub, LinkedIn e WhatsApp

Tudo em **`src/data/profile.js`**.

Tudo que falta preencher contém `SEU_` no texto. No VS Code, use `Ctrl + Shift + F` e busque por `SEU_` para achar todos os placeholders (perfil e projetos).

Enquanto um link tiver `SEU_`, o botão aparece desativado, então o visitante nunca cai em um link quebrado.

- E-mail: `mailto:seuemail@gmail.com`
- GitHub: `https://github.com/seu-usuario`
- LinkedIn: `https://www.linkedin.com/in/seu-perfil`
- WhatsApp: `https://wa.me/5598999999999` (55 + DDD + número, só dígitos)

O campo `display` é o texto mostrado no card de contato.

Para mudar o texto do Hero, "Sobre mim" e "Objetivo", edite `src/components/sections/Hero.jsx`, `About.jsx` e `Goal.jsx`.

## 5. Onde adicionar novos projetos

Em **`src/data/projects.js`**. Copie um bloco, cole depois dele e altere os campos. O card aparece sozinho. Os comentários no topo do arquivo explicam cada campo.

- Troque `demoUrl` (botão "Ver projeto") e `repoUrl` (botão "GitHub") pelos links reais.
- As **tecnologias** de cada projeto foram escritas de forma conservadora. Confira e ajuste (por exemplo, acrescente Node.js, PostgreSQL etc., se for o caso).
- Para usar um print real: salve a imagem em `public/projects/` (proporção 8:5, ex.: 1280×800) e preencha `image: '/projects/hamburgueria.png'`. Sem imagem, o card mostra um preview ilustrativo.

Para incluir outra tecnologia nas skills: `src/data/skills.js`. Para a formação: `src/data/education.js`.

## 6. Estrutura de pastas

```
src/
├── components/
│   ├── layout/     Navbar, Footer
│   ├── sections/   Hero, About, Skills, Education, Projects, Goal, Contact
│   └── ui/         Button, SmartLink, Icon, Reveal, Section (peças reutilizáveis)
├── data/           profile, skills, education, projects  (conteúdo editável)
├── hooks/          useReveal (animação ao rolar), useScrollSpy (link ativo na navbar)
├── styles/         global.css (cores, fontes, reset), ui.css (botões, chips, seções)
└── utils/          links.js
```

Cada componente tem seu próprio arquivo `.css`. Para mudar a cor de destaque do site inteiro, altere `--accent` em `src/styles/global.css`.

## 7. Publicar no GitHub

1. Crie um repositório vazio em https://github.com/new (sem README).
2. No terminal, na pasta do projeto:

```bash
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

A pasta `node_modules` e a `dist` já estão no `.gitignore`.

## 8. Deploy na Vercel ou Netlify

**Vercel**
1. Acesse https://vercel.com e entre com o GitHub.
2. `Add New > Project` e escolha o repositório.
3. A Vercel detecta o Vite sozinha (Build: `npm run build`, Output: `dist`). Clique em **Deploy**.

**Netlify**
1. Acesse https://netlify.com, `Add new site > Import an existing project` e escolha o repositório.
2. Build command: `npm run build` · Publish directory: `dist` (o arquivo `netlify.toml` já define isso). Clique em **Deploy**.

Cada `git push` na branch `main` publica a nova versão automaticamente.

## 9. Checklist antes de publicar

- [ ] Buscar `SEU_` no projeto e não encontrar mais nada
- [ ] Conferir as tecnologias de cada projeto em `projects.js`
- [ ] Adicionar prints reais dos projetos (opcional, mas deixa o portfólio mais forte)
- [ ] Rodar `npm run build` sem erros
- [ ] Testar no celular real depois do deploy
- [ ] Colocar o link do portfólio no LinkedIn e no perfil do GitHub

## Acessibilidade e desempenho

Navegação por teclado com foco visível, link "pular para o conteúdo", HTML semântico, menu mobile com `aria-expanded`, respeito a `prefers-reduced-motion`, links externos com `rel="noopener noreferrer"`. Sem bibliotecas além de React.
