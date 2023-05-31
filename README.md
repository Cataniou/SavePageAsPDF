# Function 
Script que salva uma página como PDF e guarda em alguma pasta informada.

# Getting Started
1. Configuração

Installar o node JS na maquina.

No arquivo src/generatePdf.js, alterar o valor das variaveis:
- website_url
URL do site que sera salvo.

- dir
Caminho do diretório de destino do PDF, onde a divisão das pastas deve tem dois contra-barras '\\'



Caso deseje utilizar a função de loop:

Edite o valor em segundos do arquivo src/executers/callerLoop.bat, por padrão está com 60 (1 minuto).

Edite os caminhos de arquivos nos seguintes (Depende de onde o projeto foi clonado):
- src/executers/caller.bat
- src/executers/callerLoop.bat
- src/executers/executer.vbs
- src/executers/executerLoop.vbs


2. Execução

Para executar o Script apenas uma vez, basta executar o arquivo src/executers/caller.bat
-Neste caso o CMD de execução estára visível, e para interromper o processo, basta fecha-lo.

Para executar o Script em loop, até reiniciar o computador, basta executar o arquivo src/executers/callerLoop.bat
-Neste caso o CMD de execução estára visível, e para interromper o processo, basta fecha-lo.

Para executar o Script em loop, até reiniciar o computador, basta executar o arquivo src/executers/executer.vbs
-Neste caso o CMD de execução estára escondido, e para interromper o processo, deve-se reiniciar o computador.

Para executar o Script em loop e de forma que o mesmo continue executando mesmo quando o computador reiniciar, basta executar o arquivo src/executers/executerLoop.vbs
-Neste caso o CMD de execução estára escondido, e para interromper o processo, deve-se apagar ou mudar o arquivo src/executers/executerLoop.vbs de local.
