<!--
Documento Consolidado — MB Academy (Covers EN + Handbooks PT-BR)
Requires: apple-hig.css theme active in Typora.
Place Icon1.svg (preferred) and/or Icon1.png next to this .md file.
-->

<!--
SECTION: Personal Branding Cover (EN)
Requires your Apple HIG Typora theme (apple-hig.css).
-->

<style>
#cover-personal .cover { display: grid; min-height: 80vh; place-items: center; margin: clamp(32px, 6vh, 96px) 0; }
#cover-personal .cover-card { border-radius: var(--radius-2xl); padding: clamp(24px, 6vw, 64px); box-shadow: var(--shadow-lg); max-width: 980px; width: 100%; }
#cover-personal .brand-lockup { display: grid; grid-template-columns: auto 1fr; gap: var(--spacing-2); align-items: center; }
#cover-personal .brand-icon img { width: 72px; height: 72px; border-radius: var(--radius-2xl); box-shadow: var(--shadow-sm); }
#cover-personal .brand-text h1 { margin: 0; font-size: var(--font-size-title1); line-height: var(--line-height-title1); }
#cover-personal .brand-text h2 { margin: 2px 0 0; font-size: var(--font-size-title3); line-height: var(--line-height-title3); color: var(--color-text-secondary); font-weight: 600; }
#cover-personal .divider { height: 1px; background: var(--color-separator); margin: var(--spacing-3) 0; }
#cover-personal .meta { display: flex; gap: var(--spacing-2); flex-wrap: wrap; color: var(--color-text-secondary); font-size: var(--font-size-footnote); }
#cover-personal .chip { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: var(--radius-full); background: var(--color-fill-tertiary); color: var(--color-text-secondary); }
#cover-personal .chip::before { content: "●"; font-size: 0.7em; color: var(--color-accent); }
</style>

<section id="cover-personal">
<div class="cover">
  <section class="glass cover-card" role="region" aria-label="Cover">
    <div class="brand-lockup">
      <picture class="brand-icon">
        <source srcset="Icon1.svg" type="image/svg+xml">
        <img src="Icon1.png" alt="Tulio Cunha Logo" loading="eager" decoding="async">
      </picture>
      <div class="brand-text">
        <h1>Tulio Cunha</h1>
        <h2>Full‑Stack Developer</h2>
      </div>
    </div>
    <div class="divider"></div>
    <p class="meta">
      <span class="chip">Reusable Cover</span>
      <span>Handbooks · Documents · Presentations</span>
    </p>
  </section>
</div>
</section>

<div style="page-break-after: always;"></div>


<!--
SECTION: Software Delivery Cover (EN)
Requires your Apple HIG Typora theme (apple-hig.css).
-->

<style>
#cover-delivery .cover { display: grid; min-height: 80vh; place-items: center; margin: clamp(32px, 6vh, 96px) 0; }
#cover-delivery .cover-card { border-radius: var(--radius-2xl); padding: clamp(24px, 6vw, 64px); box-shadow: var(--shadow-lg); max-width: 980px; width: 100%; }
#cover-delivery .header { display: flex; align-items: center; gap: var(--spacing-2); }
#cover-delivery .header img { width: 64px; height: 64px; border-radius: var(--radius-2xl); box-shadow: var(--shadow-sm); }
#cover-delivery .header .title { display: grid; gap: 2px; }
#cover-delivery .header .title .kicker { font-size: var(--font-size-callout); line-height: var(--line-height-callout); color: var(--color-text-secondary); font-weight: 600; letter-spacing: var(--letter-spacing-wide); text-transform: uppercase; }
#cover-delivery .header .title h1 { margin: 0; font-size: var(--font-size-title1); line-height: var(--line-height-title1); }
#cover-delivery .divider { height: 1px; background: var(--color-separator); margin: var(--spacing-3) 0; }
#cover-delivery .meta-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--spacing-2); }
#cover-delivery .meta-card { padding: 12px 14px; border: 1px solid var(--color-border-secondary); border-radius: var(--radius-lg); background: var(--color-background-tertiary); }
#cover-delivery .meta-label { font-size: var(--font-size-caption1); color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: var(--letter-spacing-wide); }
#cover-delivery .meta-value { font-size: var(--font-size-callout); line-height: var(--line-height-callout); font-weight: 600; margin-top: 4px; }
#cover-delivery .footer { margin-top: var(--spacing-3); color: var(--color-text-secondary); font-size: var(--font-size-footnote); }
</style>

