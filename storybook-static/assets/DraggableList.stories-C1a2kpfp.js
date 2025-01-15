import{D as l}from"./Tooltip-Dt7zZX-t.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const u={title:"Components/DraggableList",component:l,tags:["autodocs"],argTypes:{title:{control:"text",description:"List title"},items:{control:"object",description:"The list of items to display in the draggable list.",defaultValue:[{id:1,content:"Item 1"},{id:2,content:"Item 2"},{id:3,content:"Item 3"}]},onItemsChange:{action:"onItemsChange",description:"Callback function when the order of items changes."},className:{control:"text",description:"Additional custom class names for the list container."},style:{control:"object",description:"Inline styles for the list container."}},parameters:{docs:{description:{component:"The DraggableList component allows users to reorder a list of items via drag-and-drop interactions. It supports customizable styles and provides callbacks for item order changes."}},layout:"centered"}},t={args:{title:"Lista",items:[{id:1,content:"Item 1"},{id:2,content:"Item 2"},{id:3,content:"Item 3"}]}},e={args:{title:"Lista",items:[{id:1,content:"Item 1"},{id:2,content:"Item 2"},{id:3,content:"Item 3"}],style:{backgroundColor:"#f9f9f9",border:"1px solid #ddd",padding:"10px"},className:"custom-draggable-list"}};var s,o,a,i,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Lista',
    items: [{
      id: 1,
      content: "Item 1"
    }, {
      id: 2,
      content: "Item 2"
    }, {
      id: 3,
      content: "Item 3"
    }]
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source},description:{story:`📸 **Default Draggable List**\r

A simple draggable list with three default items.`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.description}}};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Lista',
    items: [{
      id: 1,
      content: "Item 1"
    }, {
      id: 2,
      content: "Item 2"
    }, {
      id: 3,
      content: "Item 3"
    }],
    style: {
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      padding: "10px"
    },
    className: "custom-draggable-list"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const I=["Basic","CustomStyled"];export{t as Basic,e as CustomStyled,I as __namedExportsOrder,u as default};
