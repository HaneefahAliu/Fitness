// number count for stats, using jQuery animate

$('.counting').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({countNum: $this.text()}).animate({
        countNum: countTo
    }, {

        duration: 3000,
        easing: 'linear',
        step: function () {
            $this.text(Math.floor(this.countNum));
        },
        complete: function () {
            $this.text(this.countNum);
            //alert('finished');
        }

    });

});

(function ($) {
    /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls li').on('click', function() {
            $('.gallery-controls li').removeClass('active');
            $(this).addClass('active');
        });
        if($('.gallery-filter').length > 0 ) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

    });

    