<section id="cover-delivery">
<div class="cover">
  <section class="glass cover-card" role="region" aria-label="Software Delivery Cover">
    <div class="header">
      <picture>
        <source srcset="Icon1.svg" type="image/svg+xml">
        <img src="Icon1.png" alt="Product Logo" loading="eager" decoding="async">
      </picture>
      <div class="title">
        <div class="kicker">Software Delivery</div>
        <h1>«Project Name»</h1>
      </div>
    </div>

    <div class="divider"></div>

    <div class="meta-grid">
      <div class="meta-card">
        <div class="meta-label">Client</div>
        <div class="meta-value">«Client Name»</div>
      </div>
      <div class="meta-card">
        <div class="meta-label">Prepared by</div>
        <div class="meta-value">Tulio Cunha · Full‑Stack Developer</div>
      </div>
      <div class="meta-card">
        <div class="meta-label">Release / Version</div>
        <div class="meta-value">«1.0.0»</div>
      </div>
      <div class="meta-card">
        <div class="meta-label">Date</div>
        <div class="meta-value">«YYYY‑MM‑DD»</div>
      </div>
    </div>

    <p class="footer">Tip: Add a page break below so the next page starts your content cleanly.</p>
  </section>
</div>
</section>

<div style="page-break-after: always;"></div>


<!-- SECTION: MB Academy Handbook (PT-BR) -->
# Guia Unificado da Plataforma MB Academy

Última atualização: Outubro de 2025  
Versão: 1.0  
Público: Cliente (não técnico)

