# Lista de recomendaciones, recordatorios y otras directrices
- teléfonos y demás en *agenda.html*, oculto
- https://docs.couchdb.org/en/stable/ (Apache CouchDB® 3.4.3 Documentation)
- https://www.rhs.org.uk/vegetables/growing-in-greenhouse

# Lista de tareas por hacer (seguida de secciones sobre procedimientos informáticos de gestión de este sitio)

[ ] see about *knowledge.html* (incomplete, poor section on Knowledge Pyramid)

[ ] escribir  *signo-simbolo-senyal.html*
[ ] enlazar a *signo-simbolo-senyal.html* desde *lengua.html*

[ ] write *c.enum.html*           (points forward to *cpp.enum-class.html* and to *symbols.html*)
[ ] write *cpp.enum-class.html*   (points back    to *c.enum.html*         and to *symbols.html*)

[ ] write *butoh.html*

[ ] complete *fruits.html*,
[x] make  *fruits.html* point to *types-of-fruits.html*
[x] write *fruit-dispersal.html* <h1>Dispersal of Fruits</h1>
[x] link to *angiosperms.html* <h1>Angiosperms: Flowering Plants</h1> from *plants.html*

[ ] complete *MapReduce.html* (already linked to from *programming.html* and *couchdb.html*, by the by)

[ ] add
<h2>Self-Contained Data</h2>
<p>An invoice contains all the pertinent information about a single transaction—the seller, the buyer, the date, and a list of the items or services sold. There&apos;s no abstract reference on this piece of paper that points to some other piece of paper with the seller&apos;s name and address. Accountants appreciate the simplicity of having everything in one place. And given the choice, programmers appreciate that, too.</p>
<p>Yet using references is exactly how we model our data in a relational database! Each invoice is stored in a table as a row that refers to other rows in other tables—one row for seller information, one for the buyer, one row for each item billed, and more rows still to describe the item details, manufacturer details, and so on and so forth.</p>
<p>This isn&apos;t meant as a detraction of the relational model, which is widely applicable and extremely useful for a number of reasons. Hopefully, though, it illustrates the point that sometimes your model may not “fit” your data in the way it occurs in the real world.</p>
<p>Let&apos;s take a look at the humble contact database to illustrate a different way of modeling data, one that more closely “fits” its real-world counterpart—a pile of business cards. Much like our invoice example, a business card contains all the important information, right there on the cardstock. We call this <dfn>self-contained</dfn> data, and it&apos;s an important concept in understanding document databases like CouchDB.</p>

[ ] write *guerrilla-gardening.html*


[ ] write *xquery.linux.html*

- https://www.reddit.com/user/benibela/ has `xidel` (https://github.com/benibela/xidel)

- `xqilla` Good question. xqilla is the best I've found that's open-source and not Java. It seems not very well-known either. Outside Java it might be the only lib with any Xpath2 support.

- You can run Saxon (XQuery) from the command line. You can do this by pointing to a file that has the XPath/XQuery using -q or you can pass the query string directly using -qs.
Here's an example of using -qs to process a simple XPath:
```
java -cp "saxon9he.jar" net.sf.saxon.Query -s:"input.xml" -qs:"/a/b[@id='x']" -o:"results.xml"
```

- Use `xmllint` with switch `--xpath` "XPath_expression" (Run an XPath expression given as argument and print the result. In case of a nodeset result, each node in the node set is serialized in full in the output. In case of an empty node set the "XPath set is empty" result will be shown and an error exit code will be returned.) Check out switch `--pattern`, too

