import {coreConcept} from "../data.js";
import Core_concepts from "../header/coreconponenet.jsx"
export default function Coreconcepts(){
return(
    <section id="core-concepts">
    <ul>
      {coreConcept.map((coreitem)=>(<Core_concepts key={coreitem.title} {...coreitem}/>))} 
    </ul>
    </section>
);
}