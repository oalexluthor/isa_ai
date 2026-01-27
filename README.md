# ISA (Information Sensitive Anonymizer) `v0.3.2-alfa`

> **Guardrail de privacidade ultra-leve para agentes de IA.**

A **ISA** foi projetada para resolver o maior gargalo na adoção de LLMs em empresas: **a segurança de dados.** Diferente de soluções baseadas em nuvem, a ISA roda localmente, garantindo que Informações Pessoais Identificáveis (PII) nunca saiam do seu ambiente sem estarem devidamente mascaradas.


---

### ⚠️ Disclaimer: Projeto em Estágio Alfa
**Atenção:** Este projeto está atualmente em **estágio alfa** e sob **desenvolvimento ativo**. 
* Os modos de uso e formatos de tags podem sofrer alterações sem aviso prévio.
* O modelo ainda está sendo refinado para reduzir falsos positivos/negativos.
* Não recomendado para uso em ambientes de produção crítica sem validação prévia.

---


## 🚀 Como funciona?

A ISA utiliza o motor neural baseado no **Gemma 3 270M** para realizar uma **tokenização preservadora de contexto** em três etapas críticas:

1.  **Identificação:** O motor identifica entidades sensíveis (PII) no texto bruto.
2.  **Substituição:** Cada entidade é trocada por um token único (ex: `[NOME_PESSOA_01]`) mantendo a estrutura gramatical.
3.  **Mapeamento (Opcional):** Gera um JSON com o texto anonimizado e um mapa que permite reverter os tokens após a resposta da LLM.

---

## 🛠 Modos de Operação

A ISA pode ser configurada via `system_prompt` para diferentes níveis de profundidade:

### 1. Anonimização Pura
Ideal para logs ou streams onde você não precisa reverter os dados.
* **Prompt:** *"Você é um agente de privacidade. Substitua todos os PII pelos labels correspondentes. Retorne apenas o texto limpo."*

### 2. Privacy Orchestrator (Recomendado)
Retorna o texto limpo E um objeto JSON com o "De-Para" dos dados originais.
* **Input:** `"O CPF do João é 123.456.789-00"`
* **Output:**
    ```json
    {
      "text": "O CPF de [NOME_PESSOA_01] é [DOC_CPF_01]",
      "map": {
        "[NOME_PESSOA_01]": "João",
        "[DOC_CPF_01]": "123.456.789-00"
      }
    }
    ```

### 3. Reconstrução Reversa (De-anonymize)
Recebe o texto tokenizado + o mapa JSON para reconstruir a mensagem original de forma íntegra.

---

## 📖 Dicionário de Entidades Suportadas

| Categoria | Tipo de Dado | Marcador (Label) |
| :--- | :--- | :--- |
| **Identidade** | CPF, RG, CNH, Passaporte, CNPJ | `[DOC_...]`, `[ID_...]` |
| **Financeiro** | Cartão de Crédito, Conta, IBAN, Valores | `[FIN_...]` |
| **Saúde (PHI)** | Diagnósticos, Medicamentos, Médicos | `[PHI_...]` |
| **Tecnologia** | API Keys, IPs, Tokens, Device IDs | `[TECH_...]` |

---

## 🏗 Padrões de Integração Arquitetural



### 01. Privacy Proxy
A ISA atua como um middleware transparente entre sua aplicação e a Cloud LLM (OpenAI, Anthropic, etc).
* **Fluxo:** App Client ──▶ ISA (Local/Masking) ──▶ Cloud LLM (Dados Limpos).

### 02. Dataset Batch Cleaning
Utilizado para processar grandes volumes de dados offline antes de realizar **Fine-tuning** ou alimentar bancos de dados vetoriais (**RAG**). Garante que o modelo não "decore" dados sensíveis de clientes.

---

## ⚠️ Dica de Segurança

O **Mapa de Tradução** gerado pela ISA nunca deve ser enviado para a LLM na nuvem. Ele deve permanecer exclusivamente na memória da sua aplicação local ou no seu backend seguro.

---

## 📅 Roadmap de Desenvolvimento
- [x] Treinamento base em entidades brasileiras (CPF, RG, etc).
- [x] Suporte a dados técnicos (API Keys, IP).
- [ ] **(Em progresso)** Treinamento para anonimização com mapa de reconstrução.
- [ ] **(Em progresso)** Treinamento para desanonimização.
- [ ] **(Planejado)** Treinamento para textos longos.

<!-- ## 📄 Licença
Distribuído sob a licença [DEFINA SUA LICENÇA, ex: MIT]. Veja `LICENSE` para mais informações. -->