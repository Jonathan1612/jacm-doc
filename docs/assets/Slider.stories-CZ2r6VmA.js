import{a as s}from"./Tooltip-Dt7zZX-t.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const c={title:"Components/Slider",component:s,tags:["autodocs"],argTypes:{min:{control:{type:"number"},description:"Minimum value of the slider.",defaultValue:0},max:{control:{type:"number"},description:"Maximum value of the slider.",defaultValue:100},step:{control:{type:"number"},description:"Step size between slider values.",defaultValue:1},initialValue:{control:{type:"number"},description:"Initial value of the slider.",defaultValue:50},variant:{control:{type:"inline-radio"},options:["primary","secondary","normal"],description:"Determines the visual style of the slider.",defaultValue:"primary"},size:{control:{type:"inline-radio"},options:["small","medium","large"],description:"Determines the size of the slider.",defaultValue:"medium"},className:{control:"text",description:"Additional class names for styling."},style:{control:"object",description:"Inline styles for the slider container."},onChange:{action:"onChange",description:"Callback function when the slider value changes."}},parameters:{docs:{description:{component:"The Slider component allows users to select a numeric value from a range using a draggable slider handle. It supports customizable styles, sizes, and provides callbacks for value changes."}},layout:"centered"}},e={args:{min:0,max:100,step:1,initialValue:50,variant:"primary",size:"medium"}};var t,i,a,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    initialValue: 50,
    variant: "primary",
    size: "medium"
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source},description:{story:`📸 **Default Slider**\r

A basic Slider with default settings.`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.description}}};const m=["Basic"];export{e as Basic,m as __namedExportsOrder,c as default};