## Sumário
- [Parte 1 — Visão Geral](#parte-1-visao-geral)
  - [O que é a Plataforma MB Academy](#o-que-e-a-plataforma-mb-academy)
  - [Perguntas Frequentes (FAQ)](#perguntas-frequentes-faq)
  - [Tecnologias Explicadas de Forma Simples](#tecnologias-explicadas-de-forma-simples)
- [Parte 2 — Plataforma em Detalhes](#parte-2-plataforma-em-detalhes)
  - [Funcionalidades da Plataforma](#funcionalidades-da-plataforma)
  - [Guia de Páginas](#guia-de-paginas)
  - [O que Você Pode Fazer (Jornadas)](#o-que-voce-pode-fazer-jornadas)
- [Parte 3 — Guias por Perfil](#parte-3-guias-por-perfil)
  - [Manual do Administrador](#manual-do-administrador)
  - [Manual do Criador de Conteúdo](#manual-do-criador-de-conteudo)
- [Parte 4 — Apêndices](#parte-4-apendices)
  - [Glossário (pt-BR)](#glossario-pt-br)
  - [Checklists de Primeiros Passos](#checklists-de-primeiros-passos)
  - [Guia Rápido de Solução de Problemas](#guia-rapido-de-solucao-de-problemas)
  - [Páginas de Status e Suporte](#paginas-de-status-e-suporte)


<a id="parte-1-visao-geral"></a>
## Parte 1 — Visão Geral

<a id="o-que-e-a-plataforma-mb-academy"></a>
### O que é a Plataforma MB Academy
A MB Academy é um ambiente de aprendizado online que reúne cursos, aulas em vídeo, artigos, materiais para download e uma comunidade — tudo em um só lugar. A experiência é pensada para ser simples, organizada e acessível, tanto para quem estuda quanto para quem cria e administra conteúdos.

- Para Alunos
  - Cursos organizados por módulos e aulas
  - Vídeos com qualidade profissional
  - Materiais para download (PDFs, planilhas, modelos)
  - Progresso salvo automaticamente
  - Artigos e conteúdos complementares
  - Participação em discussões

- Para Criadores de Conteúdo
  - Publicação de cursos e aulas
  - Upload de vídeos com processamento automático
  - Criação de artigos e posts
  - Inclusão de materiais para download
  - Agendamento de eventos e lembretes

- Para Administradores
  - Painel de controle para acompanhar a saúde da plataforma
  - Gestão de usuários e permissões
  - Monitoramento de conteúdos publicados
  - Primeira linha de suporte a usuários

#### Benefícios principais
- Aprenda no seu ritmo: sem horários fixos, retome de onde parou
- Tudo em um só lugar: cursos, vídeos, artigos, materiais e comunidade
- Acesso em qualquer dispositivo: computador, tablet e celular
- Progresso salvo automaticamente: continue do ponto exato
- Experiência fluida: vídeos rápidos e estáveis

#### Como a plataforma funciona
- Pense na plataforma como uma “escola online” organizada em áreas:
  - Página Inicial: destaques e novidades
  - Dashboard do Aluno: sua visão pessoal do que está estudando
  - Biblioteca de Cursos e Aulas: conteúdo organizado por temas
  - Conteúdos (Artigos e Materiais): apoio ao aprendizado
  - Comunidade e Eventos: interação e lembretes importantes


<a id="perguntas-frequentes-faq"></a>
### Perguntas Frequentes (FAQ)

A plataforma funciona offline?
- Não. É necessário estar conectado à internet. Você pode baixar materiais (PDFs, planilhas) para ler offline.

Preciso instalar algum aplicativo?
- Não. Funciona direto no navegador (Chrome, Safari, Firefox, Edge). Nenhuma instalação é necessária.

Posso acessar de vários dispositivos?
- Sim. Faça login de qualquer dispositivo; seu progresso é sincronizado automaticamente.

Meus dados estão seguros?
- Sim. Usamos práticas atuais de segurança. Sua conta e seus dados são protegidos.

Os vídeos travam ou ficam lentos. O que fazer?
- Tente:
  - Verificar sua conexão (Wi‑Fi/dados)
  - Recarregar a página
  - Fechar outras abas/aplicativos pesados
  - Se persistir, veja [Guia Rápido de Solução de Problemas](#guia-rapido-de-solucao-de-problemas)

Como sei meu progresso nos cursos?
- Cada curso mostra quanto você já completou. Ao concluir uma aula, marque como “Concluída”.

Como encontro conteúdos complementares (artigos e materiais)?
- Acesse [Guia de Páginas](#guia-de-paginas) e use busca e filtros.

Esqueci minha senha. E agora?
- Use a opção “Esqueci minha senha” na tela de login. Você receberá orientações por e‑mail.

Como entro em contato com suporte?
- Veja “Páginas de Status e Suporte” nos Apêndices para canais de contato e verificação de serviços.


<a id="tecnologias-explicadas-de-forma-simples"></a>
### Tecnologias Explicadas de Forma Simples

Sem termos técnicos: o que interessa é a experiência.

- A página responde rápido e sem travar
  - Você navega e os conteúdos aparecem sem recarregar tudo

- O vídeo funciona bem
  - O player ajusta a qualidade automaticamente à sua internet

- O conteúdo é fácil de atualizar
  - Quem cria conteúdo publica materiais e artigos com poucas etapas, e você vê rápido

- Os dados ficam guardados com segurança
  - Seu cadastro, progresso e preferências são armazenados de forma protegida

- O login é seguro
  - Sua conta é conferida sempre que você entra; só você tem acesso às suas informações

Se quiser detalhes técnicos, consulte sua equipe. Este guia mantém a explicação acessível para todos.

<div style="page-break-after: always;"></div>
\pagebreak


<a id="parte-2-plataforma-em-detalhes"></a>
## Parte 2 — Plataforma em Detalhes

<a id="funcionalidades-da-plataforma"></a>
### Funcionalidades da Plataforma

#### Aprendizado
- Cursos com módulos e aulas em vídeo
- Player profissional (pause, voltar, avançar)
- Materiais para download por aula/curso
- Marcar aulas como concluídas
- Retomar do ponto em que parou

#### Conteúdo
- Artigos e posts organizados por tema
- Busca por título ou assunto
- Destaques e recomendações

#### Eventos e Lembretes
- Agenda de eventos (como lives)
- Lembretes importantes ao longo do mês

#### Comunidade
- Espaço para perguntas e discussões entre alunos
- Interações em tópicos relacionados aos cursos

#### Segurança e Privacidade
- Login com senha e proteção da conta
- Controle de acesso por perfil (Aluno, Criador, Administrador)
- Recuperação de senha


<a id="guia-de-paginas"></a>
### Guia de Páginas

#### Páginas Públicas
- Início (/)  
  Você verá: destaques da plataforma, cursos em evidência, chamadas para conhecer a plataforma.  
  Você pode: navegar para mais detalhes, iniciar cadastro ou login.

- Sobre (/sobre)  
  Você verá: missão, valores e história da MB Academy.  
  Você pode: entender o propósito e a equipe por trás do projeto.

- Plataforma (/plataforma)  
  Você verá: explicação visual do ambiente de aprendizagem e seus recursos.  
  Você pode: decidir se a plataforma atende ao que procura.

- Conteúdos (/conteudos)  
  Você verá: artigos e materiais públicos (quando disponíveis).  
  Você pode: ler artigos selecionados e explorar temas.

- Contato (/contato)  
  Você verá: meios de contato oficiais.  
  Você pode: enviar uma mensagem para a equipe.

- Entrar (/entrar)  
  Você verá: tela de login (e link para recuperar senha).  
  Você pode: acessar sua conta.

#### Portal do Aluno (/app)
- Dashboard (/app)  
  Você verá: visão do seu progresso e próximos passos.  
  Você pode: continuar o que estava estudando.

- Perfil (/app/perfil)  
  Você verá: seus dados básicos.  
  Você pode: atualizar nome, foto, biografia e senha.

- Cursos (/app/cursos)  
  Você verá: seus cursos em andamento.  
  Você pode: abrir um curso e ver seus módulos e aulas.

- Curso detalhado (/app/cursos/:id)  
  Você verá: descrição do curso, módulos e aulas.  
  Você pode: iniciar uma aula e baixar materiais do curso.

- Aula (/app/cursos/:cursoId/:moduloId/:aulaId)  
  Você verá: player de vídeo, anotações e materiais da aula.  
  Você pode: assistir, marcar como concluída e baixar materiais.

- Artigos (/app/articles)  
  Você verá: artigos exclusivos para alunos.  
  Você pode: ler, buscar e filtrar conteúdos.

- Discussões (/app/discussions)  
  Você verá: tópicos e respostas da comunidade.  
  Você pode: iniciar uma pergunta ou responder colegas.

#### Studio de Criação (/app/studio)
- Dashboard do Studio (/app/studio)  
  Você verá: atalhos e visão geral do conteúdo.  
  Você pode: acessar gestão de artigos, materiais, etc.

- Artigos (/app/studio/artigos)  
  Você verá: lista de artigos em rascunho e publicados.  
  Você pode: criar, editar, revisar e publicar artigos.

- Materiais (/app/studio/materiais)  
  Você verá: arquivos disponíveis para cursos/aulas.  
  Você pode: enviar PDFs/ZIPs, organizar e vincular a conteúdos.

- Discussões/Lembretes (/app/studio/discussoes e /app/studio/lembretes)  
  Você verá: tópicos para moderação e mensagens aos alunos.  
  Você pode: moderar discussões e postar comunicados.


<a id="o-que-voce-pode-fazer-jornadas"></a>
### O que Você Pode Fazer (Jornadas)

#### Jornada do Aluno
1) Entrar na plataforma  
2) Escolher um curso  
3) Assistir aulas no seu ritmo  
4) Baixar materiais  
5) Marcar aulas como concluídas  
6) Acompanhar o progresso  
7) Participar da comunidade e eventos

#### Jornada do Criador de Conteúdo
1) Planejar o curso (módulos/aulas)  
2) Criar conteúdos (aulas, artigos)  
3) Enviar vídeos  
4) Anexar materiais  
5) Revisar no editor visual  
6) Publicar  
7) Atualizar quando necessário

#### Jornada do Administrador
1) Acompanhar a saúde da plataforma  
2) Ajudar usuários com dúvidas  
3) Moderar conteúdos/comunidade  
4) Alinhar com criadores para lançamentos  
5) Escalar problemas para técnicos quando necessário

