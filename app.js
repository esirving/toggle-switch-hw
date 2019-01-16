//read more toggle 
var toggle = document.querySelector('.read-more h3');


//.blog text
var blog = document.querySelector('.blog-copy');


//blog text tag
var content = document.querySelector('.blog-copy');

var height = content.clientHeight;



// create event listener for toggle click

toggle.addEventListener('click', function(){
if(blog.classList.contains('active')){
	blog.style.height = '0px';
	blog.classList.remove ('active');
} else{
blog.style.height = height + 'px';
blog.classList.add ('active');
}

});