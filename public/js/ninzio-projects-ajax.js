(function($){

	var $loop       = $('#loop');
	var $filter     = ($loop.hasClass('filter-true')) ? "true" : "false";
	var $navigation = $loop.data('navigation');

	var filterContainer   	 = $loop.find('.nz-projects-filter');
	var projects 	   		 = $loop.find('.projects-post');
	var loading  	   		 = $loop.find('.ajax-loading-wrap');
	var error          		 = $loop.find('.ajax-loading-error');
	var postsPerPage   	 	 = filterContainer.attr('data-posts-per-page');
	var filterRequestRunning = false;

	var loadMore    	   = $('#projects-load-more');
	var defaultText        = loadMore.find('.txt').html();
	var startPage     	   = parseInt(ajax_var.startPage) + 1;
	var maxPages           = parseInt(ajax_var.maxPages);
	var nextLink    	   = ajax_var.nextLink;
	var noText      	   = ajax_var.noText;
	var loadRequestRunning = false;
	var paginationRequestRunning = false;


	function projectsPagination(){

		if ($navigation == 'navigation-pagination' && $filter == "true") {

			if(startPage <= maxPages) {

				$('.ninzio-navigation')
				.empty()
				.append('<ul class="page-numbers"></ul>');
			
				var $pagination = $('.ninzio-navigation > .page-numbers');

				for (var i = 1; i <= maxPages; i++) {
					$pagination.append('<li><a class="page-numbers" href="'+nextLink.replace(/\/page\/[0-9]*/, '/page/'+ i)+'">'+i+'</a></li>');
				}

				$pagination.find('a').first().addClass('current');
				$pagination.find('a').on('click',function(event){

					$this = $(this);

					event.preventDefault();

					$('.ninzio-navigation .current').removeClass('current');

					$this.toggleClass('current');

					if (paginationRequestRunning) {
						return;
					}

					paginationRequestRunning = true;

					if(startPage <= maxPages) {

						loading.fadeIn(300,function(){

							projects.css('opacity','0').empty();
							projects.load($this.attr('href') + ' .projects',
								function(response, status, xhr) {

									if (status == "error") {
										projects.css('height','200px');
										loading.fadeOut(300);
										error.fadeIn(300,function(){
											filterRequestRunning = false;
										});
									} else {
										imagesLoaded( $('.loop .projects-post'), function() {
											$('.loop .projects-post').masonry("reloadItems");
					  						$('.loop .projects-post').masonry({
					  							itemSelector: '.projects',
												columnWidth:'.projects'
					  						});
					  						setTimeout(function(){
					  							$('.loop .projects-post')
					  							.css('opacity','1');
												loading.fadeOut(300);
												error.fadeOut(300);
					  						},600);
										});
										paginationRequestRunning = false;
									}
								}
							);

						});

					}

					return false;

				});

			}

		}
	}

	function loadButtonText(){
		if(startPage > maxPages) {
			loadMore.find('.txt').html(noText);
			loadMore.addClass('disable');
		}else {
			loadMore.find('.txt').html(defaultText);
			loadMore.removeClass('disable');
		}
	}

	function loadMoreFunction(){

		if ($navigation == "navigation-loadmore") {

			loadButtonText();

			loadMore.on('click',function(event){

				var $this = $(this);

				event.preventDefault();

				if (loadRequestRunning) {
					return;
				}

				loadRequestRunning = true;

				if(startPage <= maxPages) {

					$this.find('.project-loader').removeClass('temp-hide');

					$.get(nextLink,function(content) {

					    var content = $(content).find('.projects').addClass('temp-hide');

					    $('.loop .projects-post').append(content);

					    imagesLoaded( $('.loop .projects-post'), function() {
							$('.loop .projects-post').masonry("reloadItems");
								$('.loop .projects-post').masonry({
									itemSelector: '.projects',
									columnWidth:'.projects'
								});
						});

						setTimeout(function(){
							$this.find('.project-loader').addClass('temp-hide');
							content.removeClass('temp-hide');
						},600);

						startPage++;

						nextLink = nextLink.replace(/\/page\/[0-9]*/, '/page/'+ startPage);

						loadButtonText()

						loadRequestRunning = false;
					});

				}

				return false;
			});

			return false;

		}
	}
	
	filterContainer.find('.filter').on('click',function(){

		if (filterRequestRunning) {
			return;
		}

		filterRequestRunning = true;

		var $this = $(this);
        var link = $this.attr('data-link');

        $('.nz-projects-filter .active').removeClass('active');

		$this.toggleClass('active');

        if ($navigation == "navigation-loadmore") {

	        startPage          = 2;
			nextLink           = link + 'page/'+startPage;
			maxPages           = Math.ceil($this.attr('data-count')/postsPerPage);
			loadRequestRunning = false;

			loadMore.addClass('temp-hide');
			loadMoreFunction();


		} else
		if ($navigation == "navigation-pagination") {

			startPage          		 = 2;
			nextLink           		 = link + 'page/'+startPage;
			maxPages           		 = Math.ceil($this.attr('data-count')/postsPerPage);
			paginationRequestRunning = false;

			$('.ninzio-navigation').addClass('temp-hide');

			setTimeout(function(){
				$('.ninzio-navigation').empty();
				projectsPagination();
			},500);

		}

		loading.fadeIn(300,function(){

			projects.css('opacity','0').empty();
			projects.load(link + ' .projects',
				function(response, status, xhr) {

					if (status == "error") {
						projects.css('height','200px');
						loading.fadeOut(300);
						error.fadeIn(300,function(){
							filterRequestRunning = false;
						});
					} else {
						imagesLoaded( $('.loop .projects-post'), function() {
							$('.loop .projects-post').masonry("reloadItems");
	  						$('.loop .projects-post').masonry({
	  							itemSelector: '.projects',
								columnWidth:'.projects'
	  						});
	  						setTimeout(function(){
	  							$('.loop .projects-post')
	  							.css('opacity','1');
								loading.fadeOut(300);
								error.fadeOut(300);
	  							loadMore.removeClass('temp-hide');
								$('.ninzio-navigation').removeClass('temp-hide')
	  						},600);
						});
						filterRequestRunning = false;
					}
				}
			);

		});
	});

	loadMoreFunction();
	projectsPagination();

})(jQuery);