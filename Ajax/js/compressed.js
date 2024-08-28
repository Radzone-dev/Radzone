$(document).ready(function() {
       // image in the header was olso call by jQuery method .attr()
         $("#xml").hide();
        $(".logo").attr("src", "images/logo.png");
      //video insertion by method .html() ( DOM Manipulation not ajax )
         $("#videohtml").html('<video id="Radzone" loop mute width="80%" ><source src="video/Radzone.mp4"/></video>');
        $("#Radzone")[0].play();

           // video insertion method .attr() data-video

        $(".list-item").find(".item").on("click", function() {
          //let
          videoData = $(this).data("video");
          // let
          videoSource = $("#videoclip").find("#mp4video");
          videoSource.attr("src", videoData);
          //let
          autoplayVideo = $("#videoclip").get(0);
          autoplayVideo.load();
          autoplayVideo.play();
        });


            // AJAX method .ajax() html

        $(".appelvideo").click(function() {
        $("#xml").hide();// only for this page
          $("ul.Book").children().remove();
          $.ajax({
            url: "files/video.html",
            success: function(result) {
              $("#objet1").html(result);
            }
          });
        });

         // AJAX method .ajax()
               //xml
        $(".btnxml").click(function () {
            $("#xml").show();
          $("#objet1").empty();
           $.ajax({
        type: "GET",
        url: "files/book.xml",
        dataType: "xml",

        //error: function (e) {
        // alert("An error occurred while processing XML file");
       // console.log("XML reading Failed: ", e);
       // },
        success: function (response) {
        // make sue the ul is empty
        // before appending data

            $("ul.Book").children().remove();

            $(response).find("book").each(function () {
                var _author = 'Author: ' + $(this).find('author').text();
                console.log(_author);
                var _title = 'Title: ' + $(this).find('title').text();
                var _genre = 'Genre: ' + $(this).find('genre').text();
                var _price = 'Price: ' + $(this).find('price').text();
                var _description = 'Description: ' + $(this).find('description').text();

                // add content to the HTML
                $("ul.Book").append('<hr>' + '<li>' + _author + '</li>');
                $("ul.Book").append('<li>' + _title + '</li>');
                $("ul.Book").append('<li>' + _genre + '</li>');
                $("ul.Book").append('<li>' + _price + '</li>');
                $("ul.Book").append('<li>' + _description + '</li>');
            });
        }
    });
    });
         // AJAX method .get() Book.json
        $(".btnjson").click(function() {$("#xml").hide();
          $("ul.Book").children().remove();
          var displayResources = $("#objet1");

         // displayResources.text("Loading data from JSON source..."); wait message if the json very big

          $.ajax({
            type: "GET",
            url: "files/book.json",
            dataType : "json",
            success: function(result) {
              console.log(result);
              var output =
                "<table id=table_jason><tbody><thead><tr><th>Author</th><th>Price</th><th>genre</th><th>title</th><th>description</th></tr></thead>";
              for (var i in result) {
                output +=
                  "<tr><td>" +
                  result[i].author +
                  "</td><td>" +
                  result[i].price +
                  "</td><td>" +
                  result[i].genre +
                  "</td><td>" +
                  result[i].title +
                  "</td><td>" +
                  result[i].description +
                  "</td></tr>";
              }
              output += "</tbody></table>";

              displayResources.html(output);
              $("#table_jason").addClass("table_book_json"); // Insert a class to the table
            }
          });
        });
             /* AJAX method .load()*/

        $(".appevid1").click(function() {
          $("#video").load("files/liste.txt #Madagascar");


        });

        $(".appevid2").click(function() {
          $("#video").load("files/liste.txt #bigbunny");

        });

         $(".appevid3").click(function() {
          $("#video").load("files/liste.txt #Radzone");


        });
        //  AJAX method .getJSON

         $("#btn").click(function(event) {
          $.getJSON("files/user.json", function(user) {
            $("#output").html("<p> Name: " +
              user.name + "</p>");
            $("#output").append("<p>Gender: " +
              user.gender + "</p>");
            $("#output").append("<p>Salary: " +
              user.salary + "</p>");
          });
        });



      });