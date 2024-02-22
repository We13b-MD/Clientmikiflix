
export function adjustgridForChrome() {
   const isChrome = /Chrome/.test(navigator.userAgent);
   const isEdge = /Edg/.test(navigator.userAgent);
   
   if (isChrome || !isEdge) {
      return { marginLeft: '-900px' };
   }
   
   return {}; // Return empty object if not Chrome or Edge
}



