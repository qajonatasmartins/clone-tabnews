# clone-tabnews

## Inicio

- nvm - node version manager
- nvm ls - o ls é list de listar --> Esse comando lista todas as versões atuais do node.
  nessa lista existe itens que estão escritos "lst/nome" onde lts significa "long term support" no portugues suporte de longo prazo. Significa que os responsaveis vão da suporte por um longo tempo nessa versão.
- nvm install lts/nome -> instala a versão desejada
- nvm alias default x.x.x -> Define uma versão default para o node da maquina.
- Para definir para os novos usuários a versão do node usada no projeto, criamos o arquivo '.nvmrc' sendo que 'rc' significa Run commands, que é uma convenção criada para script de instruções de inicialização.
  - Feito isso ao rodar o comando nvm install sem colocar o nome da versão desejada 'lts/hydrogen' (por exemplo), ele vai baixar a versão definida no arquivo.
- Arquivo de maniifesto
  - package.json: Um arquivo de dependencias do projeto em nodejs

## Protocolos

Protocolo é um acordo um combinado que segue regras entre duas partes que estão querendo se comunicar (inicio e fim)

- HTTP (Hypertext transfer protocol): Documentos que contenham referencias para outros documentos. É um protocolo que define regras para transferencias desses documentos.
- FTP (File Transfer protocol): Dedicado mais para transferencia de arquivos
- SMTP (Simple mail transfer protocol): Protocolo utilizado para transferencia de mensagens de email.
- TCP ()
- IP (internet protocol)
- UDP (User datagram protocol):

## git

`git log` - listar os commits do repositório.
`git add` - sobe alterações para a staging area.
`git commit` - realiza novos commits.
`git commit --amend` - subsitui o commit anterior por um novo, mas aproveita as alterações dele.
`git diff` - calcula a diferença entre as versões/alterações dos arquivos.

## Versionamento de código

Isso começõu em 1972 quando a 'Bell Labs' inventou o SCCS (Source code control system) que foi o 1 sistema digital de versionamento. Seguido pelo RCS (Revision control system) em 1982, depois CVS em 1986, SVN em 2000 e em 2005 Linus Torvald criou o git para um versionamento melhor para o linux.

Todos os versionamentos antes do git eram centralizados e quando se criou o git ele era um versionamento de codigo distribuido.

### Estagios do versionamento

Untracked -> Não é um dos 3 estagios é uma etapa antes da primeira.

#### Estagios

Modified - Modificado
Staged - Area de preparo
Committed - Comited

### Viagem no tempo (reescrever em um commit já realizado sem criar um novo)

git commit --amend

### Outros comandos git

git commit -m "mensagem" - atalho para fazer novos commits.
git push - empurrar alterações locais para o origin.
git push --force - empurrar de forma forçada alterações locais para o origin.
git push -f - a forma comprimida do comando anterior.

## arquivo .nvmrc

Ele define qual é a versão do node js do projeto.

Um projeto com isso .nvmrc está especificando que Node.js v16 deve ser usado. Qualquer desenvolvedor pode executar `nvm use` para baixar, instalar e alternar para essa versão. A `nvm install` a chamada instalaria dependências de acordo com essa versão.

## [O que é o EditorConfig?](https://editorconfig.org/)

O EditorConfig ajuda a manter estilos de codificação consistentes para vários desenvolvedores que trabalham no mesmo projeto em vários editores e IDEs. O projeto EditorConfig consiste em um formato de arquivo para definir estilos de codificação e uma coleção de plugins do editor de texto que permitem aos editores ler o formato do arquivo e aderir a estilos definidos. Os arquivos EditorConfig são facilmente legíveis e funcionam bem com os sistemas de controle de versão.

## [prettier](https://prettier.io/)

Formatador de código que através do `npm run lint:check` que verifica é para concertar é `npm run lint:fix` executado essa formatação para todos os diretórios por causa do '.'.
