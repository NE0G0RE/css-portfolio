$(function() {
    $('.links').on('click', function() {
        $('.content-container').load('/pages/' + $(this).attr('href').replace('#', '') + '.html')
    })
})