var site_map = [
	{
		'gnbCategory': 'news',
		'subCategories': ['Announcements', 'Update', 'Event'],
		'urls': ['/news/?rtype=1', '/news/?rtype=2', '/news/?rtype=3']
	},
	{
		'gnbCategory': 'guide',
		'subCategories': ['Introduction', 'Installation', 'Game Play', 'Character'],
		'urls': ['/guide/intro.gcs', '/guide/install.gcs', '/guide/gameplay.gcs', '/guide/character.gcs']
	},
	{
		'gnbCategory': 'wars',
		'subCategories': ['Clan', 'Lunar Wars', 'Battle Fields', 'Castle Siege', 'Rank'],
		'urls': ['/war/clan.gcs', '/war/lunar.gcs', '/war/battle.gcs', '/war/castle.gcs', '/war/rank.gcs']
	},
	{
		'gnbCategory': 'community',
		//'subCategories': ['Forum', 'Screen Shots', 'Fan Sites'],
		//'urls': ['/community/forum.gcs', '/community/?rtype=2', '/community/?rtype=3']
		'subCategories': ['Forum'],
		'urls': ['/community/forum.gcs']
	},
	{
		'gnbCategory': 'downloads',
		'subCategories': ['Client'],
		'urls': ['/download/']
	},
	{
		'gnbCategory': 'support',
		'subCategories': ['FAQ', 'Ticket'],
		'urls': ['/support/?rtype=1', '/support/?rtype=2']
	}
];

function globalGnbDropDown() {/*create a function to animate the gnb dropdown menu*/
	var animationMilliseconds = 300,
		gnb = $('#gnb'),
		drop = $('#menuSub'),
		menu = $('#menu li'),
		height = 0;
	/* show the drop and move it off screen */
	drop.show().css('left', -5000);
	/* get heights of the children and bind hover */
	drop.children('li').each(function (i) {
		var menuLI = menu.eq(i);
		height = Math.max(height, $(this).height());
		$(this).bind('mouseenter', function () {
			menu.removeClass('hover');
			menuLI.addClass('hover');
		});
		$(this).bind('mouseleave', function () {
			menu.removeClass('hover');
		});
	});
	/* set heights of the children */
	drop.children('li').height(height);
	/* now use the height var for the height of the drop */
	height = drop.height()-57;
	drop.css({ 'height': 0, 'left': 0 });
	/* rollover state */
	gnb.bind('mouseenter', function () {
		drop.stop().animate({ 'height': height }, animationMilliseconds);
	});
	gnb.bind('mouseleave', function () {
		drop.stop().animate({ 'height': 0 }, animationMilliseconds);
	});
	}

(function ($) {
	$.fn.gnbBuilder = function (json, options) { //authored by Neil
		if (json === null) {// if json is null 
			return this;
		} //return selector unmolested
		var settings = $.extend({
			listID: null,
			buildMenu: true, // set to false if you only want to build list
			headerElement: $('<ul>').attr('id', 'menu'),
			dropList: $('<ul>').attr('id', 'menuSub')
		}, options || {});
		function buildList(o, id) {
			var ul = $('<ul>');
			if (id) {
				ul.attr('id', id);
			}
			for (var a = 0; a < o.subCategories.length; a++) {
				ul.append($('<a>').attr('href', o.urls[a]).append($('<span>').text(o.subCategories[a])));
			}
			return ul;
		}
		function buildMenu(ob) {
			var head = settings.headerElement;
			var drop = settings.dropList;
			for (var a = 0; a < ob.length; a++) {
				var title = ob[a].gnbCategory;
				head.append($('<li>').attr('id', ('m_' + title.toLowerCase())).append($('<a>').attr('href', ob[a].urls[0]).text(title)));
				drop.append($('<li>').attr('id', 's_' + ob[a].gnbCategory.toLowerCase()).append(buildList(ob[a])));
			}
			$(this).append(head).append(drop);
		}
		return this.each(function () {
			if (settings.buildMenu) {
				buildMenu.call(this, json);
				var list = settings.dropList;
			} else {
				$(this).append(buildList(json, settings.listID));
			}
		});
	};
})(jQuery);
