var answers = [
    'Eeeeyeeeeyeey\nNo voy a decir que reaparecí, porque probablemente siga medio afk, así que lo más seguro es que siga sin contestar / conectarme / etc. Pero bueno, quería dar señales de vida y al menos dejar de estar rezagado con este grupo.\n\nDesde que me llamó Nacho el otro día estuve pensando que capaz inconscientemente siento que tengo que aprovechar lo poco que queda de vacaciones para enfocarme en mí, y todo lo que no hice durante las mismas. O al menos eso quiero creer, y no que ahora socializar me es directamente una carga o algo así.\n\nBueno, en fin, tengo varias cosas de las que hablar, que voy a proceder a listar para no olvidarme',
    'Che, esto me hizo pensar y me di cuenta de que siempre critican algo que tiene que ver con sacar tema de conversación.\nCuando Esteban habla con profesores, las expresiones de Francesca, Abril riéndose en el grupo, lo que puso Aldana de las figuritas, Nelson contando experiencias personales, las cotorras poniendo cosas en Twitter...\n\nYa sé, a mí la mayoría de las veces también me dan cringe esas cosas. Pero los insultos que veo que le hacen a la gente solo por estar interactuando con otras personas me hace sentir vergüenza de ser parte de este grupo. Y como mis amigos más cercanos les quiero comentar esto porque obviamente no es un sentimiento lindo que tener. Siento que este grupo se está volviendo un espacio tóxico para criticar a todos los que no pertenecen a él por la cosa más mínima. O, en otras palabras, lo que hacían/hacen las cotorras que tanto criticábamos e hizo que se disuelva la banda unida.\n\nNada, eso es lo que quería decir; yo también en el pasado me burlaba de esas cosas, pero después de reflexionarlo me doy cuenta de que no tiene sentido juzgar a alguien por su forma de expresarse o por querer sacar tema de conversación. Después de todo, a nosotros nos molestaría que las cotorras pongan un tuit diciendo "cómo vas a usar el XD en 2022???"',
    'Chicos, no le manden mensaje a Lucas que le robaron el celular',
    'a mimir dice la petracosa dios',
    'Mirá, la verdad es que te vi en la playa y sentí que eras una persona madura pero luego de tener una conversación de duración reducida y que me hagas quedar esperando una respuesta concluí en que te podés ir a la reconcha de tu puta madre pilar y la puta que te re parió anda a estudiar arquitectura si tanto te gustan los pilares vos y agustinfortniter15',
    'Subanse a la mulletneta',
    'El mensaje borrado decía "le pegaron dos puntazos en el hombro"',
    'Voto en blanco',
    'The game',
    'Con mucho dolor en el corazón, debo informarles que mi cosa con Rubí ha terminado. Ha sido mi campaña más adversa y difícil. La vida debe continuar y prefiero verlo más como un suceso provechoso, puesto que mi cerebro, cuyo rol fue bastante ignorado desde que la conocí, me venía advirtiendo que esta conquista a largo plazo podría significar un daño importante para mi corazón. Les hago llegar mis agradecimientos a los que me demostraron su afecto y buenos deseos para mí.',
    'Literalmente abajo está rwspondido',
    'Encima ví un vídeo de un chabón que se sentó, tiró el botón estando sentado y le sacó pedazo de intestino',
    'En España por ley tienen que tener tele todos los hoteles',
    'Aqui es donde todo empezó. Aqui es donde se fundo nuestra hermandad. La primera amistad fue entre Lucas y Nacho (foto de nosotros). Luego se sumaron Elias y Lucas Chiappa. Eramos unos niños tan fogosos que eramos envidiados, todos querían ser parte de nuestro grupo. Es así que la madre de Agustín incluso se acercó a Nacho para pedirle que integrara a Agustín en el grupo, y asi fue the game',
    'Literalmente me sale mas barato 1 programa de junior achievement, 1 curso de finanzas de junior achievement, 1 encuentro con profesionales, 4 dias y 3 noches en mar del plata, 1 semana en la casa de elias torczuk en mar del tuyu a 2 cuadras del oceano atlántico (200 pesos) que un par de dias en la finca Nuestro Santísimo Salvador del Primer Chorizo Veloz (9000 pesos)',
    'No les gusta bailar?',
    'La morsa',
    'Hoy juega Velez Banfield?',
    'Cuando estén en la unviersidad, van a seguir haciendo estas cosas? No? Bueno, con eso me quedo tranquila.',
    'Yo no puedo poner 1000 para el regalo, pongo 600.',
    'No ves que pincho?',
    'Un totem al pedo amigo dale',
    'Paaancho paaancho paaancho',
    'Gordito lechoso te voy a llenar de leche a ver si te gusta asi',
    'A a a a a a a comeeeeer',
    'No mezcles chorizo con velocidad...'
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
