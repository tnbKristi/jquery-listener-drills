$(document).ready(function(){
    
    // #1
    $('#clickme').on('click', function(e){
        e.preventDefault();
        $(this).addClass('btn-warning');
    });
    
    // #2 - mod the HTML to change the sentence more easily
    $('.keyup-detect').on('keyup', function(){
        $('#adverb_1_lib').text($('#adverb_1').val());
        $('#verb_1_lib').text($('#verb_1').val());
        $('#adverb_2_lib').text($('#adverb_2').val());
    });
    
    // #3
    $('.form-inline').on('submit', function(e){
        e.preventDefault();
        if($(this).find('input').val()  ===  'human')  {
            alert('Congratulations!');
        } else {
            alert('beep beep boop beep');
        }
        
    });
    
    // #4 
    $('#hoverme').on('mouseenter', function(){
        $(this).css('transform', 'scale(3)');
    }).on('mouseleave', function(){
        $(this).css('transform', 'scale(1)');
    });
    
    // #5
    $('.btn-container').on('click', '.btn', function(){
        if($(this).is('.disabled')) {
            return false;
        }
        $(this).clone().appendTo('.btn-container');
        $(this).addClass('disabled');
    });
    
});