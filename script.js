// Variáveis para aplicar os resultados do teste. Não as altere.

const gender = process.argv[2]; // Sexo 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

//Teste para gênero masculino.
if (gender == "male" && height >= 1.70){ // Testando gênero e altura.
    if((barReps >= 6 || barSeconds <=15) && abs >= 41){ // Testando barra/tempo e abdominais.
        if((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)){ //Testando distância/tempo.
            if((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30){ // Testando natação/tempo e tempo do mergulho.
            passed = true; //Se corresponder aos requisitos será alterado para verdadeiro.
            }   
        }
        
    } // Teste para gênero feminino.
} else if (gender == "female" && height >= 1.60){ // Testando gênero e altura.
    if((barReps >= 5 || barSeconds <=12) && abs >= 41){ // Testando barra/tempo e abdominais.
        if((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)){ //Testando distância/tempo.
            if((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30){ // Testando natação/tempo e tempo do mergulho.
                passed = true; //Se corresponder aos requisitos será alterado para verdadeiro.
            }
        }
    }
}

console.log(passed);
