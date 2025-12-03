export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: "Real Weddings" | "Tips" | "Inspiración";
  date: string;
  readTime: string;
}

function calculateReadTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min lectura`;
}

const rawPosts = [
  {
    id: "1",
    slug: "dudas-que-todos-los-novios-tienen",
    title: "Las dudas que todos los novios tienen (aunque no siempre las digan)",
    excerpt: "Una guía honesta para entender las objeciones más comunes al contratar foto y video de boda. Elegir a quien documentará tu boda no es una compra simple: es confiarle a alguien la memoria emocional de uno de los días más importantes de tu vida.",
    content: `Elegir a quien documentará tu boda no es una compra simple: es confiarle a alguien la memoria emocional de uno de los días más importantes de tu vida.
Por eso es normal tener dudas. Normal tener miedos. Normal preguntarse si es la mejor elección.

Después de acompañar a decenas de parejas, reunimos aquí las objeciones más comunes —las que todos sienten, incluso si no las dicen. No están para convencerte de nada, sino para darte claridad y tranquilidad.

1. "Está fuera de nuestro presupuesto…"

La mayoría de las parejas desconoce lo que realmente implica foto y video profesional.
No es solo "tomar fotos": es edición, color, sonido, narrativa, backups, equipo, horas de selección y la experiencia de anticiparse a momentos irrepetibles.

El precio no refleja solo el día de la boda, sino el valor emocional de lo que quedará cuando el día termine.

2. "Mi primo toma fotos, ¿podríamos contratarlo a él?"

Un hobby es hermoso, pero no reemplaza la experiencia profesional.

Un fotógrafo de bodas sabe trabajar bajo presión, con poca luz, con retrasos, con cambios inesperados. Sabe cuándo acercarse, cuándo desaparecer, cómo guiar sin estorbar.

Un familiar puede amar la fotografía, pero no carga con la responsabilidad de un día irrepetible.

3. "¿Y si no nos gustan las fotos?"

Este miedo no es técnico: es emocional.

Por eso la conexión es tan importante.
Un buen equipo no busca poses forzadas, sino expresiones reales: su forma de mirarse, caminar, tocarse, reír.

La fotogenia no es genética.
Es comodidad.

4. "¿Nos va a quitar mucho tiempo?"

Un equipo experimentado fluye con la boda, no la detiene.
Guía sin presionar.
Se adapta sin invadir.
Acompaña sin imponer.

No deberías sentir que la boda gira en torno a la cámara.

5. "No queremos poses incómodas."

Nadie quiere poses incómodas, y nadie las necesita.
Las mejores fotos nacen de gestos mínimos: caminar, abrazarse, hablar, respirar.

Nosotros dirigimos lo indispensable; ustedes viven el momento.

6. "No queremos estar todo el día frente a la cámara."

Tampoco queremos eso para ustedes.

Un buen fotógrafo sabe cuándo registrar y cuándo dar espacio.
El día no debe sentirse como una producción: debe sentirse como su boda.

7. "¿De verdad necesitamos video?"

Cuando ven su video, lo entienden.

El sonido de los votos, las voces de la familia, la música del momento, la risa que en foto solo se intuye…
El video no repite la foto: completa la memoria.

8. "¿Respetarán nuestras ideas e inspiraciones?"

Sí.
Las ideas no complican: enriquecen.

Ustedes sueñan el qué.
Nosotros resolvemos el cómo.
La inspiración es bienvenida mientras mantengamos coherencia de estilo.

9. "Podemos decidir más adelante…"

Este es el pensamiento que más parejas lamentan después.

Las fechas se llenan antes de lo que creen, especialmente en temporada alta.
Decidir tarde suele llevar a elegir entre lo que queda disponible… no entre lo que querían.

10. "¿Por qué cuesta tanto?"

Porque detrás hay mucho más que un clic:

• edición profesional

• color y narrativa

• sonido y música

• plataforma de entrega

• selección entre miles de imágenes

• equipo de respaldo

• horas de trabajo después del evento

El costo real no es por lo que hacemos ese día, sino por lo que queda para siempre.

11. "Nos da miedo firmar un contrato que no entendamos."

El contrato es claridad.
Protege a ambas partes, define expectativas y evita sorpresas.
Saber exactamente qué incluye, qué no incluye, tiempos, entregas y políticas… da tranquilidad.

12. "¿Cómo será el trato durante la boda?"

Este miedo es más común de lo que imaginas.

Un buen equipo es empático, respetuoso, atento y discreto.
Ayuda sin imponerse. Crea paz, no tensión.
La actitud suma tanto como el resultado.

13. "No queremos sentirnos en un set de grabación."

Tampoco nosotros.
La boda es una experiencia, no una película.

La cámara debe acompañar, nunca protagonizar.

