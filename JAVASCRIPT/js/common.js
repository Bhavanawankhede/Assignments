
var msg;

msg="<p><code>The script is located in external script file called common.js</code></p>";
function addNumbers(headParam, bodyParam)
{
 /* display the contents of the variable "msg" */
 document.write(msg);
 /* display the addition of two numbers */
 var result=headParam+bodyParam;
 document.write("value of "+headParam +" + "+bodyParam+" = "+result);
}
