# Atendimento para Filas

## Visão Geral
Sistema web para gerenciamento de filas de atendimento, permitindo organizar senhas, controlar chamadas e otimizar o fluxo de atendimento de clientes.

O projeto foi desenvolvido com foco em usabilidade, organização visual e experiência do usuário, simulando um ambiente real de atendimento.

---

## Objetivo
Criar uma aplicação simples e funcional para gerenciamento de filas, permitindo:

- Geração de senhas
- Controle da fila de atendimento
- Chamada de clientes
- Priorização de atendimento
- Interface intuitiva e responsiva

---

## Funcionalidades

### Gestão de Senhas
- Emissão de senha comum
- Emissão de senha prioritária
- Numeração automática

### Controle da Fila
- Exibição da fila atual
- Separação entre atendimento comum e prioritário
- Atualização dinâmica da lista

### Painel de Atendimento
- Chamar próxima senha
- Exibir senha atual em destaque
- Histórico simples de atendimentos

### Interface
- Layout responsivo
- Feedback visual para ações
- Organização clara das informações

---

## Requisitos Funcionais

### RF001
O sistema deve permitir gerar senhas automaticamente.

### RF002
O sistema deve diferenciar senhas comuns e prioritárias.

### RF003
O sistema deve exibir a próxima senha da fila.

### RF004
O sistema deve atualizar a fila em tempo real na interface.

### RF005
O sistema deve manter a ordem correta de atendimento.

---

## Requisitos Não Funcionais

### RNF001
A aplicação deve possuir interface responsiva.

### RNF002
O sistema deve possuir boa experiência visual e usabilidade.

### RNF003
O código deve ser modular e organizado.

### RNF004
A aplicação deve funcionar diretamente no navegador.

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

---

## Possíveis Melhorias Futuras
- Persistência de dados com LocalStorage
- Painel administrativo
- Integração com banco de dados
- Login de atendentes
- Dashboard com métricas
- Integração com API/WebSocket
- Sistema de áudio para chamadas

## Estrutura Esperada

```bash
/src
  /css
  /js
  /assets
index.html
README.md
spec.md