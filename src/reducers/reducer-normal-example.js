
/*
Reducer corresponds with action-normal-example.js
*/

export default function(action) {
   if (action == undefined) return  { message: "what"}
   switch (action.type) {
      case "NORMAL_EXAMPLE": {
         return { message: "Button has been pressed :)" };
         break;
      }
      default: {
         return { message: "Button has NOT been pressed :(" }
      }
   }
}