<div style="page-break-after: always;"></div>
\pagebreak


<a id="parte-3-guias-por-perfil"></a>
## Parte 3 — Guias por Perfil

<a id="manual-do-administrador"></a>
### Manual do Administrador

#### Objetivo do Administrador
Este manual ajuda a manter a plataforma funcionando bem e a apoiar os usuários, sem exigir conhecimentos técnicos.

#### Onde acompanhar a saúde da plataforma
- Painel principal: verifique atualizações recentes (publicações), mensagens de erro e indicadores gerais
- Monitoramento de conteúdos: confirme se as últimas alterações de conteúdo já aparecem para os alunos

#### O que observar com regularidade
- Publicações (atualizações do site): busque status “Publicado”
- Funcionalidades de bastidor: verifique se não há mensagens de erro incomuns
- Acessos e uso: entenda picos de uso para antecipar dúvidas

#### Checklist rápido de diagnóstico
1) Algum serviço está em manutenção? Veja [Páginas de Status e Suporte](#paginas-de-status-e-suporte)
2) As últimas atualizações apareceram? Aguarde alguns minutos; se não, confirme a publicação de conteúdo  
3) Há mensagens de erro ao executar ações comuns (login, abrir curso, assistir vídeo)?  
4) Se um usuário reportou problema, peça: capturas de tela, horário aproximado e o que estava tentando fazer