14. "¿Y si algo les pasa el día de la boda?"

Un equipo profesional tiene protocolo, respaldo, equipo duplicado, red de apoyo y soluciones ante emergencias.

La confianza no está en que "no pase nada", sino en tener un plan si pasa.

15. "¿Estas fotos son realmente de bodas completas?"

Duda válida.

Por eso es importante ver historias completas, no solo highlights.
La boda real, con sus retos, su luz, sus tiempos y su emoción auténtica, habla más que cualquier reel perfecto.

16. "Queremos ahorrar…"

Es natural.
Pero pocas inversiones emocionales duran tanto como la documentación de la boda.

No es gasto del día.
Es memoria de vida.

17. "¿Vamos a perder mucho tiempo con fotos familiares?"

No.
Con una lista clara y alguien coordinando, puede resolverse en 10–15 minutos.
Lo importante es tener orden, no prisa.

18. "Tememos que no entiendan nuestro estilo."

La solución es simple: hablarlo.
Mostrar referencias.
Alinear expectativas.

La claridad previa evita decepciones.

19. "¿Y si no conectamos con ustedes?"

No hay buen resultado sin buena conexión.
Es fundamental sentirse cómodos, escuchados y en confianza.
La conexión se nota en el trato… y se revela en las fotos.

20. "No somos fotogénicos."

Lo escuchamos todo el tiempo.

La fotogenia no es belleza.
Es seguridad emocional, guía mínima y un ambiente cómodo.
De eso nos encargamos nosotros.

21. "No sabemos posar."

Perfecto.
Las mejores fotos no se posan; se viven.
Nadie llega sabiendo. Para eso estamos.

22. "¿Podremos ver avances?"

Explicar el proceso y los tiempos ayuda a disminuir ansiedad.
A veces mostramos una imagen seleccionada para tranquilizar, sin comprometer el flujo de trabajo.

23. "Vimos tantas opciones que ya no sabemos elegir."

Es normal.
La saturación confunde.

La decisión suele aclararse con dos preguntas:

¿Quién nos hace sentir tranquilos?

¿Qué estilo nos sigue gustando incluso después de días?

El instinto es más sabio de lo que parece.

La verdad detrás de todas las objeciones

Las objeciones no son problemas: son señales.
Son ventanas a lo que la pareja necesita para sentirse segura.

Cuando se responden con honestidad, la contratación deja de ser un trámite y se vuelve un encuentro:
un puente entre lo que ustedes sueñan y lo que nosotros sabemos crear.

Porque documentar una boda no es solo registrar imágenes.
Es cuidar su historia.
Es honrarla.
Es entender que ese día no se repite.

Y por eso, todas las dudas merecen ser escuchadas… y resueltas.`,
    coverImage: "/images/gallery/TOP-SyP-116.webp",
    category: "Tips",
    date: "Diciembre 3, 2025",
  },
  {
    id: "2",
    slug: "el-first-look-por-que-ayuda",
    title: "El First Look: por qué puede ayudar (y por qué a veces no hace falta)",
    excerpt: "El First Look es uno de esos momentos que disfruto muchísimo capturar, no solo por lo emocional, sino por lo práctico que resulta para el flujo de toda la boda.",
    content: `El First Look es uno de esos momentos que disfruto muchísimo capturar, no solo por lo emocional, sino por lo práctico que resulta para el flujo de toda la boda. Siempre lo propongo porque sé, desde la experiencia real, que ayuda a que el día se sienta más ligero, menos apresurado y mucho más disfrutable para ustedes.

Cuando lo planeamos, busco un espacio con buena luz, privacidad y suficiente margen para que ambos se sientan cómodos. A veces siento que el First Look es como el Jardín Secreto de Frances Hodgson Burnett: un rincón íntimo y apartado, donde pueden respirar un momento antes de que empiece todo. Puede ser un jardín, un pasillo tranquilo o una esquina con sombra suave. Lo importante no es el lugar exacto, sino que se sienta íntimo y lejos del caos de la producción del día.

A nivel emocional, sí es un momento bonito: verse antes de la ceremonia baja los nervios y permite un respiro real. Pero también entiendo que algunas parejas prefieren esperar hasta la ceremonia, porque eso les da una emoción distinta: el momento clásico de verse frente a todos, con la música y la entrada marcada. Ninguna opción es mejor que otra; solo funcionan distinto.

Ahora, desde lo práctico, el First Look tiene una ventaja enorme: nos permite tomar los retratos principales sin prisas, cuando aún están frescos, impecables y con energía. Esto hace que después puedan disfrutar más la ceremonia, la convivencia y hasta el coctel sin sentir que tienen una cámara encima todo el tiempo.

