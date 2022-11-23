var answers = [
    'Eeeeyeeeeyeey\nNo voy a decir que reaparecí, porque probablemente siga medio afk, así que lo más seguro es que siga sin contestar / conectarme / etc. Pero bueno, quería dar señales de vida y al menos dejar de estar rezagado con este grupo.\n\nDesde que me llamó Nacho el otro día estuve pensando que capaz inconscientemente siento que tengo que aprovechar lo poco que queda de vacaciones para enfocarme en mí, y todo lo que no hice durante las mismas. O al menos eso quiero creer, y no que ahora socializar me es directamente una carga o algo así.\n\nBueno, en fin, tengo varias cosas de las que hablar, que voy a proceder a listar para no olvidarme',
    'Che, esto me hizo pensar y me di cuenta de que siempre critican algo que tiene que ver con sacar tema de conversación.\nCuando Esteban habla con profesores, las expresiones de Francesca, Abril riéndose en el grupo, lo que puso Aldana de las figuritas, Nelson contando experiencias personales, las cotorras poniendo cosas en Twitter...\n\nYa sé, a mí la mayoría de las veces también me dan cringe esas cosas. Pero los insultos que veo que le hacen a la gente solo por estar interactuando con otras personas me hace sentir vergüenza de ser parte de este grupo. Y como mis amigos más cercanos les quiero comentar esto porque obviamente no es un sentimiento lindo que tener. Siento que este grupo se está volviendo un espacio tóxico para criticar a todos los que no pertenecen a él (o excluir a los que sí están, véase Gael) por la cosa más mínima. O, en otras palabras, lo que hacían/hacen las cotorras que tanto criticábamos e hizo que se disuelva la banda unida.\n\nNada, eso es lo que quería decir; yo también en el pasado me burlaba de esas cosas, pero después de reflexionarlo me doy cuenta de que no tiene sentido juzgar a alguien por su forma de expresarse o por querer sacar tema de conversación. Después de todo, a nosotros nos molestaría que las cotorras pongan un tuit diciendo "cómo vas a usar el XD en 2022???"',
    'Chicos, no le manden mensaje a Lucas que le robaron el celular',
    'a mimir dice la petracosa dios',
    'Mirá, la verdad es que te vi en la playa y sentí que eras una persona madura pero luego de tener una conversación de duración reducida y que me hagas quedar esperando una respuesta concluí en que te podés ir a la reconcha de tu puta madre pilar y la puta que te re parió anda a estudiar arquitectura si tanto te gustan los pilares vos y agustinfortniter15',
    'Subanse a la mulletneta',
    'El mensaje borrado decía "le pegaron dos puntazos en el hombro"',
    'Voto en blanco',
    'The game'
]

let previousAnswer = '';

function giveRandomAnswer()
{
    if(document.getElementById('textInput').value == "")
    {
        return;
    }

    let randomIndex = Math.floor(Math.random() * answers.length);
    let answerChosen = answers[randomIndex];

    if(answerChosen == previousAnswer)
    {
        giveRandomAnswer();
        return;
    }

    document.getElementById('answerBox').value = answerChosen;

    previousAnswer = answerChosen;
}
