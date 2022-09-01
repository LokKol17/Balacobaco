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

    economiaDescricao.innerText = "A Islândia apresenta uma economia de mercado altamente desenvolvida e diversificada. O Produto Interno Bruto (PIB) do país é de 25,48 bilhões de dólares, com um valor per capita muito elevado, de pouco mais de 68 mil dólares. Vale notar que a Islândia não integra a União Europeia, por mais que seja membro do Espaço Econômico Europeu."


    const economiaImagem = document.getElementById("economiaImagem")
    economiaImagem.setAttribute('src', './assets/imgs/economia-islandia.JPG')

    const primarioDescricao = document.getElementById("primarioDescricao")
    const secundarioDescricao = document.getElementById("secundarioDescricao")
    const terciarioDescricao = document.getElementById("terciarioDescricao")

    primarioDescricao.innerText = "No setor primário, pescados e seus derivados (carne, óleos, pele, base para rações) são o carro-chefe da economia islandesa e têm grande importância nas exportações do país. Na indústria, os peixes e frutos do mar são utilizados como matéria-prima do ramo alimentício, principalmente."
    secundarioDescricao.innerText = "Já no setor secúndario estão presentes, a indústria de tecnologia, a produção de energia, de alumínio e também de produtos médicos e farmacêuticos."
    terciarioDescricao.innerText = "O setor terciário é responsável por aproximadamente 75% do PIB do país, além de concentrar uma parcela semelhante da mão de obra islandesa. Nesse segmento, destacam-se o turismo e todas as atividades a ele associadas, incluindo o comércio."

    // const primarioImagem = document.getElementById("primarioImagem")
    // primarioImagem.setAttribute('src', './assets/imgs/primario-holanda.jpg')

    // const aspDescricao = document.getElementById('aspDescricao')
    // aspDescricao.innerText

    const relevoDescricao = document.getElementById('relevoDescricao')
    relevoDescricao.innerHTML = "O relevo da islandia é composto em sua maioria por planaltos e montanhas. A altitude média encontrada no país é de 557 metros. Já o ponto mais alto, é conhecido como Hvannadalshnúkur (tenta falar isso!), fica 2110 metros acima do nível do mar. <br><br> Uma importante característica a ser notada sobre os terrenos que formam a Islândia é o importante papel das geleiras na esculturação do relevo. Além de elas estarem presentes em várias áreas, são responsáveis também por feições como os fiordes, que são encontrados na zona costeira. <br><br> Um fiorde nada mais é do que um vale encaixado, inundado pela água do mar e que surgiu a partir do derretimento de geleiras. Destaca-se ainda que a Islândia está situada próxima a uma área de encontro de placas tectônicas, dispondo, por isso, de centenas de vulcões e estando suscetível à ocorrência de terremotos."


    const vegetacaoDescricao = document.getElementById("vegetacaoDescricao")
    vegetacaoDescricao.innerHTML = "A vegetação da Islândia se caracteriza pelas formações encontradas nos biomas de tundra e taiga. A tundra se localiza ao norte, nas terras mais frias do país, já a taiga é predominante nas partes meridionais da ilha. A cobertura vegetal contínua abrange aproximadamente 25% do território islandês, sendo o restante irregular."



    const climaDescricao = document.getElementById("climaDescricao")
    climaDescricao.innerHTML = "Em função da sua latitude e pela grande influência das correntes marítimas, dois tipos climáticos são predominantes no país: o temperado oceânico, ao sul, e o subártico ou subpolar nas terras ao norte. No gerais, todo o país experimenta temperaturas baixas, variando nas médias de 0,5 °C e 11 °C, dependendo do lugar, com uma pequena amplitude térmica ao ano. A neve é mais intensa e duradoura ao norte do que no sul, região em que se registra grandes volumes de chuva, de até 4000 mm"

    const demoDescricao = document.getElementById("demoDescricao")
    demoDescricao.innerHTML = "A Islândia tem atualmente cerca de 343 mil habitantes. O territoria islandês conta com 103.000 km2"


    const densidadeValor = document.getElementById("densidadeValor")
    densidadeValor.innerHTML = "3,4 hab/km²"

    const densidadeDescricao = document.getElementById("densidadeDescricao")
    densidadeDescricao.innerHTML = "A população não se encontra distribuída de forma homogênea pelo território isso se dá pelas condições climáticas encontradas no país. <br><br> A maior parte dos islandeses vive nas áreas próximas da capital do país e também nas cidades costeiras, com alguns vilarejos esparsos pelo norte da ilha."


    const natalidadeDescricao = document.getElementById("natalidadeDescricao")
    natalidadeDescricao.innerText = "A natalidade da islândia sofre um crescimento populacional leve: (2017-2019)"
    /////////////////// Tabela Natalidade /////////////////////

    const natNas1 = document.getElementById("natNas1")
    natNas1.innerText = "4.452"
    const natNas2 = document.getElementById("natNas2")
    natNas2.innerText = "4.228"
    const natNas3 = document.getElementById("natNas3")
    natNas3.innerText = "4.071"

    const natNasH1 = document.getElementById("natNasH1")
    natNasH1.innerText = "2.267"
    const natNasH2 = document.getElementById("natNasH2")
    natNasH2.innerText = "2.242"
    const natNasH3 = document.getElementById("natNasH3")
    natNasH3.innerText = "2.112"

    const natNasM1 = document.getElementById("natNasM1")
    natNasM1.innerText = "2.185"
    const natNasM2 = document.getElementById("natNasM2")
    natNasM2.innerText = "1.986"
    const natNasM3 = document.getElementById("natNasM3")
    natNasM3.innerText = "1.959"

    const natTaxNat1 = document.getElementById("natTaxNat1")
    natTaxNat1.innerText = "12,30‰"
    const natTaxNat2 = document.getElementById("natTaxNat2")
    natTaxNat2.innerText = "12,00‰"
    const natTaxNat3 = document.getElementById("natTaxNat3")
    natTaxNat3.innerText = "11,90‰"

    const natTaxFer1 = document.getElementById("natTaxFer1")
    natTaxFer1.innerText = "1,74"
    const natTaxFer2 = document.getElementById("natTaxFer2")
    natTaxFer2.innerText = "1,71"
    const natTaxFer3 = document.getElementById("natTaxFer3")
    natTaxFer3.innerText = "1,71"
    
    /////////////////// Tabela Mortalidade /////////////////////
    const mortalidadeDescricao = document.getElementById("mortalidadeDescricao")
    mortalidadeDescricao.innerText = "A taxa de mortalidade se manteve estavel e com um leve declíneo: (2017-2019)"

    const mor1 = document.getElementById("mor1")
    mor1.innerText = "2.275"
    const mor2 = document.getElementById("mor2")
    mor2.innerText = "2.254"
    const mor3 = document.getElementById("mor3")
    mor3.innerText = "2.238"

    const morH1 = document.getElementById("morH1")
    morH1.innerText = "1.157"
    const morH2 = document.getElementById("morH2")
    morH2.innerText = "1.139"
    const morH3 = document.getElementById("morH3")
    morH3.innerText = "1.124"

    const morM1 = document.getElementById("morM1")
    morM1.innerText = "1.118"
    const morM2 = document.getElementById("morM2")
    morM2.innerText = "1.115"
    const morM3 = document.getElementById("morM3")
    morM3.innerText = "1.114"

    const taxMor1 = document.getElementById("taxMor1")
    taxMor1.innerText = "6,30‰"
    const taxMor2 = document.getElementById("taxMor2")    
    taxMor2.innerText = "6,40‰"
    const taxMor3 = document.getElementById("taxMor3")
    taxMor3.innerText = "6,50‰"


}