Durante el First Look yo me mantengo a distancia, sin intervenir más de lo necesario. No busco poses rígidas ni coreografías raras; lo que quiero es que se vean, reaccionen y se reconozcan como son. Yo me encargo de capturar esos segundos y de guiarlos cuando hace falta, pero siempre de forma natural. Nada exagerado, nada actuado.

Además, hay una ventaja práctica que muchas parejas agradecen después: si hacemos todas sus fotos de pareja antes de la ceremonia, ustedes pueden disfrutar su coctel completo. Cuando no hay First Look, normalmente esas fotos se hacen justo en ese momento, y es fácil sentir que se pierden parte de la convivencia.

Y no solo eso: estar presentes en el coctel ayuda muchísimo a que durante el banquete puedan cenar tranquilos y sin tantas interrupciones. Cuando la pareja no asiste al coctel, muchos invitados esperan hasta la cena para saludarlos y felicitarlos, lo que termina convirtiendo ese rato en una cadena de interrupciones, abrazos, conversaciones y fotos que no permiten comer con calma.

En cambio, al tener ya sus fotos listas y al pasar por el coctel, llegan a la cena más libres, con más tiempo y con una energía mucho más relajada. Es casi como un mini reset antes del gran momento.

Y al final, lo más valioso para mí es ver cómo un First Look transforma el día. Las parejas llegan a la ceremonia con otra energía: más tranquilos, más presentes y con menos prisa. A veces incluso me dicen: "Qué bueno que lo hicimos, porque si no, sí hubiéramos andado corriendo todo el día."

Si estás buscando un momento íntimo, bonito, útil y que realmente mejore tu experiencia, el First Look es una de las mejores decisiones que puedes tomar. Y si lo hacemos juntos, te aseguro que va a ser un respiro en medio de todo y uno de los recuerdos más sólidos de tu video.`,
    coverImage: "/images/gallery/TOP-SyP-116.webp",
    category: "Tips",
    date: "Noviembre 25, 2024",
  },
  {
    id: "3",
    slug: "esperar-hasta-el-altar",
    title: "Esperar hasta el altar: la magia del primer encuentro en la ceremonia",
    excerpt: "Hay parejas que sienten, desde el principio, que quieren verse por primera vez justo en el altar. Ese momento tiene una potencia emocional única.",
    content: `Hay parejas que sienten, desde el principio, que quieren verse por primera vez justo en el altar. Y lo entiendo perfectamente. Ese momento tiene una potencia emocional única: es de los pocos instantes en la vida que se sienten comparables —o incluso más grandes— que la pedida de matrimonio.

Cuando uno espera hasta la ceremonia, todo se acumula: los nervios, la anticipación, el silencio previo, la música empezando, las miradas de los invitados, el paso lento hacia el pasillo… y de pronto, ahí está. Ese primer cruce de miradas frente a todos. Es un momento con una carga simbólica enorme, casi cinematográfica, porque es justo donde la historia que construyeron llega a su clímax emocional.

A veces veo cómo a uno de los dos se le llenan los ojos de lágrimas de alegría antes de caminar. O cómo respiran profundo cuando escuchan los primeros acordes. Ese instante tiene algo ritual, algo que no se puede recrear en ningún otro punto del día. Para algunas parejas, ese es el momento. El que han imaginado desde siempre. El que no quieren adelantar por nada del mundo.

Lo hermoso de este tipo de encuentro

Esperarse hasta el altar permite que la emoción llegue sin filtros. No hay preparación previa, no hay silencio íntimo ni espacio privado: es la fuerza del instante tal cual es. Esa sorpresa total puede resultar abrumadora… pero en el mejor sentido. Es como dejar que el corazón dé un salto sin previo aviso.

He visto lágrimas honestas, risas nerviosas, sonrisas que iluminan toda la ceremonia. He visto cómo el ambiente entero se transforma cuando sucede ese primer encuentro. No solo la pareja lo siente: la energía en el espacio cambia. Los invitados lo perciben, la música se siente distinta, incluso la luz parece acomodarse.

Las ventajas prácticas (que también existen)

Aunque el encuentro sea más emocional que práctico, tiene sus beneficios:

No tienes que apartar tiempo antes de la ceremonia. El getting ready fluye más relajado.

Todo se siente más lineal y tradicional. Es ideal para quienes valoran la estructura clásica.

Y las desventajas (porque también es justo mencionarlas)

Después de la ceremonia, normalmente hacemos las fotos de pareja. Eso significa perderse parte o todo el coctel.

Si muchos invitados quieren saludar, la cena puede tornarse más interrumpida, porque los mensajes de felicitación que no dieron en el coctel llegan más tarde.

Aun así, para muchas parejas vale completamente la pena. La intensidad del momento lo supera todo.

En contraste con el First Look

