let selecaoislandia = document.querySelector("#selecaoislandia")

selecaoislandia.addEventListener("click", MudarIslandia)

function MudarIslandia() {

    const infoTitulo = document.getElementById("infoTitulo")
    const infoDescricao = document.getElementById("infoDescricao")
    infoTitulo.innerText = "Islândia"
    infoDescricao.innerText = "A Islândia é um país insular nórdico, tem uma paisagem surpreendente, com vulcões, fontes termais, gêiseres e campos de lava. Suas gigantescas geleiras estão protegidas em parques nacionais (de Vatnajökull e Snæfellsjökull (Nome dificil)). A maioria dos habitantes vivem na capital do país, Reykjavik, abastecida por energia geotérmica e sede do museu de Saga, que traçam a história viking da Islândia."

    const infoBandeira = document.getElementById("infoBandeira")
    const infoMapa = document.getElementById("infoMapa")
    infoBandeira.setAttribute('src', './assets/imgs/bandeira-islandia.png')
    infoMapa.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6898350.958345371!2d-21.489260906657258!3d65.03172355318316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d22b52a3eb6043%3A0x6f8a0434e5c1459a!2zSXNsw6JuZGlh!5e0!3m2!1spt-BR!2sbr!4v1661994640473!5m2!1spt-BR!2sbr')
    
    const economiaTitulo = document.getElementById("economiaTitulo")
    const economiaDescricao = document.getElementById("economiaDescricao")

    economiaDescricao.innerText = "Os Países Baixos têm uma economia muito forte e têm desempenhado um papel especial na economia europeia durante muitos séculos. Desde o século XVI, o transporte, a pesca, o comércio e os bancos têm sido importantes setores da economia neerlandesa. O país é umas das dez maiores nações exportadoras. A Holanda possui vários recursos naturais energéticos, de onde se destaca o gás natural, cujas reservas são das maiores da Europa Ocidental. Quanto ao petróleo e ao carvão, embora existam em razoáveis quantidades, não satisfazem as necessidades internas, obrigando, assim, o país a recorrer à importação daqueles materiais."

    const economiaImagem = document.getElementById("economiaImagem")
    economiaImagem.setAttribute('src', './assets/imgs/economia-holanda.jpg')

    const primarioDescricao = document.getElementById("primarioDescricao")
    const secundarioDescricao = document.getElementById("secundarioDescricao")
    const terciarioDescricao = document.getElementById("terciarioDescricao")

    primarioDescricao.innerText = "O setor primário está bastante desenvolvido, integrando atividades como a horticultura de estufa (tomate, pepino e alface são os principais produtos), a floricultura (dedicada, sobretudo, à tulipa, símbolo nacional) e a criação de gado leiteiro que sustenta a forte produção de laticínios."
    secundarioDescricao.innerText = "No setor secundário, as indústrias metalúrgica, alimentícia e do tabaco são as suas principais fontes de rendimento, também há as indústrias química, eletrônica e petrolífera. Nos últimos anos, o Governo holandês tem encorajado o desenvolvimento de outras indústrias, como a aeronáutica e a automóvel."
    terciarioDescricao.innerText = "Por último, no setor terciário é de destacar a importância da Bolsa de Ações de Amsterdã (fundada no início do século XVII) e do sistema bancário holandês, predominantemente nas mãos de grupos privados."

    // const primarioImagem = document.getElementById("primarioImagem")
    // primarioImagem.setAttribute('src', './assets/imgs/primario-holanda.jpg')

    // const aspDescricao = document.getElementById('aspDescricao')
    // aspDescricao.innerText

    const relevoDescricao = document.getElementById('relevoDescricao')
    relevoDescricao.innerHTML = "Com uma área de 41.500 km²; O relevo da holanda se caracteriza pelas extensas planícies litorâneas e por feições que recebem o nome de pôlders. Trata-se de terrenos muito baixos que são constantemente alagados pelos corpos d’água adjacentes e protegidos por estruturas como diques e barragens que têm a função de impedir o avanço da água. <br> A altura média do relevo é de 30 metros, enquanto seu ponto mais alto fica na colina de Vaalserberg, com 322 metros de altitude"

    const vegetacaoDescricao = document.getElementById("vegetacaoDescricao")
    vegetacaoDescricao.innerHTML = "A composição vegetal dos Países Baixos é condizente com as amplas extensões de terras alagadas e com o relevo rebaixado. Sua paisagem costeira é formada por dunas, pântanos e turfeiras. Em outras áreas, se observa a presença de campos, charneca e bosques.<br><br> Além disso, o território neerlandês possui mais de 50% de suas terras com elevada aptidão agrícola, sendo que 24% da sua superfície é utilizada como área de pastagem. <br> A paisagem natural foi alterada pelo homem e as áreas de vegetação natural são muito limitadas. Os animais de maior porte desapareceram, mas os bosques de carvalho, faia, freixo e pinheiro estão protegidos."


    const climaDescricao = document.getElementById("climaDescricao")
    climaDescricao.innerHTML = "A Holanda apresenta a peculiaridade de estar entre dois importantes centros de ação: a baixa da Islândia e a alta dos Açores. Assim, o país se coloca em uma posição onde massas de ar quentes e frias se chocam, causando instabilidade e nebulosidade. <br> <br> Estima-se que o país tenha menos de um mês de tempo aberto por ano, geralmente concentrados na primavera, enquanto outono e verões costumam ter os maiores índices pluviométricos.<br><br> Somado a isto, o relevo plano do país favorece a circulação dos ventos, especialmente os vindos do oeste e do sul. Os ventos vindos do sul, porém, costumam ser freados pelas elevações austrais holandesas.<br><br> Quanto as temperaturas, elas costumam não ser muito rígidas, com verões não muito quentes e invernos amenos.<br><br> A ação da Corrente do Golfo, que leva as águas quentes da Flórida e do México para o oeste europeu, tem papel fundamental na regulação climática do país."

    const demoDescricao = document.getElementById("demoDescricao")
    demoDescricao.innerHTML = "A população estimada da Holanda é de 17.400.000 (17 milhões), sendo a maioria da população dos Países Baixos é etnicamente holandesa, havia 1,8 milhão de residentes estrangeiros nos Países Baixos, o que corresponde a 11,1% do total de habitantes.<br> Com o Pib per capita de 52.304,06 USD, que é um dos mais altos do mundo"

    const densidadeValor = document.getElementById("densidadeValor")
    densidadeValor.innerHTML = "370 hab/km<sup>2</sup>"

    const densidadeDescricao = document.getElementById("densidadeDescricao")
    densidadeDescricao.innerHTML = "Essa densidade é uma das mais altas da Europa.<br> Na qual cerca de 3 milhões de pessoas do pais moram em Amsterdam, Rotterdam, Den Haag (Haia), Utrecht e Eindhoven <ul> <li>População residente em área urbana: 84%</li> <li>População residente em área rural: 16%</li></ul>"


    const natalidadeDescricao = document.getElementById("natalidadeDescricao")
    natalidadeDescricao.innerText = "A natalidade dos países baixos se manteve estavel, conforme a tabela abaixo: (2017-2019)"
    /////////////////// Tabela Natalidade /////////////////////

    const natNas1 = document.getElementById("natNas1")
    natNas1.innerText = "169.680"
    const natNas2 = document.getElementById("natNas2")
    natNas2.innerText = "168.525"
    const natNas3 = document.getElementById("natNas3")
    natNas3.innerText = "169.836"

    const natNasH1 = document.getElementById("natNasH1")
    natNasH1.innerText = "86.893"
    const natNasH2 = document.getElementById("natNasH2")
    natNasH2.innerText = "86.204"
    const natNasH3 = document.getElementById("natNasH3")
    natNasH3.innerText = "87.159"

    const natNasM1 = document.getElementById("natNasM1")
    natNasM1.innerText = "82.787"
    const natNasM2 = document.getElementById("natNasM2")
    natNasM2.innerText = "82.321"
    const natNasM3 = document.getElementById("natNasM3")
    natNasM3.innerText = "82.677"

    const natTaxNat1 = document.getElementById("natTaxNat1")
    natTaxNat1.innerText = "9,80‰"
    const natTaxNat2 = document.getElementById("natTaxNat2")
    natTaxNat2.innerText = "9,80‰"
    const natTaxNat3 = document.getElementById("natTaxNat3")
    natTaxNat3.innerText = "9,90‰"

    const natTaxFer1 = document.getElementById("natTaxFer1")
    natTaxFer1.innerText = "1,57"
    const natTaxFer2 = document.getElementById("natTaxFer2")
    natTaxFer2.innerText = "1,59"
    const natTaxFer3 = document.getElementById("natTaxFer3")
    natTaxFer3.innerText = "1,62"
    
    /////////////////// Tabela Mortalidade /////////////////////
    const mortalidadeDescricao = document.getElementById("mortalidadeDescricao")
    mortalidadeDescricao.innerText = "A taxa de mortalidade também se manteve estavel: (2017-2019)"

    const mor1 = document.getElementById("mor1")
    mor1.innerText = "151.885"
    const mor2 = document.getElementById("mor2")
    mor2.innerText = "153.363"
    const mor3 = document.getElementById("mor3")
    mor3.innerText = "150.214"

    const morH1 = document.getElementById("morH1")
    morH1.innerText = "74.432"
    const morH2 = document.getElementById("morH2")
    morH2.innerText = "74.522"
    const morH3 = document.getElementById("morH3")
    morH3.innerText = "72.661"

    const morM1 = document.getElementById("morM1")
    morM1.innerText = "77.453"
    const morM2 = document.getElementById("morM2")
    morM2.innerText = "78.841"
    const morM3 = document.getElementById("morM3")
    morM3.innerText = "77.553"

    const taxMor1 = document.getElementById("taxMor1")
    taxMor1.innerText = "8,80‰"
    const taxMor2 = document.getElementById("taxMor2")    
    taxMor2.innerText = "8,90‰"
    const taxMor3 = document.getElementById("taxMor3")
    taxMor3.innerText = "8,80‰"


}
