	//Radius of the circle is consider as 'a'
				function area ( a ) { 
                     return a * a * 22/7;
                };
								
				
				function showResult(result){				
					document.getElementById('result').innerHTML = isNaN(result) ? 'Please enter valid numbers' : result;
				};
				
				
				function AreaClick (){					
					console.log("Control is in Calculate Area Button click handler");
					var rad = parseInt(document.getElementById("rad").value);
					var result = area(rad);
					showResult(result);
				};

			