Mientras el First Look ofrece intimidad, calma y control del tiempo, esperar al altar ofrece puro impacto emocional. Uno no sustituye al otro: simplemente responden a personalidades y sueños distintos.

Si te imaginas caminando hacia la ceremonia y viéndolo todo por primera vez en ese instante exacto… entonces esta opción es para ti. Y ahí estaré, capturando ese primer cruce de miradas que, sin duda, será uno de los momentos más fuertes de tu día.`,
    coverImage: "/images/gallery/TOP-SyD-162.webp",
    category: "Tips",
    date: "Noviembre 25, 2024",
  },
  {
    id: "4",
    slug: "apolo-dioniso-amor-verdadero",
    title: "Apolo, Dioniso y el surgimiento del verdadero amor",
    excerpt: "A veces pienso que el matrimonio no es solo un acuerdo ni un ritual, sino una pequeña obra trágica en el sentido más antiguo y profundo.",
    content: `A veces pienso que el matrimonio no es solo un acuerdo ni un ritual, sino una pequeña obra trágica en el sentido más antiguo y profundo: ese lugar donde Apolo y Dioniso dejan de pelear y empiezan a bailar.

Apolo es la forma, el orden, la claridad. Es la estructura que sostiene la casa, la organización del día, los planes, la promesa dicha con firmeza. Dioniso es lo otro: lo que desborda, lo que quiebra las certezas para que aparezcan emociones nuevas; es la risa, la vulnerabilidad, el instinto, la entrega sin explicación.

Nietzsche decía que la grandeza de la tragedia surgía cuando ambas fuerzas se abrazaban, cuando el mundo dejaba de ser una lista de certezas y se convertía en un territorio vivo, lleno de intensidad y misterio.

Creo que el amor verdadero nace ahí mismo: en ese punto donde Apolo permite que el caos entre un poquito, y donde Dioniso acepta ser sostenido por una forma que no lo asfixia, sino que lo revela.

El matrimonio, visto así, no es una jaula ni un ideal perfecto; es más bien el escenario donde dos energías se reconocen, donde el orden se flexibiliza y el impulso encuentra dirección. Es el lugar donde lo que conocemos del otro —lo apolíneo— convive con todo lo que todavía no conocemos —lo dionisíaco— y sin embargo lo elegimos igual.

Y quizá, en esa mezcla, en ese equilibrio frágil y hermoso, es donde aparece lo que Nietzsche llamaba lo verdaderamente humano: un amor que no pretende controlarlo todo, ni entenderlo todo, pero que aun así se afirma en medio de lo incierto, como una tragedia luminosa que se celebra cada día.`,
    coverImage: "/images/gallery/TOP-KyB-236.webp",
    category: "Inspiración",
    date: "Noviembre 25, 2024",
  },
  {
    id: "5",
    slug: "consejos-disfrutar-boda-fotos",
    title: "Consejos para disfrutar tu boda y salir increíble en tus fotos",
    excerpt: "El día de tu boda está lleno de momentos únicos, y nuestra intención siempre es que lo vivas de la manera más ligera, natural y bonita posible.",
    content: `El día de tu boda está lleno de momentos únicos, y nuestra intención siempre es que lo vivas de la manera más ligera, natural y bonita posible. No se trata solo de capturar imágenes, sino de que tú y tu pareja disfruten realmente el día mientras nosotros nos encargamos de lo demás.

Aquí te comparto las recomendaciones que más ayudan —esas que hemos visto transformar el ritmo y la experiencia de una boda completa— para que todo fluya y tus fotos luzcan espectaculares.

Preparativos: el inicio marca el ritmo

El getting ready no es solo “el antes”: es parte de la narrativa emocional del día. Un espacio ordenado, con buena luz y sin acumulación de cosas, cambia por completo el look de tus fotos. Dejen visibles solo lo que aporta y guarden lo que distraiga.

También ayuda mucho usar ropa linda y cómoda, ya sea una bata o un conjunto suave que se vea bien en cámara. Y si tienen listos los accesorios —anillos, ramo, perfume, invitación— nos permite arrancar rápido sin buscar objetos en el último minuto.

Fotos de pareja: más naturalidad, menos poses

No necesitas saber posar. De hecho, las mejores fotos aparecen cuando conversan, ríen, caminan juntos y se olvidan un poquito de la cámara.

Confíen en nosotros, pero no teman improvisar si sienten algo: un abrazo, una caricia, jugar con el velo, tomarse las manos. Esa espontaneidad es oro.

Nosotros les damos guía cuando hace falta, pero nunca forzamos nada. Queremos que todo se vea como ustedes: auténticos, cercanos, naturales.

Ceremonia: cada paso cuenta

Aquí es donde las emociones están más vivas. Lo mejor que pueden hacer es caminar despacio, respirar profundo y mirar tanto a su pareja como a las personas que aman.

