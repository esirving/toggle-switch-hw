

var articles = document.querySelectorAll('article');

for (var i = 0; i < articles.length; i++) {
	(function(){


//read more toggle 
var toggle = articles[i].querySelector('.read-more h3');


//.blog text
var blog = articles[i].querySelector('.blog-copy');


//blog text tag
var content = articles[i].querySelector('.blog-copy');

var height = content.clientHeight;



// create event listener for toggle click

toggle.addEventListener('click', function(){
if(blog.classList.contains('active')){
	blog.style.height = '304px';
	toggle.innerhtml = 'Read Less'
	blog.classList.remove ('active');
} else{
blog.style.height = height + 'px';
toggle.innerhtml = 'Read More'
blog.classList.add ('active');
}

})
})()
}
