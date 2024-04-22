/*
[x] <script src="myscripts.js"></script>
[ ] BUG: OBJ1.setNext(OBJ2) does not work unless OBJ2 itself has a successor
         Just keep pressing "Adelante" (=next)
*/

class Link {
  constructor(obj, q) {
    this.to = obj;  // [a reference to] an object
    this.quest = q; // some plain text to show (typically a question)
  }
  add_as(tag, parent) {
    let elem = document.createElement(tag);
    elem.setAttribute("tabindex", "0");
    parent.append(elem);
    elem.innerHTML = this.quest;
    return elem;
  }
}

// tabindex_offset = number of preceding elements with a positive 'tabindex'
let tabindex_offset = 2;

class TextNode {
  constructor(txt,ttl="", nxt=this) {
    this.text =txt;
    this.title=ttl;
    this.setNext(nxt);
    this.links = new Array(); // an array of Link's
  }
  //static visited = new Set();
  get_next () {
    if(this.next != this)
      return this.next;
    else {
      if(this.links.length > 0)
        return this.links[0].to;
      else
        return this;
    }
  } // get_next()
  setNext(obj) {this.next = obj; return this;}
  cycle_links() { // place first link in 'links' at back of 'links'
    if(this.links.length > 1)
      this.links.push(this.links.shift());

  }
  addLink(obj, qstn) {this.links.push(new Link(obj,qstn)); return this;}
  setFooter(idstring="footer") {
    let footer = document.getElementById(idstring);
    footer.innerHTML="";
    this.links.forEach( (val,idx, arr) => {
      let n = idx + tabindex_offset;
      let e = val.add_as("p",footer);
      e.style.border = "dotted";
      e.setAttribute("tabindex", n.toString());
      e.addEventListener('click', function() {forth(val.to)});
    });
  }
  prepend_last_link() { this.links.unshift(this.links.pop()); }
  append_first_link() { // move the first link to the back of 'links'
    this.links.push(this.links[0]);
    this.links.shift();
  }
  write_title(el=headerh) {el.innerHTML=this.title;}
  write_text( el=main)   {el.innerHTML=this.text;}
  write_links(el=footer) {this.setFooter();}
  effect() {
    headerh.innerHTML=this.title;
    main.innerHTML = this.text;
    this.setFooter();
  };
  effect_nth_on_node(nth) {node.links[nth].to.effect();}
} // class TextNode


let next;
let curr;
let hry  = new Array();

/* The visited interface:
 * I have settled for a global 'visited' Set variable
 * and add a node whenever NextPoint.effect() is called,
 * currently through a line of code in the body of global forth(node):
 *   visited.add(node);
 */
let visited = new Set();
/* Alternatively, we might have defined a static TextNode member:
 *   static visited = new Set();
 * and add a line in the body of TextNode.effect(node) like
 *   TextNode.visited.add(node)
 * and a static method:
 *   static been_visited(n) {return TextNode.visited.has(n);}
 */

function forth(node=next) {
  if(node.get_next() != node) {
    node.effect();
    hry.push(curr);
    curr = node;
    next   = node.get_next();
    visited.add(node);
  }
};
function back() {
  if(hry.length > 0) {
    next = curr;
    curr = hry.pop();
    curr.effect();
  }
}
function effect_nth_on_node(nth, nd=next) {effect(nd.links[nth].to);}