Las miradas sinceras y las sonrisas espontáneas crean imágenes inolvidables.

Y si lloran, ríen o se emocionan mucho —déjenlo pasar. Las emociones reales hacen fotos reales. Nada se ve más hermoso que sentir sin frenarse.

Coctel, recepción y fiesta: estar presentes cambia todo

Durante la fiesta, lo más importante es pasarla bien. La alegría auténtica siempre se nota.

Cuando interactúan con sus invitados, bailan, brindan, ríen… las fotos y videos se llenan de vida.

Un tip que hemos aprendido en muchas bodas: si aparecen en el coctel, muchos invitados los felicitan ahí, lo que hace que la cena sea más tranquila y puedan comer sin tantas interrupciones. Es un detalle pequeño, pero cambia la energía de toda la noche.

Extras que de verdad salvan el día

Lleva un par de zapatos cómodos. Nadie los ve bajo el vestido, pero tus pies lo van a agradecer.

Ten a alguien con polvo o labial para pequeños retoques. Especialmente si habrás llorado, bailado o abrazado a medio mundo.

Si preparaste algo especial —una sorpresa, un detalle, un objeto significativo— cuéntanos. Esos detalles cuentan historias increíbles.

Y lo más importante…

Queremos que disfrutes cada momento. Que el día sea tuyo, no de la agenda, no de los tiempos, no de la producción.

Mientras tú vives, nosotros capturamos.

Si sigues estas recomendaciones, no solo lucirás increíble en tus fotos: te vas a sentir increíble durante todo el día.`,
    coverImage: "/images/gallery/TOP-SyD-125.webp",
    category: "Tips",
    date: "Noviembre 25, 2024",
  },
  {
    id: "6",
    slug: "cuando-algo-no-sale-perfecto",
    title: "Shit Happens: por qué tu boda sigue siendo el mejor día de tu vida",
    excerpt: "Hay una verdad que nadie te dice con suficiente claridad: en todas las bodas pasa algo fuera de control. Siempre. Sin excepción.",
    content: `Hay una verdad que nadie te dice con suficiente claridad:
en todas las bodas pasa algo fuera de control.
Siempre. Sin excepción.

A veces una vela no prende.
A veces se retrasa el maquillaje.
A veces un proveedor se tarda cinco minutos más.
A veces una dama o un padrino no aparece cuando deberían.
A veces el clima decide hacer lo suyo.

Y aun así —o mejor dicho, justamente por eso— la boda sigue siendo perfecta en su significado.

Porque cuando algo no sale como lo imaginaste, es fácil pensar que afecta el día. Pero la verdad es mucho más simple y mucho más bonita:

Lo mejor del día ya está presente.
Estás con el amor de tu vida.
Con la persona que elegiste y que te eligió.
Con quien caminarás el resto de tus días.

Todo lo demás… son detalles.
Valiosos, sí, pero no esenciales.

La realidad es esta: no existe la boda sin imprevistos. Y no pasa nada. De hecho, los imprevistos son parte del día. Lo hemos visto tantas veces que ya es casi una regla: lo que se sale del plan, se acomoda solo, y nadie —de verdad nadie— lo recuerda como un “problema”.

Las parejas siempre llegan con una idea fija: todo debe ir perfecto.
Pero la perfección no está en que cada minuto se cumpla, sino en que ustedes estén bien, tranquilos, disfrutando. Todo lo demás se resuelve, se mueve, se adapta.

Si el maquillaje se retrasa, lo ajustamos.
Si la flor equivocada llegó, la acomodamos.
Si alguien importante se tarda, lo esperamos.
Si llueve, cambiamos la locación.
Si algo no prende, cambiamos el plan.

Y no pasa absolutamente nada.

Nadie piensa en esos detalles cuando están tomados de la mano diciendo sus votos.
Nadie se acuerda de la vela, ni del tráfico, ni del peinado que tomó más.
Pero sí se acuerdan de cómo se vieron, de cómo respiraron, de cómo se sintieron uno frente al otro.

Al final del día, lo que realmente queda no es la lista de cosas que salieron perfectas…
sino la sensación de haber vivido algo totalmente suyo, íntimo, humano y real.

Si algo falla, el día no se rompe. Porque lo que sostiene el día no depende de eso.

Y créeme: desde este lado de la cámara, puedo decirte algo con toda certeza después de tantas bodas…

