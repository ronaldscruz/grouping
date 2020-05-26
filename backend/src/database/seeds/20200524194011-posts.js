const bcrypt = require("bcryptjs");

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "posts",
      [
        {
          title: "Resumo 2 Guerra mundial",
          content: "A Segunda Guerra Mundial foi um conflito bélico que ocorreu na primeira metade do século XX, envolveu mais de setenta nações, opondo os Aliados às Potências do Eixo. A guerra teve início em 1 de setembro de 1939 com a invasão da Polônia pela Alemanha e as subsequentes declarações de guerra da França e da Grã-Bretanha, estendendo-se até 2 de setembro de 1945.",
          tag: "Guerra Mundial",
          user_id: 1,
          discipline_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Resumo 1 Guerra mundial",
          content: "A Primeira Guerra Mundial foi um marco na história da humanidade. Foi a primeira guerra do século XX e o primeiro conflito em estado de guerra total – aquele em que uma nação mobiliza todos os seus recursos para viabilizar o combate. Estendeu-se de 1914 a 1918 e foi resultado das transformações que aconteciam na Europa, as quais fizeram diferentes nações entrar em choque.",
          tag: "Guerra Mundial",
          user_id: 2,
          discipline_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Resumo guerra fria",
          content: "A Guerra Fria foi uma disputa pela superioridade mundial entre Estados Unidos e União Soviética após a Segunda Guerra Mundial (1939-1945). É chamada de Guerra Fria por ser uma intensa guerra econômica, diplomática e ideológica travada pela conquista de zonas de influência. ",
          tag: "Guerra Fria",
          user_id: 1,
          discipline_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Verbos",
          content: "Um verbo é uma palavra que indica acontecimentos representados no tempo, como uma ação, um estado, um processo ou um fenômeno. Os verbos flexionam-se em número, pessoa, modo, tempo, aspecto e voz. As orações e os períodos desenvolvem-se em torno de um verbo.",
          tag: "Português basico",
          user_id: 2,
          discipline_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Pontuação",
          content: "Os sinais de pontuação são recursos de linguagem empregados na língua escrita e desempenham a função de demarcadores de unidades e de sinalizadores de limites de estruturas sintáticas nos textos escritos. Assim, os sinais de pontuação cumprem o papel dos recursos prosódicos, utilizados na fala para darmos ritmo, entoação e pausas e indicarmos os limites sintáticos e unidades de sentido.",
          tag: "Português basico",
          user_id: 1,
          discipline_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Primeiro parágrafo de uma redação",
          content: "Introdução de uma redação pode ser iniciada de diversas maneiras, mas cuidado para não ser muito longa. Caso a redação tenha o limite de 30 linhas, reserve cerca de 4 a 5 linhas para a parte introdutória.",
          tag: "Redação",
          user_id: 1,
          discipline_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Como fazer um conclusão",
          content: "Na conclusão você retoma a tese desenvolvida por meio de argumentos no decorrer do texto para, então, finalizá-la. Independentemente de o tipo textual solicitado ser uma dissertação argumentativa ou um outro gênero textual, como um artigo de opinião, por exemplo, a conclusão precisa ser pensada e escrita com cuidado, para não “estragar” o trabalho dos parágrafos anteriores.",
          tag: "Redação",
          user_id: 2,
          discipline_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        
        {
          title: " O que e geografia ?",
          content: "Geografia é, nos dias atuais, a ciência que estuda o espaço geográfico, produzido por meio da dinâmica das relações estabelecidas entre o homem e o meio. Em suma, a Geografia analisa a dinamicidade das relações entre a sociedade e a natureza, capazes de transformar o espaço geográfico. A maneira como essas relações são estabelecidas confere à Geografia sua identidade e importância.",
          tag: "Geografia Basica",
          user_id: 2,
          discipline_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: " O que e geografia  urbana?",
          content: "Geografia urbana é a área da geografia humana que estuda as cidades, sua origem, crescimento, desenvolvimento e o entorno. Ou seja, estuda o espaço urbano e tudo o que ocorre dentro dele.",
          tag: "Geografia urbana",
          user_id: 1,
          discipline_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "O que e fisica quantica ??",
          content: "A Física quântica, também conhecida como mecânica quântica, é uma grande área de estudo que se dedica em analisar e descrever o comportamento dos sistemas físicos de dimensões reduzidas, próximos dos tamanhos de moléculas, átomos e partículas subatômicas.",
          tag: "Fisica quantica",
          user_id: 1,
          discipline_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "O que e fisica em geral ??",
          content: "A Física procura descrever, prever e justificar através de leis os fenômenos que acontecem com a matéria no decorrer do espaço e do tempo.",
          tag: "Fisica basico",
          user_id: 2,
          discipline_id: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Função matematica",
          content: "A função determina uma relação entre os elementos de dois conjuntos. Podemos defini-la utilizando uma lei de formação, em que, para cada valor de x, temos um valor de f(x). Chamamos x de domínio e f(x) ou y de imagem da função.",
          tag: "Função matematica",
          user_id: 2,
          discipline_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Razões Trigonométricas",
          content: "As razões (ou relações) trigonométricas estão relacionadas com os ângulos de um triângulo retângulo. As principais são: o seno, o cosseno e a tangente.\nAs relações trigonométricas são resultado da divisão entre as medidas de dois lados de um triângulo retângulo, e por isso são chamadas de razões.",
          tag: "Trigonométria",
          user_id: 2,
          discipline_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Dízima Periódica",
          content: "As dízimas periódicas são números decimais periódicos, ou seja, apresentam um ou mais algarismos que se repetem na mesma ordem infinitamente. O algarismo que se repete é chamado de período.",
          tag: "Dízima Periódica",
          user_id: 1,
          discipline_id: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "[TRABALHO] 2ª Revolução Industrial",
          content: "Minha professora pediu que eu entregasse o trabalho no Groping em forma de artigo, adorei a ideia! Sou estudante da Escola Exemplo do Jd. São Manoel. Segue o resultado da minha pesquisa: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Facilisi etiam dignissim diam quis enim lobortis. Odio ut enim blandit volutpat. Tellus elementum sagittis vitae et leo duis. Mi bibendum neque egestas congue quisque egestas diam in. Augue neque gravida in fermentum et sollicitudin ac. Consequat id porta nibh venenatis cras. Etiam erat velit scelerisque in dictum non. Amet porttitor eget dolor morbi non arcu risus quis.",
          user_id: 1,
          discipline_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        

      ],
      {}
    );
  },
  down: (queryInterface) => queryInterface.bulkDelete('posts', null, {}),
};