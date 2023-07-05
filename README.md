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