Las mejores fotos, los mejores videos, las mejores memorias, no vienen de lo perfecto:
vienen de lo auténtico.`,
    coverImage: "/images/gallery/TOP-PyC-312.webp",
    category: "Inspiración",
    date: "Noviembre 25, 2024",
  },
  {
    id: "7",
    slug: "tu-boda-tu-estilo-inspiracion",
    title: "Tu boda, tu estilo: por qué sí aceptamos inspiración, ideas y referencias",
    excerpt: "En Arrebol Weddings tenemos un estilo claro, una manera muy nuestra de ver la luz, de narrar, de encontrar momentos reales. Pero también sabemos algo fundamental: tu boda es tuya, no nuestra.",
    content: `En Arrebol Weddings tenemos un estilo claro, una manera muy nuestra de ver la luz, de narrar, de encontrar momentos reales.
Pero también sabemos algo fundamental: tu boda es tuya, no nuestra. Y si hay ideas, referencias o inspiraciones que te emocionan, queremos escucharlas.

Agradecemos infinito cuando las parejas nos eligen.
De verdad.
Es una confianza enorme. Y por eso, si hay alguna foto, pose, tipo de luz, concepto o idea que te mueve el corazón, estamos totalmente abiertos a considerarlo.

Nos encanta cuando los novios comparten lo que les inspira

No nos asusta que llegue una carpeta de Pinterest o un set de referencias de Instagram.
Al contrario:

Nos ayuda a entender cómo imaginan su día.

Nos muestra qué tipo de momentos valoran.

Nos permite ver qué estética les vibra más.

Mientras más sepamos de ustedes, mejor podemos contar su historia.

Nuestro estilo es nuestro… pero es flexible

Tenemos una identidad consolidada:
luz suave, colores naturales, momentos reales, narrativa emocional, nada exagerado.

Probablemente no hagamos una sesión hiper oscura, o en un estilo completamente ajeno a lo que hacemos —porque sería injusto para ustedes y para nosotros—, pero:

sí aceptamos ideas, inspiración, conceptos, ángulos, microescenas y sugerencias.

La clave es sencilla:
ustedes inspiran el qué y nosotros resolvemos el cómo.

Lo que sí prometemos siempre

Que cualquier idea la adaptaremos a nuestro estilo para que se vea coherente y elegante.

Que si algo no funciona en luz, tiempo o contexto, se los diremos con honestidad.

Que nunca diremos “no” porque sí: siempre buscamos la forma.

Que nos importa muchísimo que ustedes se sientan parte del proceso creativo.

No se trata de copiar imágenes.
Se trata de tomar la intención que les gustó y convertirla en algo suyo.

Queremos que se sientan escuchados

Muchas parejas nos dicen:

“No queríamos incomodarles enseñando referencias…”

Pero no incomoda.
Ayuda.

Cuando una pareja comparte lo que sueña, nosotros podemos crear con mayor claridad, intención y sensibilidad.
Y al final, el resultado siempre es más personal, más íntimo y más auténtico.

Tu boda no es un catálogo. Es una historia. Y la contamos juntos.

Así que tráete tus ideas. Tus clips guardados. Tus fotos favoritas.
Lo hablamos, lo adaptamos y lo volvemos Arrebol.

Mientras ustedes aportan lo que desean, nosotros ponemos el corazón, los ojos y el estilo que ya conocen.

Porque las mejores bodas se construyen así:
entre lo que ustedes imaginan y lo que nosotros sabemos crear.`,
    coverImage: "/images/gallery/TOP-KyB-23.webp",
    category: "Tips",
    date: "Noviembre 26, 2025",
  },
  {
    id: "8",
    slug: "damas-de-honor-verdadero-papel",
    title: "Damas de honor: su verdadero papel (y lo que nadie se atreve a decir)",
    excerpt: "Hablemos claro: las damas de honor no están ahí solamente para ponerse un vestido bonito y salir coordinadas en fotos. O al menos, no deberían.",
    content: `Hablemos claro: las damas de honor no están ahí solamente para ponerse un vestido bonito y salir coordinadas en fotos. O al menos, no deberían.

En muchas bodas vemos dos tipos de damas:

Las que realmente están para la novia.

Y las que están presentes… pero no realmente involucradas.

Y la diferencia entre unas y otras se nota muchísimo.

El rol real de una dama de honor

Una dama de honor no es un adorno ni un elemento estético. Es parte del equipo emocional y logístico de la novia. Su función es simple y poderosa:

Apoyar de verdad.

Ayudar a que la novia esté tranquila.

Resolver pequeñas cosas sin cargar a la novia con preocupaciones.

Ser puntuales y estar listas cuando se las necesita.

Cuidar a la novia con presencia, atención y cariño.

Una buena dama de honor es la que:

Pregunta qué hace falta.

Ayuda a acomodar el vestido o el velo.

Está atenta al timeline.

Sabe dónde están los objetos importantes.

Acompaña emocionalmente sin protagonismos.

No se desaparece en momentos clave.

El problema de la puntualidad (sí, es real)

En MUCHAS bodas, pasa esto: la novia está lista antes que las damas.

