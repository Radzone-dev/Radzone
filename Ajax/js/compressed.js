$(document).ready(function () {
    $('#xml').hide(),
        $('.logo').attr('src', 'images/logo.png'),
        $('#videohtml').html(
            '<video id="Radzone" loop mute width="80%" ><source src="video/Radzone.mp4"/></video>'
        ),
        $('#Radzone')[0].play(),
        $('.list-item')
            .find('.item')
            .on('click', function () {
                (videoData = $(this).data('video')),
                    (videoSource = $('#videoclip').find('#mp4video')).attr(
                        'src',
                        videoData
                    ),
                    (autoplayVideo = $('#videoclip').get(0)).load(),
                    autoplayVideo.play();
            }),
        $('.appelvideo').click(function () {
            $('ul.Book').children().remove(),
                $('#xml').hide(),
                $.ajax({
                    url: 'files/video.html',
                    success: function (t) {
                        $('#objet1').html(t);
                    },
                });
        }),
        $('.btnxml').click(function () {
            $('#xml').show(),
                $('#objet1').empty(),
                $.ajax({
                    type: 'GET',
                    url: 'files/book.xml',
                    dataType: 'xml',
                    success: function (t) {
                        $('ul.Book').children().remove(),
                            $(t)
                                .find('book')
                                .each(function () {
                                    var t = 'Author: ' + $(this).find('author').text(),
                                        e =
                                            (console.log(t),
                                            'Title: ' + $(this).find('title').text()),
                                        i = 'Genre: ' + $(this).find('genre').text(),
                                        o = 'Price: ' + $(this).find('price').text(),
                                        l =
                                            'Description: ' +
                                            $(this).find('description').text();
                                    $('ul.Book').append('<hr><li>' + t + '</li>'),
                                        $('ul.Book').append('<li>' + e + '</li>'),
                                        $('ul.Book').append('<li>' + i + '</li>'),
                                        $('ul.Book').append('<li>' + o + '</li>'),
                                        $('ul.Book').append('<li>' + l + '</li>');
                                });
                    },
                });
        }),
        $('.btnjson').click(function () {
            $('#xml').hide(), $('ul.Book').children().remove();
            var t = $('#objet1');
            $.ajax({
                type: 'GET',
                url: 'files/book.json',
                dataType: 'json',
                success: function (e) {
                    console.log(e);
                    var i,
                        o =
                            '<table id=table_jason><tbody><thead><tr><th>Author</th><th>Price</th><th>genre</th><th>title</th><th>description</th></tr></thead>';
                    for (i in e)
                        o +=
                            '<tr><td>' +
                            e[i].author +
                            '</td><td>' +
                            e[i].price +
                            '</td><td>' +
                            e[i].genre +
                            '</td><td>' +
                            e[i].title +
                            '</td><td>' +
                            e[i].description +
                            '</td></tr>';
                    t.html((o += '</tbody></table>')),
                        $('#table_jason').addClass('table_book_json');
                },
            });
        }),
        $('.appevid1').click(function () {
            $('#video').load('files/liste.txt #Madagascar');
        }),
        $('.appevid2').click(function () {
            $('#video').load('files/liste.txt #bigbunny');
        }),
        $('.appevid3').click(function () {
            $('#video').load('files/liste.txt #Radzone');
        }),
        $('#btn').click(function (t) {
            $.getJSON('files/user.json', function (t) {
                $('#output').html('<br><p> Name: ' + t.name + '</p>'),
                    $('#output').append('<p>Gender: ' + t.gender + '</p>'),
                    $('#output').append('<p>Salary: ' + t.salary + '</p><br>');
            });
        }),
        $('button').click(function () {
            var t = $('#num').val();
            $.get('http://radislav.free.fr/files/create-table.php', { number: t }, function (t) {
                $('#result').html(t);
            });
        }),
        $('form').submit(function (t) {
            t.preventDefault();
            var e = $(this).serialize();
            $.post('http://radislav.free.fr/files/display-comment.php', e, function (t) {
                $('#result2').html(t);
            });
        });
});