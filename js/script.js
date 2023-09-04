function descobrirCDZ(){
    const texto = document.querySelector("h1");
    const data = document.querySelector('#data').value;
    const texto2 = document.querySelector("p");
    const imagem = document.querySelector("img");
    
    if(data >= '05/21' && data <= '06/20'){
        texto.innerHTML = "Seu signo é Gêmeos";
        texto2.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","300px");
    }

    else if(data >= '10/23' && data <= '11/21'){
        texto.innerHTML = "Seu signo é Escorpião";
        texto2.innerHTML = "Milo de Escorpião foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário.";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","300px");
    }
    
    else if(data >= '02/19' && data <= '03/20'){
        texto.innerHTML = "Seu signo é Peixes";
        texto2.innerHTML = "O protetor da última Casa do Zodíaco sendo o sucessor de Albafica de Peixes. Pode derrotar qualquer inimigo se estiver lutando com toda sua força. É um cavaleiro famoso não apenas por sua beleza, mas também pela sua reputação como um dos mais fortes entre os 88 cavaleiros.";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '01/21' && data <= '02/19'){
        texto.innerHTML = "Seu signo é Aquário";
        texto2.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria.";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '06/21' && data <= '07/22'){
        texto.innerHTML = "Seu signo é Câncer";
        texto2.innerHTML = "Manigold de Câncer é o Cavaleiro de Ouro da Constelação de Câncer durante os eventos da Guerra Santa do Século XVIII. Único sobrevivente de um massacre promovido por Espectros.";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '12/22' && data <= '01/20'){
        texto.innerHTML = "Seu signo é Capricórcio";
        texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '07/23' && data <= '08/22'){
        texto.innerHTML = "Seu signo é Leão";
        texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena.";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '09/23' && data <= '10/22'){
        texto.innerHTML = "Seu signo é Libra";
        texto2.innerHTML = "Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII.";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '11/22' && data <= '12/21'){
        texto.innerHTML = "Seu signo é Sagitário";
        texto2.innerHTML = "É o irmão mais velho de Aiolia e foi considerado traidor pela morte de Atena. Mas na verdade é um cavaleiro exemplar que dedicou sua vida na grande missão de proteger Atena mesmo desprezado pelos que o rodeavam.";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '04/21' && data <= '05/20'){
        texto.innerHTML = "Seu signo é Touro";
        texto2.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo.";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '08/23' && data <= '09/22'){
        texto.innerHTML = "Seu signo é Virgem";
        texto2.innerHTML = "Shijima de Virgem é um dos Cavaleiros de Ouro que serviam o Santuário de Atena durante a Guerra Santa contra Hades no Século XVIII.";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","300px");
    }
    else if(data >= '03/21' && data <= '04/20'){
        texto.innerHTML = "Seu signo é Áries";
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco.";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","300px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}