#### Problemas comuns e primeiros passos
- Conteúdo não aparece atualizado  
  Tente: aguardar alguns minutos e confirmar se a publicação foi concluída. Se persistir, encaminhe à equipe técnica com evidências.

- Site lento ou não carrega  
  Confira Páginas de Status. Muitos acessos simultâneos podem causar lentidão temporária.

- Usuários com dificuldade de login  
  Oriente a redefinir senha e verificar se o e‑mail usado está correto.

#### Quando escalar para a equipe técnica
- Mensagens de erro repetidas ou indisponibilidade prolongada
- Vídeos indisponíveis para muitos usuários
- Atualizações de conteúdo que não entram após tempo razoável

#### Ao escalar, envie
- Descrição clara do problema  
- Prints/telas com horário  
- Passo a passo do que o usuário fez  
- Se afetou uma pessoa ou várias

#### Atenção importante
- Não altere configurações sensíveis (como “variáveis de ambiente”). Em caso de dúvida, consulte a equipe técnica.


<div style="page-break-after: always;"></div>
\pagebreak

<a id="manual-do-criador-de-conteudo"></a>
### Manual do Criador de Conteúdo

#### Objetivo do Criador de Conteúdo
Publicar e manter conteúdos de forma simples, com foco no aluno.

#### Comece pelo planejamento
- Defina objetivo do curso ou artigo: o que o aluno aprenderá
- Estruture módulos e aulas antes de escrever
- Reúna materiais (PDFs, planilhas, imagens)

#### Criar artigos
1) Acesse o editor de conteúdo (Studio)  
2) Crie um novo artigo e preencha: Título, Categoria, Tempo de leitura  
3) Escreva o texto de forma clara, com subtítulos e listas  
4) Salve rascunho e revise no editor visual  
5) Publique

#### Criar aulas e cursos
1) Crie o curso com uma breve descrição e imagem de capa  
2) Adicione módulos e, em cada módulo, crie as aulas  
3) Para cada aula: título, breve resumo, duração e materiais (se houver)

#### Vídeos (maneira simples)
- Envie o vídeo para a área de vídeos
- Aguarde o processamento (o status indicará quando estiver pronto)
- Copie o identificador público do vídeo e cole no campo do vídeo da aula
- Salve e revise no editor visual