Y eso retrasa todo: fotos grupales, organización, apoyo emocional… y pone presión donde no debería haber.

La realidad es clara: las damas están ahí para facilitarle el día a la novia, no para complicarlo. Su presencia y puntualidad importan.

Cuando las damas no se involucran realmente

Hay damas que están presentes físicamente, pero desconectadas emocionalmente. No preguntan, no ayudan, no están atentas al ritmo del día.

Y aunque se vean hermosas, la falta de involucramiento genuino se siente. La novia termina cargando con preocupaciones que deberían estar distribuidas entre su círculo cercano.

Una dama que no está realmente presente no cumple su papel. No por mala intención, sino porque quizá nunca entendió lo que significa estar ahí para alguien en un día que es tan importante.

Damas de honor que sí hacen la diferencia

Cuando una dama está realmente comprometida, el día cambia por completo. Lo hemos visto muchas veces:

La novia respira con más calma.

Los tiempos fluyen.

Hay menos estrés y más contención.

Las fotos del getting ready salen hermosas porque todos están sincronizados.

La energía del cuarto se siente ligera y llena de cariño.

Una dama así hace que la boda sea mejor para todos.

Si eres dama de honor, esto es lo único que tienes que recordar

No estás ahí por tradición, ni por protocolo, ni por compromiso.

Estás ahí por ella.
Por la amistad, por los años compartidos, por el cariño real.

Tu papel es acompañarla, sostenerla y ayudarla a disfrutar el día con tranquilidad. Y si lo haces desde ese lugar, no solo tendrás fotos increíbles: serás parte de uno de los recuerdos más valiosos que ella guardará del día.`,
    coverImage: "/images/gallery/TOP-AyJ-178.webp",
    category: "Tips",
    date: "Noviembre 26, 2025",
  },
  {
    id: "9",
    slug: "importancia-tomar-decisiones-a-tiempo",
    title: "La importancia de tomar decisiones a tiempo",
    excerpt: "Hay un momento en el que todas las parejas se dan cuenta de lo mismo: la boda no se disfruta el día del evento… si no se preparó con tranquilidad antes.",
    content: `Hay un momento en el que todas las parejas se dan cuenta de lo mismo:
la boda no se disfruta el día del evento… si no se preparó con tranquilidad antes.

Y no hablo de planeación meticulosa ni de revisar cada detalle obsesivamente. Me refiero a algo más simple, más profundo y mucho más importante:

Tomar decisiones a tiempo.

Suena técnico, pero en realidad es emocional:
la anticipación reduce el estrés, mejora el resultado y te deja vivir tu boda con una libertad que no se puede comprar.

1. Tomar decisiones temprano no es ser "intenso": es ser inteligente

Cuando una pareja pospone decisiones ("luego vemos esto", "aún falta", "más adelante lo definimos"), pasa algo silencioso:

El estrés se acumula en el aire.
No en el día, sino en ustedes.

De pronto, todas las decisiones pequeñas se juntan:
la música, los tiempos, la logística, los proveedores, colores, detalles, permisos, flores, etc.

Lo que pudo resolverse con calma… termina resolviéndose con prisa.
Y la prisa roba algo muy valioso: claridad emocional.

2. Decidir temprano = menos estrés en la recta final

Cuando las decisiones ya están tomadas con semanas o meses de anticipación, llega una sensación deliciosa que pocas parejas imaginan:

La libertad de disfrutar la boda antes de que empiece.

El último mes ya no se siente como un examen final.
Se siente como una cuenta regresiva bonita.

Y el día de la boda… respiran.
No piensan en proveedores, ni en detalles, ni en pagos, ni en pendientes.
Solo en vivir.

3. Decidir temprano mejora el resultado de todo

Es simple: cuando hay tiempo, hay calidad.

Los proveedores pueden planear mejor.

Los ajustes se hacen sin urgencia.

Las ideas se refinan.

Las sorpresas se organizan con cariño, no con caos.

El timeline fluye.

La producción es más ordenada.

Y ustedes tienen la mente clara para expresarnos lo que realmente quieren.

La belleza de una boda se cocina lento.

4. Tomar decisiones con tiempo libera la emoción del día

Cuando llegamos a la boda vemos claramente quién decidió a tiempo y quién no.
Se nota en todo:

La novia respira más profundo.

El novio está más relajado.

Las familias disfrutan sin correr.

Nosotros capturamos momentos más naturales porque la pareja no está pensando en pendientes.

Tomar decisiones temprano no es un acto administrativo:
es un acto de amor propio.

Les da permiso de estar presentes.

Porque el día de la boda no es para correr.
No es para apagar incendios.
No es para buscar soluciones.
Es para mirarse.
Para sentir.
Para vivir.

