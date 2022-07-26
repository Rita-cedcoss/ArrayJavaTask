var array=[{company:"Samsung", Model:"Galaxy", Memory:64,Price:15000},
{company:"Nokia", Model:"S730", Memory:128,Price:22000},
{company:"Xiaomi", Model:"Note", Memory:32,Price:12000},
{company:"Motoroala", Model:"G10", Memory:32,Price:15000},
{company:"Apple", Model:"S12", Memory:64,Price:25000}
];
var text="";
text+="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";

for(var i=0;i<array.length;i++)
{
    text+="<tr><td>"+array[i].company+"</td><td>"+array[i].Model+"</td><td>"+array[i].Memory+"</td><td>"+array[i].Price+"</td></tr>"
    // +"<tr><td>"+array[1].company+"</td><td>"+array[1].Model+"</td><td>"+array[1].Memory+"</td><td>"+array[].Price+"</td></tr>"
    
    "</table>"

}
document.getElementById('outer').innerHTML=text;
