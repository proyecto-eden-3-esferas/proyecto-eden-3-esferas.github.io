# Lista de tareas por hacer (seguida de secciones sobre procedimientos informáticos de gestión de este sitio)

[x] Actualmente

[x] Añadir atributo lang="es" en body

```
sed --in-place 's/^(\s*)<body>/\1<body lang="es">/g' *.html
```
[ ] dividir "TheFourInmmeasurables.html" en archivos o en secciones

[ ] decidirnos por una hoja de estilo o por cómo nombrarla, teniendo en cuenta que se pueden incorporar una jerarquía de páginas ya enlazadas de "../zettelkasten_from_HTML/records/" que hacen uso de "stylesheet.css". Las opciones son:

1. Que las páginas en castellano referencien su propia hoja de estilo, o

2. Que el estilo venga dado por el atributo `lang`

(Me decanto por la primera opción. ¿Qué tal *stylesheet.es.css*? No obstante insisto en marcar el elemento `body` con atributos `lang` (`lang="es"`, por ejemplo) y `class` (`class="religion`, por ejemplo)


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


## Añadir enlace a hoja de estilo (cuando no lleva ninguno)

Páginas:

- *chamanismo.html*

- *transhumanismo.html*


### In-place Substitution

Use sed switch `--in-place`
