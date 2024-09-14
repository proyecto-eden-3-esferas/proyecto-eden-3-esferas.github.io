# Lista de tareas por hacer (seguida de secciones sobre procedimientos informáticos de gestión de este sitio)

[ ] escribir y enlazar *tres-esferas.html*
[ ] cambiar nombre de y vínculos a *chinpances-dialogo-filosofico.html*, que debería llamarse *chimpances-dialogo-filosofico.html*, con m no con n
[ ] recuerda que el subgrafo sobre sistemas está por pulir
[ ] escribir *git.html* y enlazar desde *libro-grafo.html*
[ ] añadir: Un tipo por desgracia frecuente de clasificabilidad es el de la cualidad de ser copia, o <dfn>fidedignidad</dfn>. Determinado público valora un dibujo o una pintura en la medida en que calca la realidad, por ejemplo una cara o un animal. Algo análogo ocurre con la música, muchos prefieren que lo tocado reproduzca fielmente determinada grabación
[ ] Redactar *the-best-in-the-world.html*
[ ] Redactar *orden-de-palabras.html*: dictado por la sintaxis o por la semántica
[ ] Redactar *empatia.html* y enlazar desde *recursos.html* y desde *opuestos.html* (recurso frente a empatía)
[ ] Further link *specialization.html*, already linked to from *society.html*
[ ] enlazar: *allan-savory.html"
[ ] enlazar: *mono-atrapado.html"
[ ] Now, *people-of-the-lie.html* has become a large page. Plus it is linked to from *spirit.html*, why not from *thought.html*, too?
[ ] escribir: *caja-negra.html* y enlazar bidireccionalmente con *un-sma-es-una-caja-negra.html*
[ ] escribir: *palabras-sesgadas.html*
- estólido
- obstruccionismo
- radical
- progreso
[ ] revisar: *rebelion-de-las-masas.html*
[ ] write: *Sapir-Whorf-Hypothesis.html*, and possibly rename it, it is referenced from *thought.html*
[ ] complete: *CAP.html*
[ ] complete: *cpp.memory.html*
[ ] write: *cpp.unique_ptr.html*, *cpp.shared_ptr.html*, and *cpp.weak_ptr.html*, already linked to from *cpp.memory.html*
[x] write: *cpp.RAII.html*
[ ] escribir: *ver-cal-ext.html* sobre la veracidad, calidad (inteligibilidad, pedagogía) y extensión (cuánto abarca) de un libro
[ ] escribir: *dilema-demanda.html*: muchas profesiones requieren una demanda de sus servicios (relacionar con *demanda-intrinseca-y-extrinseca.html*), una carencia, falta o desgracia en el resto de la sociedad (por ejemplo los bomberos); las soluciones son la autoproducción y la innovación
[ ] escribir: *bibliteca.html*, como un conjunto de libros puede cubrir el conjunto de conocimientos... más o menos bien (especie frente a calidad)

[ ] enlaces a *libro-grafo.html* desde ¿*index.html*?
[ ] completar *presentarse-por-libre.html*, revisar ejemplo de Traductores Jurados y añadir el de los Electricistas
[x] escribir *postverdad.html*
[ ] write on *avidya.html*
[ ] write *erosion.html*, to be linked to from *weathering.html* and *soil.html*
[ ] discuss specific member functions in *cpp.strings.html*
[ ] terminar de redactar *prolog.es.html*
[x] write *weathering.html*, on Mineral Weathering, and link from *farming.html* and *biology.html*
[x] write *soil.html* and link to *weathering.html* and *farming.html*
[ ] añadir sección sobre almacenamiento en *produccion-y-distribucion.html* y enlazarlo con *mercantilismo.html*
[ ] write *climate-change.html*, and link to *food-security.html*, *farming.html*, *population.html*
[ ] write *HTML.tables.html*
[ ] write *science.html*, with class="science"
[ ] write *SMIL.html*

[x] redactar *mercantilismo.html*, actualmente sin contenido
[x] Add *Placer y capricho*
[?] Add *Ilusión, Apetencia y Capricho* from *cyclopaedia.xml*

[ ] `docbook:literal` elements should be translated into existing HTML elements in files *expert-system**.html*. Fortunately, no occurrences are found in *cpp**html*

[x] *ai.html*, on Artificial Intelligence, is incomplete. Specifically, it lacks an introduction (first paragraphs after h1 elements).
[x] *ai.html*, on Artificial Intelligence, also lacks a section on Statistical AI

[ ] Move general CSS attributes out of *svg.common-attributes.html* into *css.***attributes.html*

[x] Añadir atributo `lang="es"` en body of html files

```
sed --in-place 's/^(\s*)<body>/\1<body lang="es">/g' *.html
```

[ ] write CSS for class electronics

[ ] dividir "TheFourInmmeasurables.html" en archivos o en secciones


[ ] decidirnos por una hoja de estilo o por cómo nombrarla, teniendo en cuenta que se pueden incorporar una jerarquía de páginas ya enlazadas de "../zettelkasten_from_HTML/records/" que hacen uso de "stylesheet.css". Las opciones son:

1. Que las páginas en castellano referencien su propia hoja de estilo, o

2. Que el estilo venga dado por el atributo `lang`