- `eXist` (http://exist-db.org/exist/apps/homepage/index.html)

- `BaseX` (https://basex.org/)

- `galax` at https://galax.sourceforge.net/

[ ] finish *jq.html* from man page

[ ] complete section *Some Common / Rare Cases* in *grammatical-cases.html*

[x] *XSLT.html* <cite>eXtensible Stylesheet Language Transformations</cite>
[ ] review and complete section *XML Namespaces* in *xml.en.html*

[x] *conventional.CT.html* <cite><dfn>Conventional</dfn> according to Chögyam Trungpa</cite>
[x] *creating-a-drala-culture.CT.html* <cite>Creating a Drala Culture</cite>, by Chögyam Trungpa
[x] *the-four-foundations-of-mindfulness.CT.html* <cite>The Four Foundations of Mindfulness</cite> according to Chögyam Trungpa Rinpoche

[ ] move links in *computing.html*
      <div>
        <p><a href="svg.html">SVG: XML for Drawing</a></p>
        <p><a href="metapost.html">MetaPost: Drawing for PostScript</a></p>
        <p><a href="asymptote.html">Asymptote: The Vector Graphics Language</a></p>
      </div>
    somewhere else, such as
    [ ] would-be *computer-graphics.html*
    [x] *computational-geometry.html*

[ ] write section *Finno-Hungric Cases* in *grammatical-cases.html*
[ ] write section *Basque Cases* in *grammatical-cases.html*

[ ] write "open-closed-loop.html" (concerning systems)

[ ] revisar y mejorar *bases-de-datos-relacionales.html*

[x] escribir *mapas-conceptuales.html* con https://concepto.de/mapa-conceptual/

[ ] visitar https://concepto.de/concepto/

[x] escribir *teatro.html*

[ ] escribir *tradicion-convencion-transcendencia.html* o *tradi-conven-dencia.html*

[ ] escribir *projimo.html*

[x] escribir          *armas-nucleares.html*
[ ] revisar y ampliar *armas-nucleares.html*


[ ] write *agency.html*

[x] write *lisp.symbols.html* and link from *lisp.html*
[x] write *prolog.symbols.html* and link from *prolog.html*

[x] enlazar a *creatividad-y-maquinas.html* desde *creatividad.html*
[x] enlazar a *creatividad-y-maquinas.html* desde *herramientas.html*
[x] enlazar a *creatividad-y-maquinas.html* desde *ia.html*

[ ] write *heuristics.html* and link from *ai.html*

[ ] escribir *crecimiento-y-desarrollo.html*
[ ] enlazar  *crecimiento-y-desarrollo.html* con *cual-cal-cant.html*
[ ] escribir *hipercrecimiento.html*
De cosas en principio no perjudiciales.
- animales domésticos
- carreteras y vehículos privados
- leyes y normas
- licenciados
[ ] enlazar a *hipercrecimiento.html* desde *crecimiento-y-desarrollo.html*
[ ] enlazar a *hipercrecimiento.html* desde *poblacion.html*

[ ] write *mysql.json.html*

[ ] Escribir *jerarquias-de-saberes.html* sobre *Jerarquías de saberes (ciencias y técnicas)*

Solemos aceptar que todos los conocimientos y técnicas son iguales, pertenecen a la misma categoría. La principal razón es que negarlo llevaría a enfrentamientos con nuestros vecinos.

El dinero y el Derecho formal permiten tratar igual a todas las profesiones y actividades económicas por igual.

Además cada profesión y actividad profesional "lícita" argumenta su utilidad.

- Algunos ejemplos aceptados:
  - unos saberes son la base de otros: la filosofía (base de todo el conocimiento, incluída la ciencia), las matemáticas (base de las ciencias)
  - los conocimientos prácticos (los que satisfacen una necesidad) se valoran más que los teóricos



[ ] link to *how-to-make-coffee.html*

[ ] write content in *fungi.html*

[ ] enlazar a *vampiros.html* desde *autoritarismo.html*
[x] enlazar a *vampiros.html* desde *tiempo.html*
[x] escribir *vampiros.html*

[x] *mongodb.html*
[ ] run from cloud (as explained at w3schools)

[ ] escribir sobre nominalizaciones, pasivas con ser, registros etc en *lenguaje-artificioso.html*

[ ] insert into some sqlite page:
<h2>Getting Database File Information</h2>
<p>The primary means by which to obtain logical database information, such as table names, DDL statements, and so on, is using the <var>sqlite_master</var> view, which provides detailed information about all objects contained in a given database.</p>
<p>If you want information on the physical database structure, you can use a tool called SQLite Analyzer, which can be downloaded in binary form from the SQLite website( and is found in my current installation from standard reporsitories).</p>
<p>SQLite Analyzer provides detailed technical information about the on-disk structure of a SQLite database. This information includes a detailed breakdown of database, table, and index statistics for individual objects and in aggregate. It provides everything from database properties such as page size, number of tables, indexes, file size, and average page density (utilization) to detailed descriptions of individual database objects.</p>
<p>Following the report is a detailed list of definitions explaining all terms used within the report. A partial output of sqlite_analyzer is as follows:</p>
<pre>fuzzy@linux:/tmp$ sqlite3_analyzer test.db</pre>

[ ] escribir *obsolescencia.html*
- por cambio de normas (insuperable)
- programada           (insuperable)
- por moda             (  superable)
- por descatalogación  (insuperable)

[ ] escribir *politica.html* y no enlazar desde *sociedad.html* ni desde *pensamientos.html*
[ ] sino tal vez desde *queja.html*

[ ] escribir *medio-ambiente.html*

[ ] complete *plants.html#epiphytes* (a description is lacking)

[ ] develop subdivisions of geophytes (rhizome, stem-tuber, root-tuber, bulb and root geophytes) at *geophytes.html*


[x] escribir *geophytes.html*
[x] y enlazar desde *plants.html*
[ ] y desde otros

[ ] escribir *familia.html*
[x] enlazar desde *sociedad.html*
[ ] *paternalismo.html*


[x] escribir *narcisismo.html* y enlazar desde [x] *familia.html* y desde [x] *amor.html*

[ ] *hate-speech.html*


[x] enlazar a *consumismo.html* desde *economia.html*
[x] enlazar a *consumismo.html* desde *sociedad.html*
[x] enlazar a *consumismo.html* desde *recursos.html*
[?] terminar de escribir *consumismo.html*

[ ] write *inverted-tables* as a section of *special-relational-tables.html*
[ ] link to *inverted-tables.html* from *relational-database.html*

They are tables where the first column list features and might be named something like "feature", "trait", "characteristic" etc.

Conceptually "records" are realized as columns and are therefore limited, while their features are un-limited or growing.

These tables are often used for describing a comparison.

Example:

- Feature Plant Animal Fungi

What about tables that are un-limited both horizontally and vertically? The Relational Model fails to represent them...


[ ] write *tabular.html* and [ ] link from *knowledge-representation.html*


[ ] write *adventitious-roots.html* and link from [ ] *taproot.html*, [ ] *plants.html*, and [ ] elsewhere

## Único, útil y adelantado
[x] escribir *unico-y-util.html*
[x] y enlazar desde *creatividad.html* y
[x] desde *tecnologia.html*


[ ] write *beneficial-weeds.html* and link from
[x] *permaculture.html*,
[x] *how-to-grow.html* and
[ ] elsewhere
(https://en.wikipedia.org/wiki/List_of_beneficial_weeds)

[ ] write *pseudo-cereals.html*

[ ] write *camphor.html*,  then link from [ ] *how-to-grow.html* and [ ] elsewhere
[ ] write *rosemary.html*, then link from [ ] *how-to-grow.html* and [ ] elsewhere

[ ] change, edit *reed-beds.html*

[ ] escribir *falacia.html* y enlazar desde *razon.html*

[x] escribir y enlazar *urbano.html*
[x] escribir y enlazar *las-4-habs.html*


[ ] Escribir *vivir.html* y trasladar a un elemento nav varios enlaces (desde *pensamientos.html*)

[ ] write *c.string.html* and link to it from *cpp.strings.html* at id="c-string"

[ ] write *cpp.range.html*

[ ] So it's the old 80-20 rule (also called the law of diminishing returns)? 80% of the coverage is handled by 20% of the effort.

[ ] see to *morphology.html*

https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_word_level_analysis.htm

https://web.stanford.edu/~jurafsky/slp3/old_dec21/ ()


[ ] escribir  *coche-electrico.html*
[ ] enlazar a *coche-electrico.html* desde *falsabilidad-ampliada.html#coche*

[ ] *morph-through-regexp.html* Morphology by dint of Regular Expressions

[ ] In *cpp.regexp.html* | "Different Regular Expression Grammars", finish writing section with id=basic (besides ECMAScript)
[ ] In *cpp.regexp.html* | "Different Regular Expression Grammars", finish writing section with id=extended (besides ECMAScript)
[ ] In *cpp.regexp.html* | "Different Regular Expression Grammars", finish writing section with id=awk (besides ECMAScript)
[ ] In *cpp.regexp.html* | "Different Regular Expression Grammars", finish writing section with id=grep (besides ECMAScript)
[ ] In *cpp.regexp.html* | "Different Regular Expression Grammars", finish writing section with id=egrep (besides ECMAScript)

[ ] write *muzak.html*
[ ] escribir *hilo-musical.html*

[ ] write *occams-razor.html*
[ ] escribir *navaja-de-occam.html*

[ ] terminar de escribir *falsabilidad-ampliada.html*
    añadiendo elementos dd (definition data)
[x] Enlazar a *falsabilidad-ampliada.html* desde *pensamientos.html*
[ ] Enlazar a *falsabilidad-ampliada.html* desde otros

[ ] write *lynx.html*, a Text-Mode Browser
[ ] link to *lynx.html* from *linux.html*, *HTML.html*,
[ ] link to *lynx.html* from *informatica.html*, *proceso-de-escribir.html*,

[x] write *phoneme-map.html*:


[x] link to *phoneme-map.html* from *linguistics.html*
[x] link to *phoneme-map.html* from *computing.html*
[x] link to *phoneme-map.html* from *regexp.html* etc.


[x] write *cpp.string_view.html*, already linked to from *cpp.span.html* and *cpp.strings.html*

[ ] write *c.decay.html*
When you invoke a function taking a C-array, <dfn>decay</dfn> occurs. The function takes the C- array via a pointer to its first element. The C-array to pointer conversion is error-prone because length information of the C-array is lost.

[x] link to *c.decay.html* from *c.html*

[x] link to *c.decay.html* from *cpp.span.html*


[ ] write *unicode.html*, and
[ ] provide a list of useful unicode characters, possibly therein
[ ] provide a model DOCTYPE section like:

```
!DOCTYPE book SYSTEM "/home/francisco/Documents/mis_escritos/precious/xml/DocBook/docbook.dtd" [
  <!ENTITY nbsp  "&#160;">
  ...

]>
```
possibly borrowed from *cyclopaedia.xml*, mmm?

Añadir nuevas oposiciones
[ ] empírico y teórico
[ ] figurativo y abstracto
[ ] restricción y expansión

[ ] Elaborar la teoría de textos opción o textos bifurcación...

[ ] escribir *merito.html* y enlazar (desde *arte.html* y *trabajo.html*)

[ ] escribir sección sobre mimo en *arte.html*

[ ] escribir *protocolos.html* y enlazar desde *trabajo.html* y *tipos-de-empleo.html*

[ ] escribir *algoritmos.html* y enlazar desde *programacion.html*

[ ] escribir *robots.es.html* y enlazar desde *ecs.html*, *trabajo.html*, *tipos-de-empleo.html* etc.

[ ] escribir *topologia-y-grafo.html*, sobre cómo conservando la topología o relaciones de adyacencia se generan apariencias diferentes
[ ] La topología matemática no asigna ni escalar (cantidad) ni cualidad a las relaciones de adyacencia. ¿Primitiva?
[ ] relacionar esto con la escritura

[ ] escribir *coste-de-transaccion.html*
[ ] write *transaction-cost.html*

[ ] develop *biodynamics.html*

[ ] write *svg.styling.html*

[x] *wetiko.es.html* desde *religion.html* y a *jung.html*
[ ] *wetiko.es.html* debería apuntar a un futuro *jung.es.html* todavía por redactar


[ ] *rdbms-comp-syntax.html* (Data Base Management Systems: Comparative Syntax)
     as tables for SQLite, MySQL, PostgreSQL
     for:
- `CREATE SCHEMA/DATABASE`
- `CREATE TABLE`
- `UPDATE TABLE`

[ ] negociar - escuchar - cumplir (*nec.html*), desde *capitalismo.html*

[ ] *fe-es-ca.html*
- podríamos empezar negando la fe,
- o podríamos partir de la caridad, continuar por la esperanza, y concluír en la fé
- según el orden, así negamos o afirmamos

[ ] *masa-individuo.html*
[x] relacionar con la empatía (*empatia.html*)
[ ] aclarar relación con *rebelion-de-las-masas.html*
[ ] añadir cuarto término, digital, en particular *ia.html*
[x] enlazar desde *dicotomia.html*
[ ] salida: minifundio

[ ] *tiempo-ordenador.html*: Papel, pantalla, ordenador
- Tricotomías o dicotomías
- internet time = tiempo internet/ordenador frente a tiempo analógico
- libro de papel, lector, leer de ordenador
- el ordenador aporta eficiencia, al tiempo que el tiempo se nos escurre entre las manos frente a él. Tiempo pasado tiempo no vivido.
[ ] enlazar con *tiempo.html* y con *ordenador.html*

[ ] Tiempo y Ahora


[ ] Teilhard de Charden
- Las Tres Intervenciones de Dios
  y el joven conservador (bordón defensivo, hábito, comunidad, anti-Francisco etc.)
- La Navaja de Occam


[ ] La Navaja de Occam


[ ] What is an `explicit constexpr` constructor in C++? As in
```
explicit constexpr Frequency(unsigned int h) : hertz(h) {};
```

[ ] dentro de *religion.html*, hablar de la heredabilidad (de la religión) de padres a hijos y de la correlación

[ ] write and link to *svg.styling.html*

[ ] write *psa.html* for Prostate-Specific Antigen
    Prostate-specific antigen, or PSA, is a protein produced by normal, as well as malignant, cells of the prostate gland. The PSA test measures the level of PSA in the blood. For this test, a blood sample is sent to a laboratory for analysis.

[ ] escribir *fija.html* (limpia, fija y da esplendor), enlazada desde *lengua.html* y *anglicismos.html*

[ ] *health.html* should point to would-be *cyborg.html* (it already points to *implants.html*),
    and *cyborg.html* to *implants.html*

[ ] *imagined-communities.html*

[ ] ¿Podemos derivar una ética de la razón? Idea o concepto de "valor"

[ ] En *salud.html*: que la medicina moderna no atribuye las enfermedades a causas tales como
    el modo de vida y estados mentales
    sino más bien a la genética y a la edad.

[ ] continue writing *implants.html*, on Medical Implants, and
[ ] develop section/page "Neural Implants", currently *implants.html#neural*

[ ] write *emergence.html* on emergent properties

[ ] write *data-center.html*

[ ] write *platform-capitalism.html*

[ ] hablar sobre la somalí que se convirtió al cristianismo

[ ] escribir *traduccion.html*, enlazar desde *lengua.html* y apuntar a *interconectados.html*, inter alia

[ ] Makefile rule for generating FILE.mp3 from FILE.ssml
```
%.mp3: %.ssml
  espeak  -m -s 144 -ves -f %.ssml -w %.wav
  ffmpeg -i %.wav -acodec mp3 %.mp3
```

[ ] *contenido-y-referencia.html*

[ ] *ecoaldeas.con-cartas.html* está desenlazada o desconectada, pero contiene datos personales

[ ] write *vocoder.html* and link from *audio-sequencers.html*, or just restructure *audio-sequencers.html* into sections and add a top level one named "Vocoders"

[ ] write *espeak-mbrola.html* from local file */usr/share/doc/espeak/docs/mbrola.html*

[ ] move stuff about espeak into *espeak.html* and duly link, also link to *espeak-tags.html*

[ ] *digital.html* (en)

[ ] redactar y enlazar *alfabeto.html*

[ ] redactar y enlazar *ssml.html*

[ ] redactar *correlaciones.html* y enlazar desde *opuestos.html*, entre otros

[ ] redactar *individualismo.html* (sacándolo de cyclopaedia.xml#individualismo), actualmente sólo desde *ecoaldeas.html* y *sociedad.html*

[ ] relacionar *individualismo.html* con *interdependencia.html* a lo Karmapa

[ ] escribir y enlazar a *alternativo.html* (sacándolo de cyclopaedia.xml#individualismo), actualmente sólo desde *ecoaldeas.html*


[ ] enlazar desde *prolog.es.html* a *kokoro-alt.html#prolog* y viceversa

[ ] write into *cpp.type_traits.html*

[ ] *jung.four-functions-of-consciousness.html*

[x] rewrite *cpp.generics.concepts.html* to make it simpler.

List/recomend code like:
```
#include <concepts>
template<class CONT>
concept IndexAddressable = requires(CONT cont, const CONT ccont, std::size_t i)
{
  { cont[i]}     -> std::convertible_to<typename CONT::      reference>;
  {ccont[i]}     -> std::convertible_to<typename CONT::const_reference>;
};
```
Note:
- curly braces around expression
- arrow operator (->)
- `requires` clause: `requires(PARAMS) {CONSTRAINTS}`
- etc.

Then write a template class or function like:
```
template <typename F = double,
          IndexAddressable CONTAINER=std::vector<F> >
class MyContainer {
};
```

[ ] *c-and-cpp.html*

[ ] Unify *cpp.in-class-initializers.html* and *cpp.member-initializers.html*: they say much the same

[ ] Add content to largely empty *c99.html* and *c11.html*

[ ] write a bool section (in would-be *cpp.data-types.html*)
    - In C++ the boolean data type has no default value and contains garbage value (only in case of global variables, it will have default value as false).
    - an integer of value different from 0 matches `true`
    - to print boolean values as true or false insert `std::boolalpha`
    - you can set a starting value for each bool variable in a class or structure like this:
    ```
class Cpp11 {
  string s = "default";
  int i = 1;
  ...
    ```

[ ] añadir clase *arte* en hoja de estilo

[ ] link to "audio-sequencers.html"

[ ] write *work.html* and link to *specialization.html*, *rise-of-useless-class.html*, would-be *ai.html*

[ ] review *rise-of-useless-class.html*, already linked to from *society.html* and *population.html*
[ ] link *rise-of-useless-class.html* to would-be *art.html*

[ ] write *xml.xmllint.html* and link to it from *xml.html*, *xml.xinclude.html*, and either *linux.html* or would-be *linux.utils.html*
[ ] *linux.utils.html* and link to *xml.xmllint.html*

[ ] write *xml.entity.html*
[ ] include HTML-only entities such as &nbsp; and &mdash; and explain that `xmllint --html` does not acknowledge them

[ ] escribir *entropia.html* y relacionar con *orden.html*
[ ] write    *enthropy.html*

[ ] finish *regexp.html* (regular expressions)

[ ] further elaborate and link to *narratives.html*

[ ] write *symbols.html* and link from *thought.html*

[x] write *splines.html*, set its class and link from *computational-geometry.html*

[x] write *maths.html* and link to *splines.html*

[ ] write Mihaly Csikszentmihalyi *creativity_MCsikszentmihalyi.html* (MihalyCsikszentmihalyi_CreativityFlowAndThePsychologyOfDiscoveryAndInvention)

[ ] escribir *cerillera.html*, copiado de grafo_de_HTML.xml#eden.reconocer.cerillera

[ ] cambiar *intencion.y-eficacia.html* a *intencion-y-eficacia.html* (guión no punto)

[ ] escribir *sufrimiento-e-indignidad.html* y enlazar desde *religion.html*

[ ] enlazar *cristianismo.html*

[ ] rellenar *falacia.html*

[x] *dilema.html*

[x] referencia mutua entre *dilema.html* y *dicotomia.html*

[x] *subreinos-naturaleza.html*

[ ] *empirico-teorico.html*, desde *opuestos.html*

[ ] enlazar a *dicotomia.html*, desde *pensamientos.html*


[ ] *dichotomy.html*, desde *thought.html*

[ ] *dropbox.html*, linked to from *networking.html*

[ ] reguetón, memes, videojuegos ...

[ ] *interpretacion-e.html* R *traduccion.html* *neospanglish.html*

[ ] *funcionariado.html*, con vínculos desde *estado.html*

[ ] *estado.html*, con vínculos desde *sociedad.html*

[x] *sacrificio.html*

[x] escribir *esfuerzo-resultado.html*, a donde se apuntará desde *recursos.html*, ¿*salud.html*?

[ ] redactar/importar *tres-esferas.html* y enlazar desde *sociedad.html* inter alia

[ ] continuar *sectores.html*: hablar de administración-producción-especulación y de pirámides de necesidades (

[ ] link to would-be *thymus.html* from *zoology.html*, *health.html*

[ ] link to would-be *lymph.html* from *zoology.html*, *animal-ĥistology.html* etc.

[ ] finish *sqlite.sql.html* after *Transaction Types*

[ ] escribir *cual-int-cant-float.html* y enlazar desde *cual-cal-cant.html*, *espacios-y-grafos.html* (anota un arco) etc
    quality is an integer, quality is a float
[ ] escribir explicando *gestalt.html*

[ ] escribir *sin-naturaleza.html* y enlazar desde *naturaleza.html*. En él habría programas de entretenimiento (series, policíacas, etc), deporte, ciencia, matemáticas, literatura, informática

[ ] escribir *trigo-sarraceno.html* y enlazar desde *agricultura.html*

[ ] escribir *productividad-protagonismo-imprescindibilidad.html*

[ ] añadir: requisitos de la herramienta: normalizada, generalizada, abaratada (por economía de escala), sencilla de manejar, y útil

[ ] write *farming.moon.html* on the influence of the Moon and other heavenly bodies

[ ] escribir/write *piaget.html* sobre/about Jean J. Piaget

[ ] write/include  *jmuir.html*   sobre/about John Muir

[ ] escribir *espirulina.html* y enlazar desde *salud.html* etc

[ ] escribir y enlazar *tres-esferas.html*

[ ] escribir *dogma-separacion.html* y enlazar desde *salud.html*, *pensamientos.html* etc

[ ] relacionar *dogma-separacion.html* con monofuncionalidad

[ ] cambiar nombre de y vínculos a *chinpances-dialogo-filosofico.html*, que debería llamarse *chimpances-dialogo-filosofico.html*, con m no con n

[ ] recuerda que el subgrafo sobre sistemas está por pulir

[ ] escribir *git.html* y enlazar desde *libro-grafo.html*

[ ] añadir: Un tipo por desgracia frecuente de clasificabilidad es el de la cualidad de ser copia, o <dfn>fidedignidad</dfn>. Determinado público valora un dibujo o una pintura en la medida en que calca la realidad, por ejemplo una cara o un animal. Algo análogo ocurre con la música, muchos prefieren que lo tocado reproduzca fielmente determinada grabación

[ ] Redactar *the-best-in-the-world.html*

[ ] Redactar *orden-de-palabras.html*: dictado por la sintaxis o por la semántica

[ ] Redactar *empatia.html* y enlazar desde *recursos.html* y desde *opuestos.html* (recurso frente a empatía)

[ ] Further link *specialization.html*, already linked to from *society.html*

[ ] enlazar: *allan-savory.html"

[ ] enlazar: *mono-atrapado.html" (actualmente sólo desde *religion.html*)

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

[x] enlazar *libertad.html* desde *politica.html*
[ ] enlazar *libertad.html* desde *orden.html*


[ ] *mapas-conceptuales.html*, desde *conceptos.html*

[x] *conceptos.html*, desde *pensamientos.html*
[ ] *conceptos.html*, desde *logica.html*
[ ] *conceptos.html*, desde *razon.html*

[x] *lankavatarasutra.revulsion.html* from *buddhism.html*

[x] *catarsis.es.html*, desde *religion.html*
[ ] *catarsis.es.html*, desde ???
[ ] *catarsis.es.html*, desde ???

[ ] *invasion-de-ucrania.html*

[ ] *politica.html*, desde *pensamientos.html*
[x] *anarquismo.html*, desde *politica.html*
[ ] *anarquismo.html*, desde *?.html*

[x] *linkage-and-scope.html*, from *programming.html*
[x] *linkage-and-scope.html*, from *c.html*
[x] *linkage-and-scope.html*, from *cpp.html*

[ ] *memoria.html*

[ ] *knowledge-and-intelligence.html* from *knowledge-representation.html*

[x] *couchdb.html* from *json.html*
[ ] *couchdb.html* from *nosql.html*
[ ] *couchdb.html* from *mongodb.html*

[ ] *mongodb.atlas.html*

[ ] *potencias-del-alma.html*, después de escribir, vide "<para>MEMORIA, ENTENDIMIENTO y VOLUNTAD, son [...] </para>" en cyclopaedia.xml
[ ] *memoria.html*, después de escribir

[ ] *chelation.html*
[ ] *ferric-EDTA.html*, related to chelates
[x] *chlorosis.html* from *blight.html*
[ ] *chlorosis.html* from *plants.html*

[x] *agenda.html* (no enlazar)

[x] *okra.es.html* desde *agricultura.html*

[x] *taproot.html*, from *biology.html*
[ ] *taproot.html*, from elsewhere

[x] *libros-censurados.html* desde *literatura.html*
[ ] *libros-censurados.html* desde otras páginas

[x] *linguistics.classifier.html*

[x] to *linux.swap.html*, from *linux.html*
[ ] to *linux.swap.html*, from *os.html*

link to *tansy.html*,
[x] from *how-to-grow.html*
[ ] from elsewhere: ...
[ ] from elsewhere: ...
[ ] from elsewhere: ...

[x] link to *reed-beds.html* from *permaculture.html*
[ ] link to *reed-beds.html* from elsewhere


*cpp.regexp.html* from:
[x] *regexp.html*,
[x] *cpp.strings.html*, and
[x] *cpp.stl.html*

[x] *sqlite.vacuum.html* from *sqlite.sqlite3.html*, *sqlite.dump.html* etc.

[ ] *trabajo.html*, desde *pensamientos.html*

[ ] *gig-economy.html*, from *society.html*

[ ] *example2.sable*, *example1.sable* and any other DOCTYPE SABLE file should be linked to from festival pages

[x] *kokoro-alt.html*, desde *religion.html* y desde *arrepentimiento.html*

[ ] *musica.voyage.html*

[ ] *matrix.html*

[ ] *biophilia.html*, to be linked to from *biology.html*, would-be *ecology.html*

[ ] *tres-esferas.html* (del elemento con xml::id="tres_esferas" en grafo_de_HTML.xml)

[ ] *Year-of-No-Garbage_Eve-O-Schaub.html*: link and classify as nature (for example: class="nature")

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
