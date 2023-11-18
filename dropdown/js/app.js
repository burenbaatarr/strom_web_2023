document.addEventListener('DOMContentLoaded', function(){
    let dropDown = document.querySelector('.dropdown');
    dropDown.addEventListener('mouseover', function(){
        this.querySelector('.dropdown-content').style.display = 'block';
    });
    dropDown.addEventListener('mouseout', function(){
        this.querySelector('.dropdown-content').style.display = 'none';
    });
});