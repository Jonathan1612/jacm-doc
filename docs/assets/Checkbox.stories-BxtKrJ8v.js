import{C as v}from"./Tooltip-Dt7zZX-t.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const R={title:"Components/Checkbox",component:v,tags:["autodocs"],argTypes:{variant:{control:{type:"inline-radio"},options:["primary","secondary","normal"],description:"Defines the visual style of the checkbox.",defaultValue:"primary"},size:{control:{type:"inline-radio"},options:["small","medium","large"],description:"Defines the size of the checkbox.",defaultValue:"medium"},nameLeft:{control:"text",description:"Label displayed on the left side of the checkbox."},nameRight:{control:"text",description:"Label displayed on the right side of the checkbox."},initialChecked:{control:"boolean",description:"Determines if the checkbox is initially checked.",defaultValue:!1},className:{control:"text",description:"Additional custom class names."},style:{control:"object",description:"Inline styles for the checkbox."},onChange:{action:"onChange",description:"Callback when the checkbox state changes."}},parameters:{docs:{description:{component:"The Checkbox component allows users to toggle between checked and unchecked states, with customizable styles, sizes, and optional labels."}},layout:"centered"}},e={args:{variant:"primary",size:"medium",nameRight:"Primary Checkbox",initialChecked:!1}},a={args:{variant:"secondary",size:"large",nameLeft:"Secondary Checkbox",initialChecked:!0}},s={args:{variant:"normal",size:"medium",nameLeft:"Accept Terms",nameRight:"and Conditions",initialChecked:!1}},t={args:{variant:"primary",size:"small",initialChecked:!0,nameRight:"Custom Checkbox",style:{border:"2px solid #4CAF50",padding:"5px"},className:"custom-checkbox-class"}};var o,r,n,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    nameRight: "Primary Checkbox",
    initialChecked: false
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source},description:{story:`📸 **Primary Checkbox**\r

A checkbox with primary styling.`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};var d,l,m,p,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "large",
    nameLeft: "Secondary Checkbox",
    initialChecked: true
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:`📸 **Secondary Checkbox**\r

A checkbox with secondary styling.`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var u,y,b,k,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "normal",
    size: "medium",
    nameLeft: "Accept Terms",
    nameRight: "and Conditions",
    initialChecked: false
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:`📸 **Checkbox with Labels**\r

A checkbox with labels on both sides.`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};var x,g,f,z,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "small",
    initialChecked: true,
    nameRight: "Custom Checkbox",
    style: {
      border: "2px solid #4CAF50",
      padding: "5px"
    },
    className: "custom-checkbox-class"
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:`📸 **Custom Styled Checkbox**\r

A checkbox with custom inline styles and additional class names.`,...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};const N=["Primary","Secondary","Normal","CustomStyled"];export{t as CustomStyled,s as Normal,e as Primary,a as Secondary,N as __namedExportsOrder,R as default};