La decisión más importante que puedes tomar es ésta: decidir a tiempo.

No para cumplir expectativas.
No para complacer a nadie.
No para tener la "boda perfecta".

Sino para tener la boda que se siente bien, la que se vive con calma y presencia, la que se recuerda sin tensión.

Y cuando ustedes están tranquilos, todo se vuelve más bonito:
las fotos, los abrazos, las risas, los silencios, la ceremonia, el baile… todo fluye.`,
    coverImage: "/images/gallery/SandJ-207.webp",
    category: "Tips",
    date: "Diciembre 3, 2025",
  },
  {
    id: "10",
    slug: "recomendaciones-ceremonia-religiosa",
    title: "Recomendaciones para la ceremonia religiosa: cómo vivirla con calma y hacerla aún más especial",
    excerpt: "La ceremonia religiosa suele ser el corazón emocional de la boda. Es el momento donde todo se aterriza: las promesas, la familia, la historia que los trajo hasta aquí.",
    content: `La ceremonia religiosa suele ser el corazón emocional de la boda. Es el momento donde todo se aterriza: las promesas, la familia, la historia que los trajo hasta aquí.
Y aunque parezca muy formal, también es un espacio lleno de detalles que pueden hacer una enorme diferencia tanto en la experiencia como en las fotos y el video.

Estas son nuestras recomendaciones para vivirla con tranquilidad y sacarle el mayor brillo posible.

1. Lleguen con tiempo (pero no demasiado)

Llegar tarde genera tensión innecesaria, pero llegar demasiado temprano también puede causar ansiedad.
Lo ideal es llegar con 10–15 minutos de anticipación, para que respiren, se acomoden y nadie tenga que correr.

Ese respiro previo les ayuda a conectar con el momento antes de entrar.

2. Entren despacio: cada paso importa

En las ceremonias religiosas, la entrada tiene un peso simbólico enorme.

Entrar lento, presente y con calma hace que:

La emoción se asiente.

Las fotos sean más bonitas.

La familia pueda verlos con claridad.

Nosotros podamos capturar cada gesto.

No es caminar para llegar: es caminar para sentir.

3. Miren a sus seres queridos… y a su pareja

En el trayecto al altar, muchas personas caminan mirando al piso por nervios.
Pero este momento es uno de los más emotivos.

Levanten la mirada.
Busquen caras conocidas.
Reciban la emoción.
Y apenas puedan, mírenla o mírenlo a los ojos.

Esa primera mirada es magia pura.

4. No contengan emociones

Si lloran, lloran.
Si se ríen, se ríen.
Si les tiembla la voz, está perfecto.

Las ceremonias religiosas no son un examen de compostura.
Son un ritual de amor. Y las emociones reales hacen que la experiencia sea profunda… y que las fotos y video se sientan auténticos.

5. Practiquen cómo se colocarán en el altar

Una postura simple puede mejorar muchísimo la estética del momento:

Pies ligeramente abiertos, no completamente juntos.

Cuerpos rectos pero relajados.

Miradas alternando entre la pareja y el momento.

Evitar cubrirse mutuamente en momentos clave.

Son detalles pequeños, pero se notan mucho en foto y video.

6. Involucren a su familia con intención

El momento de las lecturas, ofrendas, arras, anillos o lazo puede ser profundamente emotivo si quienes participan saben cuándo y cómo hacerlo.

Asignar roles claros evita confusiones o retrasos.

Y no está de más recordarles:

"Respiren, háganlo con calma, disfruten estar aquí."

7. El beso: tómense un segundo más

Las parejas suelen dar un beso tan rápido que nadie lo ve —ni la familia, ni la cámara.

Dense un beso bonito, natural, no exagerado…
pero no fugaz.

Ese segundo extra hace toda la diferencia.

8. La salida: caminen lento y disfruten el ruido bonito

La salida es uno de los momentos más alegres: música, aplausos, pétalos, burbujas, abrazos.

Caminen sin prisa.
Mírense.
Rían.
Gócense el instante.

Es el cierre perfecto del rito.

9. Recuerden: la ceremonia no es para que salga perfecta, sino para que se sienta verdadera

La ceremonia religiosa es un espacio íntimo dentro de la estructura formal.
Y aunque esté llena de momentos importantes, lo más bonito ocurre cuando ustedes se permiten vivirla, no solo pasar por ella.

Si la viven desde adentro, si se permiten sentir, si respiran y se miran…
todo lo demás cae en su lugar.`,
    coverImage: "/images/gallery/SandJ-414.webp",
    category: "Tips",
    date: "Diciembre 3, 2025",
  },
];

export const blogPosts: BlogPost[] = rawPosts.map((post) => ({
  ...post,
  readTime: calculateReadTime(post.content || post.excerpt),
})) as BlogPost[];
