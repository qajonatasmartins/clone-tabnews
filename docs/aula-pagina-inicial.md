# Aula - Página inicial

## File-Based Routing no Next.js

### O que é File-Based Routing?

File-Based Routing (Roteamento Baseado em Arquivos) é uma funcionalidade fundamental do Next.js que permite criar rotas da aplicação automaticamente baseando-se na estrutura de arquivos e pastas do projeto. Diferente do React tradicional, onde você precisa configurar manualmente as rotas usando bibliotecas como React Router, o Next.js gera as rotas automaticamente.

### Como Funciona

No Next.js, qualquer arquivo criado dentro da pasta `pages/` (ou `app/` no App Router) automaticamente se torna uma rota acessível na aplicação.

#### Estrutura Básica

```
pages/
├── index.js          → / (página inicial)
├── about.js          → /about
├── contact.js        → /contact
└── blog/
    ├── index.js      → /blog
    ├── [slug].js     → /blog/:slug (rota dinâmica)
    └── [...all].js   → /blog/* (catch-all routes)
```

### Tipos de Rotas

#### 1. Rotas Estáticas

Arquivos com nomes fixos criam rotas estáticas:

- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/produtos.js` → `/produtos`

#### 2. Rotas Dinâmicas

Usando colchetes `[]` no nome do arquivo:

- `pages/users/[id].js` → `/users/123`, `/users/abc`
- `pages/posts/[slug].js` → `/posts/meu-primeiro-post`

#### 3. Rotas Aninhadas

Pastas criam estruturas aninhadas:

- `pages/blog/index.js` → `/blog`
- `pages/blog/category/tech.js` → `/blog/category/tech`

#### 4. Catch-All Routes

Usando `[...nome].js` para capturar múltiplos segmentos:

- `pages/docs/[...slug].js` → `/docs/a`, `/docs/a/b`, `/docs/a/b/c`

### Exemplo Prático para o Clone TabNews

Para nosso projeto clone-tabnews, poderíamos ter esta estrutura:

```
pages/
├── index.js              → / (página inicial com feed)
├── login.js              → /login
├── cadastro.js           → /cadastro
├── perfil/
│   ├── index.js          → /perfil
│   └── [username].js     → /perfil/usuario123
├── posts/
│   ├── index.js          → /posts
│   ├── novo.js           → /posts/novo
│   └── [slug].js         → /posts/titulo-do-post
└── categorias/
    ├── index.js          → /categorias
    └── [categoria].js    → /categorias/tecnologia
```

### Navegação Entre Rotas

O Next.js fornece o componente `Link` para navegação:

```jsx
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/posts/meu-post">Meu Post</Link>
    </nav>
  );
}
```

### Parâmetros de Rota

Para acessar parâmetros dinâmicos, use o hook `useRouter`:

```jsx
import { useRouter } from "next/router";

function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Post: {slug}</h1>;
}
```

### Vantagens do File-Based Routing

1. **Simplicidade**: Não precisa configurar rotas manualmente
2. **Intuitividade**: A estrutura de arquivos reflete a estrutura da URL
3. **Produtividade**: Desenvolvimento mais rápido
4. **Organização**: Código bem estruturado e fácil de encontrar
5. **SEO**: URLs amigáveis automaticamente

### Comparação com React Traditional

#### React com React Router:

```jsx
// Configuração manual necessária
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
```

#### Next.js:

```
// Apenas criar os arquivos na estrutura correta
pages/index.js
pages/about.js
pages/posts/[slug].js
```

### Considerações Importantes

- Arquivos que começam com `_` não criam rotas (ex: `_app.js`, `_document.js`)
- O arquivo `index.js` sempre representa a rota raiz da pasta
- Rotas dinâmicas têm menor prioridade que rotas estáticas
- É possível combinar rotas estáticas e dinâmicas na mesma pasta

O File-Based Routing é uma das características que torna o Next.js tão poderoso para desenvolvimento web, simplificando significativamente o processo de criação de aplicações React complexas.