#### Materiais para download
- Tipos recomendados: PDF (apostilas), planilhas/ZIP (recursos)  
- Use nomes claros: curso-modulo-nome-recurso-v1.pdf  
- Anexe os materiais na aula ou no curso correspondente

#### Publicar
- Revise no editor visual  
- Clique em Publicar  
- Em poucos minutos, os alunos verão a atualização

#### Boas práticas
- Linguagem simples e direta  
- Títulos claros e consistentes  
- Imagens e vídeos de boa qualidade  
- Revisar ortografia e legibilidade  
- Atualizar conteúdos quando houver novidades ou correções


<div style="page-break-after: always;"></div>
\pagebreak

<a id="parte-4-apendices"></a>
## Parte 4 — Apêndices

<a id="glossario-pt-br"></a>
### Glossário (pt-BR)
- Dashboard: sua página pessoal com atalhos e resumos
- Editor Visual: tela para ver e editar conteúdos com prévia em tempo real
- Streaming: forma de exibir vídeos pela internet sem baixar tudo antes
- Player: o “reprodutor” de vídeo na página
- Sessão: período em que você está logado
- Cache: memória temporária usada para carregar páginas mais rápido
- Serverless (sem servidor próprio): tecnologia que ajusta recursos automaticamente, sem você precisar gerenciar máquinas

<a id="checklists-de-primeiros-passos"></a>
### Checklists de Primeiros Passos

#### Checklist: Aluno
- [ ] Criar conta e entrar  
- [ ] Escolher um curso  
- [ ] Assistir a primeira aula  
- [ ] Baixar material de apoio  
- [ ] Marcar aula como concluída  
- [ ] Ler um artigo complementar  
- [ ] Participar de uma discussão  

#### Checklist: Criador de Conteúdo
- [ ] Definir objetivo e estrutura (módulos/aulas)  
- [ ] Criar rascunho de aulas e artigos  
- [ ] Enviar vídeos e anexar materiais  
- [ ] Revisar no editor visual  
- [ ] Publicar  
- [ ] Verificar se tudo aparece corretamente

#### Checklist: Administrador
- [ ] Verificar publicações recentes  
- [ ] Conferir se conteúdos novos apareceram  
- [ ] Checar se não há erros recorrentes  
- [ ] Validar login e páginas principais  
- [ ] Acompanhar dúvidas de usuários  
- [ ] Documentar quaisquer problemas e soluções

<a id="guia-rapido-de-solucao-de-problemas"></a>
### Guia Rápido de Solução de Problemas

Não consigo entrar
- Verifique e‑mail/senha; tente recuperar senha
- Teste em janela anônima ou outro navegador

Vídeo travando
- Teste sua conexão (Wi‑Fi/dados)
- Feche outras abas e aplicativos pesados
- Recarregue a página

Conteúdo não atualiza
- Aguarde alguns minutos
- Se persistir, tente sair e entrar novamente
- Verifique se há algum aviso na plataforma

Progresso não foi salvo
- Atualize a página  
- Reabra a aula e marque novamente como concluída  
- Se continuar, anote o horário e informe o suporte

PDF não abre
- Baixe novamente  
- Teste abrir com outro leitor de PDF  
- Verifique se o arquivo não está corrompido/zerado

<a id="paginas-de-status-e-suporte"></a>
### Páginas de Status e Suporte
- Status dos serviços (para verificar indisponibilidades temporárias):  
  - Storyblok (conteúdos): status.storyblok.com  
  - Mux (vídeos): status.mux.com  
  - Netlify (hospedagem): netlifystatus.com  
  - Neon (banco de dados): neon.tech/status

- Suporte  
  - Entre em contato com o administrador da plataforma  
  - Ao relatar um problema, inclua: descrição, prints e horário aproximado


### Observações finais
- Este documento é voltado ao cliente e evita termos técnicos
- A capa e identidade visual podem ser incluídas depois, sem impactar o conteúdo
- Para exportar em PDF, use a impressão do navegador (Salvar como PDF) ou sua ferramenta preferida; as quebras de página já estão incluídas

