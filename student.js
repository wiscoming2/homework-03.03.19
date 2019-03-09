<html>
    <head>
        <title>html rocks!!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
    <body>
        <form id="studentDetails" onsubmit="printstudent()" >
            <p>id: <input type="text" id="id" required/></p>
            <p>name: <input type="text" id="name" required/></p>
            <p>adress: <input type="text" id="adress" required/></p>
               <form id="courseDetails">
                    <p>course id: <input type="text" id="CourseId" required/></p>
                    <p>title: <input type="text" id="title"/></p>
                    <p>start: <input type="date" min="2019-02-28" max="2019-03-03" id="startdate"/></p>
                    <p>end: <input type="date" min="2019-02-28" max="2019-03-03" id="enddate"/></p>
                    <button type="submit">print</button>
               </form>
        </form>
    </body>
    <script>
        function printstudent()
        {
            var student = {
                id : $('#id').val(),
                name : $('#name').val(),
                adress : $('#adress').val(),
                course : {
                    CourseId : $('#CourseId').val(),
                    title : $('#title').val(),
                    start : $('#startdate').val(),
                    end : $('#enddate').val(),
                },
            }
                alert(`
                id : ${student.id}\n 
                name : ${student.name}\n 
                adress : ${student.adress}\n
                courseid : ${student.course["CourseId"]}\n
                title : ${student.course["title"]}\n
                start : ${student.course["start"]}\n
                end : ${student.course["end"]}\n`)      
        }
    </script>
</html>
