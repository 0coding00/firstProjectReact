import ButtonNode from "./examples.jsx"
import { EXM } from "../data.js";
import { useState } from "react";
import Section from "./section.jsx";
import Tap from "./taps.jsx";
export default function Examples(){
const [selectedTopic,setSelectedTopic]= useState();
function handleSelect(selectedButton){
 setSelectedTopic(selectedButton);
}
let tabcontent=<p>Please select a topic</p>;
if(selectedTopic){
  tabcontent=<div id="tab-content">
<h3>{EXM[selectedTopic].title}</h3>
<p>{EXM[selectedTopic].description}</p>
<pre>{EXM[selectedTopic].code}</pre>
</div>
}
return(
    <Section id="examples" title="Examples" className="cn">
      <Tap
      buttons={  
        <>
          <ButtonNode 
  isSelected={selectedTopic=== 'components'}
  onClick={()=> handleSelect("components")}>Component
  </ButtonNode>
  <ButtonNode 
  isSelected={selectedTopic=== 'jsx'}
  onClick={()=> handleSelect("jsx")}> JSX
  </ButtonNode>
  <ButtonNode
    isSelected={selectedTopic=== 'props'}
    onClick={()=> handleSelect("props")}>Props
    </ButtonNode>
  <ButtonNode 
      isSelected={selectedTopic=== 'state'}
      onClick={()=> handleSelect("state")}>State
      </ButtonNode>
      </>
      }>
    {tabcontent}
      </Tap>
  </Section>
  );}