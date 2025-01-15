import{S as A}from"./Tooltip-Dt7zZX-t.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const D={title:"Components/Select",component:A,tags:["autodocs"],argTypes:{options:{control:"object",description:"List of selectable options in the dropdown.",defaultValue:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}]},placeholder:{control:"text",description:"Placeholder text displayed when no option is selected.",defaultValue:"Select an option"},variant:{control:{type:"inline-radio"},options:["primary","secondary","normal"],description:"Determines the visual style of the select component.",defaultValue:"primary"},size:{control:{type:"inline-radio"},options:["small","medium","large"],description:"Determines the size of the select component.",defaultValue:"small"},className:{control:"text",description:"Additional class names for styling."},style:{control:"object",description:"Inline styles for the select component."},onChange:{action:"onChange",description:"Callback function when an option is selected."}},parameters:{docs:{description:{component:"The Select component allows users to choose one option from a dropdown list. It supports customizable styles, sizes, placeholders, and callback functions for selection changes."}},layout:"centered"}},e={args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],placeholder:"Choose an option",variant:"primary",size:"medium"}},o={args:{options:[{label:"Option A",value:"A"},{label:"Option B",value:"B"},{label:"Option C",value:"C"}],placeholder:"Select an option",variant:"secondary",size:"large"}},n={args:{options:[{label:"Custom 1",value:"1"},{label:"Custom 2",value:"2"}],placeholder:"Custom Styled Select",variant:"normal",size:"small",style:{backgroundColor:"#f0f8ff",border:"1px solid #ccc"},className:"custom-select-class"}},a={args:{options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],placeholder:"Pick a color",variant:"primary",size:"medium",onChange:w=>console.log("Selected value:",w)}};var t,l,s,r,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      value: "1"
    }, {
      label: "Option 2",
      value: "2"
    }, {
      label: "Option 3",
      value: "3"
    }],
    placeholder: "Choose an option",
    variant: "primary",
    size: "medium"
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source},description:{story:`📸 **Default Select**\r

A default Select component with basic settings.`,...(c=(r=e.parameters)==null?void 0:r.docs)==null?void 0:c.description}}};var i,p,d,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option A",
      value: "A"
    }, {
      label: "Option B",
      value: "B"
    }, {
      label: "Option C",
      value: "C"
    }],
    placeholder: "Select an option",
    variant: "secondary",
    size: "large"
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:`📸 **Select with Secondary Variant**\r

A Select component with a secondary style variant.`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var v,b,h,y,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Custom 1",
      value: "1"
    }, {
      label: "Custom 2",
      value: "2"
    }],
    placeholder: "Custom Styled Select",
    variant: "normal",
    size: "small",
    style: {
      backgroundColor: "#f0f8ff",
      border: "1px solid #ccc"
    },
    className: "custom-select-class"
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:`📸 **Custom Styled Select**\r

A Select component with custom styles applied.`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};var S,f,C,O,z;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Red",
      value: "red"
    }, {
      label: "Blue",
      value: "blue"
    }, {
      label: "Green",
      value: "green"
    }],
    placeholder: "Pick a color",
    variant: "primary",
    size: "medium",
    onChange: (value: string) => console.log("Selected value:", value)
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source},description:{story:`📸 **Interactive Select with onChange**\r

A Select component that logs the selected option.`,...(z=(O=a.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};const I=["Default","Secondary","CustomStyled","Interactive"];export{n as CustomStyled,e as Default,a as Interactive,o as Secondary,I as __namedExportsOrder,D as default};
