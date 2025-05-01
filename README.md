# Calculadora

- **`Historico`**
- **`Botões / Teclado`**
- **`Salvamento Local`**

---

## 🔷 **Salvamento Local**

🔹 **Funcionalidade:**

Salva cerca de 15 dos calculos no site usando Localstorage

---

## 🔷 **Historico**

🔹 **Funcionalidade:**

O historico é salvo como um objeto em um array, exemplo:

```json
[
  {
    "calculo": "1+2",
    "resultado": "3"
  },
  {
    "calculo": "6+9-5",
    "resultado": "10"
  }
]
```

depois ele é exibido em uma lista com o calculo e do lado o resultado, ao clicar ele remove o item do historico

---

## 🔷 **Botões / Teclado**

🔹 **Funcionalidade:**

Ao clicar em uma tecla ele adiciona ela a operação, o mesmo vale para os botões, sem utilizar input para adicionar os numeros e sim apenas um texto para visualizar, assim evitamos que possa ser escrito qualquer coisa.

---

## 🔷 **UI**

&nbsp;
🔹 **Corpo:**

- **`Head - Botão para abrir/fechar historico + titulo`**
- **`Display - Exite o calculo e o resultado da ultima operação`**
- **`Butões - Butões das operações`**

&nbsp;

---

---

&nbsp;
🔹 **Botões:**

- **`0 a 9`**
- **`adição, subtração, multiplicação, divisão`**
- **`Somar, Deletar, Limpar`**

&nbsp;

---

---

&nbsp;
🔹 **Historico:**

- **`Lista de calculo/resultado`**

&nbsp;

---
