 


var i = 0;
function onFire() {
			i += 1;
			if (!checkEmptyInput()) {
			var table = document.getElementById('regtable');

			var firstname = document.getElementById('fname').value;
			var lastname = document.getElementById('lname').value;
			var date = document.getElementById('dbirth').value;
			var age = document.getElementById('age').value;
			var newRow = table.insertRow(table.length);

			 var cell1= newRow.insertCell(0);
			var cell2= newRow.insertCell(1);
			var cell3= newRow.insertCell(2);
			var cell4= newRow.insertCell(3);
			
			var action = newRow.insertCell(4);

			localStorage.setItem("f"+i, firstname);
			localStorage.setItem("l"+i, lastname);
			localStorage.setItem("db"+i, date);
			localStorage.setItem("a"+i, age);
 

			 cell1.innerHTML = localStorage.getItem('f'+i);
			 cell2.innerHTML = localStorage.getItem('l'+i);
			 cell3.innerHTML = localStorage.getItem('db'+i);
			 cell4.innerHTML  = localStorage.getItem('a'+i);
			 action.innerHTML = '<button onclick ="deleteBtn(this);">delete</button>'
			
			 var len = localStorage.length;

			document.getElementById('fname').value = "";
			document.getElementById('lname').value = "";
			document.getElementById('dbirth').value = "";
			document.getElementById('age').value = "";
			}
		}
		
		function deleteBtn(m) {
			var table = document.getElementById('regtable');
			
			var row = m.parentNode.parentNode;
  			row.parentNode.removeChild(row);
			localStorage.removeItem('f');		
			// localStorage.removeItem("f"+m);
			// localStorage.removeItem("a"+m);

		}
		

		 function checkEmptyInput()
            {
                var isEmpty = false,
                    fname = document.getElementById("fname").value,
                 
                    age = document.getElementById("age").value;
            
                if(fname === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(age === ""){
                    alert("Age Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
