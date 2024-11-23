let nomeHeroi = "Link";
let xpHeroi = 5000 ;
let rankHeroi = "Ferro"

// Com if foi possivel resolver o desafio.
if (xpHeroi == 0) {
    rankHeroi = "Ferro";
}

if (xpHeroi >= 1001) {
    rankHeroi = "Bronze";
}

if (xpHeroi >= 2001) {
    rankHeroi = "Prata";
}

if (xpHeroi >= 5001) {
    rankHeroi = "Ouro";
}

if (xpHeroi >= 7001) {
    rankHeroi = "Platina";
}

if (xpHeroi >= 8001) {
    rankHeroi = "Ascendente";
}

if (xpHeroi >= 9001) {
    rankHeroi = "Imortal";
}

if (xpHeroi > 10000){
    rankHeroi = "Radiante";
    console.log("Parabens!! Você chegou no nível máximo :D")   
}

console.log(nomeHeroi + "!! Você é um jogador de nível " + rankHeroi);



// Com Switch case não foi possivel resolver o desafio, pois ele não aceita operadores de comparaçoes de < >.
// switch(xpHeroi) {
//     case xpHeroi >= 0:
//         rankHeroi = "Ferro";
//         break;

//     case xpHeroi >= 1001:
//         rankHeroi = "Bronze";
//         break;

//     case xpHeroi >= 2001:
//         rankHeroi = "Prata";
//         break;

//     case xpHeroi >= 5001:
//         rankHeroi = "Ouro";
//         break;

//     case xpHeroi >= 7001:
//         rankHeroi = "Platina";
//         break;

//     case xpHeroi >= 8001:
//         rankHeroi = "Ascendente";
//         break;

//     case xpHeroi >= 9001:
//         rankHeroi = "Imortal"; 
//         break;

//     case xpHeroi > 10000:
//         rankHeroi = "Radiante";
//         break;
// }

// Com if e do while foi possivel resolver o desafio aumentando o xp do Heroi.
// if (xpHeroi < 1000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 1000);
//         rankHeroi = "Ferro";
//         console.log("Parabéns " + nomeHeroi + "!! Você é um jogador de nível " + rankHeroi)
// }

// if (xpHeroi < 2000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 1001);
//         rankHeroi = "Bronze"
//         console.log("Parabéns " + nomeHeroi + "!! Você é um jogador de nível " + rankHeroi)

// }

// if (xpHeroi < 5000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 2001);
//         rankHeroi = "Prata"
//         console.log("Parabéns " + nomeHeroi + "!! Você é um jogador de nível " + rankHeroi)
    
// }

// if (xpHeroi < 7000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 5001);
//         rankHeroi = "Ouro"
//         console.log("Parabéns " + nomeHeroi + "!! Você é um jogador de nível " + rankHeroi)
        
// }

// if (xpHeroi < 8000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 7001);
//         rankHeroi = "Platina"
//         console.log("Parabéns " + nomeHeroi + "!! Você é um jogador de nível " + rankHeroi)
            
// }

// if (xpHeroi < 9000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 8001);
//         rankHeroi = "Ascendente"
//         console.log("Parabéns " + nomeHeroi + "!! Você é um jogador de nível " + rankHeroi)
                
// }

// if (xpHeroi < 10000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 9001);
//         rankHeroi = "Imortal"
//         console.log("Parabéns " + nomeHeroi + "!! Você é um jogador de nível " + rankHeroi)
                    
// }

// if (xpHeroi < 10000){
//     do{
//         console.log(xpHeroi);
//         xpHeroi++;
//     } while (xpHeroi <= 10000); 
//         rankHeroi = "Radiante"
//         console.log("Parabéns " + nomeHeroi + "!! Você chegou ao ultimo nível, agora você é um " + rankHeroi)
                    
// }