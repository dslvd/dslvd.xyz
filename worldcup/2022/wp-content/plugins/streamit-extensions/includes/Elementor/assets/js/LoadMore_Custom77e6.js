/*----------------------------------------------
Index Of Script
------------------------------------------------
:: infinite Scroll
:: loadmore

------------------------------------------------
Index Of Script
----------------------------------------------*/

jQuery(document).ready(function ($) {
	// LoadMore genre

	jQuery('.genre-load-btn, .movie-load-btn, .tvshow-load-btn,.video-load-btn,.blog-load-btn,.tags-load-btn').each(function (element) {
		$(this).attr('loadmore-page-no', 1);
	});

	// Movie AJAX CALL
	jQuery('.movie-load-btn').click(function () {
		var button = jQuery(this),
			buttonTxt = button.text(),
			buttonLoad = button.parent().find('.iq-button'),
			maxPage = button.parent().find('.movie-max-page').val(),
			streamit_current_page = button.attr('loadmore-page-no'),
			movie_per_page = button.parent().find('.movie-per-page').val(),
			movie_per_page_static = button.parent().find('.movie-per-page-static').val(),
			data = {
				'action': 'loadmore_movie',
				'query': streamit_loadmore_params.posts,
				'page': streamit_current_page,
				'settings': button.parent().find('.movie-settigs').val(),
				'movie_per_page': movie_per_page,
			};
		jQuery.ajax({
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				buttonLoad.html('<span>' + button.parent().find('.loading-text').val() + '<span>'); // change the button text, you can also add a preloader image
			},

			success: function (data) {
				if (data) {
					button.parent().prev('.iq_movie-contents').find('.movie-list-grid').append(data); // insert new posts
					watchlist_last_item();
					button.attr('loadmore-page-no', parseInt(streamit_current_page) + 1);
					button.html('<div class="btn btn-hover iq-button"><span>' + buttonTxt + '</span></div>');
					button.parent().find('.movie-per-page').val(parseInt(movie_per_page));
					var streamit_current_page_max = parseInt(streamit_current_page) + 1;
					if (streamit_current_page_max == maxPage || streamit_current_page_max == movie_per_page_static)
						button.remove();
				} else {
					button.remove();
				}
			}
		});
	});

	// TvShow AJAX CALL
	jQuery('.tvshow-load-btn').click(function () {
		var button = jQuery(this),
			buttonTxt = button.text(),
			buttonLoad = button.parent().find('.iq-button'),
			maxPage = button.parent().find('.tvshow-max-page').val(),
			streamit_current_page = button.attr('loadmore-page-no'),
			tvshow_per_page = button.parent().find('.tvshow-per-page').val(),
			tvshow_per_page_static = button.parent().find('.tvshow-per-page-static').val(),
			data = {
				'action': 'loadmore_tvshow',
				'query': streamit_loadmore_params.posts,
				'page': streamit_current_page,
				'settings': button.parent().find('.tvshow-settigs').val(),
				'tvshow_per_page': tvshow_per_page,
			};
		jQuery.ajax({
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				buttonLoad.html('<span>' + button.parent().find('.loading-text').val() + '<span>'); // change the button text, you can also add a preloader image
			},

			success: function (data) {
				if (data) {
					button.parent().prev('.iq_tvthrillers-contens').find('.tvshow-list-grid').append(data); // insert new posts
					watchlist_last_item();
					button.attr('loadmore-page-no', parseInt(streamit_current_page) + 1);
					button.html('<div class="btn btn-hover iq-button"><span>' + buttonTxt + '</span></div>');
					button.parent().find('.tvshow-per-page').val(parseInt(tvshow_per_page));
					var streamit_current_page_max = parseInt(streamit_current_page) + 1;
					if (streamit_current_page_max == maxPage || streamit_current_page_max == tvshow_per_page_static)
						button.remove();
				} else {
					button.remove();
				}
			}
		});
	});

	// Video AJAX CALL
	jQuery('.video-load-btn').click(function () {
		var button = jQuery(this),
			buttonTxt = button.text(),
			buttonLoad = button.parent().find('.iq-button'),
			maxPage = button.parent().find('.video-max-page').val(),
			streamit_current_page = button.attr('loadmore-page-no'),
			video_per_page = button.parent().find('.video-per-page').val(),
			video_per_page_static = button.parent().find('.video-per-page-static').val(),
			data = {
				'action': 'loadmore_video',
				'query': streamit_loadmore_params.posts,
				'page': streamit_current_page,
				'settings': button.parent().find('.video-settigs').val(),
				'video_per_page': video_per_page,
			};
		jQuery.ajax({
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				buttonLoad.html('<span>' + button.parent().find('.loading-text').val() + '<span>'); // change the button text, you can also add a preloader image
			},

			success: function (data) {
				if (data) {
					button.parent().prev('.iq_video-contens').find('.video-list-grid').append(data); // insert new posts
					watchlist_last_item();
					button.attr('loadmore-page-no', parseInt(streamit_current_page) + 1);
					button.html('<div class="btn btn-hover iq-button"><span>' + buttonTxt + '</span></div>');
					button.parent().find('.video-per-page').val(parseInt(video_per_page));
					var streamit_current_page_max = parseInt(streamit_current_page) + 1;
					if (streamit_current_page_max == maxPage || streamit_current_page_max == video_per_page_static)
						button.remove();
				} else {
					button.remove();
				}
			}
		});
	});

	// generes AJAX CALL
	jQuery('.genre-load-btn').click(function () {
		var button = jQuery(this),
			buttonLoad = button.parent().find('.iq-button'),
			loading_text = buttonLoad.data('loading-text'),
			loadmore_text = buttonLoad.data('loadmore-text'),
			maxPage = button.parent().find('.genre-max-page').val(),
			streamit_current_page = button.attr('loadmore-page-no'),
			genre_per_page = button.parent().find('.genre-per-page').val(),
			genre_per_page_static = button.parent().find('.genre-per-page-static').val(),
			data = {
				'action': 'loadmore_genres',
				'query': streamit_loadmore_params.posts,
				'page': streamit_current_page,
				'settings': button.parent().find('.genre-settigs').val(),
				'genre_per_page': genre_per_page,
			};
			console.log(loading_text);
			console.log(loadmore_text);
			console.log(button);
		jQuery.ajax({
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				buttonLoad.html('<span>'+loading_text+'<span>'); // change the button text, you can also add a preloader image
			},

			success: function (data) {
				if (data) {
					button.parent().prev('.iq_genres-contents').find('.movie-list-grid').append(data); // insert new posts
					watchlist_last_item();
					button.attr('loadmore-page-no', parseInt(streamit_current_page) + 1);
					buttonLoad.html('<span>' + loadmore_text + '</span>');
					button.parent().find('.genre-per-page').val(parseInt(genre_per_page));
					var streamit_current_page_max = parseInt(streamit_current_page) + 1;
					if (streamit_current_page_max == maxPage || streamit_current_page_max == genre_per_page_static)
						button.remove();
				} else {
					button.remove();
				}
			}
		});
	});
	// tags AJAX CALL
	jQuery('.tags-load-btn').click(function () {
		var button = jQuery(this),
		buttonLoad = button.parent().find('.iq-button'),
		loading_text = buttonLoad.data('loading-text'),
		loadmore_text = buttonLoad.data('loadmore-text'),
			maxPage = button.parent().find('.tags-max-page').val(),
			streamit_current_page = button.attr('loadmore-page-no'),
			tags_per_page = button.parent().find('.tags-per-page').val(),
			tags_per_page_static = button.parent().find('.tags-per-page-static').val(),
			data = {
				'action': 'loadmore_tags',
				'query': streamit_loadmore_params.posts,
				'page': streamit_current_page,
				'settings': button.parent().find('.tags-settigs').val(),
				'tags_per_page': tags_per_page,
			};
		jQuery.ajax({
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				buttonLoad.html('<span>'+loading_text+'<span>'); // change the button text, you can also add a preloader image
			},

			success: function (data) {
				if (data) {
					button.parent().prev().append(data); // insert new posts
					watchlist_last_item();
					button.attr('loadmore-page-no', parseInt(streamit_current_page) + 1);
					buttonLoad.html('<span>'+loadmore_text+'<span>'); // change the button text, you can also add a preloader image
					button.parent().find('.tags-per-page').val(parseInt(tags_per_page));
					var streamit_current_page_max = parseInt(streamit_current_page) + 1;
					if (streamit_current_page_max == maxPage || streamit_current_page_max == tags_per_page_static)
						button.remove();
				} else {
					button.remove();
				}
			}
		});
	});


	// Blog AJAX CALL
	jQuery('.blog-load-btn').click(function () {
		var button = jQuery(this),
			buttonTxt = button.text(),
			loader_wheel_container=button.parent(),
			buttonLoad = loader_wheel_container.find('.iq-button'),
			maxPage = loader_wheel_container.find('.blog-max-page').val(),
			streamit_current_page = button.attr('loadmore-page-no'),
			blog_per_page = loader_wheel_container.find('.blog-per-page').val(),
			blog_per_page_static = loader_wheel_container.find('.blog-per-page-static').val(),
			data = {
				'action': 'loadmore_blog_grid',
				'query': streamit_loadmore_params.posts,
				'page': Number(streamit_current_page)+1,
				'settings': loader_wheel_container.find('.blog-settigs').val(),
				'blog_per_page': blog_per_page,
			};
		jQuery.ajax({
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				buttonLoad.html('<span>' + loader_wheel_container.find('.loading_text').val() + '<span>'); // change the button text, you can also add a preloader image
			},

			success: function (data) {
				if (data) {
					loader_wheel_container.prev('.iq-blog').find('.blog_grid_contens').append(data); // insert new posts
					watchlist_last_item();
					button.attr('loadmore-page-no', parseInt(streamit_current_page) + 1);
					button.html('<div class="btn btn-hover iq-button"><span>' + buttonTxt + '</span></div>');
					loader_wheel_container.find('.blog-per-page').val(parseInt(blog_per_page));
					var streamit_current_page_max = parseInt(streamit_current_page) + 1;
					if (streamit_current_page_max == maxPage || streamit_current_page_max == blog_per_page_static)
						button.remove();
				} else {
					button.remove();
				}
			}
		});
	});


	//viewall AJAX CALL
	jQuery('.streamit_loadmore_btn_viewall').click(function () {
		var button_load = jQuery(this).attr('data-loading-text');
		var button_text = jQuery(this).text();
		var max_page = jQuery(this).data('max-page');
		var url = window.location.href;
		var button = jQuery(this),
			data = {
				'action': 'loadmore_viewall',
				'query': streamit_loadmore_params.posts, // that's how we get params from wp_localize_script() function
				'page': streamit_loadmore_params.current_page,
				'href': url,
			};

		jQuery.ajax({ // you can also use jQuery.post here
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				button.text(button_load); // change the button text, you can also add a preloader image
			},
			success: function (data) {
				if (data) {
					button.text(button_text).prev().append(data); // insert new posts
					watchlist_last_item();
					streamit_loadmore_params.current_page++;
					if (streamit_loadmore_params.current_page == max_page)
						button.remove(); // if last page, remove the button

				} else {
					button.remove(); // if no data, remove the button as well
				}
			}
		});

	});
	//watchlist ALL AJAX CALL
	jQuery('.streamit_loadmore_btn_watchlist').click(function () {
		var button_load = jQuery(this).attr('data-loading-text');
		var button_text = jQuery(this).text();
		var button = jQuery(this),
			data = {
				'action': 'loadmore_watchlist',
				'query': streamit_loadmore_params.posts, // that's how we get params from wp_localize_script() function
				'page': streamit_loadmore_params.current_page
			};

		jQuery.ajax({ // you can also use jQuery.post here
			url: streamit_loadmore_params.ajaxurl, // AJAX handler
			data: data,
			type: 'POST',
			beforeSend: function (xhr) {
				button.text(button_load); // change the button text, you can also add a preloader image
			},
			success: function (data) {
				if (data) {
					button.text(button_text).parent().prev().after(data); // insert new posts
					watchlist_last_item();
					streamit_loadmore_params.current_page++;

					if (streamit_loadmore_params.current_page == streamit_loadmore_params.max_page)
						button.remove(); // if last page, remove the button

				} else {
					button.remove(); // if no data, remove the button as well
				}
			}
		});

	});

	// Infinite Scroll 
	jQuery(function (jQuery) {

		var canBeLoaded = true,
			bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts

		var streamit_options = jQuery('.streamit_datapass_viewall').data('options');
		var streamit_options_watchlist = jQuery('.streamit_datapass_watchlist').data('options');
		var streamit_options_genres = jQuery('.streamit_datapass_genres').data('options');
		var streamit_options_movie = jQuery('.streamit_datapass_movie').data('options');
		var streamit_options_tvshow = jQuery('.streamit_datapass_tvshow').data('options');
		var streamit_options_video = jQuery('.streamit_datapass_video').data('options');
		var streamit_options_iqblog = jQuery('.streamit_datapass_blog_grid').data('options');
		var streamit_options_tags = jQuery('.streamit_datapass_tags_grid').data('options');

		if (streamit_options == "infinite_scroll") {

			jQuery(window).scroll(function () {

				//** search load more *//
				var data = {
					'action': 'loadmore_viewall',
					'query': streamit_loadmore_params.posts,
					'page': streamit_loadmore_params.current_page
				};

				if (jQuery(document).scrollTop() > (jQuery(document).height() - bottomOffset) && canBeLoaded == true) {

					jQuery.ajax({
						url: streamit_loadmore_params.ajaxurl,
						data: data,
						type: 'POST',
						beforeSend: function (xhr) {
							canBeLoaded = false;
						},
						success: function (data) {
							if (data) {
								jQuery(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
								watchlist_last_item();
								jQuery('.viewall-list').find('article:last-of-type').after(data); // where to insert posts
								canBeLoaded = true; // the ajax is completed, now we can run it again
								streamit_loadmore_params.current_page++;
								if (streamit_loadmore_params.current_page == streamit_loadmore_params.max_page) {
									jQuery(".loader-wheel-container").html('');
								}
							} else {
								jQuery(".loader-wheel-container").html('');
							}

						}
					});
				}


			});

		}
		if (streamit_options_watchlist == "infinite_scroll") {

			jQuery(window).scroll(function () {

				//** search load more *//
				var data = {
					'action': 'loadmore_watchlist',
					'query': streamit_loadmore_params.posts,
					'page': streamit_loadmore_params.current_page
				};

				if (jQuery(document).scrollTop() > (jQuery(document).height() - bottomOffset) && canBeLoaded == true) {

					jQuery.ajax({
						url: streamit_loadmore_params.ajaxurl,
						data: data,
						type: 'POST',
						beforeSend: function (xhr) {
							canBeLoaded = false;
						},
						success: function (data) {
							if (data) {
								jQuery(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
								watchlist_last_item();
								jQuery('.infinite_watchlist').prev().after(data); // where to insert posts
								canBeLoaded = true; // the ajax is completed, now we can run it again
								streamit_loadmore_params.current_page++;
								if (streamit_loadmore_params.current_page == streamit_loadmore_params.max_page) {
									jQuery(".loader-wheel-container").html('');
								}
							} else {
								jQuery(".loader-wheel-container").html('');
							}

						}
					});
				}


			});

		}
		if (streamit_options_genres == "infinite") {


			var canBeLoaded = true,
				bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts

			jQuery(window).scroll(function () {
				let button = jQuery(this);

				let data = {
					'action': 'loadmore_genres',
					'query': streamit_loadmore_params.posts,
					'page': streamit_loadmore_params.current_page,
					'settings': jQuery('.genre-settigs').val(),
					'tags_per_page': tags_per_page,
				};

				if (jQuery(document).scrollTop() > (jQuery(document).height() - bottomOffset) && canBeLoaded == true) {

					jQuery.ajax({
						url: streamit_loadmore_params.ajaxurl,
						data: data,
						type: 'POST',
						beforeSend: function (xhr) {
							canBeLoaded = false;
						},
						success: function (data) {
							if (data) {
								jQuery(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
								watchlist_last_item();
								jQuery('.favorites-contens').find('.movie-list-grid').append(data); // where to insert posts
								canBeLoaded = true; // the ajax is completed, now we can run it again
								streamit_loadmore_params.current_page++;

								if (streamit_loadmore_params.current_page == streamit_loadmore_params.max_page) {
									jQuery(".loader-wheel-container").html('');
								}
							} else {
								jQuery(".loader-wheel-container").html('');
							}

						}
					});
				}
			});
		}
		if (streamit_options_movie == "infinite") {
			jQuery('.streamit_datapass_movie').each(function () {

				let _this = jQuery(this);
				let canBeLoaded = _this.data('can-beloaded');

				jQuery(window).scroll(function () {


					let hidden_info = _this.next('.loader-wheel-container');
					if (isScrolledIntoView(_this.next('.loader-wheel-container')) && canBeLoaded == true) {
						let data = {
							'action': 'loadmore_movie',
							'page': Number(hidden_info.find('.current-page').val()),
							'settings': hidden_info.find('.movie-settigs').val(),
						};

						jQuery.ajax({
							url: streamit_loadmore_params.ajaxurl,
							data: data,
							type: 'POST',
							beforeSend: function (xhr) {
								canBeLoaded = false;
							},
							success: function (data) {
								if (data) {
									_this.find(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
									watchlist_last_item();
									_this.find('.movie-list-grid').append(data); // where to insert posts
									canBeLoaded = true; // the ajax is completed, now we can run it again movie-max-page

									hidden_info.find('.current-page').val(Number(hidden_info.find('.current-page').val()) + 1);

									if (hidden_info.find('.current-page').val() >= hidden_info.find('.movie-max-page').val()) {
										_this.find(".loader-wheel-container").html('');
									}
								} else {
									_this.find(".loader-wheel-container").html('');
								}

							}
						});
					}
				});


			});

		}
		if (streamit_options_tvshow == "infinite") {

			jQuery('.iq_tvthrillers-contens').each(function () {

				let _this = jQuery(this);
				let canBeLoaded = _this.data('can-beloaded');

				jQuery(window).scroll(function () {

					let hidden_info = _this.next('.loader-wheel-container');
					if (isScrolledIntoView(_this.next('.loader-wheel-container')) && canBeLoaded == true) {
						let data = {
							'action': 'loadmore_tvshow',
							'page': Number(hidden_info.find('.current-page').val()),
							'settings': hidden_info.find('.tvshow-settigs ').val(),
						};

						jQuery.ajax({
							url: streamit_loadmore_params.ajaxurl,
							data: data,
							type: 'POST',
							beforeSend: function (xhr) {
								canBeLoaded = false;
							},
							success: function (data) {
								if (data) {
									_this.find(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
									watchlist_last_item();
									_this.find('.tvshow-list-grid').append(data); // where to insert posts
									canBeLoaded = true; // the ajax is completed, now we can run it again movie-max-page

									hidden_info.find('.current-page').val(Number(hidden_info.find('.current-page').val()) + 1);

									if (hidden_info.find('.current-page').val() >= hidden_info.find('.tvshow-max-page').val()) {
										_this.find(".loader-wheel-container").html('');
									}
								} else {
									_this.find(".loader-wheel-container").html('');
								}

							}
						});
					}
				});


			});

		}
		if (streamit_options_video == "infinite") {


			jQuery('.streamit_datapass_video').each(function () {

				let _this = jQuery(this);
				let canBeLoaded = _this.data('can-beloaded');

				jQuery(window).scroll(function () {

					let hidden_info = _this.next('.loader-wheel-container');
					if (isScrolledIntoView(_this.next('.loader-wheel-container')) && canBeLoaded == true) {
						let data = {
							'action': 'loadmore_video',
							'page': Number(hidden_info.find('.current-page').val()),
							'settings': hidden_info.find('.video-settigs ').val(),
						};

						jQuery.ajax({
							url: streamit_loadmore_params.ajaxurl,
							data: data,
							type: 'POST',
							beforeSend: function (xhr) {
								canBeLoaded = false;
							},
							success: function (data) {
								if (data) {
									_this.find(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
									watchlist_last_item();
									_this.find('.video-list-grid').append(data); // where to insert posts
									canBeLoaded = true; // the ajax is completed, now we can run it again movie-max-page

									hidden_info.find('.current-page').val(Number(hidden_info.find('.current-page').val()) + 1);

									if (hidden_info.find('.current-page').val() >= hidden_info.find('.video-max-page').val()) {
										_this.find(".loader-wheel-container").html('');
									}
								} else {
									_this.find(".loader-wheel-container").html('');
								}

							}
						});
					}
				});


			});

		}
		if (streamit_options_iqblog == "infinite") {
			jQuery(window).scroll(function () {
				let button = jQuery(this);
				let parentList = button.parent().find('.blog_grid_contens');
				let data = {
					'action': 'loadmore_blog_grid',
					'query': streamit_loadmore_params.posts,
					'page': Number(streamit_loadmore_params.current_page)+1,
					'settings': jQuery('.blog-settigs').val(),
				};

				if (jQuery(document).scrollTop() > (jQuery(document).height() - bottomOffset) && canBeLoaded == true) {
					jQuery.ajax({
						url: streamit_loadmore_params.ajaxurl,
						data: data,
						type: 'POST',
						beforeSend: function (xhr) {
							canBeLoaded = false;
						},
						success: function (data) {
							if (data) {
								jQuery(".loader-wheel-container .loader-wheel").append('<i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i>');
								watchlist_last_item();
								jQuery('.blog_main_contens').find('.blog_grid_contens').append(data); // where to insert posts
								canBeLoaded = true; // the ajax is completed, now we can run it again
								streamit_loadmore_params.current_page++;
								if (streamit_loadmore_params.current_page == jQuery('.loader-wheel-container').find('.blog-max-page').val()) {
									jQuery(".loader-wheel-container").html('');
								}
							} else {
								jQuery(".loader-wheel-container").html('');
							}
						}
					});
				}


			});

		}
		if (streamit_options_tags == "infinite") {
			jQuery('.streamit_datapass_tags_grid').each(function () {

				let _this = jQuery(this);
				var canBeLoaded = true,
					bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts
				let tags_per_page = jQuery('.tags-per-page').val();
				jQuery(window).scroll(function () {

					let data = {
						'action': 'loadmore_tags',
						'query': streamit_loadmore_params.posts,
						'page': streamit_loadmore_params.current_page,
						'settings': jQuery('.tags-settigs').val(),
						'tags_per_page': tags_per_page,
					};

					if (jQuery(document).scrollTop() > (jQuery(document).height() - bottomOffset) && canBeLoaded == true) {

						jQuery.ajax({
							url: streamit_loadmore_params.ajaxurl,
							data: data,
							type: 'POST',
							beforeSend: function (xhr) {
								canBeLoaded = false;
							},
							success: function (data) {
								if (data) {
									_this.find(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
									watchlist_last_item();

									jQuery('.iq_tags-contents').find('.iq-tag-mainbox').append(data); // where to insert posts
									canBeLoaded = true; // the ajax is completed, now we can run it again
									streamit_loadmore_params.current_page++;
									if (streamit_loadmore_params.current_page == streamit_loadmore_params.max_page) {
										jQuery(".loader-wheel-container").html('');
									}
								} else {
									jQuery(".loader-wheel-container").html('');
								}

							}
						});
					}
				});
			});
		}
	});
});
function isScrolledIntoView(elem) {
	var docViewTop = jQuery(window).scrollTop();
	var docViewBottom = docViewTop + jQuery(window).height();

	var elemTop = jQuery(elem).offset().top;
	var elemBottom = elemTop + jQuery(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}