(Me decanto por la primera opción. ¿Qué tal *stylesheet.es.css*? No obstante insisto en marcar el elemento `body` con atributos `lang` (`lang="es"`, por ejemplo) y `class` (`class="religion`, por ejemplo)


[ ] "computing science" or "computing science"?


[ ] retocar "poblacion.html"


[ ] añadir páginas sobre estafa piramidal...


[ ] redactar "equilibrio_dinamico.html", a que hace referencia...

[ ] write/redactar "transaction.html", in the context of databases and in interactions
[ ] possibly linked to by "database.html"

[x] Cambiar los enlaces a hojas de estilo con sed (Stream EDitor)



## Cómo cambiar los enlaces a hojas de estilo con sed (Stream EDitor)

Muchas páginas utilizan los siguientes códigos o etiquetas de enlace (no cerradas, por cierto)

1. `<link href="stylesheet.css" rel="stylesheet" title="stylesheet.css"/>`: la más frecuente, ¿qué función tiene el atributo `title`?

2. `<link rel='stylesheet' type="text/css" href="style.css">`: en muchas páginas de las más recientes

3. `<link rel=stylesheet href="style.css" type="text/css" media=screen>`: en *karma.html*, *mente.html*, mal XML si se fijan

4. `<link href="plain-stylesheet.css" rel="stylesheet" title="stylesheet.css"/>`: only in *javascript-skel-graph-of-text-objects.html*

Y la **etiqueta correcta** para todas las páginas en castellano sería:
```
<link rel='stylesheet' type="text/css" href="stylesheet.es.css"\/>
```
De modo que ejecutamos (obsérvese que hemos precedido de `\` todos los caracteres: . \ / que formaban parte del texto, no de la sintaxis de las expresiones regulares):

1. Para la mayoría:
```
sed --in-place 's/<link href="stylesheet\.css" rel="stylesheet" title="stylesheet\.css"\/>/<link rel="stylesheet" type="text\/css" href="stylesheet\.es\.css"\/>/g' *.html
```
2. Para el resto de páginas
```
sed --in-place 's/<link rel='stylesheet' type="text\/css" href="style.css">/<link rel="stylesheet" type="text\/css" href="stylesheet\.es\.css"\/>/g' *.html
```
y

3. Para un puñado (caso de karma.html* y *mente.html*):
```
sed --in-place 's/<link rel=stylesheet href="style\.css" type="text\/css" media=screen>/<link rel="stylesheet" type="text\/css" href="stylesheet\.es\.css"\/>/g' *.html
```


## English pages ( /records)

```
sed --in-place 's/<link href="stylesheet\.css" rel="stylesheet" title="stylesheet\.css"\/>/<link rel="stylesheet" type="text\/css" href="stylesheet\.css"\/>/g' *.html
```
and

```
sed --in-place 's/<link href="\.\.\/FILE_PATH\/FILE_NAME\.css" rel="stylesheet" title="stylesheet\.css"\/>/<link rel="stylesheet" type="text\/css" href="stylesheet\.css"\/>/g' *.html
```


## Por enlazar

[ ] *end-of-normal.html*

[x] *your-anti-cartesian-life.html*: from *thought.html*

- *y-mis-bajos.html*, que estaba en *index.html*

- *transhumanismo.html*

- *paradoja-del-jugador.html*

- *koyaanisqatsi.html*

- *exponencial.html*

- *black_box.html*

- *ai.black_box.html*

- *ai.why-ai-black-boxes-matter.html* is actually a follow up of *ai.black_box.html*, but before linking it as such its style should be edited to avoid charges of plagearism.

- *ic.html*, already linked from *black_box.html*

- *pensamientos.html* (only linked to by *hombre-eterno.html*)

- *generos-novela-contemporaneos.html* (sólo pergueñado)

- *fidelizacion.html*

- *hombre-eterno.html*

- *pma-tractores.html*

- *queja.2.html* (incomplete, from "grafo_de_HTML.xml", a veritable litany)

- *produccion-y-distribucion.html* (only linked from main in *origen-del-mal.html*)

- *cutoff-freq.html*, related to *electronics.cutoff-freq.html*

- *capitalismo.html*

- *situacion-tipo.html*

- *agregaciones.html*, actually it is linked to by *economia.html*

- *biology.html*

## Dentro de oposiciones, por crear o redactar (igual existe el archivo, pero sin párrafos)
- *oposiciones.html*
- *absoluto-relativo.html*
- *empirico-teorico.html*
- *religion-politica.html*
- *implicito-explicito.html*, como en función implícita
- *analisis-sintesis.html*
- *dionisiaco-apolineo.html*
- *intrinseco-y-extrinseco.html*
   [ ] hablar de semiconductores Intrínsecos y extrínsecos
   El silicio (Si) presenta cuatro electrones en su última capa, que en un cristal de silicio entran en enlace covalente con los de sus átomos vecinos de modo que no queda ningún electrón libre para la conducción salvo los generados térmicamente...

## Por escribir (igual existe el archivo, pero sin párrafos)

- *css.media-query.html*

- *ser-en-potencia-y-en-acto.html*

- *demanda-intrinseca-y-extrinseca.html* necesita lima y correcciones

- *aporofobia.html*

- *funciones.html*, y hablar de implícitas, analíticas...

- *funciones-analiticas.html*

- *relaciones-cualitativas-y-cuantitativas*

- *reacciones-en-cadena.html*

- *chain-reaction*

- *explosiones.html*

- *equilibrio_dinamico.html*

- *erradicar-la-pobreza.html*

- *fidelizacion-macroeconomica.html* tiende a ser demasiado politizada

- *oop.html*

- *cpp.cpp11.html* (onlye contains some links)

- *cpp.slicing.html*


### In-place Substitution

Use sed switch `--in-place`
