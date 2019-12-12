

function createTable() {
 
   const rowEl = document.getElementById('row');
   const colEl = document.getElementById('col');

   const rowValue = parseInt(rowEl.value);
   const colValue = parseInt(colEl.value);

   if( !rowValue && !colValue && rowValue < 20  && colValue < 20) return;
   
   const tableEl = document.getElementById('table-content');
   
   //Clear tables on second add

   if(tableEl.childNodes.length > 0 )  resetForm([tableEl]);

   const borderEl = document.getElementById('border');

   appendBorder( tableEl , borderEl.checked );

   makeTable(rowValue, colValue, tableEl);

   resetForm([ rowEl, colEl, borderEl ]  );
   
};

function appendBorder(el , isWithBorder) {
    if(isWithBorder)  el.setAttribute('border', '1')
}


function makeTable( row, col, tableEl ) {
   
    // Append Nodes
     for (let index = 0; index < row; index++) {
           let trEl = document.createElement('tr');

           for (let j = 0; j < col; j++) {
                let tdEl = document.createElement('td');
                     
                let innerHtml = document.createTextNode(`Example Cell (${ index },${j} )`)

                tdEl.appendChild(innerHtml);

                trEl.appendChild(tdEl);
           }
           
           tableEl.appendChild(trEl);
       
     }
};


function resetForm( els ) {
   
   if( !Array.isArray(els) && !els.length) return;

   els.map( el => {

          if( el.nodeName === 'INPUT' && el.type === 'text' && el.value ) {
               el.value = '';
          } 
          
          else if ( el.nodeName === 'INPUT' && el.type == 'checkbox' && el.checked ) {
              el.checked = false;
          }

          else if ( el.nodeName === 'TABLE' ) {
            while (el.firstChild) {
                     el.removeChild(el.firstChild);
                 }
          }
   } )
   
}