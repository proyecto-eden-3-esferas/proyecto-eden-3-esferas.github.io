# Lista de tareas por hacer (seguida de secciones sobre procedimientos informáticos de gestión de este sitio)

[x] Actualmente

[x] Añadir atributo lang="es" en body

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


## Por escribir (igual existe el archivo, pero sin párrafos)

- *aporofobia.html*

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
